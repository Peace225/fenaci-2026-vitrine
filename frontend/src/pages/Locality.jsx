import { useParams } from 'react-router-dom'
import RealTimeCounter from '../components/ui/RealTimeCounter'

export default function Locality() {
  const { id } = useParams()
  const name = id ? id.replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Localité'

  return (
    <main style={{ padding: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900 }}>{name}</h1>
        <p style={{ color: '#6b7280' }}>Page dédiée à la localité — votes en temps réel, galerie et informations locales.</p>

        <section style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '24px' }}>
          <div style={{ flex: '1 1 320px', background: 'white', padding: '18px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginTop: 0 }}>Compteur de voix</h3>
            <RealTimeCounter initial={Math.floor(Math.random() * 5000)} goal={500000} />
            <div style={{ marginTop: '12px', color: '#6b7280', fontSize: '13px' }}>Objectif : 500 000 voix pour la localité</div>
          </div>

          <div style={{ flex: '1 1 320px', background: 'white', padding: '18px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginTop: 0 }}>Galerie — Village Ancestral</h3>
            <p style={{ color: '#6b7280' }}>Photos et vidéos des savoir‑faire traditionnels (à compléter).</p>
          </div>
        </section>
      </div>
    </main>
  )
}
