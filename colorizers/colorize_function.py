
import argparse
from pickletools import uint8
import matplotlib.pyplot as plt
from PIL import Image

from colorizers import *

parser = argparse.ArgumentParser()
parser.add_argument('--use_gpu', action='store_true', help='whether to use GPU')
opt = parser.parse_args()

opt.use_gpu = False


def colorize(image):

	img = load_img(image)

	# return original size L and resized L as torch Tensors
	(tens_l_orig, tens_l_rs) = preprocess_img(img, HW=(256,256))

	# load trained model
	colorizer = siggraph17(pretrained=True).eval()
	
	# image colorization 
	out_img = postprocess_tens(tens_l_orig, colorizer(tens_l_rs).cpu())

	print(out_img.dtype)
	final_img = Image.fromarray((out_img * 255).round().astype(np.uint8),'RGB')

	return final_img


