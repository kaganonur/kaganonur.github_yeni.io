# CV kaynağı

PDF'ler bu dosyalardan üretiliyor. Önceden düzenlenebilir bir kaynak yoktu;
mevcut PDF'ler ölçülerek (yazı tipi, punto, renk, satır aralığı, çizgi kalınlıkları)
yeniden kuruldu.

## Üretme

    python3 uret.py --sik --kisa

Çıktı: `CV_KaganOnur_TR_kisa_sik.pdf` ve `CV_KaganOnur_EN_kisa_sik.pdf`

Bayraklar:
  --sik        sıkı tipografi (9,3pt gövde / 12,5pt satır) — iki sayfada tutar
  --kisa       en zayıf giriş ve maddeleri düşürür — iki sayfada tutar
  --yenisiz    Türkiye Ekonomisi projesini eklemeden üretir
  --musterisiz "Müşteri Satın Alma" girişini çıkarır

Bayrak vermezsen tam içerik + orijinal tipografi çıkar; o hâlde üç sayfa oluyor.

## Dosyalar

  sablon.py     yerleşim ve CSS (ölçülen değerler dosyanın başında yazılı)
  icerik_tr.py  Türkçe metin
  icerik_en.py  İngilizce metin
  uret.py       Chrome ile A4 PDF basar (orijinalin üretildiği yolun aynısı)

## Metni değiştirmek

İçerik dosyalarındaki sözlükleri düzenle. Her proje girişi:
  bas      başlık
  alt      mavi alt satır
  meta     italik satır (danışman/mentor — isteğe bağlı)
  giris    giriş paragrafı
  maddeler madde imi listesi (isteğe bağlı)
  yontem   gri yöntem satırı

## Yazı tipleri

Poppins (başlık) ve Carlito (gövde). İkisi de ücretsiz; Carlito Calibri ile
metrik uyumludur. Sistemde kurulu değilse Chrome yedek yazı tipine düşer ve
satır sonları kayar — o yüzden üretmeden önce `fc-list | grep -i carlito`
ile kontrol et.
