import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const SITE_URL = "https://kaganonur.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kağan Onur — Veri Analisti & İstatistikçi | Data Analyst",
    template: "%s | Kağan Onur",
  },
  description:
    "Yıldız Teknik Üniversitesi İstatistik mezunu veri analisti. Zaman serisi (ARIMA, GARCH, LSTM), panel veri analizi ve ekonometri projeleri. Python, R, Stata, SQL. ASA Data Quest 2025'te Türkiye temsilcisi.",
  keywords: [
    "Kağan Onur",
    "veri analisti",
    "data analyst",
    "veri bilimci",
    "data scientist",
    "istatistik",
    "statistics",
    "ekonometri",
    "econometrics",
    "zaman serisi analizi",
    "time series analysis",
    "panel veri analizi",
    "panel data",
    "ARIMA",
    "GARCH",
    "EGARCH",
    "LSTM",
    "Python",
    "R",
    "Stata",
    "SQL",
    "Yıldız Teknik Üniversitesi",
    "ASA Data Quest",
    "İstanbul",
  ],
  authors: [{ name: "Kağan Onur", url: SITE_URL }],
  creator: "Kağan Onur",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    siteName: "Kağan Onur",
    title: "Kağan Onur — Veri Analisti & İstatistikçi",
    description:
      "252 aylık makro-finans verisinde ARIMA/GARCH/LSTM, 108 gözlemli panel veri analizi ve ASA Data Quest 2025 uluslararası temsili. Projeler, yöntemler ve sonuçlar.",
    url: SITE_URL,
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kağan Onur — Veri Analisti · Zaman Serisi, Panel Veri, Ekonometri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kağan Onur — Veri Analisti & İstatistikçi",
    description:
      "Zaman serisi, panel veri ve ekonometri projeleri. Python, R, Stata, SQL.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  category: "portfolio",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kağan Onur",
  url: SITE_URL,
  email: "mailto:kaganonur08@gmail.com",
  jobTitle: "Data Analyst",
  description:
    "Statistics graduate of Yıldız Technical University working in time series econometrics, panel data analysis and machine learning.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Yıldız Technical University",
      department: "Department of Statistics",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "İstanbul Kültür University",
    },
  ],
  knowsAbout: [
    "Time Series Analysis",
    "ARIMA",
    "GARCH",
    "EGARCH",
    "ARDL Bounds Testing",
    "Panel Data Analysis",
    "Fixed Effects Models",
    "Granger Causality",
    "LSTM",
    "Machine Learning",
    "Econometrics",
    "Statistical Analysis",
    "Python",
    "R",
    "Stata",
    "SQL",
  ],
  knowsLanguage: ["tr", "en"],
  sameAs: [
    "https://www.linkedin.com/in/kağan-onur-1700921b4/",
    "https://www.instagram.com/kagannonur/",
  ],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
