export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      blog: "Blog",
      projects: "Projeler",
      skills: "Yetkinlikler",
      about: "Hakkımda",
      cv: "CV",
      langTitle: "Dili Değiştir"
    },
    footer: {
      rights: "Tüm hakları saklıdır."
    },
    home: {
      role: "Veri Analisti · İstatistikçi",
      title: "Veriyi Modele, Modeli Karara Dönüştürüyorum",
      desc: "Yıldız Teknik Üniversitesi İstatistik mezunuyum. Bitirme tezimde Türkiye'nin yatırım araçlarını 21 yıllık veriyle modelleyip birikimi enflasyona karşı hangisinin koruduğunu ölçtüm; bir panel projesinde indirim kampanyalarının satın alma davranışını gerçekten değiştirip değiştirmediğini test ettim; ASA Data Quest 2025'te Türkiye'yi temsil ettim.",
      btnProjects: "Projelerimi İncele",
      btnCV: "CV İndir (PDF)",
      btnDiary: "Gezi Günlüğüm",
      btnLinkedIn: "LinkedIn",

      highlightsTitle: "Öne Çıkanlar",
      highlights: [
        { value: "252 ay", label: "Türkiye makro-finans zaman serisi", note: "5 seri · Oca 2005 – Ara 2025 · bitirme tezi" },
        { value: "%0,57", label: "fiyat %1 arttığında oyuncu kaybı", note: "108 gözlemli panel · sabit etkiler · p = 0,002" },
        { value: "mesite.org", label: "tek başıma geliştirip yayına aldığım platform", note: "FastAPI · PostgreSQL · Neo4j · Docker" },
        { value: "ASA Data Quest", label: "Türkiye'yi temsil eden ekipte", note: "2025 · uluslararası öğrenci yarışması" }
      ],

      whoAmI: "Ben Kimim?",
      about1: "Selamlar, ben Kağan. 2001 Şişli doğumluyum. Liseyi Bakırköy İncirli'de bulunan Gürlek Nakipoğlu Anadolu Lisesi'nde bitirdikten sonra üniversite eğitimim için Kültür Üniversitesi Bilgisayar Mühendisliği bölümünü tercih ettim.",
      about2: "Hazırlık eğitimini tamamlayıp birinci sınıfta Yıldız Teknik Üniversitesi İstatistik bölümüne yatay geçiş yaptım ve 2026'da mezun oldum. Bilgisayar bilimlerinden istatistiğe uzanan bu yol, bana hem kod yazmayı hem de sayının arkasındaki hikâyeyi okumayı öğretti — ikisini bir arada kullanabilmek bugün en çok güvendiğim tarafım.",
      about3: "Öte yandan küçüklüğümden bu yana yanımdan ayrılmayan oyun tutkum her \"artık bırakıyorum\" dediğimde yanımda beliriyor. Bilgisayar oyunları başta olmak üzere mobil ve konsol oyunlarına da ilgim var. Panel veri projemde Steam verisini seçmem tesadüf değildi. En büyük keyiflerimden öteki ise kuşkusuz animeler; ortaokul zamanlarından beri hayran olduğum bu animasyonlar hayatımda derin izler barındırıyor.",
      about4: "Yeni yerler görmek, farklı deneyimler yaşamak ve farklı insanlarla tanışmak için elimden geldiğince çabalıyorum — gezdiğim yerleri blogumda tutuyorum. Gelecekte nasıl biri olacağımdan hâlâ emin değilim; ama umuyorum ki hâlâ hayallerinin peşinden koşuyor, ayağına dolanan örümcek ağlarını kararlılıkla geçiyor ve çevresine ışık saçıyordur. İşte eğrisiyle doğrusuyla ben!",

      birth: "Doğum",
      birthVal: "2001, Şişli",
      edu: "Eğitim",
      eduVal: "YTÜ İstatistik (2026 mezunu)",
      location: "Konum",
      locationVal: "İstanbul, Türkiye",
      openTo: "Açık Olduğum Roller",
      openToVal: "Veri Analisti · Veri Bilimci · Ekonometri / Risk Analisti",
      interests: "İlgi Alanları",
      interestsVal: "Yazılım, Oyun, Animasyon, Seyahat, Öykü Yazarlığı, Yüzme",
      certs: "Sertifikalar",
      certsVal: "Upper-Intermediate English Course – DİLKO, Pearson iş birliğiyle (2022)",
      network: "Ağ & İletişim",

      skillsTitle: "Teknik Yetkinlikler",
      skillCategories: [
        {
          title: "Zaman Serisi & Ekonometri",
          desc: "Durağanlık ve yapısal kırılma testlerinden volatilite modellemesine kadar uçtan uca zaman serisi analizi.",
          tags: ["ARIMA / SARIMA", "GARCH", "EGARCH", "ARDL", "GRANGER", "BAI–PERRON", "ADF / PP / KPSS"]
        },
        {
          title: "Panel Veri & Regresyon",
          desc: "Sabit/rastgele etkiler, model seçim testleri ve sağlam çıkarım; oyunlar arası ile oyun içi varyasyonun ayrıştırılması.",
          tags: ["FIXED EFFECTS", "HAUSMAN", "CLUSTER-ROBUST SE", "LOJİSTİK REGRESYON", "HİPOTEZ TESTİ"]
        },
        {
          title: "Makine Öğrenmesi",
          desc: "Derin dizi modelleri ve denetimli sınıflandırma; klasik ekonometrik tahmincilerle karşılaştırmalı değerlendirme.",
          tags: ["LSTM", "TENSORFLOW / KERAS", "SCIKIT-LEARN", "MODEL BENCHMARK"]
        },
        {
          title: "Araçlar & Veri İşleme",
          desc: "Çok kaynaklı veri temizleme, öznitelik mühendisliği, denetimli öğrenme için veri etiketleme ve raporlama.",
          tags: ["PYTHON", "R", "STATA", "SQL", "PANDAS", "STATSMODELS", "EXCEL", "SPSS"]
        }
      ],

      projects: "Projelerim",
      projectsIntro: "Her projede önce hangi soruyu sorduğumu ve ne bulduğumu yazıyorum; kullandığım yöntemler kartların altında duruyor.",
      viewReport: "Raporu Görüntüle (PDF)",
      viewPresentation: "Sunumu Görüntüle (PDF)",
      viewThesis: "Tezi Görüntüle (PDF)",
      viewPoster: "Posteri Görüntüle (PDF)",
      badgeFeatured: "Öne Çıkan Proje",
      badgeIndividual: "Bireysel Proje",
      badgeTeam3: "Takım Projesi (3 Kişi)",
      badgeTeam4: "Takım Projesi (4 Kişi)",
      badgeIntl: "Uluslararası",
      labelMethods: "Yöntemler:",
      labelResult: "Bulgular:",
      labelFindings: "Bulgular:",
      labelModel: "Model:",
      labelTests: "Testler:",
      labelTeam: "Ekibimiz:",
      labelMentor: "Mentor:",
      labelAdvisor: "Danışman:",

      badgeLive: "Yayında",
      viewSite: "Siteyi Ziyaret Et",
      mesiteTitle: "MeSite — Dallanan Video Platformu",
      mesiteSub: "Bireysel proje · mesite.org · 2026, devam ediyor",
      mesiteDesc: "Hikâyelerin birbirinden dallandığı bir video platformu: bir videoyu izlersin, gittiği yönü beğenmezsen kendi devamını yüklersin. Veri modelinden sıralama algoritmasına, API'den arayüze ve sunucuya kadar tümünü tek başıma tasarlayıp geliştirdim. Kapalı beta olarak yayında.",
      mesiteResult: "Hangi dalın ana hikâye sayılacağına karar veren sıralama algoritmasını tasarladım. Tutunmayı tamamlanma oranıyla değil tavanlı saniyeyle ölçtüm — tamamlanma oranı 8 saniyelik her klibe tam puan verir, toplam süre ise uzunluğu ödüllendirirdi; tavan ikisini de nötrler. Çeşitlilik ve tutunmayı toplama terimi değil çarpan yaptım; böylece tek kişinin şişirdiği ya da kimsenin izlemediği bir dal ne kadar büyürse büyüsün ana akış olamıyor. İzlenme verisi toplamayı özellikle şunun için kurdum: katsayılar tahmini değerlerinde kalmasın, beta yeterince veri biriktirdiğinde gerçek davranışa göre ayarlansın.",
      mesiteMethods: "Python (FastAPI, SQLAlchemy) · PostgreSQL (hesaplar ve işlemler) · Neo4j (dallanma grafı) · Docker ve Docker Compose · Caddy · JWT · FFmpeg ile video dönüştürme · JS/HTML/CSS arayüz. Gecelik otomatik yedek ve denenmiş geri dönüş, hız sınırlama, KVKK kapsamında hesap silme. Hetzner VPS üzerinde yayında.",
      thesisTitle: "Türkiye Yatırım Araçlarının Zaman Serisi Analizi",
      thesisSub: "Bitirme Tezi · Yıldız Teknik Üniversitesi İstatistik · 2026",
      thesisDesc: "İki soruya cevap aradım: Türkiye'nin yüksek enflasyon ve kur oynaklığı ortamında birikimi gerçekten hangi araç koruyor, ve derin öğrenme bu piyasaları klasik yöntemlerden daha iyi tahmin edebiliyor mu? Ons altın, dolar kuru, TÜFE enflasyonu, mevduat faizi ve BIST 100 serilerinin 21 yıllık aylık verisini (2005–2025) kullandım.",
      thesisMethods: "ADF / PP / KPSS, Bai–Perron yapısal kırılma, ARDL sınır testi, ARMA-GARCH(1,1), EGARCH, Granger nedensellik, ARIMA vs LSTM vs Holt kıyaslaması.",
      thesisResult: "Ons altın uzun dönemde hem enflasyona hem kur riskine karşı koruma özelliği gösterdi; mevduat getirisi erirken reel alım gücünü koruyan tek araç oldu. Kriz dönemlerini modele katmak tabloyu değiştirdi: 2008, 2018 ve 2021 kırılmaları eklendiğinde altın modelinin açıklayıcılığı dört katına çıktı (R² 0,12 → 0,51). Beklenenin aksine klasik ARIMA, derin öğrenme tabanlı LSTM'i geçti (R² 0,988'e karşı 0,865) — sonuçla yetinmeyip nedenini araştırdım: karşılaştırma göründüğü kadar adil değildi, çünkü LSTM kendi tahminleri üzerine tahmin yürütüyor ve hata 46 ay boyunca birikiyor.",
      thesisAdvisor: "Prof. Dr. Öyküm Esra Yiğit",

      panelTitle: "Steam Oyunlarında Fiyat İndirimlerinin Oyuncu Sayısına Etkisi",
      panelSub: "Statik Panel Veri Analizi · 2026",
      panelDesc: "Steam indirimleri oyuncuları gerçekten geri getiriyor mu? Platformun yılda dört kez düzenlediği büyük indirim sezonlarının oyuncu sayısına etkisini, dokuz popüler oyunun bir yıllık aylık verisiyle test ettik.",
      panelMethods: "Levin-Lin-Chu, Im-Pesaran-Shin ve Fisher-ADF panel birim kök testleri; Hausman testi (χ² = 9,27, p = 0,026) ile sabit etkiler seçimi; oyun düzeyinde cluster-robust standart hatalar.",
      panelResult: "Fiyat gerçekten belirleyici: bir oyunun fiyatı %1 arttığında oyuncu sayısı %0,57 azalıyor. Ancak indirim kampanyalarının kendisi fark yaratmadı — hiçbir sezon anlamlı bir artış üretmedi. Nedeni bir ölçüm tuzağıydı: oyuncu sayısındaki farkın %98'ini oyunun zaten ne kadar büyük olduğu açıklıyor. İndirim bir oyunu büyütmüyor; büyük oyunlar zaten kalabalık kalıyor.",

      proj1Title: "Müşteri Satın Alma Davranışları Analizi",
      proj1Desc: "Bir müşterinin satın alma kararını neyin belirlediğini inceledim; açık erişimli bir veri setinde yaş, cinsiyet ve yorum niteliğinin etkisini test ettim. Cinsiyet istatistiksel olarak anlamlı bir belirleyici çıktı, diğer faktörler testte anlamlılık göstermedi.",

      proj2Title: "Data Science & Sustainable Development",
      proj2Sub: "American Statistical Association (CIRS) · ASA Data Quest 2025",
      proj2Desc: "Ülkelerin kalkınmak için çevresel maliyeti göze almak zorunda olup olmadığını araştırdık; Brezilya, Endonezya, Hindistan, Kenya ve Çin'den gelen ekiplerin yanında Türkiye'nin projesini sunduk.",
      proj2FindVal: "Refah, eğitim ve yaşam süresi birbirine çok sıkı bağlı hareket ediyor (korelasyonlar 0,87–0,92). Çevresel maliyet ise net bir çizgide ayrışıyor: milli gelir karbon emisyonuyla 0,87 korelasyon gösterirken eğitim ve sağlık harcamaları emisyonla zayıf ya da ters ilişkili — sosyal yatırım, gelir odaklı büyümeye kıyasla çok daha düşük karbon bedeliyle kalkınma sağlıyor.",
      proj2ModelVal: "Ekonomi, eğitim, sağlık ve emisyonu birlikte optimize eden model en dengeli profilleri İskandinav ülkeleri ile Costa Rica'da buldu — yani bu ödünleşim kaçınılmaz değil.",
      proj2TestsVal: "Durbin–Watson, VIF ve Shapiro–Wilk kontrolleri.",

      expTitle: "Deneyim",
      expRole: "Veri Etiketleme Uzmanı",
      expCompany: "Artiwise — Yapay Zekâ Destekli Yazılım Şirketi",
      expDate: "Ocak 2026 – Şubat 2026",
      expDesc: "Müşteri odaklı süreç yönetimi için yapay zekâ destekli doküman analizi geliştiren bir şirkette, denetimli NLP modelleri için metin verisi etiketledim ve sınıflandırdım. Etiketleme kılavuzlarını uygulayıp iyileştirerek etiket tutarlılığını korudum; tamamlanan partilerde kalite kontrolü yaparak eğitim verisinin güvenilirliğini sağladım.",

      cvTitle: "CV",
      cvDesc: "Projelerin, yöntemlerin ve sonuçların tamamı iki sayfalık CV'de. Türkçe ve İngilizce sürümler mevcut.",
      cvTR: "CV İndir — Türkçe (PDF)",
      cvEN: "Download CV — English (PDF)",
      contactTitle: "İletişim"
    },
    blog: {
      title: "Blog",
      desc: "Gezdiklerim, Gördüklerim, Düşündüklerim. Kısacası Evet, Ben.",
      europe: "Orta Avrupa Seyahatim",
      readMore: "Devamını Oku →",
      notFound: "Yazı bulunamadı.",
      backToBlog: "Blog'a Dön",
      gallery: "Fotoğraf Galerisi",
      galleryNote: "Not: İlgili görseller (/assets/images/...) klasöründen okunacak şekilde ayarlandı.",
      allPosts: "← Tüm Yazılara Dön"
    }
  },

  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      cv: "CV",
      langTitle: "Change Language"
    },
    footer: {
      rights: "All rights reserved."
    },
    home: {
      role: "Data Analyst · Statistician",
      title: "Turning Data Into Models, and Models Into Decisions",
      desc: "Statistics graduate of Yıldız Technical University. My thesis modelled 21 years of Turkish investment instruments to measure which one actually protects savings against inflation; a panel data project tested whether discount campaigns genuinely change buying behaviour; and I represented Türkiye at ASA Data Quest 2025.",
      btnProjects: "See My Projects",
      btnCV: "Download CV (PDF)",
      btnDiary: "Travel Diary",
      btnLinkedIn: "LinkedIn",

      highlightsTitle: "Highlights",
      highlights: [
        { value: "252 months", label: "Turkish macro-financial time series", note: "5 series · Jan 2005 – Dec 2025 · thesis" },
        { value: "0.57%", label: "player loss per 1% price increase", note: "108-observation panel · fixed effects · p = 0.002" },
        { value: "mesite.org", label: "a platform I built and shipped alone", note: "FastAPI · PostgreSQL · Neo4j · Docker" },
        { value: "ASA Data Quest", label: "on the team representing Türkiye", note: "2025 · international student competition" }
      ],

      whoAmI: "Who Am I?",
      about1: "Hello, I am Kağan. Born in 2001 in Şişli, Istanbul. After finishing high school at Gürlek Nakipoğlu Anatolian, I chose the Computer Engineering department at Kültür University for my higher education.",
      about2: "After my prep year I transferred to the Statistics department at Yıldız Technical University and graduated in 2026. That path — from computer science into statistics — taught me both how to write the code and how to read the story behind the number, and using the two together is what I rely on most today.",
      about3: "On the other hand, my passion for gaming, which has been with me since childhood, reappears every time I say \"I'm quitting now\". I have an interest in mobile and console games, especially PC games — choosing Steam data for my panel project was no accident. Another of my greatest joys is undoubtedly anime; these animations, which I have admired since middle school, hold deep traces in my life.",
      about4: "I try my best to see new places, experience different things and meet new people — I keep those trips on my blog. I'm still not sure what my future self will look like. Still, I hope he is chasing his dreams, clearing the cobwebs tangling his feet with determination, and shining a light on his surroundings. Here is me, with all my truths!",

      birth: "Birth",
      birthVal: "2001, Istanbul",
      edu: "Education",
      eduVal: "BSc Statistics, YTU (Class of 2026)",
      location: "Location",
      locationVal: "İstanbul, Türkiye",
      openTo: "Open To",
      openToVal: "Data Analyst · Data Scientist · Econometrics / Risk Analyst",
      interests: "Interests",
      interestsVal: "Software, Gaming, Animation, Travel, Story & Fiction Writing, Swimming",
      certs: "Certifications",
      certsVal: "Upper-Intermediate English Course – DİLKO, in partnership with Pearson (2022)",
      network: "Network & Contact",

      skillsTitle: "Technical Skills",
      skillCategories: [
        {
          title: "Time Series & Econometrics",
          desc: "End-to-end time series work, from stationarity and structural break testing through to volatility modelling.",
          tags: ["ARIMA / SARIMA", "GARCH", "EGARCH", "ARDL", "GRANGER", "BAI–PERRON", "ADF / PP / KPSS"]
        },
        {
          title: "Panel Data & Regression",
          desc: "Fixed and random effects, model selection tests and robust inference; separating between- from within-variation.",
          tags: ["FIXED EFFECTS", "HAUSMAN", "CLUSTER-ROBUST SE", "LOGISTIC REGRESSION", "HYPOTHESIS TESTING"]
        },
        {
          title: "Machine Learning",
          desc: "Deep sequence models and supervised classification, benchmarked honestly against classical econometric estimators.",
          tags: ["LSTM", "TENSORFLOW / KERAS", "SCIKIT-LEARN", "MODEL BENCHMARKING"]
        },
        {
          title: "Tools & Data Engineering",
          desc: "Multi-source data cleaning, feature engineering, labelling for supervised learning, and reporting.",
          tags: ["PYTHON", "R", "STATA", "SQL", "PANDAS", "STATSMODELS", "EXCEL", "SPSS"]
        }
      ],

      projects: "Projects",
      projectsIntro: "For each project I lead with the question I asked and what I found; the methods sit underneath.",
      viewReport: "View Report (PDF)",
      viewPresentation: "View Presentation (PDF)",
      viewThesis: "View Thesis (PDF)",
      viewPoster: "View Poster (PDF)",
      badgeFeatured: "Featured Project",
      badgeIndividual: "Individual Project",
      badgeTeam3: "Team Project (3 Members)",
      badgeTeam4: "Team Project (4 Members)",
      badgeIntl: "International",
      labelMethods: "Methods:",
      labelResult: "Findings:",
      labelFindings: "Findings:",
      labelModel: "Model:",
      labelTests: "Tests:",
      labelTeam: "Our Team:",
      labelMentor: "Mentor:",
      labelAdvisor: "Advisor:",

      badgeLive: "Live",
      viewSite: "Visit the Site",
      mesiteTitle: "MeSite — Branching Video Platform",
      mesiteSub: "Individual project · mesite.org · 2026, ongoing",
      mesiteDesc: "A video platform where stories branch: you watch a clip, and if you don't like where it goes you upload your own continuation. I designed, built and deployed the whole system — data model, ranking algorithm, API, interface and server. It is live in closed beta.",
      mesiteResult: "I designed the ranking algorithm that decides which branch becomes the main storyline. Retention is measured in capped seconds rather than completion rate — completion rate would hand a perfect score to any 8-second clip, while raw watch time would simply reward length; capping neutralises both. Diversity and retention are multipliers rather than additive terms, so a branch inflated by a single author or watched by nobody cannot become canon no matter how large it grows. I instrumented watch-time collection specifically so the coefficients can be calibrated against real behaviour once the beta has enough data.",
      mesiteMethods: "Python (FastAPI, SQLAlchemy) · PostgreSQL (accounts and transactions) · Neo4j (the branching graph) · Docker &amp; Docker Compose · Caddy · JWT · FFmpeg video transcoding · JS/HTML/CSS front end. Nightly automated backups with a tested restore path, rate limiting, and account deletion under Turkish data protection law. Deployed on a Hetzner VPS.",
      thesisTitle: "Time Series Analysis of Turkish Investment Instruments",
      thesisSub: "Undergraduate Thesis · Yıldız Technical University, Statistics · 2026",
      thesisDesc: "I set out to answer two questions: which asset actually protects savings against Türkiye's high inflation and currency volatility, and whether deep learning can forecast these markets better than a classical approach. I used 21 years of monthly data (2005–2025) on spot gold, USD/TRY, CPI inflation, deposit rates and the BIST 100.",
      thesisMethods: "ADF / PP / KPSS, Bai–Perron structural breaks, ARDL bounds testing, ARMA-GARCH(1,1), EGARCH, Granger causality, ARIMA vs LSTM vs Holt benchmarking.",
      thesisResult: "Gold showed evidence of a long-run hedge against both inflation and currency risk — the one instrument that preserved real purchasing power while deposit returns eroded. Accounting for crises changed the picture: adding the 2008, 2018 and 2021 structural breaks raised the gold model's explanatory power fourfold (R² 0.12 → 0.51). Contrary to expectation the classical ARIMA beat the deep learning LSTM (R² 0.988 vs 0.865) — and rather than stop at the number I traced the cause: the comparison was less fair than it looked, because the LSTM forecasts on top of its own forecasts and accumulates error across 46 months.",
      thesisAdvisor: "Prof. Dr. Öyküm Esra Yiğit",

      panelTitle: "Effect of Price Discounts on Player Counts on Steam",
      panelSub: "Static Panel Data Analysis · 2026",
      panelDesc: "Do Steam sales actually bring players back? We tested the effect of the platform's four large seasonal sales on player numbers, using twelve months of data on nine popular games.",
      panelMethods: "Levin-Lin-Chu, Im-Pesaran-Shin and Fisher-ADF panel unit-root tests; Hausman test (χ² = 9.27, p = 0.026) selecting fixed effects; game-clustered robust standard errors.",
      panelResult: "Price genuinely matters: a 1% price increase reduces player count by 0.57%. But the sales themselves did not move the needle — none of the seasonal periods produced a significant lift. The reason was a measurement trap: 98% of the variation in player numbers is explained by how big the game already is. Discounts don't grow a game; large games simply stay crowded.",

      proj1Title: "Customer Purchasing Behaviour Analysis",
      proj1Desc: "I examined what drives a customer's decision to buy, testing the effect of age, gender and review quality on an open-access dataset. Gender emerged as a statistically significant driver, while the other factors did not hold up under testing.",

      proj2Title: "Data Science & Sustainable Development",
      proj2Sub: "American Statistical Association (CIRS) · ASA Data Quest 2025",
      proj2Desc: "We asked whether countries have to trade environmental cost for development, and presented Türkiye's entry against teams from Brazil, Indonesia, India, Kenya and China.",
      proj2FindVal: "Wealth, education and life expectancy move together very tightly (correlations of 0.87–0.92). The environmental cost splits along a clear line: national income correlates 0.87 with CO₂ emissions while education and health spending correlate weakly or negatively — social investment buys development at a far lower carbon price than income-led growth.",
      proj2ModelVal: "A model optimising economy, education, health and emissions together found the Nordic countries and Costa Rica to be the most balanced performers — the trade-off is not inevitable.",
      proj2TestsVal: "Durbin–Watson, VIF and Shapiro–Wilk diagnostics.",

      expTitle: "Experience",
      expRole: "Data Annotation Specialist",
      expCompany: "Artiwise — AI-Powered Software Company",
      expDate: "January 2026 – February 2026",
      expDesc: "At a company building AI-powered document analysis for customer-centric process management, I labelled and classified text data for supervised NLP models. I applied and refined annotation guidelines to keep labels consistent, and ran quality checks on completed batches to keep the training data reliable.",

      cvTitle: "CV",
      cvDesc: "Every project, method and result is in the two-page CV. Turkish and English versions are available.",
      cvTR: "CV İndir — Türkçe (PDF)",
      cvEN: "Download CV — English (PDF)",
      contactTitle: "Contact"
    },
    blog: {
      title: "Blog",
      desc: "Things I've traveled, seen, and thought. In short, yes, me.",
      europe: "My Central Europe Trip",
      readMore: "Read More →",
      notFound: "Post not found.",
      backToBlog: "Back to Blog",
      gallery: "Photo Gallery",
      galleryNote: "Note: The relevant images are set to be read from the (/assets/images/...) folder.",
      allPosts: "← Back to All Posts"
    }
  }
};
