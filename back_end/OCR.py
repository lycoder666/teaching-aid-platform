# from flask import Flask, request, jsonify
import pix2text
from PIL import Image


def ocr(img):
    p2t = pix2text.Pix2Text()

    image = Image.open(img)
    out_text = p2t(image)
    res = out_text['text']
    return res

