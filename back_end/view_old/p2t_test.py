# import requests
#
# image_fp = './formula1.png'
# r = requests.post(
#     'http://0.0.0.0:8503/pix2text', files={'image': (image_fp, open(image_fp, 'rb'), 'image/png')},
# )
# print({'image': (image_fp, open(image_fp, 'rb'), 'image/png')})
# print(r.json().text)
# out = r.json()['results']
# print(out)

from pix2text import Pix2Text

# img_fp = './docs/examples/formula.jpg'
img_fp = './formula1.png'

p2t = Pix2Text()
out_text = p2t(img_fp)  # 也可以使用 `p2t.recognize(img_fp)` 获得相同的结果
print(out_text)