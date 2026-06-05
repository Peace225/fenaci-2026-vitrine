import { TICKO_LINKS } from '../utils/externalLinks'

const projets = [
  {
    icon: '🏗️',
    category: 'Logistique',
    title: 'Hubs Logistiques Régionaux',
    desc: "Création de plateformes logistiques multimodales stratégiquement positionnées pour fluidifier les échanges commerciaux entre pays d'Afrique de l'Ouest.",
    points: ['Entrepôts frigorifiques de stockage', 'Centres de distribution régionaux', 'Connexions rail, route et port', 'Gestion digitale des flux'],
    status: 'En développement', statusBg: '#dbeafe', statusColor: '#1d4ed8',
  },
  {
    icon: '🌿',
    category: 'Agriculture',
    title: 'Champs de Manioc Intensifs',
    desc: "Programme d'exploitation agricole à grande échelle du manioc, première culture vivrière d'Afrique, pour garantir la sécurité alimentaire et créer des emplois ruraux.",
    points: ['10 000 hectares exploités', 'Semences améliorées à haut rendement', 'Formation des agriculteurs locaux', 'Collecte et transformation sur site'],
    status: 'Actif', statusBg: '#dcfce7', statusColor: '#15803d',
  },
  {
    icon: '🏭',
    category: 'Industrie',
    title: 'Usines de Transformation',
    desc: "Construction d'unités industrielles de transformation agroalimentaire pour valoriser les matières premières locales et créer de la valeur ajoutée sur le continent.",
    points: ["Farine de manioc et d'attiéké", 'Huiles végétales raffinées', 'Conserves et produits dérivés', 'Création de 5 000 emplois directs'],
    status: 'Phase pilote', statusBg: '#ffedd5', statusColor: '#c2410c',
  },
]

const partenaires = [
  { name: 'FAO', desc: "Organisation pour l'alimentation et l'agriculture", icon: '🌾' },
  { name: 'PNUD', desc: 'Programme des Nations Unies pour le développement', icon: '🌍' },
  { name: 'BOAD', desc: 'Banque Ouest-Africaine de Développement', icon: '🏦' },
  { name: 'FIRCA', desc: "Fonds Interprofessionnel pour la Recherche et le Conseil Agricoles", icon: '🔬' },
]

export default function Projets() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            Nos projets structurants
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Projets <span style={{ color: 'rgba(255,255,255,0.75)' }}>FENACI</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, margin: 0 }}>
            Des projets concrets qui transforment l'économie africaine : hubs logistiques, agriculture intensive, et unités industrielles.
          </p>
        </div>
      </section>

      {/* ── Projets ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Nos projets <span style={{ color: '#E8420A' }}>structurants</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
              Trois axes d'investissement majeurs pour transformer durablement les économies de la sous-région.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {projets.map((projet) => (
              <div key={projet.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontSize: '40px', lineHeight: 1 }}>{projet.icon}</span>
                  <span style={{ backgroundColor: projet.statusBg, color: projet.statusColor, fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>{projet.status}</span>
                </div>
                <div style={{ color: '#E8420A', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{projet.category}</div>
                <h3 style={{ fontWeight: 900, fontSize: '18px', color: '#111827', margin: '0 0 12px' }}>{projet.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>{projet.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {projet.points.map((pt) => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                      <svg style={{ width: '16px', height: '16px', color: '#E8420A', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section style={{ backgroundColor: '#1a1a2e', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#ffffff', margin: '0 0 12px' }}>
            Impact <span style={{ color: '#E8420A' }}>attendu</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 48px' }}>
            Les retombées économiques et sociales de nos projets d'ici 2030.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { value: '5 000', label: 'Emplois directs créés', icon: '👷' },
              { value: '20 000', label: 'Emplois indirects', icon: '🤝' },
              { value: '10t/ha', label: 'Rendement manioc visé', icon: '🌿' },
              { value: '5 pays', label: 'Couverture régionale', icon: '🗺️' },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ color: '#E8420A', fontWeight: 900, fontSize: '1.75rem', lineHeight: 1, marginBottom: '8px' }}>{item.value}</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partenaires ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Partenaires <span style={{ color: '#E8420A' }}>des projets</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {partenaires.map((p) => (
              <div key={p.name} style={{ textAlign: 'center', padding: '28px 16px', borderRadius: '14px', backgroundColor: '#f9f9f9', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{p.icon}</div>
                <div style={{ fontWeight: 900, fontSize: '18px', color: '#111827', marginBottom: '6px' }}>{p.name}</div>
                <div style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.4 }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={TICKO_LINKS.sponsoring} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#E8420A', color: 'white', padding: '14px 36px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Devenir partenaire
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
