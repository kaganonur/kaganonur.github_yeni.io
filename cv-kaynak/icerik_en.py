# -*- coding: utf-8 -*-
"""CV content — English. Text taken verbatim from the existing PDF; new project added."""

ILETISIM = [
  "İstanbul, Türkiye",
  "+90 506 023 01 88",
  '<a href="mailto:kaganonur08@gmail.com">kaganonur08@gmail.com</a>',
  '<a href="https://linkedin.com/in/kaganonur">linkedin.com/in/kaganonur</a>',
  '<a href="https://kaganonur.vercel.app">kaganonur.vercel.app</a>',
]

ECONOMY = {
 "bas": "The Turkish Economy — Finding the Rules That Repeat",
 "alt": "Individual project · kaganonur.vercel.app/turkiye-ekonomisi · 2026, ongoing",
 "giris": "Is there anything about the Turkish economy I can state as a general rule? I collected 33 monthly and daily series "
          "from 2002 onward and tested the usual claims one by one, writing up the ones that survived and the ones that collapsed.",
 "maddeler": [
   "Seven rules survived. The two clearest: in <b>twenty-four years out of twenty-four</b> the current account is better in August "
   "than in March of the same year, and <b>82% of that swing</b> is explained by net tourism revenue; the real budget deficit "
   "peaks in December in fifteen of twenty years.",

   "Four claims failed — including &quot;the lira gets volatile after elections&quot; and &quot;the budget opens up before elections.&quot; "
   "Every finding went through calendar-matched placebo and permutation tests, and the seasonality method itself through a "
   "negative control that my first version failed.",

   "<b>I retracted three of my own results:</b> the level Taylor coefficients were a spurious regression (DW 0.13–0.47, no "
   "cointegration), the Bai–Perron break dates vanished once residual autocorrelation was removed, and one relationship rested "
   "on a single observation. All three are written into the published pages.",

   "Re-measured exchange-rate pass-through with lag-augmented local projections: it has risen from <b>0.09 to 0.77</b> at a "
   "three-month horizon (t = 3.6). The output is five published sections and an interactive explorer covering 36 series.",
 ],
 "yontem": "Methods: Bai–Perron multiple structural breaks (my own dynamic programming implementation) · Chen–Liu outlier detection · "
           "calendar-matched placebo and permutation tests · Benjamini–Hochberg FDR · 2×12 seasonal decomposition with a negative control · "
           "lag-augmented local projections (Montiel Olea &amp; Plagborg-Møller, 2021) · Zivot–Andrews · spurious-regression diagnostics · "
           "event study around rate-decision dates. Python (pandas, statsmodels), CBRT EVDS API.",
}

THESIS = {
 "bas": "Time Series Analysis of Turkish Investment Instruments",
 "alt": "Undergraduate Thesis · Yıldız Technical University · 2026",
 "meta": "Advisor: Prof. Dr. Öyküm Esra Yiğit",
 "giris": "Which asset actually protects savings against Türkiye's inflation and currency swings — and can deep learning forecast "
          "these markets better than a classical model? I tested both questions on 21 years of monthly data across five series.",
 "maddeler": [
   "Gold was the only instrument that held its real value over two decades; deposit returns were eroded by inflation.",
   "Adding the 2008, 2018 and 2021 crises to the model improved the gold forecast fourfold (<b>R² 0.12 → 0.51</b>).",
   "Classical ARIMA beat the deep learning LSTM. I looked into why rather than taking the win: the comparison wasn't fair, because "
   "the LSTM forecasts on top of its own forecasts and the error compounds over 46 months.",
   "Confirmed that currency moves drive inflation rather than the reverse — a measure of exchange-rate pass-through.",
 ],
 "yontem": "Methods: ADF / PP / KPSS unit-root tests · Bai–Perron structural breaks · ARDL bounds testing · ARMA-GARCH(1,1) and EGARCH · "
           "Granger causality · ARIMA vs LSTM vs Holt benchmarking. Python (statsmodels, arch, TensorFlow/Keras).",
}

