import { useState } from 'react'

const savoirsFaire = [
  {
    localite: 'Jacqueville',
    icon: '🌊',
    nom: 'Attiéké de mer',
    desc: "Méthode ancestrale des femmes Avikam : fermentation longue au soleil de l'Atlantique, granulométrie fine unique, saveur légèrement iodée transmise depuis des générations.",
    transformatrices: 42,
    anneeTransmission: '1850',
  },
  {
    localite: 'Tiassalé',
    icon: '🌾',
    nom: 'Attiéké du fleuve',
    desc: "Technique des femmes Avikam du fleuve Bandama. Manioc sélectionné à la main, pressage traditionnel en mortier de bois, séchage sur natte en raphia.",
    transformatrices: 67,
    anneeTransmission: '1900',
  },
  {
    localite: 'Grand-Lahou',
    icon: '🏖️',
    nom: 'Attiéké côtier',
    desc: "Recette exclusive transmise de mère en fille depuis le XVIIIe siècle. Fermentation en pot en argile, texture aérée et parfumée aux herbes aromatiques locales.",
    transformatrices: 38,
    anneeTransmission: '1780',
  },
  {
    localite: 'Aboisso',
    icon: '🌳',
    nom: 'Attiéké de forêt',
    desc: "Savoir-faire Agni de la forêt orientale. Utilisation de variétés de manioc amer spécifiques, fermentation naturelle en feuilles de bananier, goût subtil et authentique.",
    transformatrices: 54,
    anneeTransmission: '1920',
  },
  {
    localite: 'Dabou',
    icon: '🎭',
    nom: 'Attiéké Adjoukrou',
    desc: "Patrimoine immatériel Adjoukrou classé. Technique de pressage collective, séchage en plein air, emballage en feuilles de cocotier — un rituel communautaire centenaire.",
    transformatrices: 89,
    anneeTransmission: '1750',
  },
  {
    localite: 'Divo',
    icon: '🌿',
    nom: 'Attiéké de brousse',
    desc: "Méthode Bété du centre-ouest. Fermentation rapide 24h, séchage sur claies en bambou, granulométrie moyenne idéale pour accompagnement poisson fumé.",
    transformatrices: 31,
    anneeTransmission: '1940',
  },
]

const placeholderPhotos = [
  { id: 1, label: 'Préparation du manioc' },
  { id: 2, label: 'Fermentation traditionnelle' },
  { id: 3, label: 'Pressage artisanal' },
  { id: 4, label: 'Séchage au soleil' },
  { id: 5, label: 'Attiéké prêt à servir' },
  { id: 6, label: 'Transformatrices en action' },
]

