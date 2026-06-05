import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import logoFenaci from '../../assets/Images/Image1.jpeg'

const navLinks = [
  { label: 'ACCUEIL',               to: '/' },
  { label: 'VILLAGE ANCESTRAL',     to: '/village-ancestral' },
  { label: 'VILLAGE MODERNE',       to: '/village-moderne' },
  { label: 'CHOIX DU CONSOMMATEUR', to: '/concours' },
  { label: 'B2B',                   to: '/b2b' },
  { label: 'ESPACE MÉDIA',          to: '/archives' },
  { label: 'NOUS CONTACTER',        to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className="navbar-header">

      {/* ══ LOGO ══ */}
      <div className="navbar-logo-zone">
        <NavLink to="/" className="navbar-logo-inner">
          <div className="navbar-logo-row">

            {/* Logo officiel FENACI — fond blanc, gris supprimé */}
            <div style={{
              width: '190px',
              height: '190px',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <img
                src={logoFenaci}
                alt="Logo FENACI"
                style={{
                  width: '175px',
                  height: '175px',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'brightness(1.08) contrast(1.05)',
                  display: 'block',
                }}
              />
            </div>

            {/* Année */}
            <div className="navbar-year-block">
              <div className="navbar-edition">1ère Édition</div>
              <div className="navbar-year">2026</div>
            </div>
          </div>

          <p className="navbar-subtitle">
            Festival National de l'Attiéké de Côte d'Ivoire
          </p>
        </NavLink>
      </div>

      {/* ══ BARRE DE NAVIGATION ══ */}
      <nav className="navbar-nav">

        {/* Desktop */}
        <div className="navbar-nav-desktop">
          <div className="navbar-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  'navbar-link' + (isActive && !link.to.includes('#') ? ' active' : '')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="navbar-flag">🇨🇮 FR ▾</div>
        </div>

        {/* Mobile */}
        <div className="navbar-nav-mobile">
          <div className="navbar-mobile-toggle">
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#555', textTransform: 'uppercase' }}>Menu</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
              aria-label="Menu"
            >
              <svg width="22" height="22" fill="none" stroke="#E8420A" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="navbar-mobile-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    'navbar-mobile-link' + (isActive && !link.to.includes('#') ? ' active' : '')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

      </nav>
    </header>
  )
}
