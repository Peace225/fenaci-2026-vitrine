import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DOC_LINKS, TICKO_LINKS } from '../../utils/externalLinks'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({})
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 }
      return {
        jours:    Math.floor(diff / 86400000),
        heures:   Math.floor((diff / 3600000) % 24),
        minutes:  Math.floor((diff / 60000) % 60),
        secondes: Math.floor((diff / 1000) % 60),
      }
    }
    setTimeLeft(calc())
    const id = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])
  return timeLeft
}

export default function Hero() {
  const timeLeft = useCountdown('2026-09-18T08:00:00')

  const quickLinks = [
    { label: 'VOTER POUR MA LOCALITÉ',   href: TICKO_LINKS.concours,           isInternal: false, highlight: true },
    { label: 'BILLETTERIE',              href: TICKO_LINKS.billetterie,         isInternal: false, highlight: true },
    { label: 'PROGRAMME FENACI 2026',    to: '/archives',                       isInternal: true },
    { label: 'PLAQUETTE FENACI 2026',    to: '/village-ancestral',              isInternal: true },
    { label: 'SPONSORING & PARTENARIAT', href: TICKO_LINKS.sponsoring,          isInternal: false },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '420px', gap: '12px', padding: '12px', backgroundColor: 'white' }}>

      {/* ══════════════════════════════════════
          SIDEBAR GAUCHE
          ══════════════════════════════════════ */}
      <aside style={{
        width: '280px',
        flexShrink: 0,
        backgroundColor: '#E8420A',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Titre */}
        <div style={{
          backgroundColor: '#c93600',
          padding: '18px 16px',
          textAlign: 'center',
        }}>
          <span style={{
            color: 'white',
            fontWeight: 900,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontFamily: 'Inter, Arial Black, sans-serif',
          }}>
            Informations Utiles
          </span>
        </div>

        {/* Liens */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {quickLinks.map((link) =>
            link.isInternal ? (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  display: 'block',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textAlign: 'center',
                  padding: '16px 12px',
                  border: link.highlight ? '2px solid white' : '2px solid rgba(255,255,255,0.65)',
                  backgroundColor: link.highlight ? 'rgba(255,255,255,0.15)' : 'transparent',
                  textDecoration: 'none',
                  fontFamily: 'Inter, Arial Black, sans-serif',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = link.highlight ? 'rgba(255,255,255,0.15)' : 'transparent'}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textAlign: 'center',
                  padding: '16px 12px',
                  border: '2px solid rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, Arial Black, sans-serif',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.12)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </aside>

      {/* ══════════════════════════════════════
          HERO ORANGE
          ══════════════════════════════════════ */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #d43d08 0%, #E8420A 40%, #E8420A 60%, #c93600 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>

        {/* Cercles africains en fond */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}
          viewBox="0 0 900 450"
          preserveAspectRatio="xMaxYMid slice"
        >
          {[70,145,220,295,370,445,520,595,670].map((r, i) => (
            <circle key={i} cx="820" cy="225" r={r} stroke="white" strokeWidth="1.5" fill="none" />
          ))}
          {[50,110,170,230].map((r, i) => (
            <circle key={i+10} cx="80" cy="430" r={r} stroke="white" strokeWidth="1" fill="none" />
          ))}
        </svg>

        {/* Contenu */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', alignItems: 'center',
          width: '100%', padding: '44px 56px', gap: '56px',
        }}>

          {/* Logo FENACI */}
          <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '220px' }}>
            <div style={{
              color: 'white', fontWeight: 900,
              fontSize: 'clamp(62px, 8vw, 96px)',
              lineHeight: 1, letterSpacing: '-3px',
              fontFamily: 'Inter, Arial Black, sans-serif',
            }}>
              FENACI
            </div>
            <div style={{
              color: 'white', fontWeight: 900,
              fontSize: '2.2rem', letterSpacing: '0.2em',
              lineHeight: 1, marginTop: '8px',
              fontFamily: 'Inter, Arial Black, sans-serif',
            }}>
              2026
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '10px', textTransform: 'uppercase',
              letterSpacing: '0.1em', marginTop: '12px',
              lineHeight: 1.7,
            }}>
              Festival National de l'Attiéké<br />de Côte d'Ivoire
            </div>
          </div>

          {/* Séparateur vertical */}
          <div style={{
            width: '1px', alignSelf: 'stretch',
            backgroundColor: 'rgba(255,255,255,0.3)',
            flexShrink: 0,
          }} />

          {/* Thème + dates + countdown */}
          <div style={{ flex: 1 }}>

            {/* Badge THÈME */}
            <span style={{
              display: 'inline-block',
              backgroundColor: 'white', color: '#E8420A',
              fontSize: '10px', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '4px 12px', borderRadius: '3px',
              marginBottom: '16px',
            }}>
              THÈME
            </span>

            <h1 style={{
              color: 'white', fontWeight: 900,
              textTransform: 'uppercase', lineHeight: 1.35,
              fontSize: 'clamp(15px, 2vw, 21px)',
              marginBottom: '28px', marginTop: 0,
              fontFamily: 'Inter, Arial Black, sans-serif',
            }}>
              Tradition et Modernité :<br />
              L'attiéké, trésor de la Côte d'Ivoire
            </h1>

            {/* Dates */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: 'white', fontSize: '11px', fontWeight: 700,
                padding: '7px 16px', borderRadius: '3px',
              }}>
                18 › 27 Septembre 2026
              </span>
              <span style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: 'white', fontSize: '11px', fontWeight: 700,
                padding: '7px 16px', borderRadius: '3px',
              }}>
                📍 Côte d'Ivoire
              </span>
            </div>

            {/* Compte à rebours */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[
                { val: timeLeft.jours,    label: 'Jours' },
                { val: timeLeft.heures,   label: 'Heures' },
                { val: timeLeft.minutes,  label: 'Min' },
                { val: timeLeft.secondes, label: 'Sec' },
              ].map(({ val, label }, i, arr) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    borderRadius: '4px', textAlign: 'center',
                    minWidth: '64px', padding: '8px 10px',
                  }}>
                    <div style={{ color: 'white', fontWeight: 900, fontSize: '28px', lineHeight: 1 }}>
                      {String(val ?? 0).padStart(2, '0')}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>
                      {label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 900, fontSize: '20px' }}>:</span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
