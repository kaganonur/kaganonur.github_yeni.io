'use client';
import Link from 'next/link';
import ClientGallery from '@/components/ClientGallery';
import { useLang } from '@/components/LanguageContext';

export default function ClientBlogPost({ post }) {
  const { t, lang } = useLang();
  
  const title = lang === 'en' && post.enTitle ? post.enTitle : post.title;
  const content = lang === 'en' && post.enContent ? post.enContent : post.content;
  const country = lang === 'en' && post.enCountry ? post.enCountry : post.country;

  return (
    <article className="blog-detail-container">
      <div className="blog-hero glass" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, #000 100%), url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="country-badge animate-fade-in delay-100">{country}</span>
          <h1 className="title-gradient animate-fade-in delay-200" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', margin: '1rem 0' }}>
            {title}
          </h1>
        </div>
      </div>

      <div className="container section">
        <div className="content-wrapper glass-card animate-fade-in delay-300">
          <p className="blog-content">{content}</p>
          
          <div className="gallery-section">
            <h3 className="title-gradient" style={{ marginTop: '4rem', marginBottom: '2rem' }}>{t.blog.gallery}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent-gold-light)', marginBottom: '1.5rem' }}>
              {t.blog.galleryNote}
            </p>
            <ClientGallery images={post.images} title={title} />
          </div>
          
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline">{t.blog.allPosts}</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
