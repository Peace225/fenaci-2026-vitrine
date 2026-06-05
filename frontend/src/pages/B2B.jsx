import { useState } from 'react'
import { TICKO_LINKS } from '../utils/externalLinks'

const services = [
  {
    icon: '🤝',
    title: 'Rendez-vous B2B',
    desc: 'Planifiez des rendez-vous individuels avec des acheteurs, distributeurs et investisseurs ciblés avant même le début du salon.',
    cta: 'Prendre rendez-vous',
  },
  {
    icon: '🏛️',
    title: 'Espace Networking',
    desc: 'Un espace dédié aux rencontres professionnelles avec salles de réunion, espaces lounge et services de traduction.',
    cta: 'Réserver un espace',
  },
  {
    icon: '📊',
    title: 'Matchmaking Intelligent',
    desc: "Notre plateforme analyse vos besoins et vous met en relation avec les profils les plus pertinents parmi les 1 000+ exposants.",
    cta: 'Accéder à la plateforme',
  },
  {
    icon: '🎯',
    title: 'Pitching Sessions',
    desc: "Présentez votre entreprise à un panel d'investisseurs lors de sessions de pitching de 10 minutes organisées chaque jour.",
    cta: "S'inscrire aux sessions",
  },
]

const stats = [
  { value: '500+', label: 'Rendez-vous planifiés par édition' },
  { value: '1 000+', label: 'Entreprises participantes' },
  { value: '40+', label: 'Pays représentés' },
  { value: '200M+', label: 'FCFA de deals facilités' },
]

const profils = [
  { icon: '🏢', label: 'PME africaines en croissance' },
  { icon: '🌍', label: 'Multinationales cherchant des partenaires locaux' },
  { icon: '💰', label: 'Fonds d\'investissement et family offices' },
  { icon: '🏦', label: 'Institutions financières et banques' },
  { icon: '🏛️', label: 'Délégations gouvernementales et ministères' },
  { icon: '🚀', label: 'Startups et entrepreneurs innovants' },
]

export default function B2B() {
  const [form, setForm] = useState({ nom: '', entreprise: '', email: '', telephone: '', secteur: '', besoin: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

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

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            Espace Professionnel
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            B2B <span style={{ color: 'rgba(255,255,255,0.75)' }}>FENACI 2026</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, marginBottom: '28px' }}>
            La plateforme de rencontres professionnelles qui connecte entreprises, investisseurs et décideurs africains. Planifiez vos rendez-vous stratégiques avant même l'ouverture du salon.
          </p>
          <a href={TICKO_LINKS.inscriptionExposant} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: 'white', color: '#E8420A', padding: '14px 36px', borderRadius: '999px', fontWeight: 900, fontSize: '16px', textDecoration: 'none' }}>
            Accéder à la plateforme B2B
          </a>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', backgroundColor: 'white', borderRadius: '14px', padding: '28px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
              <div style={{ color: '#E8420A', fontWeight: 900, fontSize: '2rem', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
              <div style={{ color: '#6b7280', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Nos services <span style={{ color: '#E8420A' }}>B2B</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
              Des outils et services dédiés pour maximiser vos opportunités de rencontres professionnelles au FENACI 2026.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {services.map((s) => (
              <div key={s.title} style={{ backgroundColor: '#f9f9f9', borderRadius: '16px', padding: '32px 24px', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '18px', color: '#111827', margin: '0 0 12px' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>{s.desc}</p>
                <a href={TICKO_LINKS.inscriptionExposant} target="_blank" rel="noopener noreferrer" style={{ color: '#E8420A', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                  {s.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profils participants ── */}
      <section style={{ backgroundColor: '#1a1a2e', padding: '80px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#ffffff', margin: '0 0 12px' }}>
            Qui participe au <span style={{ color: '#E8420A' }}>B2B FENACI ?</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.6, marginBottom: '48px' }}>
            Des acteurs économiques de premier plan venus de toute l'Afrique et du monde.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {profils.map((p) => (
              <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 20px' }}>
                <span style={{ fontSize: '28px', flexShrink: 0 }}>{p.icon}</span>
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 600, textAlign: 'left', lineHeight: 1.4 }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inscription B2B ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              S'inscrire au <span style={{ color: '#E8420A' }}>programme B2B</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
              Remplissez ce formulaire pour intégrer la plateforme B2B du FENACI 2026 et commencer à planifier vos rendez-vous.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '48px 24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontWeight: 900, fontSize: '20px', color: '#111827', marginBottom: '8px' }}>Demande enregistrée !</h3>
              <p style={{ color: '#6b7280' }}>Notre équipe B2B vous contactera sous 48h pour finaliser votre inscription.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Nom complet *</label>
                  <input name="nom" type="text" required placeholder="Jean Dupont" value={form.nom} onChange={handleChange} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Entreprise *</label>
                  <input name="entreprise" type="text" required placeholder="Votre entreprise" value={form.entreprise} onChange={handleChange} style={fieldStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" required placeholder="votre@email.com" value={form.email} onChange={handleChange} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input name="telephone" type="tel" placeholder="+225 XX XX XX XX" value={form.telephone} onChange={handleChange} style={fieldStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Secteur d'activité *</label>
                <select name="secteur" required value={form.secteur} onChange={handleChange} style={fieldStyle}>
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="agro">Agriculture & Agroalimentaire</option>
                  <option value="industrie">Industrie & Manufacturing</option>
                  <option value="tech">Technologies & Innovation</option>
                  <option value="finance">Finance & Investissement</option>
                  <option value="energie">Énergie & Environnement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Votre besoin principal *</label>
                <textarea name="besoin" required rows={4} placeholder="Décrivez le type de partenaires que vous recherchez..." value={form.besoin} onChange={handleChange} style={{ ...fieldStyle, resize: 'none' }} />
              </div>
              <button type="submit" style={{ backgroundColor: '#E8420A', color: 'white', padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', width: '100%' }}>
                Soumettre ma demande B2B
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
