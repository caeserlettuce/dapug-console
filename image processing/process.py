#!/usr/bin/python3
import json
from PIL import Image
import numpy as np
import pyperclip as pc

# importing stuff


# settings.json stuff
settings_json = open('settings.json')
settings_data = json.load(settings_json)

# settings.json:
# img-in:           path to the image you want to convert
# img-out:          path to the json file you want it to output to
# width:            pixel width of the image (set to "auto" if you just want to specify height)
# height:           pixel height of the image (set to "auto if you just want to specify width")
# interpolation:    either "exact" or "accurate". "exact" will make 1 pixel be one shading character, whereas "accurate" will average 2 pixels on the y-axis so that it displays the aspect ratio the same as the original image (the shaded characters have an aspect raio of 1:2)
# shading:          which shaded unicode characters should be used. ░, ▒, ▓ in order from lest colour to most colour.


# variables

img_shades = np.array([" "])

st_img_in = settings_data['img-in']
st_img_out = settings_data['img-out']
st_width = settings_data['width']
st_height = settings_data['height']
st_interp = settings_data['interpolation']
st_shading = settings_data['shading']

print("img in: '"+str(st_img_in)+"'")
print("img out: '"+str(st_img_out)+"'")
print("img width: '"+str(st_width)+"'")
print("img height: '"+str(st_height)+"'")
print("img interp: '"+str(st_interp)+"'")

#img_shades = np.append(img_shades, " ")

for i in st_shading:
    print("img shade: '"+str(i)+"'")
    img_shades = np.append(img_shades, i)
    



shade_len = len(img_shades) - 1
shade_each = 255 / shade_len

print(str(img_shades))

image_json = "["

hex = {
     0: "0",
     1: "1",
     2: "2",
     3: "3",
     4: "4",
     5: "5",
     6: "6",
     7: "7",
     8: "8",
     9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f"
}


def rgb2hx(r, g, b):
    print("rgb2hx: "+str(r)+","+str(g)+","+str(b))
    final_hex = "#"
    r_d1 = int(r / 16)
    r_d2 = int(r - (r_d1 * 16))
    g_d1 = int(g / 16)
    g_d2 = int(g - (g_d1 * 16))
    b_d1 = int(b / 16)
    b_d2 = int(b - (b_d1 * 16))
    print("r:"+str(r_d1)+","+str(r_d2)+"|g:"+str(r_d1)+","+str(r_d2)+"|b:"+str(r_d1)+","+str(r_d2))
    final_hex += str(hex[r_d1]+hex[r_d2])
    final_hex += str(hex[g_d1]+hex[g_d2])
    final_hex += str(hex[b_d1]+hex[b_d2])
    print(final_hex)
    return final_hex





og_im = Image.open(st_img_in)

og_width, og_height = og_im.size

print("og width: "+str(og_width))
print("og height: "+str(og_height))

og_aspectratio = og_width / og_height


if (st_width == "auto" and st_height == "auto"):        # get size
    print("they're both!!")
    st_width = og_width
    st_height = og_width
elif (st_width == "auto"):
    print("width is auto!")
    st_width = st_height * og_aspectratio

elif (st_height == "auto"):
    print("height is auto!")
    st_height = st_width / og_aspectratio


st_width = int(st_width)
st_height = int(st_height)

print("new width: "+str(st_width))
print("new height: "+str(st_height))


if (st_interp == "accurate"):
    st_height = int(st_height / 2)
    sizey = (int(st_width), int(st_height))
    if (st_height < og_height or st_width < og_width):
        sc_im = og_im.resize(sizey,Image.BILINEAR)
    else:
        sc_im = og_im.resize(sizey,Image.NONE)

else:
    sizey = (int(st_width), int(st_height))
    if (st_height < og_height or st_width < og_width):
        sc_im = og_im.resize(sizey,Image.BILINEAR)
    else:
        sc_im = og_im.resize(sizey,Image.NONE)

sc_im = sc_im.convert('RGBA')

sc_im.save("hehe.png")
for y in range(st_height):  # for every pixel on the y axis
    if (y == 0):
        image_json += "\n["
    else:
        image_json += ", \n["
    
    
    for x in range(st_width):           # for every pixel on the x axis

        if (x == 0):
            image_json += "{"
        else:
            image_json += ", {"

        
        px_r, px_g, px_b, px_a = sc_im.getpixel((x, y))

        hexy = rgb2hx(px_r, px_g, px_b)

        print("px "+str(x)+","+str(y)+"|"+str(px_r)+","+str(px_g)+","+str(px_b)+","+str(px_a)+"|"+str(hexy))

        divy_1 = int(px_a / shade_each)

        shade_chr = img_shades[divy_1]

        image_json += '"c":"'+str(hexy)+'", "s":"'+shade_chr+'"}'


    image_json += "]"
    
image_json += "\n]"

print(str(image_json))

out = open(st_img_out, "w")
out.write(str(image_json))
out.close()