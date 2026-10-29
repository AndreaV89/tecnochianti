"""Genera il logo TecnoChianti in SVG, con le lettere convertite in tracciati.

Riga 1: TECNO in Saira ExtraLight (200) + CHIANTI in Saira SemiBold (600).
Riga 2: STUDIO DI ARCHITETTURA in Hanken Grotesk Regular, spaziato fino alla stessa
larghezza della riga 1.

Serve solo per rigenerare il logo: il sito usa src/components/Logo/Logo.tsx e
public/logo.svg, già generati. Non fa parte della build e non aggiunge dipendenze al progetto.

Uso (in una cartella temporanea, fuori dal progetto):
  python3 -m venv venv && ./venv/bin/pip install fonttools uharfbuzz
  mkdir fonts   # e scaricarci da Google Fonts i TTF statici:
                # Saira-200.ttf, Saira-600.ttf, HankenGrotesk-400.ttf
  echo '{"logo": {"light": "Saira-200", "bold": "Saira-600", "tracking": 0.06,
         "sub": "HankenGrotesk-400", "sub_ratio": 0.34, "gap": 0.45}}' > logo.json
  ./venv/bin/python make_logo.py logo.json out
Poi copiare viewBox e attributo d di out/logo.svg in Logo.tsx e public/logo.svg.
"""
import json
import sys
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONTS = Path(__file__).parent / "fonts"


class Font:
    def __init__(self, name):
        path = FONTS / f"{name}.ttf"
        self.tt = TTFont(path)
        self.glyphs = self.tt.getGlyphSet()
        self.order = self.tt.getGlyphOrder()
        self.upem = self.tt["head"].unitsPerEm
        self.cap = self.tt["OS/2"].sCapHeight
        blob = hb.Blob.from_file_path(str(path))
        self.hb = hb.Font(hb.Face(blob))

    def shape(self, text):
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.hb, buf, {"kern": True, "liga": False})
        return [
            (self.order[info.codepoint], pos.x_advance, pos.x_offset)
            for info, pos in zip(buf.glyph_infos, buf.glyph_positions)
        ]


def place(font, text, size, x, baseline, tracking_em=0.0):
    """Restituisce (segmenti, x finale). Ogni segmento: (nome glifo, font, scala, dx, baseline)."""
    scale = size / font.upem
    items = []
    for i, (name, adv, off) in enumerate(font.shape(text)):
        items.append((font, name, scale, x + off * scale, baseline))
        x += adv * scale
        if i < len(text) - 1:
            x += tracking_em * size
    return items, x


def ink_bounds(items):
    xs0, ys0, xs1, ys1 = [], [], [], []
    for font, name, scale, dx, base in items:
        pen = BoundsPen(font.glyphs)
        font.glyphs[name].draw(pen)
        if pen.bounds is None:
            continue
        x0, y0, x1, y1 = pen.bounds
        xs0.append(dx + x0 * scale)
        xs1.append(dx + x1 * scale)
        # y del font verso l'alto, SVG verso il basso
        ys0.append(base - y1 * scale)
        ys1.append(base - y0 * scale)
    return min(xs0), min(ys0), max(xs1), max(ys1)


def to_path(items):
    out = []
    for font, name, scale, dx, base in items:
        # Coordinate arrotondate a un decimale: file più leggero, differenza invisibile
        pen = SVGPathPen(font.glyphs, ntos=lambda v: f"{v:.1f}".rstrip("0").rstrip("."))
        tpen = TransformPen(pen, (scale, 0, 0, -scale, dx, base))
        font.glyphs[name].draw(tpen)
        d = pen.getCommands()
        if d:
            out.append(d)
    return " ".join(out)


def build(v):
    size = 100.0
    light, bold, sub = Font(v["light"]), Font(v["bold"]), Font(v["sub"])
    track = v.get("tracking", 0.0)

    line1a, x = place(light, "TECNO", size, 0, 0, track)
    line1b, _ = place(bold, "CHIANTI", size, x + track * size, 0, track)
    line1 = line1a + line1b
    x0, top, x1, bottom1 = ink_bounds(line1)
    target = x1 - x0

    # Sottotitolo: altezza delle maiuscole = ratio × maiuscole della riga 1
    sub_size = size * v["sub_ratio"] * (light.cap / light.upem) / (sub.cap / sub.upem)
    text = "STUDIO DI ARCHITETTURA"
    gap = size * (light.cap / light.upem) * v["gap"]
    sub_cap = sub_size * sub.cap / sub.upem
    base2 = bottom1 + gap + sub_cap
    probe, _ = place(sub, text, sub_size, 0, base2, 0)
    px0, _, px1, _ = ink_bounds(probe)
    extra = (target - (px1 - px0)) / (len(text) - 1)
    line2, _ = place(sub, text, sub_size, 0, base2, extra / sub_size)
    sx0, _, _, _ = ink_bounds(line2)
    line2 = [(f, n, s, dx + (x0 - sx0), b) for f, n, s, dx, b in line2]

    _, _, _, bottom = ink_bounds(line1 + line2)
    w, h = target, bottom - top
    d = to_path([(f, n, s, dx - x0, b - top) for f, n, s, dx, b in line1 + line2])
    return w, h, d, extra / sub_size


def svg(w, h, d, title="TecnoChianti — Studio di Architettura"):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" '
        f'role="img" aria-label="{title}"><path fill="currentColor" d="{d}"/></svg>'
    )


if __name__ == "__main__":
    variants = json.loads(Path(sys.argv[1]).read_text())
    out = Path(sys.argv[2])
    out.mkdir(exist_ok=True)
    for key, v in variants.items():
        w, h, d, sub_track = build(v)
        (out / f"{key}.svg").write_text(svg(w, h, d))
        print(f"{key}: {w:.0f}×{h:.0f}, spaziatura sottotitolo {sub_track:.2f}em")
