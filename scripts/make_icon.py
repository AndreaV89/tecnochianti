"""Genera la favicon TecnoChianti in SVG: T in Saira Light (300) e C in Saira Bold (700), come
TECNO sottile e CHIANTI in grassetto nel logo, color carta su quadrato antracite.
(Pesi un po' più marcati del logo, 200/600: a 16 px la T sottile spariva.)

Serve solo per rigenerare le icone: il sito usa src/app/icon.svg, favicon.ico e apple-icon.png,
già generati. Non fa parte della build e non aggiunge dipendenze al progetto.

Uso (in una cartella temporanea, fuori dal progetto):
  python3 -m venv venv && ./venv/bin/pip install fonttools
  mkdir fonts   # scaricarci da Google Fonts i TTF statici Saira-300.ttf e Saira-700.ttf
  ./venv/bin/python make_icon.py fonts out
Poi copiare out/icon.svg in src/app/icon.svg. favicon.ico (16, 32, 48 px) e apple-icon.png
(180 px, angoli non arrotondati: li arrotonda iOS) si ottengono rasterizzando l'SVG.
"""
import sys
from pathlib import Path
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONTS, OUT = Path(sys.argv[1]), Path(sys.argv[2])
OUT.mkdir(exist_ok=True)

def glyph(weight, char):
    tt = TTFont(FONTS / f"Saira-{weight}.ttf")
    gs = tt.getGlyphSet()
    name = tt.getBestCmap()[ord(char)]
    pen = BoundsPen(gs); gs[name].draw(pen)
    return tt, gs, name, pen.bounds, tt["hmtx"][name][0]

def build(light, bold, cap_ratio=0.5, gap_em=0.04, size=100, radius=18):
    t = glyph(light, "T"); c = glyph(bold, "C")
    upem = t[0]["head"].unitsPerEm
    cap = t[0]["OS/2"].sCapHeight
    scale = size * cap_ratio / cap
    # Larghezza dell'inchiostro: da inizio T a fine C
    tw = (t[3][2] - t[3][0]) * scale
    cw = (c[3][2] - c[3][0]) * scale
    gap = gap_em * upem * scale
    total = tw + gap + cw
    x = (size - total) / 2
    base = size / 2 + cap * scale / 2
    paths = []
    for (tt, gs, name, b, adv), dx in ((t, x - t[3][0] * scale), (c, x + tw + gap - c[3][0] * scale)):
        pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        gs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, dx, base)))
        paths.append(pen.getCommands())
    d = " ".join(paths)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">'
            f'<rect width="{size}" height="{size}" rx="{radius}" fill="#2B2A27"/>'
            f'<path fill="#F7F5F1" d="{d}"/></svg>')

if __name__ == "__main__":
    (OUT / "icon.svg").write_text(build(300, 700, cap_ratio=0.56))
    print("ok")
