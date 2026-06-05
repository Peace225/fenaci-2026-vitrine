import { TICKO_LINKS } from '../utils/externalLinks'

const OBJECTIF = 500000

const localites = [
  { nom: 'Abidjan',         voix: 28543, img: '🌆' },
  { nom: 'Yamoussoukro',    voix: 19872, img: '🏛️' },
  { nom: 'Bouaké',          voix: 15234, img: '🏙️' },
  { nom: 'Daloa',           voix: 12876, img: '🌿' },
  { nom: 'San Pedro',       voix: 9543,  img: '⚓' },
  { nom: 'Korhogo',         voix: 8765,  img: '🎭' },
  { nom: 'Abengourou',      voix: 7654,  img: '🌳' },
  { nom: 'Man',             voix: 6543,  img: '⛰️' },
  { nom: 'Divo',            voix: 5432,  img: '🌾' },
  { nom: 'Gagnoa',          voix: 4876,  img: '🌱' },
  { nom: 'Soubré',          voix: 3987,  img: '🌴' },
  { nom: 'Bondoukou',       voix: 3456,  img: '🏺' },
  { nom: 'Odienné',         voix: 2987,  img: '🎵' },
  { nom: 'Séguéla',         voix: 2654,  img: '🌅' },
  { nom: 'Ferkessédougou',  voix: 2345,  img: '🐘' },
  { nom: 'Dimbokro',        voix: 1987,  img: '🌺' },
  { nom: 'Katiola',         voix: 1765,  img: '🎨' },
  { nom: 'Bongouanou',      voix: 1543,  img: '🍃' },
  { nom: 'Tiassalé',        voix: 1234,  img: '🌊' },
  { nom: 'Agboville',       voix: 1098,  img: '🦋' },
  { nom: 'Grand-Bassam',    voix: 987,   img: '🏖️' },
  { nom: 'Sassandra',       voix: 876,   img: '🐠' },
  { nom: 'Guiglo',          voix: 765,   img: '🌿' },
  { nom: 'Touba',           voix: 654,   img: '🎺' },
  { nom: 'Tabou',           voix: 543,   img: '⛵' },
]

const totalVoix = localites.reduce((acc, l) => acc + l.voix, 0)
const maxVoix = Math.max(...localites.map(l => l.voix))

