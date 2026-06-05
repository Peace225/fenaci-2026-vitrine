import { useNavigate } from 'react-router-dom'

const localities = [
  'Abidjan','Yamoussoukro','Bouake','Daloa','San-Pedro','Man','Korhogo','Gagnoa','Bondoukou','Tengrela','Odienne','Sikensi','Divo','Toumodi','Bouna','Agboville','Aboisso','Soubre','Grand-Bassam','Katiola','Touba','Koun-Fao','Logouale','Ferkessedougou','Issia'
]

export default function InteractiveMap() {
  const nav = useNavigate()

  return (
    <section style={{ padding: '40px 16px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Carte interactive — Choix du Consommateur</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>Cliquez sur une localité pour voir sa page dédiée et voter.</p>

        {/* Placeholder map: grid of localities for MVP */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '10px' }}>
          {localities.map((loc) => (
            <button
              key={loc}
              onClick={() => nav(`/locality/${encodeURIComponent(loc.toLowerCase().replaceAll(' ','-'))}`)}
              style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer', textAlign: 'center', fontWeight: 700 }}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
