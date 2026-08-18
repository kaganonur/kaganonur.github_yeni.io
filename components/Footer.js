'use client';
import { useLang } from '@/components/LanguageContext';

export default function Footer() {
  const { t, lang } = useLang();
  const cvHref = lang === 'tr' ? '/assets/cv/CV_KaganOnur_TR.pdf' : '/assets/cv/CV_KaganOnur_EN.pdf';

  return (
    <footer className="footer-container">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href="mailto:kaganonur08@gmail.com">kaganonur08@gmail.com</a>
          <a href="https://www.linkedin.com/in/kağan-onur-1700921b4/" target="_blank" rel="noopener">LinkedIn</a>
          <a href={cvHref} target="_blank" rel="noopener">{t.nav.cv}</a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Kağan Onur | {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
