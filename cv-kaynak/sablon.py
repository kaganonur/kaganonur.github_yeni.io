# -*- coding: utf-8 -*-
"""CV şablonu — PDF'ten ölçülen değerlerle birebir yeniden üretim.

Ölçümler (CV_KaganOnur_TR.pdf, pdfplumber):
  sayfa A4 595x842pt · kenar 36.7pt (~13mm) · içerik genişliği 522pt
  ad          Poppins-Bold 25pt   #10293D
  rol         Carlito-Bold 10.2pt #2F7098
  iletişim    Carlito 8.8pt       #4A5158
  bölüm       Carlito-Bold 9.4pt  #10293D  + 0.75pt #C2CBD3 alt çizgi
  proje adı   Carlito-Bold 10.2pt #10293D
  proje alt   Carlito-Bold 8.9pt  #2F7098
  meta        Carlito-Italic 8.7pt #626B74
  gövde       Carlito 9.6pt       #22262B  satır aralığı 13.5pt
  yöntem      Carlito 8.6pt       #5C656E  + 0.75pt #DFE4E8 üst çizgi
  üst kural   1.5pt #10293D
"""
import html as H

CSS_SABLON = """
@page {{ size: A4; margin: 13mm; }}
* {{ box-sizing: border-box; }}
html, body {{ margin:0; padding:0; }}
body {{
  font-family: Carlito, Calibri, "Segoe UI", sans-serif;
  font-size: {gov}pt; line-height: {sat}pt; color: #22262B;
  -webkit-font-smoothing: antialiased;
}}
.ad {{ font-family: Poppins, sans-serif; font-weight: 700; font-size: 25pt;
      line-height: 27pt; color: #10293D; letter-spacing: .005em; margin: 0; }}
.rol {{ font-weight: 700; font-size: 10.2pt; line-height: 13pt; color: #2F7098; margin: 2.5pt 0 0; }}
.iletisim {{ font-size: 8.8pt; line-height: 12pt; color: #4A5158; margin: 5pt 0 0; }}
.iletisim a {{ color: #2F7098; text-decoration: none; }}
.iletisim span {{ color: #9AA3AB; padding: 0 5pt; }}
.ustkural {{ border: 0; border-top: 1.5pt solid #10293D; margin: 7.5pt 0 0; }}

h2 {{ font-size: 9.4pt; font-weight: 700; color: #10293D; text-transform: uppercase;
     letter-spacing: .13em; margin: {bosluk}pt 0 0; padding-bottom: 3pt;
     border-bottom: .75pt solid #C2CBD3; }}
h2 + * {{ margin-top: 6pt; }}

p {{ margin: 0; }}
p.gov {{ text-align: justify; hyphens: auto; }}
.profil {{ margin-top: 6pt; }}

.proje {{ margin-top: {bosluk}pt; }}
/* Girişler sayfa sonunda bölünebilir; ama başlık tek başına kalmasın. */
.pbas, .palt, .pmeta {{ break-after: avoid; }}
p, li {{ orphans: 2; widows: 2; }}
.yontem {{ break-before: avoid; }}
.proje:first-of-type {{ margin-top: 6pt; }}
.pbas {{ font-weight: 700; font-size: 10.2pt; line-height: 13pt; color: #10293D; margin: 0; }}
.palt {{ font-weight: 700; font-size: 8.9pt; line-height: 12pt; color: #2F7098; margin: 1pt 0 0; }}
.pmeta {{ font-style: italic; font-size: 8.7pt; line-height: 12pt; color: #626B74; margin: .5pt 0 0; }}
.giris {{ margin-top: 3pt; text-align: justify; }}

ul {{ margin: 3pt 0 0; padding: 0; list-style: none; }}
li {{ position: relative; padding-left: 12pt; margin-top: 1.5pt; text-align: justify; }}
li::before {{ content: "•"; position: absolute; left: 3pt; color: #7D8B97; }}

.yontem {{ font-size: 8.6pt; line-height: 11.5pt; color: #5C656E; margin-top: 5pt;
          padding-top: 4pt; border-top: .75pt solid #DFE4E8; text-align: justify; }}

.satir {{ display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }}
.satir .sag {{ font-size: 9.4pt; color: #4A5158; white-space: nowrap; }}
.kayit {{ margin-top: {kayit}pt; break-inside: avoid; }}
.kayit:first-of-type {{ margin-top: 6pt; }}
.knot {{ font-size: 8.8pt; line-height: 12pt; color: #5C656E; margin-top: .5pt; }}

table.yetkinlik {{ width: 100%; border-collapse: collapse; margin-top: 5pt; }}
table.yetkinlik td {{ vertical-align: top; padding: {tdp}pt 0; font-size: {tblf}pt; line-height: {tbls}pt; }}
table.yetkinlik td.et {{ width: 24%; font-weight: 700; color: #10293D; padding-right: 9pt; }}
"""

