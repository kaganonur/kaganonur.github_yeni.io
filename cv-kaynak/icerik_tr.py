# -*- coding: utf-8 -*-
"""CV içeriği — Türkçe. Metin mevcut PDF'ten birebir alındı; yeni proje eklendi."""

ILETISIM = [
  "İstanbul, Türkiye",
  "+90 506 023 01 88",
  '<a href="mailto:kaganonur08@gmail.com">kaganonur08@gmail.com</a>',
  '<a href="https://linkedin.com/in/kaganonur">linkedin.com/in/kaganonur</a>',
  '<a href="https://kaganonur.vercel.app">kaganonur.vercel.app</a>',
]

# --- YENİ PROJE ---------------------------------------------------------
EKONOMI = {
 "bas": "Türkiye Ekonomisi — Tekrarlayan Kuralların Tespiti",
 "alt": "Bireysel proje · kaganonur.vercel.app/turkiye-ekonomisi · 2026, devam ediyor",
 "giris": "Türkiye ekonomisi hakkında &quot;her zaman şöyle olur&quot; diyebileceğim bir şey var mı? "
          "2002'den bugüne 33 aylık ve günlük seriyi topladım, akla gelen iddiaları tek tek test ettim; "
          "ayakta kalanları da çökenleri de yazdım.",
 "maddeler": [
   "Yedi kural testten geçti. En net ikisi: cari denge yirmi dört yılın <b>yirmi dördünde de</b> "
   "Ağustos'ta Mart'tan iyi çıkıyor ve bu salınımın <b>%82'si net turizm geliriyle</b> açıklanıyor; "
   "reel bütçe açığı yirmi yılın on beşinde Aralık'ta zirve yapıyor.",

   "Dört iddia geçemedi — &quot;seçimden sonra kur çalkalanır&quot; ve &quot;seçim öncesi bütçe açılır&quot; dahil. "
   "Her bulguyu ay eşleştirmeli plasebo ve permütasyon testleriyle eledim; mevsimsellik yöntemini de ilk sürümümün "
   "çöktüğü bir negatif kontrolle sınadım.",

   "<b>Kendi üç sonucumu geri çektim:</b> seviye Taylor katsayıları sahte regresyondu (DW 0,13–0,47, "
   "eşbütünleşme yok), Bai–Perron kırılma tarihleri artık otokorelasyonu arındırılınca kayboldu, "
   "bir ilişki tek bir gözleme dayanıyordu. Üçünü de yayımlanan sayfalarda yazdım.",

   "Kur geçişkenliğini gecikme-artırımlı yerel projeksiyonla yeniden ölçtüm: üç ay ufkunda "
   "<b>0,09'dan 0,77'ye</b> çıkmış (t = 3,6). Çıktı beş yayın sayfası ve 36 serilik interaktif bir veri gezgini.",
 ],
 "yontem": "Yöntemler: Bai–Perron çoklu yapısal kırılma (kendi dinamik programlama uygulamam) · Chen–Liu aykırı değer tespiti · "
           "ay eşleştirmeli plasebo ve permütasyon testleri · Benjamini–Hochberg FDR · 2×12 mevsimsel ayrıştırma ve negatif kontrol · "
           "gecikme-artırımlı yerel projeksiyon (Montiel Olea &amp; Plagborg-Møller, 2021) · Zivot–Andrews · sahte regresyon denetimi · "
           "PPK karar günleriyle olay çalışması. Python (pandas, statsmodels), TCMB EVDS API.",
}

