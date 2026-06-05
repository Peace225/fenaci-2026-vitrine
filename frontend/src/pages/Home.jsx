import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import WhyExpose from '../components/sections/WhyExpose'
import Poles from '../components/sections/Poles'
import Sponsors from '../components/sections/Sponsors'
import Newsletter from '../components/sections/Newsletter'
import Contact from '../components/sections/Contact'
import { TICKO_LINKS } from '../utils/externalLinks'

const quickAccess = [
  {
    icon: '🗳️',
    title: 'Votez pour votre localité',
    desc: '25 localités en compétition. Soutenez votre ville et aidez-la à atteindre les 500 000 voix !',
    cta: 'Voter maintenant',
    to: '/concours',
    isInternal: true,
    color: '#E8420A',
  },
  {
    icon: '🎟️',
    title: 'Billetterie',
    desc: 'Réservez vos places pour le Festival National de l\'Attiéké — 18 › 27 Septembre 2026.',
    cta: 'Acheter mes billets',
    href: TICKO_LINKS.billetterie,
    isInternal: false,
    color: '#1a7a2e',
  },
  {
    icon: '🤝',
    title: 'Espace Partenaires',
    desc: 'Exposants, sponsors et partenaires institutionnels : rejoignez l\'aventure FENACI 2026.',
    cta: 'Devenir partenaire',
    to: '/b2b',
    isInternal: true,
    color: '#c93600',
  },
]

/**
 * Home — Page d'accueil du FENACI 2026
 * Festival National de l'Attiéké de Côte d'Ivoire
 */
export default function Home() {
  return (
    <main>
      <Hero />

      {/* ── Accès rapides ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900, color: '#111827', margin: 0 }}>
              Participez au FENACI 2026
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {quickAccess.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: '40px', lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '18px', color: '#111827', margin: 0 }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0, flex: 1 }}>{item.desc}</p>
                {item.isInternal ? (
                  <Link
                    to={item.to}
                    style={{
                      display: 'inline-block',
                      backgroundColor: item.color,
                      color: 'white',
                      padding: '10px 24px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                      marginTop: '4px',
                    }}
                  >
                    {item.cta} →
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: item.color,
                      color: 'white',
                      padding: '10px 24px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                      marginTop: '4px',
                    }}
                  >
                    {item.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <About />
      <WhyExpose />
      <Poles />
      <Sponsors />
      <Newsletter />
      <Contact />
    </main>
  )
}
