import os
from project_CycleGAN_and_pix2pix.project_use import style_transfer_model
from colorizers.colorize_function import colorize
import matplotlib.pyplot as plt


""" 4 options for style: 

    Monet 
    Cezanne
    Van gogh
    Ukiyoe

"""

if __name__ == '__main__':

    img_name1 = 'grass'
    img_path1 =  "./input_img/"+ img_name1 +".jpg"
    style = "Monet"       

    save_name =  img_name1 + "_" + style     
    
    style_img = style_transfer_model(image=img_path1, style_opt=style)   # style transfer
    style_img.save("./output_img/%sstyled.png" %save_name)
    
    ################################################################################

    img_name2 = 'ansel_adams3'
    img_path2 =  "./input_img/"+ img_name2 +".jpg" 

    color_img = colorize(image=img_path2)    # colorization 
    color_img.save("./output_img/%s_colored.png" %img_name2)