TEZ = {
 "bas": "Türkiye Yatırım Araçlarının Zaman Serisi Analizi",
 "alt": "Bitirme Tezi · Yıldız Teknik Üniversitesi · 2026",
 "meta": "Danışman: Prof. Dr. Öyküm Esra Yiğit",
 "giris": "Türkiye'de birikimi enflasyona ve kur dalgalanmasına karşı hangi araç gerçekten koruyor — ve derin öğrenme bu piyasaları "
          "klasik modellerden daha iyi tahmin edebiliyor mu? İki soruyu da beş serinin 21 yıllık aylık verisiyle sınadım.",
 "maddeler": [
   "Yirmi yıl boyunca reel değerini koruyan tek araç ons altın oldu; mevduat getirisi enflasyon karşısında eridi.",
   "2008, 2018 ve 2021 krizlerini modele eklemek altın tahminini dört kat iyileştirdi (<b>R² 0,12 → 0,51</b>).",
   "Klasik ARIMA, derin öğrenme tabanlı LSTM'i geçti. Sonucu kabul etmek yerine nedenini araştırdım: karşılaştırma adil değildi, "
   "çünkü LSTM kendi tahminleri üzerine tahmin yürütüyor ve hata 46 ay boyunca büyüyor.",
   "Kurdaki hareketin enflasyonu tetiklediğini, tersinin geçerli olmadığını doğruladım — kur geçişkenliğinin ölçüsü.",
 ],
 "yontem": "Yöntemler: ADF / PP / KPSS birim kök testleri · Bai–Perron yapısal kırılma · ARDL sınır testi · ARMA-GARCH(1,1) ve EGARCH · "
           "Granger nedensellik · ARIMA – LSTM – Holt kıyaslaması. Python (statsmodels, arch, TensorFlow/Keras).",
}

MESITE = {
 "bas": "MeSite — Dallanan Video Platformu",
 "alt": "Bireysel proje · mesite.org · 2026, devam ediyor",
 "giris": "Hikâyelerin dallandığı bir video platformu: bir videoyu izlersin, gittiği yönü beğenmezsen kendi devamını yüklersin. "
          "Veri modelinden algoritmaya, arayüzden sunucuya kadar tümünü tek başıma geliştirdim; kapalı beta olarak yayında.",
 "maddeler": [
   "Hangi dalın ana hikâye olacağına karar veren algoritmayı tasarladım. İlgiyi tamamlanma oranıyla değil <b>tavanlı saniyeyle</b> "
   "ölçtüm, çünkü tamamlanma oranı herkesi videosunu kısaltmaya iterdi.",
   "Çeşitliliği ve ilgiyi <b>puan eklemek yerine çarpan</b> yaptım; böylece tek kişinin şişirdiği ya da kimsenin izlemediği bir dal, "
   "ne kadar büyürse büyüsün ana akış olamıyor.",
   "İzlenme verisi toplamayı kurdum ki algoritmanın katsayıları tahmini değerlerinde kalmasın, gerçek davranışa göre ayarlansın.",
   "Uçtan uca yayına aldım: gecelik yedek ve denenmiş geri dönüş, hız sınırlama, KVKK kapsamında hesap silme.",
 ],
 "yontem": "Teknolojiler: Python (FastAPI, SQLAlchemy) · hesaplar için PostgreSQL, dallanma grafı için Neo4j · Docker · Caddy · JWT · "
           "FFmpeg ile video dönüştürme · JS/HTML/CSS arayüz. Otomatik test setiyle ~8.600 satır Python, Hetzner VPS üzerinde yayında.",
}

STEAM = {
 "bas": "Steam Oyunlarında Fiyat İndirimlerinin Oyuncu Sayısına Etkisi",
 "alt": "Panel Veri Analizi · 3 kişilik ekip · 2026",
 "giris": "Steam indirimleri oyuncuları gerçekten geri getiriyor mu? Dokuz popüler oyunun bir yıllık verisiyle test ettik.",
 "maddeler": [
   "Fiyat belirleyici: <b>%1'lik zam oyuncu sayısının %0,57'sine mal oluyor</b>.",
   "İndirimlerin kendisi değil. Dört indirim sezonunun hiçbiri anlamlı bir artış üretmedi.",
   "Nedeni bir ölçüm tuzağıydı: <b>oyuncu sayısındaki farkın %98'i oyunun zaten ne kadar büyük olduğundan geliyor</b>. "
   "İndirim bir oyunu büyütmüyor; büyük oyunlar zaten kalabalık kalıyor.",
 ],
 "yontem": "Yöntemler: 108 gözlemli dengeli panel (9 oyun × 12 ay) · indirim oranı ile süresini birleştiren &quot;indirim baskısı&quot; "
           "değişkeni · panel birim kök testleri · Hausman testiyle sabit etkiler seçimi · cluster-robust standart hatalar. Stata, R.",
}