export default function Concours() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            🗳️ Vote citoyen FENACI 2026
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Choix du <span style={{ color: 'rgba(255,255,255,0.8)' }}>Consommateur</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, marginBottom: '12px' }}>
            Soutenez la localité de votre choix ! L'objectif est d'atteindre <strong style={{ color: 'white' }}>500 000 voix</strong> pour élire
            la meilleure production d'attiéké de Côte d'Ivoire.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '28px' }}>
            25 localités en compétition · 1 vote par numéro de téléphone · via TickoFiesta
          </p>
          <a
            href={TICKO_LINKS.vote}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: 'white', color: '#E8420A', padding: '14px 36px', borderRadius: '999px', fontWeight: 900, fontSize: '16px', textDecoration: 'none' }}
          >
            🗳️ Voter sur TickoFiesta
          </a>
        </div>
      </section>

      {/* ── Compteur global ── */}
      <section style={{ backgroundColor: '#111827', padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            Total des voix enregistrées
          </p>
          <div style={{ color: '#E8420A', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1, marginBottom: '8px' }}>
            {totalVoix.toLocaleString('fr-FR')}
          </div>
          <div style={{ color: '#6b7280', fontSize: '16px', marginBottom: '28px' }}>
            sur <strong style={{ color: 'white' }}>{OBJECTIF.toLocaleString('fr-FR')}</strong> voix objectif
          </div>
          {/* Barre de progression */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', height: '16px', overflow: 'hidden', marginBottom: '12px' }}>
            <div style={{ height: '100%', width: `${Math.min((totalVoix / OBJECTIF) * 100, 100).toFixed(1)}%`, backgroundColor: '#E8420A', borderRadius: '999px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '13px', marginBottom: '32px' }}>
            <span>0</span>
            <span style={{ color: '#E8420A', fontWeight: 700 }}>{((totalVoix / OBJECTIF) * 100).toFixed(1)}% atteint</span>
            <span>{OBJECTIF.toLocaleString('fr-FR')}</span>
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Localités en lice', value: '25', icon: '📍' },
              { label: 'Leader actuel', value: 'Abidjan', icon: '🏆' },
              { label: 'Votes restants', value: (OBJECTIF - totalVoix).toLocaleString('fr-FR'), icon: '🎯' },
            ].map(stat => (
              <div key={stat.label} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', minWidth: '160px' }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{stat.icon}</div>
                <div style={{ color: 'white', fontWeight: 900, fontSize: '20px', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: '#9ca3af', fontSize: '12px', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille des 25 localités ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Les <span style={{ color: '#E8420A' }}>25 Localités</span> en compétition
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Cliquez sur "Voter" pour soutenir votre localité — vous serez redirigé sur TickoFiesta.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {localites.map((loc, idx) => {
              const pct = ((loc.voix / maxVoix) * 100).toFixed(0)
              return (
                <div key={loc.nom} style={{
                  backgroundColor: '#ffffff',
                  border: idx === 0 ? '2px solid #E8420A' : '1px solid #e5e7eb',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                  boxShadow: idx === 0 ? '0 4px 16px rgba(232,66,10,0.15)' : '0 2px 6px rgba(0,0,0,0.05)',
                  position: 'relative',
                }}>
                  {idx === 0 && (
                    <span style={{ position: 'absolute', top: '-10px', right: '12px', backgroundColor: '#E8420A', color: 'white', fontSize: '10px', fontWeight: 900, padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase' }}>
                      🏆 Leader
                    </span>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '28px', flexShrink: 0 }}>{loc.img}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '15px', color: '#111827' }}>{loc.nom}</div>
                      <div style={{ color: '#E8420A', fontWeight: 700, fontSize: '13px' }}>
                        {loc.voix.toLocaleString('fr-FR')} voix
                      </div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: '#9ca3af', fontSize: '12px', fontWeight: 700 }}>#{idx + 1}</div>
                  </div>
                  {/* Barre */}
                  <div>
                    <div style={{ backgroundColor: '#f0f0f0', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, backgroundColor: idx === 0 ? '#E8420A' : idx < 3 ? '#f97316' : '#1a7a2e', borderRadius: '999px' }} />
                    </div>
                    <div style={{ color: '#9ca3af', fontSize: '11px', marginTop: '4px' }}>{pct}% du leader</div>
                  </div>
                  {/* Bouton → TickoFiesta */}
                  <a
                    href={`${TICKO_LINKS.vote}?localite=${encodeURIComponent(loc.nom)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center',
                      backgroundColor: '#E8420A', color: 'white',
                      borderRadius: '8px', padding: '9px 0',
                      fontWeight: 700, fontSize: '13px',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c93600'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#E8420A'}
                  >
                    🗳️ Voter pour {loc.nom}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '60px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 200" preserveAspectRatio="xMaxYMid slice">
          {[40,90,140,190].map((r, i) => <circle key={i} cx="750" cy="100" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', margin: '0 0 16px' }}>
            Ensemble, atteignons les 500 000 voix !
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.65, marginBottom: '28px' }}>
            Partagez ce vote avec votre entourage et aidez votre localité à remporter le titre du Choix du Consommateur FENACI 2026.
          </p>
          <a
            href={TICKO_LINKS.vote}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: 'white', color: '#E8420A', padding: '14px 32px', borderRadius: '999px', fontWeight: 900, fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}
          >
            🗳️ Voter maintenant sur TickoFiesta
          </a>
        </div>
      </section>

    </main>
  )
}
