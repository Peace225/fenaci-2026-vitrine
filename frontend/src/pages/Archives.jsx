import PhotoGallery from '../components/media/PhotoGallery'
import { VideoGrid } from '../components/media/VideoPlayer'

const editions = [
  {
    year: '2024',
    theme: "L'Afrique, Terre d'Opportunités",
    lieu: "Abidjan, Côte d'Ivoire",
    visiteurs: '320 000',
    exposants: '780',
    pays: '35',
    highlight: 'Lancement officiel du programme de souveraineté alimentaire FENACI',
  },
  {
    year: '2022',
    theme: "Investir en Afrique pour l'Afrique",
    lieu: "Abidjan, Côte d'Ivoire",
    visiteurs: '210 000',
    exposants: '540',
    pays: '28',
    highlight: 'Signature de 47 accords de partenariat international',
  },
  {
    year: '2020',
    theme: 'La Jeunesse, Moteur de la Croissance',
    lieu: "Abidjan, Côte d'Ivoire",
    visiteurs: '150 000',
    exposants: '380',
    pays: '22',
    highlight: 'Premier hackathon FENACI — 200 startups africaines en compétition',
  },
]

const archivePhotos = []
const archiveVideos = []

export default function Archives() {
  return (
    <main>

      {/* ── Hero — fond orange comme le reste du site ── */}
      <section style={{
        backgroundColor: '#E8420A',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Cercles décoratifs */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }}
          viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => (
            <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />
          ))}
        </svg>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            color: 'white',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '6px 18px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}>
            Rétrospective
          </span>
          <h1 style={{
            color: 'white',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            Archives <span style={{ color: 'rgba(255,255,255,0.7)' }}>FENACI</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '17px',
            lineHeight: 1.65,
            margin: 0,
          }}>
            Revivez les moments forts des éditions passées : chiffres clés, photos et vidéos des éditions qui ont marqué l'histoire du salon.
          </p>
        </div>
      </section>

      {/* ── Timeline des éditions ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Nos <span style={{ color: '#E8420A' }}>éditions</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
              Chaque édition a marqué une étape dans la construction du FENACI comme événement de référence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {editions.map((edition, i) => (
              <div key={edition.year} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative' }}>

                {/* Ligne verticale */}
                {i < editions.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '31px',
                    top: '64px',
                    bottom: '-32px',
                    width: '2px',
                    backgroundColor: '#e5e7eb',
                  }} />
                )}

                {/* Badge année */}
                <div style={{
                  flexShrink: 0,
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  backgroundColor: '#E8420A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(232,66,10,0.3)',
                }}>
                  <span style={{ color: 'white', fontWeight: 900, fontSize: '15px' }}>{edition.year}</span>
                </div>

                {/* Contenu */}
                <div style={{
                  flex: 1,
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #f0f0f0',
                  borderRadius: '14px',
                  padding: '24px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontWeight: 900, fontSize: '18px', color: '#111827', margin: '0 0 4px' }}>
                        FENACI {edition.year}
                      </h3>
                      <p style={{ color: '#E8420A', fontWeight: 600, fontSize: '13px', fontStyle: 'italic', margin: 0 }}>
                        "{edition.theme}"
                      </p>
                    </div>
                    <span style={{
                      backgroundColor: '#f0f0f0',
                      color: '#666',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '999px',
                    }}>
                      📍 {edition.lieu}
                    </span>
                  </div>

                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                    {[
                      { label: 'Visiteurs', value: edition.visiteurs, icon: '👥' },
                      { label: 'Exposants', value: edition.exposants, icon: '🏢' },
                      { label: 'Pays', value: edition.pays, icon: '🌍' },
                    ].map((stat) => (
                      <div key={stat.label} style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        padding: '12px 8px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      }}>
                        <div style={{ fontSize: '18px', marginBottom: '4px' }}>{stat.icon}</div>
                        <div style={{ fontWeight: 900, fontSize: '18px', color: '#111827', lineHeight: 1 }}>{stat.value}</div>
                        <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    backgroundColor: '#fff4f1',
                    border: '1px solid #fde0d4',
                    borderRadius: '8px',
                    padding: '10px 14px',
                  }}>
                    <span style={{ flexShrink: 0 }}>✨</span>
                    <p style={{ color: '#c53a0a', fontSize: '13px', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                      {edition.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerie Photos ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Galerie <span style={{ color: '#E8420A' }}>photos</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Les moments forts capturés lors des précédentes éditions.
            </p>
          </div>
          <PhotoGallery photos={archivePhotos} columns={3} />
        </div>
      </section>

      {/* ── Vidéos ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Vidéos & <span style={{ color: '#E8420A' }}>reportages</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Teasers, résumés et reportages des éditions FENACI.
            </p>
          </div>
          <VideoGrid videos={archiveVideos} />
        </div>
      </section>

    </main>
  )
}