ASA = {
 "bas": "Data Science &amp; Sustainable Development",
 "alt": "ASA Data Quest 2025 · Uluslararası · Türkiye'yi temsilen",
 "meta": "American Statistical Association (CIRS) · Mentor: Ceylan Yozgatlıgil · 4 kişilik ekip",
 "giris": "Ülkeler kalkınmak için çevresel maliyeti kabul etmek zorunda mı? Brezilya, Endonezya, Hindistan, Kenya ve Çin'den gelen "
          "ekiplerin yanında Türkiye'nin cevabını sunduk.",
 "maddeler": [
   "Refah, eğitim ve yaşam süresi neredeyse birlikte yükseliyor (<b>0,87–0,92</b>).",
   "Ayrıştıkları yer karbon: milli gelir emisyonu yakından izlerken (<b>0,87</b>) eğitim ve sağlık harcamaları izlemiyor — "
   "sosyal yatırım bir ülkeyi daha düşük karbon bedeliyle kalkındırıyor.",
   "Ekonomi, eğitim, sağlık ve emisyonu birlikte tartan model en üste İskandinav ülkeleri ile Costa Rica'yı koydu; "
   "yani bu ödünleşim kaçınılmaz değil.",
 ],
 "yontem": "Doğrulama: Durbin–Watson, VIF ve Shapiro–Wilk kontrolleri.",
}

MUSTERI = {
 "bas": "Müşteri Satın Alma Davranışları Analizi",
 "alt": "Bireysel proje · 2026",
 "giris": "Açık erişimli bir veri setinde satın alma kararını neyin belirlediğini test ettim — yaş, cinsiyet ve yorum niteliği. "
          "İstatistiksel olarak anlamlı çıkan tek etken cinsiyet oldu.",
 "yontem": "Yöntemler: çok değişkenli lojistik regresyon · Pearson ki-kare testi.",
}

# Kısa sürüm: iki sayfada tutmak için en zayıf madde/girişler çıkarılıyor.
EKONOMI_KISA = dict(EKONOMI)
EKONOMI_KISA["giris"] = (
  "Türkiye ekonomisi hakkında &quot;her zaman şöyle olur&quot; diyebileceğim bir şey var mı? 2002'den bugüne "
  "33 aylık ve günlük seriyi topladım, akla gelen iddiaları tek tek test ettim; ayakta kalanları da çökenleri de yazdım. "
  "Çıktı beş yayın sayfası ve 36 serilik interaktif bir veri gezgini.")
EKONOMI_KISA["maddeler"] = [
  EKONOMI["maddeler"][0],
  EKONOMI["maddeler"][1],
  EKONOMI["maddeler"][2],
]
ASA_KISA = dict(ASA); ASA_KISA["maddeler"] = ASA["maddeler"][:2]
MESITE_KISA = dict(MESITE)
MESITE_KISA["maddeler"] = [MESITE["maddeler"][0], MESITE["maddeler"][1], MESITE["maddeler"][3]]

