'use client';
import { useLang } from '@/components/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer-container">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Kağan | {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
