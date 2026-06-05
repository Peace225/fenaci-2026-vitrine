import { Link } from 'react-router-dom'
import { SOCIAL_LINKS, PARTNER_LINKS } from '../../utils/externalLinks'

const navigation = [
  { label: 'Accueil',               to: '/' },
  { label: 'Village Ancestral',     to: '/village-ancestral' },
  { label: 'Village Moderne',       to: '/village-moderne' },
  { label: 'Choix du Consommateur', to: '/concours' },
  { label: 'B2B',                   to: '/b2b' },
  { label: 'Espace Média',          to: '/archives' },
  { label: 'Nous Contacter',        to: '/contact' },
  { label: 'FAQ',                   to: '/faq' },
]

const partenaires = [
  { label: 'Ministère de la Culture CI',  href: 'https://www.culture.gouv.ci' },
  { label: 'Ministère du Commerce CI',    href: PARTNER_LINKS.ministreCommerce },
  { label: "Chambre de Commerce CI",      href: PARTNER_LINKS.chambreCommerce },
  { label: 'Union Africaine',             href: PARTNER_LINKS.unionAfricaine },
]

const socials = [
  { name: 'Facebook',  href: SOCIAL_LINKS.facebook,  letter: 'f',  bg: '#1877f2' },
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, letter: 'ig', bg: '#e1306c' },
  { name: 'YouTube',   href: SOCIAL_LINKS.youtube,   letter: 'yt', bg: '#ff0000' },
  { name: 'Twitter/X', href: SOCIAL_LINKS.twitter,   letter: 'X',  bg: '#111827' },
]

const linkStyle = {
  color: '#9ca3af',
  fontSize: '14px',
  textDecoration: 'none',
  lineHeight: 2,
  display: 'block',
}

const headingStyle = {
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '20px',
  marginTop: 0,
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>

      {/* Bande WhatsApp support */}
      <div style={{ backgroundColor: '#25D366', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>
          💬 Besoin d'aide ? Contactez notre support technique
        </span>
        <a
          href="https://wa.me/2250700000000?text=Bonjour, j'ai besoin d'aide pour le FENACI 2026"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'white',
            color: '#25D366',
            fontWeight: 800,
            fontSize: '13px',
            padding: '7px 20px',
            borderRadius: '999px',
            textDecoration: 'none',
          }}
        >
          Écrire sur WhatsApp
        </a>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 32px' }}>

        {/* Grid 4 colonnes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Colonne 1 — Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <div style={{ color: '#E8420A', fontWeight: 900, fontSize: '28px', lineHeight: 1 }}>FENACI</div>
              <div style={{ color: '#E8420A', fontWeight: 700, fontSize: '13px' }}>2026</div>
              <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '4px', lineHeight: 1.4 }}>
                Festival National de l'Attiéké<br />de Côte d'Ivoire
              </div>
            </Link>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>
              Le rendez-vous culturel et économique de l'attiéké. Du 18 au 27 septembre 2026 en Côte d'Ivoire.
            </p>
            {/* Réseaux sociaux */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    width: '36px', height: '36px',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ffffff', fontSize: '11px', fontWeight: 700, textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = s.bg}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 style={headingStyle}>Navigation</h3>
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Colonne 3 — Partenaires */}
          <div>
            <h3 style={headingStyle}>Partenaires Officiels</h3>
            {partenaires.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Colonne 4 — Contact rapide */}
          <div>
            <h3 style={headingStyle}>Contact Rapide</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:contact@fenaci.ci" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                ✉️ contact@fenaci.ci
              </a>
              <a href="mailto:exposants@fenaci.ci" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                🏢 exposants@fenaci.ci
              </a>
              <a href="mailto:presse@fenaci.ci" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                📰 presse@fenaci.ci
              </a>
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#25D366', color: 'white',
                  padding: '8px 16px', borderRadius: '8px',
                  fontWeight: 700, fontSize: '13px', textDecoration: 'none',
                  marginTop: '4px', width: 'fit-content',
                }}
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
            © {new Date().getFullYear()} FENACI — Festival National de l'Attiéké de Côte d'Ivoire. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Mentions légales',  to: '/mentions-legales' },
              { label: 'Confidentialité',   to: '/confidentialite' },
              { label: 'CGU',               to: '/cgu' },
              { label: 'FAQ',               to: '/faq' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ color: '#6b7280', fontSize: '13px', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8420A'}
                onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