def veri(yeni_proje=True, musteriyi_cikar=False, kisa=False):
    tez, mesite = TEZ, (MESITE_KISA if kisa else MESITE)
    ekonomi = EKONOMI_KISA if kisa else EKONOMI
    asa = ASA_KISA if kisa else ASA
    projeler = [tez, mesite, STEAM, asa, MUSTERI]
    if yeni_proje:
        projeler = [ekonomi] + projeler
    if musteriyi_cikar or kisa:
        projeler = [p for p in projeler if p is not MUSTERI]
    return {
 "dil": "tr",
 "ad": "KAĞAN ONUR",
 "rol": "Veri Analisti · Veri Bilimci",
 "iletisim": ILETISIM,
 "bl_profil": "Profil",
 "profil": "Yıldız Teknik Üniversitesi İstatistik mezunuyum (2026). Beni asıl ilgilendiren, veriden karara giden yol: bitirme tezimde "
   "Türkiye'nin yatırım araçlarını 21 yıllık veriyle modelleyip birikimi enflasyona ve kur riskine karşı hangisinin koruduğunu ölçtüm; "
   "Türkiye ekonomisinin 24 yıllık verisinde hangi düzenlerin gerçekten tekrarladığını test edip yayımladım; ASA Data Quest 2025'te "
   "dört kıtadan gelen ekiplerin yanında Türkiye'yi temsil ettim. Python, R, Stata ve SQL kullanıyorum; bir modelin sonucunu raporlamak "
   "kadar <i>neden</i> o sonucu verdiğini açıklamayı da işin parçası sayıyorum. Bunun yanında sıralama algoritmasını kendim tasarladığım "
   "mesite.org'u tek başıma geliştirip yayına aldım. Veri analisti ve veri bilimci pozisyonları için görüşmelere açığım.",
 "bl_projeler": "Seçilmiş Projeler",
 "projeler": projeler,
 "bl_deneyim": "Deneyim",
 "deneyim": [{
   "bas": "Veri Etiketleme Uzmanı", "tarih": "Oca 2026 – Şub 2026",
   "alt": "Artiwise — Yapay Zekâ Destekli Yazılım Şirketi",
   "maddeler": [
     "Müşteri odaklı süreç yönetimi için yapay zekâ destekli doküman analizi geliştiren bir şirkette, denetimli NLP modelleri için "
     "metin verisi etiketledim ve sınıflandırdım.",
     "Etiketleme kılavuzlarını uygulayıp iyileştirerek etiket tutarlılığını korudum; tamamlanan partilerde kalite kontrolü yaparak "
     "eğitim verisinin güvenilirliğini sağladım.",
   ]}],
 "bl_egitim": "Eğitim",
 "egitim": [
   {"bas": "Yıldız Teknik Üniversitesi", "tarih": "2022 – 2026", "alt": "İstatistik Lisans, Fen-Edebiyat Fakültesi",
    "not": "İlgili dersler: Ekonometri · Zaman Serisi · Panel Veri · Çok Değişkenli İstatistik · Regresyon · Veri Görselleştirme"},
   {"bas": "İstanbul Kültür Üniversitesi", "tarih": "2020 – 2022", "alt": "Bilgisayar Mühendisliği, Mühendislik Fakültesi",
    "not": "İngilizce hazırlık programı tamamlandı; YTÜ İstatistik bölümüne yatay geçiş"},
   {"bas": "Gürlek Nakipoğlu Anadolu Lisesi", "tarih": "2015 – 2019"},
 ],
 "bl_yetkinlik": "Teknik Yetkinlikler",
 "yetkinlikler": [
   ("Programlama ve Araçlar", "Python (pandas, NumPy, statsmodels, scikit-learn, TensorFlow/Keras) · R · Stata · SQL · Excel · SPSS"),
   ("Zaman Serisi ve Ekonometri", "ARIMA / SARIMA · ARMA-GARCH · EGARCH · ARDL sınır testi · Granger nedensellik · Bai–Perron · "
    "yerel projeksiyon · Zivot–Andrews · ADF / PP / KPSS"),
   ("Panel Veri ve Regresyon", "Sabit ve rastgele etkiler · Hausman testi · cluster-robust standart hatalar · panel birim kök · EKK · "
    "lojistik regresyon"),
   ("Çıkarım ve Denetim", "Plasebo ve permütasyon testleri · çoklu karşılaştırma düzeltmesi (Benjamini–Hochberg) · olay çalışması · "
    "sahte regresyon ve varsayım denetimi"),
   ("Veri Tabanı ve Geliştirme", "PostgreSQL · Neo4j (graf veri tabanı) · FastAPI · Docker · Git · REST API tasarımı"),
   ("Makine Öğrenmesi", "LSTM ve derin dizi modelleri · denetimli sınıflandırma · model kıyaslama (MAE, MAPE, R²)"),
   ("Veri Çalışması", "Veri temizleme ve birleştirme · öznitelik mühendisliği · veri etiketleme · görselleştirme ve raporlama"),
   ("Diller", "Türkçe — Anadil · İngilizce — Upper-Intermediate (B2), DİLKO &amp; Pearson sertifikalı (2022)"),
 ],
}
