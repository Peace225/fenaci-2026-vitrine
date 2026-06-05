import { TICKO_LINKS } from '../utils/externalLinks'

const missions = [
  { icon: '🌾', title: 'Souveraineté alimentaire', desc: 'Promouvoir la production locale et réduire la dépendance aux importations alimentaires en Afrique subsaharienne.' },
  { icon: '🤝', title: 'Intégration économique', desc: "Renforcer les échanges commerciaux intra-africains et favoriser l'émergence de champions continentaux." },
  { icon: '💡', title: 'Innovation & Technologie', desc: "Accélérer l'adoption des technologies agricoles et industrielles pour une Afrique compétitive." },
  { icon: '🌱', title: 'Développement durable', desc: "Valoriser les pratiques respectueuses de l'environnement et les filières vertes à fort potentiel." },
]

const valeurs = [
  { label: 'Excellence', icon: '⭐' },
  { label: 'Intégrité', icon: '🛡️' },
  { label: 'Inclusion', icon: '🤲' },
  { label: 'Innovation', icon: '🚀' },
  { label: 'Solidarité', icon: '🌍' },
  { label: 'Durabilité', icon: '♻️' },
]

const chiffres = [
  { value: '1ère', label: 'Édition 2026' },
  { value: '10 j', label: "Jours d'exposition" },
  { value: '40+', label: 'Pays représentés' },
  { value: '500k+', label: 'Visiteurs attendus' },
]

export default function LeFenaci() {
  return (
    <main>

      {/* ── Hero orange ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            Qui sommes-nous ?
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Le <span style={{ color: 'rgba(255,255,255,0.75)' }}>FENACI</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, margin: 0 }}>
            La Foire des Entreprises et Nations d'Afrique en Côte d'Ivoire — une vision, une mission, un engagement pour le continent.
          </p>
        </div>
      </section>

      {/* ── Présentation ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', backgroundColor: '#fff4f1', color: '#E8420A', fontSize: '13px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>Notre histoire</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: '#111827', lineHeight: 1.2, margin: '0 0 24px' }}>
              Une initiative <span style={{ color: '#E8420A' }}>panafricaine</span>
            </h2>
            <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
              Née de la volonté de créer un espace d'échanges économiques de haut niveau entre les nations africaines, la <strong>FENACI</strong> est bien plus qu'une foire commerciale. C'est un acte politique et économique fort, porté par des acteurs publics et privés engagés pour la transformation du continent.
            </p>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
              La 1ère édition, prévue du <strong>15 au 25 mars 2026</strong> au Parc des Expositions d'Abidjan, ambitionne de réunir plus de <strong>500 000 visiteurs</strong>, plus de <strong>1 000 exposants</strong> et des délégations officielles de plus de <strong>40 pays</strong>.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={TICKO_LINKS.inscriptionExposant} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#E8420A', color: 'white', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                Exposer au FENACI
              </a>
              <a href="#contact" style={{ border: '2px solid #e5e7eb', color: '#374151', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                Nous contacter
              </a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {chiffres.map((item) => (
              <div key={item.label} style={{ backgroundColor: '#fff4f1', border: '1px solid #fde0d4', borderRadius: '14px', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ color: '#E8420A', fontWeight: 900, fontSize: '2rem', lineHeight: 1, marginBottom: '8px' }}>{item.value}</div>
                <div style={{ color: '#6b7280', fontSize: '13px', fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Missions ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>Ce que nous <span style={{ color: '#E8420A' }}>portons</span></h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>La FENACI s'articule autour de 4 axes stratégiques pour un impact durable sur les économies africaines.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {missions.map((m) => (
              <div key={m.title} style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{m.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '16px', margin: '0 0 10px' }}>{m.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Souveraineté alimentaire ── */}
      <section style={{ backgroundColor: '#1a7a2e', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🌾</div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', margin: '0 0 20px', lineHeight: 1.2 }}>
            Souveraineté Alimentaire :<br />
            <span style={{ color: '#fcd34d' }}>L'enjeu central du FENACI</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, marginBottom: '40px' }}>
            L'Afrique possède 60% des terres arables mondiales inexploitées. La FENACI place la souveraineté alimentaire au cœur de ses priorités, en valorisant les filières agricoles locales, en promouvant la transformation agroalimentaire et en connectant producteurs, industriels et distributeurs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              { icon: '🚜', label: 'Agriculture modernisée', value: '60%', sub: 'des terres arables mondiales en Afrique' },
              { icon: '🏭', label: 'Transformation locale', value: '3x', sub: 'de valeur ajoutée potentielle' },
              { icon: '🌍', label: 'Sécurité alimentaire', value: '800M', sub: "d'Africains à nourrir d'ici 2050" },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ color: '#fcd34d', fontWeight: 900, fontSize: '1.75rem', lineHeight: 1 }}>{item.value}</div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '13px', margin: '6px 0 4px' }}>{item.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <a href="/projets" style={{ display: 'inline-block', backgroundColor: '#E8420A', color: 'white', padding: '14px 36px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            Voir nos projets agricoles
          </a>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>Nos <span style={{ color: '#E8420A' }}>Valeurs</span></h2>
          <p style={{ color: '#6b7280', fontSize: '16px', margin: '0 0 40px' }}>Les principes qui guident chaque action du FENACI.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px' }}>
            {valeurs.map((v) => (
              <div key={v.label} style={{ backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '20px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{v.icon}</div>
                <div style={{ fontWeight: 700, color: '#111827', fontSize: '12px' }}>{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
