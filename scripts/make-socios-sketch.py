"""Gera versões sketch (lápis) + color otimizadas das fotos dos sócios."""
import os
from PIL import Image, ImageOps, ImageFilter

SRC_DIR = os.path.join('public', 'socios')
TARGETS = [
    ('Daniel.jpeg', 'daniel'),
    ('Felipe.jpeg', 'felipe'),
    ('ISmael.jpeg', 'ismael'),
]
OUT_W, OUT_H = 520, 640  # 4:5 retrato


def center_crop_resize(img, w, h):
    img = ImageOps.exif_transpose(img).convert('RGB')
    target = w / h
    iw, ih = img.size
    ar = iw / ih
    if ar > target:           # largo demais -> corta laterais
        nw = int(ih * target)
        x = (iw - nw) // 2
        img = img.crop((x, 0, x + nw, ih))
    else:                     # alto demais -> corta topo/baixo
        nh = int(iw / target)
        y = (ih - nh) // 2
        img = img.crop((0, y, iw, y + nh))
    return img.resize((w, h), Image.LANCZOS)


def pencil_sketch(img):
    gray = ImageOps.grayscale(img)
    inv = ImageOps.invert(gray)
    blur = inv.filter(ImageFilter.GaussianBlur(radius=7))
    g = gray.load(); b = blur.load()
    out = Image.new('L', gray.size)
    o = out.load()
    for y in range(gray.size[1]):
        for x in range(gray.size[0]):
            bb = b[x, y]
            o[x, y] = 255 if bb >= 255 else min(255, int(g[x, y] * 255 / (255 - bb)))
    # reforça o traço: escurece as linhas (mais definido)
    return out.point(lambda p: max(0, min(255, int(255 - (255 - p) * 1.7))))


for src, name in TARGETS:
    path = os.path.join(SRC_DIR, src)
    if not os.path.exists(path):
        print('FALTA', path); continue
    img = center_crop_resize(Image.open(path), OUT_W, OUT_H)
    img.save(os.path.join(SRC_DIR, f'{name}-color.jpg'), quality=84, optimize=True)
    pencil_sketch(img).save(os.path.join(SRC_DIR, f'{name}-sketch.jpg'), quality=86, optimize=True)
    print('OK', name)
print('done')