def kacis(s):
    return s

def iletisim_satiri(parcalar):
    return ('<span>|</span>').join(parcalar)

def proje_html(p):
    o = ['<div class="proje">']
    o.append('<p class="pbas">%s</p>' % p["bas"])
    o.append('<p class="palt">%s</p>' % p["alt"])
    if p.get("meta"):
        o.append('<p class="pmeta">%s</p>' % p["meta"])
    o.append('<p class="giris">%s</p>' % p["giris"])
    if p.get("maddeler"):
        o.append('<ul>' + "".join('<li>%s</li>' % m for m in p["maddeler"]) + '</ul>')
    o.append('<p class="yontem">%s</p>' % p["yontem"])
    o.append('</div>')
    return "\n".join(o)

def kayit_html(k):
    o = ['<div class="kayit">']
    o.append('<div class="satir"><p class="pbas">%s</p><span class="sag">%s</span></div>' % (k["bas"], k.get("tarih","")))
    if k.get("alt"):
        o.append('<p class="palt">%s</p>' % k["alt"])
    if k.get("not"):
        o.append('<p class="knot">%s</p>' % k["not"])
    if k.get("maddeler"):
        o.append('<ul>' + "".join('<li>%s</li>' % m for m in k["maddeler"]) + '</ul>')
    o.append('</div>')
    return "\n".join(o)

def css(sik=False):
    if sik:
        return CSS_SABLON.format(gov=9.3, sat=12.5, bosluk=8.5, kayit=7, tdp=1.6, tblf=8.9, tbls=11.8)
    return CSS_SABLON.format(gov=9.6, sat=13.5, bosluk=11, kayit=9, tdp=2.2, tblf=9.2, tbls=12.5)

def kur(d, sik=False):
    p = []
    p.append('<!doctype html><html lang="%s"><head><meta charset="utf-8">' % d["dil"])
    p.append('<title>%s — CV</title>' % d["ad"])
    p.append('<style>%s</style></head><body>' % css(sik))
    p.append('<p class="ad">%s</p>' % d["ad"])
    p.append('<p class="rol">%s</p>' % d["rol"])
    p.append('<p class="iletisim">%s</p>' % iletisim_satiri(d["iletisim"]))
    p.append('<hr class="ustkural">')

    p.append('<h2>%s</h2>' % d["bl_profil"])
    p.append('<p class="gov profil">%s</p>' % d["profil"])

    p.append('<h2>%s</h2>' % d["bl_projeler"])
    for pr in d["projeler"]:
        p.append(proje_html(pr))

    p.append('<h2>%s</h2>' % d["bl_deneyim"])
    for k in d["deneyim"]:
        p.append(kayit_html(k))

    p.append('<h2>%s</h2>' % d["bl_egitim"])
    for k in d["egitim"]:
        p.append(kayit_html(k))

    p.append('<h2>%s</h2>' % d["bl_yetkinlik"])
    p.append('<table class="yetkinlik">')
    for et, deger in d["yetkinlikler"]:
        p.append('<tr><td class="et">%s</td><td>%s</td></tr>' % (et, deger))
    p.append('</table>')

    p.append('</body></html>')
    return "\n".join(p)
