'use client';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();

  return (
    <nav className="glass-nav">
      <Link href="/" className="logo title-gradient" style={{ marginRight: 'auto' }}>
        {t.nav.home}
      </Link>
      
      <div className="nav-links">
        <Link href="/blog">{t.nav.blog}</Link>
        <button onClick={toggleLang} className="btn-outline" style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {lang === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>
    </nav>
  );
}
