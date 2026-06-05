import { Link } from 'react-router-dom'

const poles = [
  { icon: '🏺', label: 'Village Ancestral' },
  { icon: '⚙️', label: 'Village Moderne' },
  { icon: '🗳️', label: 'Choix du Consommateur' },
  { icon: '🍽️', label: 'Gastronomie & Dégustation' },
  { icon: '🎵', label: 'Culture & Spectacles' },
  { icon: '📦', label: 'Emballage & Export' },
  { icon: '🌿', label: 'Agriculture & Filière' },
  { icon: '💡', label: 'Recherche & Innovation' },
  { icon: '🤝', label: 'Espace B2B' },
  { icon: '🎓', label: 'Formation & Transfert' },
]

export default function Poles() {
  return (
    <section id="poles" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '48px', height: '4px',
            backgroundColor: '#E8420A',
            borderRadius: '2px',
            margin: '0 auto 20px',
          }} />
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 900, color: '#111827',
            margin: '0 0 12px',
          }}>
            Les 10 Pôles du Festival
          </h2>
          <p style={{
            color: '#6b7280', fontSize: '16px',
            lineHeight: 1.6, margin: '0 auto',
            maxWidth: '520px', textAlign: 'center',
          }}>
            Le FENACI est organisé en 10 pôles thématiques couvrant toute la filière attiéké, de la tradition à l'exportation
          </p>
        </div>

        {/* Grille des pôles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
          marginBottom: '40px',
        }}>
          {poles.map((pole) => (
            <div
              key={pole.label}
              style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '28px 16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#E8420A'
                e.currentTarget.style.borderColor = '#E8420A'
                const p = e.currentTarget.querySelector('p')
                if (p) p.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#f9f9f9'
                e.currentTarget.style.borderColor = '#e5e7eb'
                const p = e.currentTarget.querySelector('p')
                if (p) p.style.color = '#374151'
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '12px', lineHeight: 1 }}>
                {pole.icon}
              </div>
              <p style={{
                fontSize: '13px', fontWeight: 600,
                color: '#374151', margin: 0,
                lineHeight: 1.4,
                transition: 'color 0.2s',
              }}>
                {pole.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Programme */}
        <div style={{
          backgroundColor: '#fff8f5',
          border: '1px solid #fde0d4',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: '1.4rem', fontWeight: 900,
            color: '#111827', margin: '0 0 10px',
          }}>
            Participez au Festival — 18 › 27 Septembre 2026
          </h3>
          <p style={{
            color: '#6b7280', fontSize: '15px',
            lineHeight: 1.6, margin: '0 auto 24px',
            maxWidth: '520px',
          }}>
            Que vous soyez transformatrice, industriel, restaurateur ou simple consommateur,
            le FENACI a un espace pour vous. Votez pour votre localité dès maintenant !
          </p>
          <Link
            to="/concours"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#E8420A',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            🗳️ Voter pour ma localité →
          </Link>
        </div>

      </div>
    </section>
  )
}