MESITE = {
 "bas": "MeSite — Branching Video Platform",
 "alt": "Individual project · mesite.org · 2026, ongoing",
 "giris": "A video platform where stories branch: you watch a clip, and if you don't like where it goes you upload your own "
          "continuation. I built the whole thing alone — data model, algorithm, API, interface and server — and it is live in closed beta.",
 "maddeler": [
   "Designed the algorithm that decides which branch becomes the main storyline. I measured attention in <b>capped seconds rather "
   "than completion rate</b>, because completion rate would push everyone to cut their videos shorter.",
   "Made diversity and attention <b>multipliers rather than added points</b>, so a branch inflated by one author or watched by "
   "nobody can't become the main line however large it grows.",
   "Set up watch-time collection so the algorithm's coefficients can be tuned against real behaviour instead of staying at "
   "estimated values.",
   "Shipped it end to end: nightly backups with a tested restore, rate limiting, and account deletion under Turkish data protection law.",
 ],
 "yontem": "Stack: Python (FastAPI, SQLAlchemy) · PostgreSQL for accounts, Neo4j for the branching graph · Docker · Caddy · JWT · "
           "FFmpeg transcoding · JS/HTML/CSS front end. ~8,600 lines of Python with an automated test suite, deployed on a Hetzner VPS.",
}

STEAM = {
 "bas": "Effect of Price Discounts on Player Counts on Steam",
 "alt": "Panel Data Analysis · Team of 3 · 2026",
 "giris": "Do Steam sales actually bring players back? We tested it on twelve months of data from nine popular games.",
 "maddeler": [
   "Price matters: a <b>1% increase costs 0.57% of the player base</b>.",
   "The sales themselves did not. None of the four seasonal sale periods produced a significant lift.",
   "The reason was a measurement trap: <b>98% of the difference in player numbers comes from how big the game already is</b>. "
   "Discounts don't grow a game — large games simply stay crowded.",
 ],
 "yontem": "Methods: balanced panel of 108 observations (9 games × 12 months) · a combined &quot;discount pressure&quot; variable merging "
           "depth and duration · panel unit-root tests · Hausman test selecting fixed effects · game-clustered robust standard errors. Stata, R.",
}

ASA = {
 "bas": "Data Science &amp; Sustainable Development",
 "alt": "ASA Data Quest 2025 · International · Representing Türkiye",
 "meta": "American Statistical Association (CIRS) · Mentor: Ceylan Yozgatlıgil · Team of 4",
 "giris": "Do countries have to accept environmental cost in order to develop? We presented Türkiye's answer against teams from "
          "Brazil, Indonesia, India, Kenya and China.",
 "maddeler": [
   "Wealth, education and life expectancy rise together almost in lockstep (<b>0.87–0.92</b>).",
   "Carbon cost is where they part: national income tracks emissions closely (<b>0.87</b>) while education and health spending "
   "do not — social investment develops a country at a lower carbon price.",
   "A model weighing economy, education, health and emissions together put the Nordic countries and Costa Rica on top, showing "
   "the trade-off isn't inevitable.",
 ],
 "yontem": "Validation: Durbin–Watson, VIF and Shapiro–Wilk diagnostics.",
}

CUSTOMER = {
 "bas": "Customer Purchasing Behaviour Analysis",
 "alt": "Individual project · 2026",
 "giris": "Tested what drives a customer's decision to buy — age, gender and review quality — on an open-access dataset. "
          "Gender was the only statistically significant driver.",
 "yontem": "Methods: multivariate logistic regression · Pearson chi-square tests.",
}

# Short version: weakest bullets/entries dropped to hold two pages.
ECONOMY_KISA = dict(ECONOMY)
ECONOMY_KISA["giris"] = (
  "Is there anything about the Turkish economy I can state as a general rule? I collected 33 monthly and daily series "
  "from 2002 onward and tested the usual claims one by one, writing up the ones that survived and the ones that collapsed. "
  "The output is five published sections and an interactive explorer covering 36 series.")
ECONOMY_KISA["maddeler"] = ECONOMY["maddeler"][:3]
ASA_KISA = dict(ASA); ASA_KISA["maddeler"] = ASA["maddeler"][:2]
MESITE_KISA = dict(MESITE)
MESITE_KISA["maddeler"] = [MESITE["maddeler"][0], MESITE["maddeler"][1], MESITE["maddeler"][3]]

