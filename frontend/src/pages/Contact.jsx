import { useState } from 'react'
import { SOCIAL_LINKS } from '../utils/externalLinks'

const infos = [
  { icon: '📍', title: 'Siège & Bureau commercial', lines: ['Plateau, Abidjan', "Côte d'Ivoire"] },
  { icon: '📞', title: 'Téléphone', lines: ['+225 XX XX XX XX XX', '+225 XX XX XX XX XX'] },
  { icon: '✉️', title: 'Email', lines: ['contact@fenaci.ci', 'info@fenaci.ci'] },
  { icon: '⏰', title: 'Horaires', lines: ['Lundi – Vendredi', '08h00 – 17h00 GMT'] },
]

const departments = [
  { icon: '🏢', title: 'Exposants', email: 'exposants@fenaci.ci', desc: 'Pour toute demande de participation comme exposant ou stand.' },
  { icon: '💼', title: 'Sponsoring', email: 'sponsors@fenaci.ci', desc: 'Pour les partenariats commerciaux et opportunités de sponsoring.' },
  { icon: '📰', title: 'Presse & Média', email: 'presse@fenaci.ci', desc: 'Accréditations presse, interviews et demandes médias.' },
  { icon: '🤝', title: 'B2B & Networking', email: 'b2b@fenaci.ci', desc: 'Inscription au programme de rencontres professionnelles.' },
]

const socials = [
  { name: 'Facebook', letter: 'f', bg: '#1877f2', href: SOCIAL_LINKS.facebook },
  { name: 'Instagram', letter: 'ig', bg: '#e1306c', href: SOCIAL_LINKS.instagram },
  { name: 'LinkedIn', letter: 'in', bg: '#0a66c2', href: SOCIAL_LINKS.linkedin },
  { name: 'YouTube', letter: 'yt', bg: '#ff0000', href: SOCIAL_LINKS.youtube },
  { name: 'Twitter/X', letter: 'X', bg: '#111827', href: SOCIAL_LINKS.twitter },
]

const fieldStyle = {
  width: '100%',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '12px 16px',
  fontSize: '14px',
  color: '#374151',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, sans-serif',
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '6px',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Nous <span style={{ color: 'rgba(255,255,255,0.75)' }}>Contacter</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, margin: 0 }}>
            Notre équipe est disponible pour répondre à toutes vos questions sur le FENACI 2026.
          </p>
        </div>
      </section>

      {/* ── Départements ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', margin: '0 0 8px' }}>Contactez le bon département</h2>
            <p style={{ color: '#6b7280', fontSize: '15px' }}>Chaque demande est traitée par l'équipe spécialisée.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {departments.map((d) => (
              <div key={d.title} style={{ backgroundColor: 'white', borderRadius: '14px', padding: '24px', border: '1px solid #f0f0f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{d.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '16px', color: '#111827', margin: '0 0 8px' }}>{d.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px' }}>{d.desc}</p>
                <a href={`mailto:${d.email}`} style={{ color: '#E8420A', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>{d.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infos + Formulaire ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'start' }}>

          {/* Infos */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', margin: '0 0 24px' }}>Informations de contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {infos.map((info) => (
                <div key={info.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', borderRadius: '12px', backgroundColor: '#f9f9f9', border: '1px solid #f0f0f0' }}>
                  <span style={{ fontSize: '22px', flexShrink: 0, lineHeight: 1 }}>{info.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '14px', color: '#111827', margin: '0 0 4px' }}>{info.title}</h3>
                    {info.lines.map((l) => <p key={l} style={{ color: '#6b7280', fontSize: '13px', margin: '2px 0 0' }}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux */}
            <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#111827', margin: '0 0 14px' }}>Suivez-nous</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  style={{ width: '40px', height: '40px', backgroundColor: s.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          {submitted ? (
            <div style={{ textAlign: 'center', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '48px 24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontWeight: 900, fontSize: '20px', color: '#111827', marginBottom: '8px' }}>Message envoyé !</h3>
              <p style={{ color: '#6b7280' }}>Nous vous répondrons dans les 24h ouvrables.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Nom complet *</label>
                  <input type="text" required placeholder="Jean Dupont" style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Entreprise</label>
                  <input type="text" placeholder="Votre entreprise" style={fieldStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" required placeholder="votre@email.com" style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" placeholder="+225 XX XX XX XX" style={fieldStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Sujet *</label>
                <select required style={fieldStyle}>
                  <option value="">Sélectionnez un sujet</option>
                  <option>Devenir exposant</option>
                  <option>Sponsoring & Partenariat</option>
                  <option>Programme B2B</option>
                  <option>Informations générales</option>
                  <option>Accréditation presse</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea required rows={5} placeholder="Votre message..." style={{ ...fieldStyle, resize: 'none' }} />
              </div>
              <button type="submit" style={{ backgroundColor: '#E8420A', color: 'white', padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', width: '100%' }}>
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Carte / Localisation ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, fontSize: '1.5rem', color: '#111827', margin: '0 0 8px' }}>Parc des Expositions d'Abidjan</h2>
          <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '28px' }}>Le FENACI 2026 se tient au Parc des Expositions d'Abidjan, le plus grand centre d'expositions d'Afrique de l'Ouest.</p>
          <div style={{ backgroundColor: '#e5e7eb', borderRadius: '16px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: '#9ca3af' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🗺️</div>
              <p style={{ fontWeight: 600, fontSize: '15px', margin: '0 0 8px' }}>Parc des Expositions d'Abidjan</p>
              <p style={{ fontSize: '13px', margin: 0 }}>Carte interactive disponible prochainement</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
