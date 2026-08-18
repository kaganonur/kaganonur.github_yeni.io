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
      desc: "Yıldız Teknik Üniversitesi İstatistik mezunu. 252 aylık Türkiye makro-finans verisini ARIMA, GARCH ve LSTM ile modelledim; 108 gözlemli panel veride sabit etkiler tahmini yaptım; ASA Data Quest 2025'te Türkiye'yi temsil ettim. Python, R, Stata ve SQL ile çalışıyorum.",
      btnProjects: "Projelerimi İncele",
      btnCV: "CV İndir (PDF)",
      btnDiary: "Gezi Günlüğüm",
      btnLinkedIn: "LinkedIn",

      highlightsTitle: "Öne Çıkanlar",
      highlights: [
        { value: "252", label: "aylık zaman serisi gözlemi", note: "Oca 2005 – Ara 2025 · 5 makro-finans serisi" },
        { value: "R² 0,988", label: "en iyi tahmin doğruluğu", note: "USD/TRY · 46 aylık test seti · ARIMA vs LSTM vs Holt" },
        { value: "108", label: "gözlemli dengeli panel", note: "9 oyun × 12 ay · Sabit etkiler + cluster-robust" },
        { value: "1 / 4", label: "Türkiye'yi temsil eden ekipte", note: "ASA Data Quest 2025 · Uluslararası" }
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
      projectsIntro: "Her projede yalnızca sonucu değil, o sonuca hangi testlerle ulaştığımı ve neden o modeli seçtiğimi de yazıyorum.",
      viewReport: "Raporu Görüntüle (PDF)",
      viewPresentation: "Sunumu Görüntüle (PDF)",
      viewThesis: "Tezi Görüntüle (PDF)",
      badgeFeatured: "Öne Çıkan Proje",
      badgeIndividual: "Bireysel Proje",
      badgeTeam3: "Takım Projesi (3 Kişi)",
      badgeTeam4: "Takım Projesi (4 Kişi)",
      badgeIntl: "Uluslararası",
      labelMethods: "Yöntemler:",
      labelResult: "Sonuç:",
      labelFindings: "Bulgular:",
      labelModel: "Model:",
      labelTests: "Testler:",
      labelTeam: "Ekibimiz:",
      labelMentor: "Mentor:",
      labelAdvisor: "Danışman:",

      thesisTitle: "Türkiye Yatırım Araçlarının Zaman Serisi Analizi",
      thesisSub: "Bitirme Tezi · Yıldız Teknik Üniversitesi İstatistik · 2026",
      thesisDesc: "Ons altın, USD/TRY, TÜFE enflasyonu, mevduat faizi ve BIST 100 serilerine ait 252 aylık gözlemi (Oca 2005 – Ara 2025) tek bir ekonometrik çerçevede modelledim. Bai–Perron testi 2008, 2018 ve 2021 kırılmalarını içsel olarak tespit etti; kukla değişkenler ons altın modelini R² = 0,12'den 0,51'e taşıdı. ARDL sınır testinde kesin eşbütünleşme bulunmadığı için VECM'i zorlamak yerine bağımsız ARIMA/SARIMA tahmincilerine geçtim.",
      thesisMethods: "ADF / PP / KPSS, Bai–Perron yapısal kırılma, ARDL sınır testi, ARMA-GARCH(1,1), EGARCH, Granger nedensellik, ARIMA vs LSTM vs Holt kıyaslaması.",
      thesisResult: "46 aylık test setinde ARIMA R² = 0,988 (USD/TRY), 0,979 (ons altın), 0,975 (mevduat faizi) ve 0,961 (BIST 100) ile LSTM'i geçti. Bunun nedenini de teşhis ettim: ARIMA'nın rolling one-step-ahead yapısına karşılık LSTM'in özilerlemeli tahminlerinde biriken hata. GARCH kalıcılığı α+β ≈ 0,97–0,98; EGARCH tüm serilerde asimetrik kaldıraç etkisi gösterdi.",
      thesisAdvisor: "Prof. Dr. Öyküm Esra Yiğit",

      panelTitle: "Steam'de Fiyat İndirimlerinin Oyuncu Sayısına Etkisi",
      panelSub: "Statik Panel Veri Analizi · 2026",
      panelDesc: "9 Steam oyununun 12 aylık verisinden 108 gözlemli dengeli bir panel kurdum. İki çoklu-doğrusal değişkeni tek ve yorumlanabilir bir ölçüte indirgeyen \"ağırlıklı indirim yoğunluğu\" değişkenini tasarladım (indirim oranı × indirimli gün ÷ 30).",
      panelMethods: "Levin-Lin-Chu, Im-Pesaran-Shin ve Fisher-ADF panel birim kök testleri; Hausman testi (χ² = 9,27, p = 0,026) ile sabit etkiler seçimi; oyun düzeyinde cluster-robust standart hatalar.",
      panelResult: "Fiyattaki %1'lik artış oyuncu sayısını %0,57 azaltıyor (β = −0,567, p = 0,002). Buna karşın sezonluk indirim kuklaları oyun-içi düzeyde anlamlı etki üretmiyor; yatay kesit farkının %98'ini tek başına oyun büyüklüğü açıklıyor — pazarlama çıkarımını tümüyle değiştiren bir ayrım.",

      proj1Title: "Müşteri Satın Alma Davranışları Analizi",
      proj1Desc: "Açık erişimli bir veri seti (100 gözlem) kullanılarak müşterilerin satın alma davranışlarını (yaş, cinsiyet, yorum niteliği) etkileyen faktörler çok değişkenli lojistik regresyon ve Pearson ki-kare testleriyle analiz edilmiştir. Sonuç olarak cinsiyetin satın alma kararında istatistiksel açıdan anlamlı bir etkiye sahip olduğu saptanmıştır.",

      proj2Title: "Data Science & Sustainable Development",
      proj2Sub: "American Statistical Association (CIRS) · ASA Data Quest 2025",
      proj2Desc: "Brezilya, Endonezya, Hindistan, Kenya ve Çin'den gelen ekiplerin katıldığı uluslararası bir öğrenci veri bilimi yarışmasında Türkiye'yi temsil ettik. Ekonomik, sosyal ve çevresel sürdürülebilirlik boyutlarını birlikte optimize eden veri odaklı bir çözüm ürettik.",
      proj2FindVal: "GSYH–eğitim korelasyonu 0,87–0,90 · eğitim–yaşam beklentisi 0,92. GSYH ile CO₂ arasında 0,87 korelasyon varken eğitim ve sağlık göstergeleri CO₂ ile zayıf ya da negatif ilişkili — sosyal yatırımın daha az karbon yoğun büyüme yolu olduğunun kanıtı.",
      proj2ModelVal: "Ekonomik kapasite, eğitim, sağlık harcaması ve ters çevrilmiş CO₂ emisyonunu birleştiren 4 boyutlu sürdürülebilirlik optimizasyon modeli. İskandinav ülkeleri ve Costa Rica en dengeli profilleri verdi.",
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
      desc: "Statistics graduate of Yıldız Technical University. Modelled 252 months of Turkish macro-financial data with ARIMA, GARCH and LSTM; estimated fixed-effects panel models on 108 observations; represented Türkiye at ASA Data Quest 2025. I work in Python, R, Stata and SQL.",
      btnProjects: "See My Projects",
      btnCV: "Download CV (PDF)",
      btnDiary: "Travel Diary",
      btnLinkedIn: "LinkedIn",

      highlightsTitle: "Highlights",
      highlights: [
        { value: "252", label: "monthly time series observations", note: "Jan 2005 – Dec 2025 · 5 macro-financial series" },
        { value: "R² 0.988", label: "best forecast accuracy", note: "USD/TRY · 46-month hold-out · ARIMA vs LSTM vs Holt" },
        { value: "108", label: "observation balanced panel", note: "9 games × 12 months · Fixed effects + cluster-robust" },
        { value: "1 of 4", label: "on the team representing Türkiye", note: "ASA Data Quest 2025 · International" }
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
      projectsIntro: "For every project I write down not just the result, but which tests got me there and why I chose that model.",
      viewReport: "View Report (PDF)",
      viewPresentation: "View Presentation (PDF)",
      viewThesis: "View Thesis (PDF)",
      badgeFeatured: "Featured Project",
      badgeIndividual: "Individual Project",
      badgeTeam3: "Team Project (3 Members)",
      badgeTeam4: "Team Project (4 Members)",
      badgeIntl: "International",
      labelMethods: "Methods:",
      labelResult: "Result:",
      labelFindings: "Findings:",
      labelModel: "Model:",
      labelTests: "Tests:",
      labelTeam: "Our Team:",
      labelMentor: "Mentor:",
      labelAdvisor: "Advisor:",

      thesisTitle: "Time Series Analysis of Turkish Investment Instruments",
      thesisSub: "Undergraduate Thesis · Yıldız Technical University, Statistics · 2026",
      thesisDesc: "I modelled 252 monthly observations (Jan 2005 – Dec 2025) of spot gold, USD/TRY, CPI inflation, deposit rates and the BIST 100 within a single econometric framework. The Bai–Perron test endogenously identified the 2008, 2018 and 2021 breaks; adding break dummies lifted the gold model from R² = 0.12 to 0.51. With no definitive cointegration in the ARDL bounds test, I moved deliberately to independent ARIMA/SARIMA estimators instead of forcing a VECM.",
      thesisMethods: "ADF / PP / KPSS, Bai–Perron structural breaks, ARDL bounds testing, ARMA-GARCH(1,1), EGARCH, Granger causality, ARIMA vs LSTM vs Holt benchmarking.",
      thesisResult: "On a 46-month hold-out, ARIMA beat LSTM with R² = 0.988 (USD/TRY), 0.979 (gold), 0.975 (deposit rate) and 0.961 (BIST 100) — and I diagnosed why: ARIMA's rolling one-step-ahead structure versus the error that accumulates in the LSTM's autoregressive forecasts. GARCH persistence reached α+β ≈ 0.97–0.98, and EGARCH confirmed asymmetric leverage effects across every series.",
      thesisAdvisor: "Prof. Dr. Öyküm Esra Yiğit",

      panelTitle: "Effect of Price Discounts on Player Counts on Steam",
      panelSub: "Static Panel Data Analysis · 2026",
      panelDesc: "I built a balanced panel of 108 observations from 12 months of data on 9 Steam games, and engineered a \"weighted discount intensity\" variable (discount rate × discounted days ÷ 30) that collapsed two collinear regressors into a single interpretable measure.",
      panelMethods: "Levin-Lin-Chu, Im-Pesaran-Shin and Fisher-ADF panel unit-root tests; Hausman test (χ² = 9.27, p = 0.026) selecting fixed effects; game-clustered robust standard errors.",
      panelResult: "A 1% price increase reduces player count by 0.57% (β = −0.567, p = 0.002). Seasonal sale dummies, by contrast, showed no significant within-game effect, and game size alone explains 98% of the cross-sectional spread — a distinction that changes the marketing conclusion entirely.",

      proj1Title: "Customer Purchasing Behaviour Analysis",
      proj1Desc: "Using an open-access dataset (100 observations), the factors affecting customers' purchasing behaviour (age, gender, review quality) were analysed with multivariate logistic regression and Pearson chi-square tests. Gender emerged as a statistically significant driver of the purchase decision.",

      proj2Title: "Data Science & Sustainable Development",
      proj2Sub: "American Statistical Association (CIRS) · ASA Data Quest 2025",
      proj2Desc: "We represented Türkiye in an international student data science competition alongside teams from Brazil, Indonesia, India, Kenya and China, producing a data-driven solution that optimises economic, social and environmental sustainability together.",
      proj2FindVal: "GDP–education correlation of 0.87–0.90 and education–life expectancy of 0.92. GDP correlates 0.87 with CO₂ while education and health indicators correlate weakly or negatively — evidence that social investment is the less carbon-intensive growth path.",
      proj2ModelVal: "A four-dimensional sustainability optimisation model combining economic capacity, education, health expenditure and inverted CO₂ emissions. Nordic countries and Costa Rica produced the most balanced profiles.",
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
