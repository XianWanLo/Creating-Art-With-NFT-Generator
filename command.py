import os
from project_CycleGAN_and_pix2pix.project_use import run_model


""" 4 options for style: 

    Monet 
    Cezanne
    Van gogh
    Ukiyoe

"""

if __name__ == '__main__':

    img_path =  "garden.jpg"
    style = "Monet"             
   
    final_img = run_model(image=img_path, style_opt=style)

    final_img.save("./output_img.png")