def veri(yeni_proje=True, musteriyi_cikar=False, kisa=False):
    mesite = MESITE_KISA if kisa else MESITE
    economy = ECONOMY_KISA if kisa else ECONOMY
    asa = ASA_KISA if kisa else ASA
    projeler = [THESIS, mesite, STEAM, asa, CUSTOMER]
    if yeni_proje:
        projeler = [economy] + projeler
    if musteriyi_cikar or kisa:
        projeler = [p for p in projeler if p is not CUSTOMER]
    return {
 "dil": "en",
 "ad": "KAĞAN ONUR",
 "rol": "Data Analyst · Data Scientist",
 "iletisim": ILETISIM,
 "bl_profil": "Profile",
 "profil": "Statistics graduate of Yıldız Technical University (2026). What interests me is getting from data to a decision: my thesis "
   "modelled 21 years of Turkish investment instruments to measure which one actually protects savings against inflation and currency "
   "risk; a separate project tested which patterns in twenty-four years of Turkish macro data genuinely repeat, and published the "
   "results; and I represented Türkiye at ASA Data Quest 2025 alongside teams from four continents. I work in Python, R, Stata and SQL, "
   "and I treat explaining <i>why</i> a model behaved as it did as part of the job rather than an afterthought. Alongside this I "
   "designed, built and shipped mesite.org single-handedly. Open to data analyst and data scientist roles.",
 "bl_projeler": "Selected Projects",
 "projeler": projeler,
 "bl_deneyim": "Experience",
 "deneyim": [{
   "bas": "Data Annotation Specialist", "tarih": "Jan 2026 – Feb 2026",
   "alt": "Artiwise — AI-Powered Software Company",
   "maddeler": [
     "Labelled and classified text data for supervised NLP models at a company building AI-powered document analysis for "
     "customer-centric process management.",
     "Applied and refined annotation guidelines to keep labels consistent, and ran quality checks on completed batches to keep "
     "training data reliable.",
   ]}],
 "bl_egitim": "Education",
 "egitim": [
   {"bas": "Yıldız Technical University", "tarih": "2022 – 2026", "alt": "BSc Statistics, Faculty of Arts and Sciences",
    "not": "Relevant coursework: Econometrics · Time Series · Panel Data · Multivariate Statistics · Regression · Data Visualization"},
   {"bas": "İstanbul Kültür University", "tarih": "2020 – 2022", "alt": "Computer Engineering, Faculty of Engineering",
    "not": "English preparatory programme completed; transferred to Statistics at YTU"},
   {"bas": "Gürlek Nakipoğlu Anatolian High School", "tarih": "2015 – 2019"},
 ],
 "bl_yetkinlik": "Technical Skills",
 "yetkinlikler": [
   ("Programming &amp; Tools", "Python (pandas, NumPy, statsmodels, scikit-learn, TensorFlow/Keras) · R · Stata · SQL · Excel · SPSS"),
   ("Time Series &amp; Econometrics", "ARIMA / SARIMA · ARMA-GARCH · EGARCH · ARDL bounds testing · Granger causality · Bai–Perron · "
    "local projections · Zivot–Andrews · ADF / PP / KPSS"),
   ("Panel &amp; Regression", "Fixed and random effects · Hausman test · cluster-robust standard errors · panel unit roots · OLS · "
    "logistic regression"),
   ("Inference &amp; Diagnostics", "Placebo and permutation tests · multiple-comparison correction (Benjamini–Hochberg) · event studies · "
    "spurious regression and assumption audits"),
   ("Databases &amp; Engineering", "PostgreSQL · Neo4j (graph database) · FastAPI · Docker · Git · REST API design"),
   ("Machine Learning", "LSTM and deep sequence models · supervised classification · model benchmarking (MAE, MAPE, R²)"),
   ("Data Work", "Cleaning and merging multi-source data · feature engineering · data labelling · visualization and reporting"),
   ("Languages", "Turkish — Native · English — Upper-Intermediate (B2), DİLKO in partnership with Pearson (2022)"),
 ],
}
