'use client';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();

  return (
    <nav className="glass-nav">
      <Link href="/" className="logo title-gradient" style={{ marginRight: 'auto' }}>
        Kağan Onur
      </Link>

      <div className="nav-links">
        <Link href="/#projects" className="nav-link-hide-sm">{t.nav.projects}</Link>
        <Link href="/#skills" className="nav-link-hide-sm">{t.nav.skills}</Link>
        <Link href="/#about" className="nav-link-hide-sm">{t.nav.about}</Link>
        <Link href="/blog">{t.nav.blog}</Link>
        <a
          href={lang === 'tr' ? '/assets/cv/CV_KaganOnur_TR.pdf' : '/assets/cv/CV_KaganOnur_EN.pdf'}
          target="_blank"
          rel="noopener"
          className="btn btn-outline btn-xs"
        >
          {t.nav.cv}
        </a>
        <button
          onClick={toggleLang}
          className="btn-outline"
          title={t.nav.langTitle}
          style={{
            padding: '0.3rem 0.6rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold',
          }}
        >
          {lang === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>
    </nav>
  );
}
