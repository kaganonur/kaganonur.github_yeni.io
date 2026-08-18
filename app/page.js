'use client';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

export default function Home() {
  const { t, lang } = useLang();
  const cvHref = lang === 'tr' ? '/assets/cv/CV_KaganOnur_TR.pdf' : '/assets/cv/CV_KaganOnur_EN.pdf';

  return (
    <div className="home-page">
      {/* ============ HERO ============ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <p className="hero-role animate-fade-in delay-100">{t.home.role}</p>
            <h1 className="hero-title animate-fade-in delay-200">Kağan Onur</h1>
            <div className="hero-divider animate-fade-in delay-300"></div>
            <h2 className="title-gradient hero-tagline animate-fade-in delay-300">
              {t.home.title}
            </h2>
            <p className="hero-desc animate-fade-in delay-400">{t.home.desc}</p>
            <div className="hero-cta animate-fade-in delay-400">
              <Link href="#projects" className="btn btn-primary">{t.home.btnProjects}</Link>
              <a href={cvHref} target="_blank" rel="noopener" className="btn btn-outline">{t.home.btnCV}</a>
              <a
                href="https://www.linkedin.com/in/kağan-onur-1700921b4/"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                {t.home.btnLinkedIn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS (metric strip) ============ */}
      <section className="container highlights-section">
        <div className="highlights-grid">
          {t.home.highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <div className="highlight-value">{h.value}</div>
              <div className="highlight-label">{h.label}</div>
              <div className="highlight-note">{h.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="section container">
        <div className="section-wrapper">
          <h2 className="section-wrapper-title title-gradient">{t.home.projects}</h2>
          <p className="section-intro">{t.home.projectsIntro}</p>

          {/* --- Featured: Thesis --- */}
          <article className="glass-card proj-card featured-card">
            <div className="proj-head">
              <div>
                <div className="badge-row">
                  <span className="badge badge-accent">{t.home.badgeFeatured}</span>
                  <span className="badge">{t.home.badgeIndividual}</span>
                </div>
                <h3 className="proj-title">{t.home.thesisTitle}</h3>
                <p className="proj-sub">{t.home.thesisSub}</p>
              </div>
            </div>

            <p className="proj-body">{t.home.thesisDesc}</p>

            <div className="proj-detail">
              <strong>{t.home.labelMethods}</strong> {t.home.thesisMethods}
            </div>
            <div className="proj-detail proj-detail-result">
              <strong>{t.home.labelResult}</strong> {t.home.thesisResult}
            </div>

            <div className="proj-meta-box">
              <span className="proj-meta-label">{t.home.labelAdvisor}</span> {t.home.thesisAdvisor}
            </div>

            <div className="proj-actions">
              <a href="/assets/raporlar/bitirme-tezi.pdf" target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                {t.home.viewThesis}
              </a>
            </div>
          </article>

          {/* --- Two-up: Panel + ASA --- */}
          <div className="grid-2 proj-grid">
            <article className="glass-card proj-card">
              <div className="badge-row">
                <span className="badge">{t.home.badgeTeam3}</span>
              </div>
              <h3 className="proj-title">{t.home.panelTitle}</h3>
              <p className="proj-sub">{t.home.panelSub}</p>
              <p className="proj-body">{t.home.panelDesc}</p>
              <div className="proj-detail">
                <strong>{t.home.labelMethods}</strong> {t.home.panelMethods}
              </div>
              <div className="proj-detail proj-detail-result">
                <strong>{t.home.labelResult}</strong> {t.home.panelResult}
              </div>
              <div className="proj-actions">
                <a href="/assets/raporlar/panel-veri-analizi.pdf" target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                  {t.home.viewReport}
                </a>
              </div>
            </article>

            <article className="glass-card proj-card">
              <div className="badge-row">
                <span className="badge">{t.home.badgeTeam4}</span>
                <span className="badge badge-accent">{t.home.badgeIntl}</span>
              </div>
              <h3 className="proj-title">{t.home.proj2Title}</h3>
              <p className="proj-sub">{t.home.proj2Sub}</p>
              <p className="proj-body">{t.home.proj2Desc}</p>
              <div className="proj-detail">
                <strong>{t.home.labelModel}</strong> {t.home.proj2ModelVal}
              </div>
              <div className="proj-detail proj-detail-result">
                <strong>{t.home.labelFindings}</strong> {t.home.proj2FindVal}
              </div>
              <div className="proj-detail">
                <strong>{t.home.labelTests}</strong> {t.home.proj2TestsVal}
              </div>
              <div className="proj-meta-box">
                <span className="proj-meta-label">{t.home.labelTeam}</span> Gökhan Boz, Hamdi Gülle, Ömer Faruk Tekin, Kağan Onur
                <br />
                <span className="proj-meta-label">{t.home.labelMentor}</span> Ceylan Yozgatlıgil
              </div>
              <div className="proj-actions">
                <a href="/assets/raporlar/AsaDataQuest.pdf" target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                  {t.home.viewPresentation}
                </a>
              </div>
            </article>
          </div>

          {/* --- Customer analysis --- */}
          <article className="glass-card proj-card proj-card-wide">
            <div className="proj-compact">
              <div className="proj-compact-img">
                <img
                  src="/assets/raporlar/grafik1.png"
                  alt={t.home.proj1Title}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="proj-compact-body">
                <div className="badge-row">
                  <span className="badge">{t.home.badgeTeam3}</span>
                </div>
                <h3 className="proj-title">{t.home.proj1Title}</h3>
                <p className="proj-body">{t.home.proj1Desc}</p>
                <div className="proj-actions">
                  <a href="/assets/raporlar/musteri-analizi.pdf" target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                    {t.home.viewReport}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="section container">
        <div className="section-wrapper">
          <h2 className="section-wrapper-title title-gradient">{t.home.skillsTitle}</h2>
          <div className="skills-grid skills-grid-4">
            {t.home.skillCategories.map((cat, i) => (
              <div className="skill-card" key={i}>
                <h3 className="skill-card-title">{cat.title}</h3>
                <p className="skill-card-desc">{cat.desc}</p>
                <div className="skill-tags">
                  {cat.tags.map((tag, j) => (
                    <span className="skill-tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="section container">
        <div className="section-wrapper">
          <h2 className="section-wrapper-title title-gradient">{t.home.expTitle}</h2>
          <div className="exp-item">
            <div className="exp-head">
              <div>
                <h3 className="proj-title" style={{ marginBottom: '0.2rem' }}>{t.home.expRole}</h3>
                <p className="proj-sub">{t.home.expCompany}</p>
              </div>
              <span className="exp-date">{t.home.expDate}</span>
            </div>
            <p className="proj-body">{t.home.expDesc}</p>
          </div>
        </div>
      </section>

      {/* ============ CV ============ */}
      <section id="cv" className="section container">
        <div className="cv-band">
          <h2 className="title-gradient cv-band-title">{t.home.cvTitle}</h2>
          <p className="cv-band-desc">{t.home.cvDesc}</p>
          <div className="cv-band-actions">
            <a href="/assets/cv/CV_KaganOnur_TR.pdf" target="_blank" rel="noopener" className="btn btn-primary">{t.home.cvTR}</a>
            <a href="/assets/cv/CV_KaganOnur_EN.pdf" target="_blank" rel="noopener" className="btn btn-outline">{t.home.cvEN}</a>
          </div>
        </div>
      </section>

      {/* ============ ABOUT (personal) ============ */}
      <section id="about" className="section container">
        <div className="about-grid grid-2">
          <div className="about-text-container glass-card">
            <h2 className="title-gradient" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>{t.home.whoAmI}</h2>
            <p>{t.home.about1}</p>
            <p>{t.home.about2}</p>
            <p>{t.home.about3}</p>
            <p>{t.home.about4}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/blog" className="btn btn-outline btn-sm">{t.home.btnDiary}</Link>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h4 className="title-gradient">{t.home.edu}</h4>
                <p>{t.home.eduVal}</p>
              </div>
              <div className="stat-card glass-card">
                <h4 className="title-gradient">{t.home.location}</h4>
                <p>{t.home.locationVal}</p>
              </div>

              <div className="stat-card glass-card stat-card-wide">
                <h4 className="title-gradient">{t.home.openTo}</h4>
                <p>{t.home.openToVal}</p>
              </div>
              <div className="stat-card glass-card stat-card-wide">
                <h4 className="title-gradient">{t.home.certs}</h4>
                <p>{t.home.certsVal}</p>
              </div>
              <div className="stat-card glass-card stat-card-wide">
                <h4 className="title-gradient">{t.home.interests}</h4>
                <p>{t.home.interestsVal}</p>
              </div>
              <div className="stat-card glass-card stat-card-wide">
                <h4 className="title-gradient">{t.home.network}</h4>
                <div className="contact-links">
                  <a href="https://www.linkedin.com/in/kağan-onur-1700921b4/" target="_blank" rel="noopener" className="btn btn-outline btn-xs">LinkedIn</a>
                  <a href="mailto:kaganonur08@gmail.com" className="btn btn-outline btn-xs">kaganonur08@gmail.com</a>
                  <a href="https://www.instagram.com/kagannonur/" target="_blank" rel="noopener" className="btn btn-outline btn-xs">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