export default function VillageAncestral() {
  const [form, setForm] = useState({
    localite: '',
    representant: '',
    nombreTransformatrices: '',
    savoirFaire: '',
  })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            🏺 Tradition ancestrale
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Village Ancestral
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', fontWeight: 700, margin: '0 0 12px' }}>
            Les savoir-faire traditionnels
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.65, margin: 0 }}>
            Découvrez les techniques ancestrales de préparation de l'attiéké transmises de génération en génération
            dans les différentes communautés de Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#fff4f1', color: '#E8420A', fontSize: '13px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
                L'attiéké en Côte d'Ivoire
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: '#111827', lineHeight: 1.2, margin: '0 0 20px' }}>
                Un patrimoine <span style={{ color: '#E8420A' }}>vivant</span>
              </h2>
              <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                L'attiéké — semoule de manioc fermenté — est bien plus qu'un aliment en Côte d'Ivoire.
                C'est un <strong>patrimoine culturel immatériel</strong>, transmis de mère en fille depuis des siècles,
                portant en lui l'identité, l'histoire et l'âme des communautés ivoiriennes.
              </p>
              <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7 }}>
                Le Village Ancestral du FENACI 2026 est l'espace où ces savoir-faire prennent vie :
                démonstrations live, dégustations authentiques, et rencontres avec les artisanes
                gardiennes de la tradition.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '🌾', title: 'Manioc sélectionné', desc: 'Variétés locales cultivées selon des méthodes traditionnelles respectueuses de la terre' },
                { icon: '🫙', title: 'Fermentation naturelle', desc: 'Process de fermentation sans additifs, uniquement avec des levures naturelles locales' },
                { icon: '👐', title: 'Savoir-faire manuel', desc: 'Gestes précis et techniques transmis oralement et par la pratique depuis des générations' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '18px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#111827', fontSize: '15px', margin: '0 0 4px' }}>{item.title}</h4>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 savoir-faire par localité ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Savoir-faire <span style={{ color: '#E8420A' }}>par localité</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Six communautés, six méthodes ancestrales, une même passion pour l'attiéké.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {savoirsFaire.map((sf) => (
              <div key={sf.localite} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {/* Header coloré */}
                <div style={{ backgroundColor: '#E8420A', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '32px' }}>{sf.icon}</span>
                  <div>
                    <div style={{ color: 'white', fontWeight: 900, fontSize: '17px' }}>{sf.nom}</div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px' }}>📍 {sf.localite}</div>
                  </div>
                </div>
                {/* Corps */}
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.65, margin: '0 0 16px' }}>
                    {sf.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: '#fff4f1', color: '#E8420A', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}>
                      👩 {sf.transformatrices} transformatrices
                    </span>
                    <span style={{ backgroundColor: '#f0fdf4', color: '#15803d', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}>
                      📅 Depuis {sf.anneeTransmission}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerie photos placeholder ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Galerie <span style={{ color: '#E8420A' }}>du Village Ancestral</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Les moments forts et les gestes du patrimoine.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {placeholderPhotos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  aspectRatio: '4/3',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  border: '2px dashed #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '32px', opacity: 0.4 }}>🖼️</span>
                <span style={{ color: '#9ca3af', fontSize: '13px', fontWeight: 600 }}>{photo.label}</span>
                <span style={{ color: '#d1d5db', fontSize: '11px' }}>Photo à venir</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire Inscription Localité ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Inscrire ma <span style={{ color: '#E8420A' }}>localité</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
              Votre localité souhaite exposer son savoir-faire ancestral au Village Ancestral du FENACI 2026 ?
              Remplissez ce formulaire pour vous pré-inscrire.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '48px 24px' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ fontWeight: 900, fontSize: '22px', color: '#111827', marginBottom: '8px' }}>Inscription reçue !</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Nous avons bien reçu votre demande d'inscription pour <strong style={{ color: '#E8420A' }}>{form.localite || 'votre localité'}</strong>.
                Notre équipe vous contactera dans les 5 jours ouvrables.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label style={labelStyle}>Nom de la localité *</label>
                <input name="localite" type="text" required placeholder="Ex : Jacqueville" value={form.localite} onChange={handleChange} style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Nom du représentant ou de la coopérative *</label>
                <input name="representant" type="text" required placeholder="Ex : Coopérative des femmes transformatrices de Jacqueville" value={form.representant} onChange={handleChange} style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Nombre de transformatrices engagées *</label>
                <input name="nombreTransformatrices" type="number" required min="1" placeholder="Ex : 25" value={form.nombreTransformatrices} onChange={handleChange} style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Description du savoir-faire traditionnel *</label>
                <textarea
                  name="savoirFaire"
                  required
                  rows={5}
                  placeholder="Décrivez votre méthode ancestrale de préparation de l'attiéké : origine, particularités, étapes clés..."
                  value={form.savoirFaire}
                  onChange={handleChange}
                  style={{ ...fieldStyle, resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#E8420A', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontWeight: 700, fontSize: '16px', cursor: 'pointer', width: '100%' }}
              >
                🏺 Soumettre mon inscription
              </button>
              <p style={{ color: '#9ca3af', fontSize: '12px', textAlign: 'center', margin: 0 }}>
                Inscription non contractuelle · Confirmation par notre équipe sous 5 jours
              </p>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
