const infos = [
  {
    icon: '📍',
    title: 'Siège & Bureau commercial',
    lines: ['Abidjan, Plateau', "Côte d'Ivoire"],
  },
  {
    icon: '📞',
    title: 'Téléphone',
    lines: ['+225 XX XX XX XX XX', '+225 XX XX XX XX XX'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['contact@fenaci.ci', 'info@fenaci.ci'],
  },
  {
    icon: '⏰',
    title: 'Horaires',
    lines: ['Lundi – Vendredi', '08h00 – 17h00'],
  },
]

const fieldStyle = {
  width: '100%',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '12px 16px',
  fontSize: '14px',
  color: '#374151',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '6px',
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            width: '48px',
            height: '4px',
            backgroundColor: '#E8420A',
            borderRadius: '2px',
            margin: '0 auto 20px',
          }} />
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 900,
            color: '#111827',
            margin: '0 0 12px',
          }}>
            Nous Contacter
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
            Une question sur le FENACI 2026 ? Notre équipe est disponible pour vous accompagner dans votre démarche.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Infos de contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {infos.map((info) => (
              <div
                key={info.title}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #f0f0f0',
                }}
              >
                <div style={{ fontSize: '24px', flexShrink: 0, lineHeight: 1 }}>{info.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '15px', margin: '0 0 4px' }}>
                    {info.title}
                  </h3>
                  {info.lines.map((line) => (
                    <p key={line} style={{ color: '#6b7280', fontSize: '14px', margin: '2px 0 0' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Réseaux sociaux */}
            <div style={{
              padding: '16px 20px',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #f0f0f0',
            }}>
              <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '15px', margin: '0 0 14px' }}>
                Suivez-nous
              </h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { name: 'Facebook', label: 'f', bg: '#1877f2', href: '#' },
                  { name: 'Instagram', label: '📷', bg: '#e1306c', href: '#' },
                  { name: 'LinkedIn', label: 'in', bg: '#0a66c2', href: '#' },
                  { name: 'YouTube', label: '▶', bg: '#ff0000', href: '#' },
                  { name: 'Twitter/X', label: 'X', bg: '#111827', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    style={{
                      backgroundColor: social.bg,
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Nom complet *</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  required
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Entreprise</label>
                <input
                  type="text"
                  placeholder="Nom de votre entreprise"
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                placeholder="votre@email.com"
                required
                style={fieldStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Sujet *</label>
              <select required style={fieldStyle}>
                <option value="">Sélectionnez un sujet</option>
                <option value="exposer">Devenir exposant</option>
                <option value="sponsor">Sponsoring & Partenariat</option>
                <option value="info">Informations générales</option>
                <option value="presse">Accréditation presse</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                rows={5}
                placeholder="Votre message..."
                required
                style={{ ...fieldStyle, resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#E8420A',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
