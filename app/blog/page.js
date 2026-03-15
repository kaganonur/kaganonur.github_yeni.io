'use client';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { useLang } from '@/components/LanguageContext';

export default function BlogList() {
  const { t, lang } = useLang();

  return (
    <div className="section container">
      <h1 className="title-gradient animate-fade-in delay-100" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
        {t.blog.title}
      </h1>
      <p className="animate-fade-in delay-200" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto' }}>
        {t.blog.desc}
      </p>

      {/* Orta Avrupa Bölümü İzolasyonu */}
      <div className="europe-section animate-fade-in delay-300" style={{ marginTop: '6rem' }}>
        <h2 className="title-gradient" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>{t.blog.europe}</h2>
        <div className="grid-3">
        {blogPosts.map((post, index) => {
          const title = lang === 'en' && post.enTitle ? post.enTitle : post.title;
          const excerpt = lang === 'en' && post.enExcerpt ? post.enExcerpt : post.excerpt;
          const country = lang === 'en' && post.enCountry ? post.enCountry : post.country;
          
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={`glass-card animate-fade-in delay-300`} style={{ animationDelay: `${(index + 3) * 100}ms` }}>
              <div className="card-image-wrapper">
                <img src={post.coverImage} alt={title} className="card-cover-img" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span class="fallback-badge">${country}</span>`; }} />
                <span className="card-badge">{country}</span>
              </div>
              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>{title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{excerpt}</p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-gold)', fontWeight: '500' }}>
                {t.blog.readMore}
              </div>
            </Link>
          );
        })}
      </div>
      </div>
    </div>
  );
}
