'use client';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLang();

  return (
    <div className="home-page">
      {/* Hero Bölümü */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in delay-200">
              Kağan Onur
            </h1>
            <div className="hero-divider animate-fade-in delay-300"></div>
            <h2 className="title-gradient animate-fade-in delay-300">
              {t.home.title}
            </h2>
            <p className="hero-desc animate-fade-in delay-400">
              {t.home.desc}
            </p>
            <div className="hero-cta animate-fade-in delay-400">
              <Link href="#about" className="btn btn-primary">{t.home.btnKnowMe}</Link>
              <Link href="/blog" className="btn btn-outline" style={{ marginLeft: '1rem' }}>{t.home.btnDiary}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımda Bölümü */}
      <section id="about" className="section container">
        <div className="about-grid grid-2">
          <div className="about-text-container glass-card">
            <h2 className="title-gradient" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>{t.home.whoAmI}</h2>
            <p>{t.home.about1}</p>
            <p>{t.home.about2}</p>
            <p>{t.home.about3}</p>
            <p>{t.home.about4}</p>
          </div>
          
          <div className="about-visual">
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h4 className="title-gradient">{t.home.birth}</h4>
                <p>{t.home.birthVal}</p>
              </div>
              <div className="stat-card glass-card">
                <h4 className="title-gradient">{t.home.edu}</h4>
                <p>{t.home.eduVal}</p>
              </div>
              <div className="stat-card glass-card" style={{ gridColumn: '1 / -1' }}>
                <h4 className="title-gradient">{t.home.skills}</h4>
                <p>{t.home.skillsVal}</p>
              </div>
              <div className="stat-card glass-card" style={{ gridColumn: '1 / -1' }}>
                <h4 className="title-gradient">{t.home.interests}</h4>
                <p>{t.home.interestsVal}</p>
              </div>
              <div className="stat-card glass-card" style={{ gridColumn: '1 / -1' }}>
                <h4 className="title-gradient">{t.home.certs}</h4>
                <p>Upper-Intermediate English Course – DİLKO, in partnership with Pearson (2022)</p>
              </div>
              <div className="stat-card glass-card" style={{ gridColumn: '1 / -1' }}>
                <h4 className="title-gradient">{t.home.network}</h4>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                  <a href="https://www.linkedin.com/in/kağan-onur-1700921b4/" target="_blank" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>LinkedIn</a>
                  <a href="https://www.instagram.com/kagannonur/" target="_blank" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>Instagram</a>
                  <a href="mailto:kaganonur08@gmail.com" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>E-Posta</a>
                </div>
              </div>
            </div>
            
            <style jsx>{`
              .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                height: 100%;
                align-content: center;
              }
              .stat-card {
                padding: 1.5rem;
                text-align: center;
                transition: transform 0.3s ease;
              }
              .stat-card:hover {
                transform: translateY(-5px);
              }
              .stat-card h4 {
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
              }
              .stat-card p {
                margin: 0;
                font-size: 0.95rem;
                color: var(--text-secondary);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Projeler Bölümü */}
      <section id="projects" className="section container">
        <h2 className="title-gradient" style={{ marginBottom: '3rem', fontSize: '2.5rem', textAlign: 'center' }}>{t.home.projects}</h2>
        <div className="grid-2">
          {/* Müşteri Memnuniyet Analizi */}
          <div className="glass-card proj-card">
            <div className="proj-image">
              <img src="/assets/raporlar/grafik1.png" alt="Müşteri Analizi Grafik 1" onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML='<div class="err-img">Görsel Bekleniyor (assets/raporlar/grafik1.png)</div>'}} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1.5rem 0 1rem 0' }}>
              <h3 style={{ margin: 0 }}>{t.home.proj1Title}</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>22.01.2026</p>
            <p style={{ fontSize: '0.95rem' }}>
              {t.home.proj1Desc}
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/assets/raporlar/musteri-analizi.pdf" target="_blank" className="btn btn-outline" style={{ display: 'inline-block' }}>{t.home.proj1Btn}</a>
            </div>
          </div>

          {/* ASA Data Quest 2025 */}
          <div className="glass-card proj-card">
            <div className="proj-image" style={{ background: 'linear-gradient(45deg, #1a1a1a, #333)' }}>
              <h2 className="title-gradient" style={{ textAlign: 'center', padding: '1rem' }}>ASA Data Quest 2025</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '1.5rem 0 1rem 0' }}>
              <h3 style={{ margin: 0, paddingRight: '1rem' }}>Data Science & Sustainable Development</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>{t.home.proj1Team}</span>
                <span style={{ fontSize: '0.75rem', background: 'var(--accent-gold)', color: '#000', padding: '0.3rem 0.6rem', borderRadius: '4px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>{t.home.proj2Location}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>American Statistical Association (CIRS)</p>
            <div style={{ fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p>
                {t.home.proj2Desc}
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                <li><strong>{t.home.proj2Find}</strong> {t.home.proj2FindVal}</li>
                <li><strong>{t.home.proj2Model}</strong> {t.home.proj2ModelVal}</li>
                <li><strong>{t.home.proj2Tests}</strong> {t.home.proj2TestsVal}</li>
              </ul>
              <div style={{ marginTop: '0.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t.home.proj2Team}</strong>
                <span style={{ fontSize: '0.85rem' }}>Gökhan Boz (Kaptan), Hamdi Gülle, Ömer Faruk Tekin, Kağan Onur</span>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic' }}>{t.home.proj2Mentor} Ceylan Yozgatlıgil</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <a href="/assets/raporlar/AsaDataQuest.pdf" target="_blank" className="btn btn-outline" style={{ display: 'inline-block', fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>{t.home.proj2Btn}</a>
              </div>
            </div>
          </div>

          {/* Yeni Proje: Ekonomik Parametreler (Devam Ediyor) */}
          <div className="glass-card proj-card" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '0.5rem 0 1rem 0' }}>
              <h3 style={{ margin: 0, paddingRight: '1rem' }} className="title-gradient">{t.home.proj3Title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>{t.home.proj3Note}</span>
                <span style={{ fontSize: '0.75rem', background: 'var(--accent-gold)', color: '#000', padding: '0.3rem 0.6rem', borderRadius: '4px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>{t.home.proj3Status}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem' }}>
              {t.home.proj3Desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
