import { Link } from 'react-router-dom'

const highlights = [
  {
    icon: '🌾',
    title: 'Tradition Préservée',
    desc: "Le Village Ancestral met à l'honneur les savoir-faire traditionnels des transformatrices de chaque localité, gardienne de l'authenticité.",
  },
  {
    icon: '⚙️',
    title: 'Innovation & Modernité',
    desc: "Le Village Moderne réunit les industriels et technologues qui transforment la filière attiéké avec des équipements de dernière génération.",
  },
  {
    icon: '🗳️',
    title: '500 000 Voix Citoyennes',
    desc: "Le Choix du Consommateur mobilise les Ivoiriens pour voter pour leur localité favorite et désigner la meilleure production d'attiéké du pays.",
  },
]

export default function About() {
  return (
    <section id="apropos" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}>
          {/* Left – texte */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#fff4f1',
              color: '#E8420A',
              fontSize: '13px',
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: '999px',
              marginBottom: '20px',
            }}>
              À propos du FENACI
            </div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: '#111827',
              lineHeight: 1.2,
              margin: '0 0 24px',
            }}>
              Tradition et Modernité :{' '}
              <span style={{ color: '#E8420A' }}>l'attiéké en fête</span>
            </h2>

            <p style={{ color: '#4b5563', fontSize: '17px', lineHeight: 1.7, marginBottom: '16px' }}>
              Le <strong>Festival National de l'Attiéké de Côte d'Ivoire (FENACI)</strong> est le grand
              événement culturel et économique dédié au plat national ivoirien. Première édition les{' '}
              <strong>18 › 27 Septembre 2026</strong>.
            </p>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
              Autour du concept <em>"Tradition et Modernité"</em>, le FENACI réunit les <strong>25 localités</strong>{' '}
              de Côte d'Ivoire en compétition, les artisans transformateurs, les industriels de la filière
              et les consommateurs pour célébrer, valoriser et promouvoir l'attiéké à l'échelle nationale et internationale.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                to="/concours"
                style={{
                  backgroundColor: '#E8420A',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                🗳️ Voter pour ma localité
              </Link>
              <Link
                to="/contact"
                style={{
                  border: '2px solid #e5e7eb',
                  color: '#374151',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8420A'; e.currentTarget.style.color = '#E8420A' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151' }}
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Right – cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {highlights.map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #f0f0f0',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontSize: '28px', flexShrink: 0, lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '16px', margin: '0 0 6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Bilan Box */}
            <div style={{
              backgroundColor: '#E8420A',
              borderRadius: '12px',
              padding: '20px 24px',
              color: '#ffffff',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span style={{ fontSize: '22px' }}>📅</span>
                <span style={{ fontWeight: 700, fontSize: '17px' }}>1ère Édition — Septembre 2026</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                25 localités ivoiriennes en compétition pour le titre de la meilleure production d'attiéké,
                élue par 500 000 consommateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
