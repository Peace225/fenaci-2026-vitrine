const reasons = [
  {
    number: '01',
    icon: '📡',
    title: 'Visibilité maximale',
    points: [
      'Plus de 500 000 visiteurs attendus',
      "20 hectares de surface d'exposition",
      'Plus de 40 pays représentés',
      'Couverture médiatique internationale',
    ],
  },
  {
    number: '02',
    icon: '🔗',
    title: 'Contacts & Partenariats',
    points: [
      '+1 000 exposants professionnels',
      'Espace B2B dédié aux rencontres',
      'Forums et conférences de haut niveau',
      'Mise en relation avec des investisseurs',
    ],
  },
  {
    number: '03',
    icon: '💰',
    title: 'Opportunités commerciales',
    points: [
      "Présence d'acheteurs nationaux & internationaux",
      "10 jours d'exposition continue",
      "Garantie de chiffre d'affaires",
      'Accès aux marchés africains',
    ],
  },
]

export default function WhyExpose() {
  return (
    <section id="exposer" style={{ backgroundColor: '#1a1a2e', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(232,66,10,0.2)',
            border: '1px solid rgba(232,66,10,0.4)',
            color: '#fb8c6a',
            fontSize: '13px',
            fontWeight: 700,
            padding: '6px 18px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}>
            Pourquoi exposer ?
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#ffffff',
            margin: '0 0 14px',
            lineHeight: 1.2,
          }}>
            3 bonnes raisons d'exposer{' '}
            <span style={{ color: '#E8420A' }}>au FENACI</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '500px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
            Rejoignez les entreprises et nations qui font de FENACI leur vitrine sur le continent africain
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {reasons.map((reason) => (
            <div
              key={reason.number}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <span style={{ fontSize: '36px', lineHeight: 1, flexShrink: 0 }}>{reason.icon}</span>
                <div>
                  <div style={{ color: '#E8420A', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                    Raison {reason.number}
                  </div>
                  <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '18px', margin: 0 }}>{reason.title}</h3>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {reason.points.map((point) => (
                  <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>
                    <svg style={{ width: '16px', height: '16px', color: '#E8420A', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#E8420A',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Demander une participation
          </a>
        </div>
      </div>
    </section>
  )
}
