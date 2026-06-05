import { useState } from 'react'

export default function Newsletter() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.4)',
    borderRadius: '10px',
    padding: '12px 18px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <section
      id="newsletter"
      style={{ backgroundColor: '#E8420A', padding: '80px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decor */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '300px', height: '300px',
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '300px', height: '300px',
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>📧</div>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          fontWeight: 900,
          color: '#ffffff',
          margin: '0 0 12px',
        }}>
          Restez informé
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', lineHeight: 1.65, marginBottom: '36px' }}>
          Abonnez-vous à notre newsletter pour recevoir toutes les informations sur le FENACI 2026 :
          programme, exposants, inscriptions et actualités.
        </p>

        {submitted ? (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '14px',
            padding: '36px 24px',
            color: '#ffffff',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px' }}>Inscription confirmée !</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              Merci ! Vous recevrez bientôt nos actualités FENACI 2026.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Votre nom complet"
                required
                style={inputStyle}
              />
              <input
                type="tel"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                placeholder="Votre téléphone"
                style={inputStyle}
              />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre adresse email"
              required
              style={inputStyle}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#E8420A',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '4px',
              }}
            >
              S'abonner à la newsletter
            </button>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: 0 }}>
              Vos données sont protégées. Vous pouvez vous désabonner à tout moment.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
