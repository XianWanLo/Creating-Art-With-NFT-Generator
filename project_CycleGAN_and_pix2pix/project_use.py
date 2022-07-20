import os
from .options.test_options_project import TestOptions
from .data import create_dataset
from .models import create_model
from .util import html,util
import ntpath
from PIL import Image


try:
    import wandb
except ImportError:
    print('Warning: wandb package cannot be found. The option "--use_wandb" will result in error.')


def process_image(image_numpy, aspect_ratio=1.0):
    """Save a numpy image to the disk

    Parameters:
        image_numpy (numpy array) -- input numpy array
        image_path (str)          -- the path of the image
    """

    image_pil = Image.fromarray(image_numpy)
    h, w, _ = image_numpy.shape

    if aspect_ratio > 1.0:
        image_pil = image_pil.resize((h, int(w * aspect_ratio)), Image.BICUBIC)
    if aspect_ratio < 1.0:
        image_pil = image_pil.resize((int(h / aspect_ratio), w), Image.BICUBIC)

    return image_pil


def process_images( visuals, image_path, aspect_ratio=1.0, width=256, use_wandb=False):
    """Save images to the disk.

    Parameters:
        webpage (the HTML class) -- the HTML webpage class that stores these imaegs (see html.py for more details)
        visuals (OrderedDict)    -- an ordered dictionary that stores (name, images (either tensor or numpy) ) pairs
        image_path (str)         -- the string is used to create image paths
        aspect_ratio (float)     -- the aspect ratio of saved images
        width (int)              -- the images will be resized to width x width

    This function will save images stored in 'visuals' to the HTML file specified by 'webpage'.
    """
    
    short_path = ntpath.basename(image_path[0])
    name = os.path.splitext(short_path)[0]

    #ims, txts, links = [], [], []
    #ims_dict = {}
    for label, im_data in visuals.items():
        im = util.tensor2im(im_data)
        #image_name = '%s_%s.png' % (name, label)
        processed_img = process_image(im, aspect_ratio=aspect_ratio)
        #ims.append(image_name)
        #txts.append(label)
        #links.append(image_name)
        #if use_wandb:
        #    ims_dict[label] = wandb.Image(im)
   
    #if use_wandb:
        #wandb.log(ims_dict)

    return processed_img


def load_resized_img(path):
    return Image.open(path).convert('RGB').resize((256, 256))


def run_model(image, style_opt):
    
    data = load_resized_img(image)

    savedir = "./../datasets/new_datasets"
    os.makedirs(savedir, exist_ok=True)

    data.save(savedir + "/001.jpg")

    opt = TestOptions().parse()  # get test options
    opt.no_dropout = True
    opt.dataroot = "./../datasets/new_datasets"


    if style_opt == 'Monet':
        opt.name ='style_monet_pretrained'   

    if style_opt == 'Cezanne':
        opt.name = 'style_cezanne_pretrained' 

    if style_opt == 'Van gogh':
        opt.name = 'style_vangogh_pretrained' 

    if style_opt == 'Ukiyoe':
        opt.name ='style_ukiyoe_pretrained'

    # hard-code some parameters for test
    opt.num_threads = 0   # test code only supports num_threads = 0
    opt.batch_size = 1    # test code only supports batch_size = 1
    opt.serial_batches = True  # disable data shuffling; comment this line if results on randomly chosen images are needed.
    opt.no_flip = True    # no flip; comment this line if results on flipped images are needed.
    opt.display_id = -1   # no visdom display; the test code saves the results to a HTML file.
    dataset = create_dataset(opt)  # create a dataset given opt.dataset_mode and other options
    model = create_model(opt)      # create a model given opt.model and other options
    model.setup(opt)               # regular setup: load and print networks; create schedulers


    for i, data in enumerate(dataset):
        model.set_input(data)  # unpack data from data loader
        model.test()           # run inference
        visuals = model.get_current_visuals()  # get image results
        img_path = model.get_image_paths()     # get image paths

        print('processing the given image... %s' % (img_path))

        final_img = process_images(visuals, img_path, aspect_ratio=opt.aspect_ratio, width=opt.display_winsize, use_wandb=opt.use_wandb)
        
    return final_img

    



if __name__ == '__main__':
    
    ori_image_path = "./datasets/own_datasets/house.jpg"
    data = load_resized_img(ori_image_path)

    savedir = "./datasets/new_datasets"
    os.makedirs(savedir, exist_ok=True)

    data.save(savedir + "/001.jpg")

    opt = TestOptions().parse()  # get test options
    opt.no_dropout = True
    opt.dataroot = "./datasets/new_datasets"

    style_opt = input('Ur preferred style is ?')

    if style_opt == 'Monet':
        opt.name ='style_monet_pretrained'   

    if style_opt == 'Cezanne':
        opt.name = 'style_cezanne_pretrained' 

    if style_opt == 'Van gogh':
        opt.name = 'style_vangogh_pretrained' 

    if style_opt == 'Ukiyoe':
        opt.name ='style_ukiyoe_pretrained'

    # hard-code some parameters for test
    opt.num_threads = 0   # test code only supports num_threads = 0
    opt.batch_size = 1    # test code only supports batch_size = 1
    opt.serial_batches = True  # disable data shuffling; comment this line if results on randomly chosen images are needed.
    opt.no_flip = True    # no flip; comment this line if results on flipped images are needed.
    opt.display_id = -1   # no visdom display; the test code saves the results to a HTML file.
    dataset = create_dataset(opt)  # create a dataset given opt.dataset_mode and other options
    model = create_model(opt)      # create a model given opt.model and other options
    model.setup(opt)               # regular setup: load and print networks; create schedulers


    for i, data in enumerate(dataset):
        model.set_input(data)  # unpack data from data loader
        model.test()           # run inference
        visuals = model.get_current_visuals()  # get image results
        img_path = model.get_image_paths()     # get image paths

        print('processing the given image... %s' % (img_path))

        final_img = process_images(visuals, img_path, aspect_ratio=opt.aspect_ratio, width=opt.display_winsize, use_wandb=opt.use_wandb)
        final_img.save("./output_img.png")
