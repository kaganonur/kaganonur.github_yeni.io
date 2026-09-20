# -*- coding: utf-8 -*-
"""CV'leri HTML'den A4 PDF'e basar (Chrome print-to-PDF, orijinalle aynı yol)."""
import sys, pathlib, asyncio
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import sablon, icerik_tr, icerik_en
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent

def uret(etiket, modul, sik=False, **kw):
    d = modul.veri(**kw)
    h = sablon.kur(d, sik=sik)
    hy = OUT / ("cv_%s.html" % etiket)
    hy.write_text(h, encoding="utf-8")
    return hy

def bas(pw, hy, pdfy):
    b = pw.chromium.launch()
    pg = b.new_page()
    pg.goto("file://" + str(hy))
    pg.wait_for_timeout(700)
    pg.pdf(path=str(pdfy), format="A4", print_background=True,
           margin={"top": "13mm", "bottom": "13mm", "left": "13mm", "right": "13mm"})
    b.close()

if __name__ == "__main__":
    yeni = "--yenisiz" not in sys.argv
    cikar = "--musterisiz" in sys.argv
    kisa = "--kisa" in sys.argv
    sik = "--sik" in sys.argv
    ek = "" if yeni else "_yenisiz"
    if cikar: ek += "_musterisiz"
    if kisa: ek += "_kisa"
    if sik: ek += "_sik"
    with sync_playwright() as pw:
        for etiket, modul in [("tr", icerik_tr), ("en", icerik_en)]:
            hy = uret(etiket + ek, modul, sik=sik, yeni_proje=yeni, musteriyi_cikar=cikar, kisa=kisa)
            pdfy = OUT / ("CV_KaganOnur_%s%s.pdf" % (etiket.upper(), ek))
            bas(pw, hy, pdfy)
            import subprocess
            n = subprocess.run(["pdfinfo", str(pdfy)], capture_output=True, text=True).stdout
            sayfa = [l for l in n.splitlines() if l.startswith("Pages")]
            print("%-28s %s" % (pdfy.name, sayfa[0] if sayfa else "?"))
