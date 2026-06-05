import { useState } from 'react'

const machines = [
  {
    icon: '⚙️',
    nom: 'Presse Semi-Automatique ProCassava 500',
    fabricant: 'CassavaTech CI',
    description: "Presse hydraulique à double plateau pour l'extraction optimale du jus de manioc. Capacité : 500 kg/heure. Réduit le temps de pressage de 70% par rapport aux méthodes manuelles.",
    capacite: '500 kg/h',
    economie: '70% de gain de temps',
  },
  {
    icon: '🌀',
    nom: 'Séchoir Tunnel ThermoAttiéké 3000',
    fabricant: 'AgroSec Abidjan',
    description: "Séchoir à air chaud pulsé contrôlé électroniquement. Maintient une température homogène de 60°C sur toute la longueur du tunnel. Capacité : 1 tonne/cycle de 4 heures.",
    capacite: '1 t/cycle',
    economie: '40% d\'économie d\'énergie',
  },
  {
    icon: '📦',
    nom: 'Ligne d\'emballage sous vide VacPack CI',
    fabricant: 'PackAfrique Industries',
    description: "Conditionneuse automatique sous atmosphère modifiée pour attiéké frais. Prolonge la durée de conservation de 3 à 21 jours. Compatible export selon normes UEMOA.",
    capacite: '200 sachets/h',
    economie: '3→21 jours de conservation',
  },
  {
    icon: '🔬',
    nom: 'Station de contrôle qualité LabCassava',
    fabricant: 'AgriLab Solutions',
    description: "Kit portable d'analyse rapide : taux d'humidité, pH, acidité titrable, et détection d'acide cyanhydrique résiduel. Résultats en 15 minutes sur écran tactile intégré.",
    capacite: '30 analyses/jour',
    economie: 'Conformité export garantie',
  },
]

const standOptions = [
  { value: 'A', label: 'Stand A — 9 m² (3×3)', prix: '250 000 FCFA' },
  { value: 'B', label: 'Stand B — 18 m² (3×6)', prix: '450 000 FCFA' },
  { value: 'C', label: 'Stand C — 36 m² (6×6) — Espace Premium', prix: '800 000 FCFA' },
]

const creneaux = [
  '09h00 – 09h30', '09h30 – 10h00', '10h00 – 10h30', '10h30 – 11h00',
  '11h00 – 11h30', '11h30 – 12h00', '14h00 – 14h30', '14h30 – 15h00',
  '15h00 – 15h30', '15h30 – 16h00', '16h00 – 16h30', '16h30 – 17h00',
]

export default function VillageModerne() {
  const [exposantForm, setExposantForm] = useState({
    nomEntreprise: '',
    raisonSociale: '',
    secteur: '',
    stand: '',
    contact: '',
    telephone: '',
    logo: null,
  })
  const [exposantSubmitted, setExposantSubmitted] = useState(false)

  const [b2bForm, setB2bForm] = useState({
    nomEntite: '',
    typeActivite: '',
    creneau: '',
    objetRdv: '',
  })
  const [b2bSubmitted, setB2bSubmitted] = useState(false)

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

  const handleExposantChange = e => {
    const { name, value, files } = e.target
    setExposantForm(prev => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleB2bChange = e => setB2bForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px' }}>
            ⚙️ Innovation & Technologie
          </span>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Village Moderne
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', fontWeight: 700, margin: '0 0 12px' }}>
            Technologies & Innovation
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.65, margin: 0 }}>
            Découvrez les équipements et solutions technologiques qui révolutionnent la transformation de l'attiéké —
            de la semi-industrielle à l'export international.
          </p>
        </div>
      </section>

      {/* ── Catalogue des machines ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              Catalogue <span style={{ color: '#E8420A' }}>des équipements</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
              Les machines et solutions exposées au Village Moderne du FENACI 2026.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {machines.map((machine) => (
              <div key={machine.nom} style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '56px', height: '56px', backgroundColor: '#fff4f1', border: '2px solid #fde0d4', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
                    {machine.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: '#111827', lineHeight: 1.3 }}>{machine.nom}</div>
                    <div style={{ color: '#E8420A', fontSize: '12px', fontWeight: 600, marginTop: '2px' }}>{machine.fabricant}</div>
                  </div>
                </div>
                <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {machine.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#fff4f1', color: '#c53a0a', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>
                    ⚡ {machine.capacite}
                  </span>
                  <span style={{ backgroundColor: '#f0fdf4', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>
                    ✅ {machine.economie}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inscription Exposant ── */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
              S'inscrire comme <span style={{ color: '#E8420A' }}>Exposant</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
              Vous êtes fabricant, distributeur ou innovateur dans la filière attiéké ?
              Réservez votre stand au Village Moderne du FENACI 2026.
            </p>
          </div>

          {exposantSubmitted ? (
            <div style={{ textAlign: 'center', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '48px 24px' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontWeight: 900, fontSize: '22px', color: '#111827', marginBottom: '8px' }}>Candidature reçue !</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Votre dossier exposant pour <strong style={{ color: '#E8420A' }}>{exposantForm.nomEntreprise}</strong> a bien été enregistré.
                Notre équipe commerciale vous recontactera sous 48h.
              </p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setExposantSubmitted(true) }}
              style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Nom de l'entreprise *</label>
                  <input name="nomEntreprise" type="text" required placeholder="CassavaTech CI" value={exposantForm.nomEntreprise} onChange={handleExposantChange} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Raison sociale</label>
                  <input name="raisonSociale" type="text" placeholder="SARL / SAS / GIE…" value={exposantForm.raisonSociale} onChange={handleExposantChange} style={fieldStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Secteur d'activité *</label>
                <select name="secteur" required value={exposantForm.secteur} onChange={handleExposantChange} style={fieldStyle}>
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="machines">Machines & Équipements agricoles</option>
                  <option value="emballage">Emballage & Conditionnement</option>
                  <option value="logistique">Logistique & Distribution</option>
                  <option value="tech">Technologies numériques & IA</option>
                  <option value="qualite">Contrôle qualité & Certification</option>
                  <option value="energie">Énergie & Équipements industriels</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Option de stand *</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {standOptions.map(opt => (
                    <label
                      key={opt.value}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 16px',
                        border: `2px solid ${exposantForm.stand === opt.value ? '#E8420A' : '#e5e7eb'}`,
                        borderRadius: '10px',
                        cursor: 'pointer',
                        backgroundColor: exposantForm.stand === opt.value ? '#fff4f1' : '#ffffff',
                      }}
                    >
                      <input
                        type="radio"
                        name="stand"
                        value={opt.value}
                        checked={exposantForm.stand === opt.value}
                        onChange={handleExposantChange}
                        style={{ accentColor: '#E8420A' }}
                      />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: 700, fontSize: '14px', color: '#111827' }}>{opt.label}</span>
                      </div>
                      <span style={{ color: '#E8420A', fontWeight: 800, fontSize: '14px', whiteSpace: 'nowrap' }}>{opt.prix}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Email de contact *</label>
                  <input name="contact" type="email" required placeholder="contact@entreprise.ci" value={exposantForm.contact} onChange={handleExposantChange} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone *</label>
                  <input name="telephone" type="tel" required placeholder="+225 07 00 00 00 00" value={exposantForm.telephone} onChange={handleExposantChange} style={fieldStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Logo de l'entreprise (PNG ou JPG)</label>
                <input name="logo" type="file" accept="image/png,image/jpeg" onChange={handleExposantChange} style={{ ...fieldStyle, padding: '10px 16px' }} />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#E8420A', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontWeight: 700, fontSize: '16px', cursor: 'pointer', width: '100%' }}
              >
                ⚙️ Soumettre ma candidature exposant
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── B2B Speed-Meeting ── */}
      <section style={{ backgroundColor: '#1a1a2e', padding: '80px 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '4px', backgroundColor: '#E8420A', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#ffffff', margin: '0 0 12px' }}>
              Speed-Meeting <span style={{ color: '#E8420A' }}>B2B</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.6 }}>
              Rencontrez investisseurs et partenaires en 30 minutes chrono. Réservez votre créneau de speed-meeting au Village Moderne.
            </p>
          </div>

          {b2bSubmitted ? (
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '48px 24px' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontWeight: 900, fontSize: '22px', color: '#ffffff', marginBottom: '8px' }}>Rendez-vous confirmé !</h3>
              <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
                Votre speed-meeting a été enregistré pour le créneau <strong style={{ color: '#E8420A' }}>{b2bForm.creneau}</strong>.
                Une confirmation par email vous sera envoyée.
              </p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setB2bSubmitted(true) }}
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label style={{ ...labelStyle, color: '#d1d5db' }}>Nom de l'entité ou de l'investisseur *</label>
                <input
                  name="nomEntite"
                  type="text"
                  required
                  placeholder="Ex : Fonds d'investissement AgriCI"
                  value={b2bForm.nomEntite}
                  onChange={handleB2bChange}
                  style={{ ...fieldStyle, backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#f9fafb' }}
                />
              </div>
              <div>
                <label style={{ ...labelStyle, color: '#d1d5db' }}>Type d'activité *</label>
                <select
                  name="typeActivite"
                  required
                  value={b2bForm.typeActivite}
                  onChange={handleB2bChange}
                  style={{ ...fieldStyle, backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: b2bForm.typeActivite ? '#f9fafb' : '#9ca3af' }}
                >
                  <option value="">Sélectionnez le type d'activité</option>
                  <option value="investisseur">Investisseur / Fonds</option>
                  <option value="distributeur">Distributeur / Importateur</option>
                  <option value="industriel">Industriel / Transformateur</option>
                  <option value="institution">Institution financière / Banque</option>
                  <option value="startup">Startup / Entrepreneur</option>
                  <option value="gouvernement">Délégation gouvernementale</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label style={{ ...labelStyle, color: '#d1d5db' }}>Créneau horaire souhaité *</label>
                <select
                  name="creneau"
                  required
                  value={b2bForm.creneau}
                  onChange={handleB2bChange}
                  style={{ ...fieldStyle, backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: b2bForm.creneau ? '#f9fafb' : '#9ca3af' }}
                >
                  <option value="">Choisir un créneau</option>
                  {creneaux.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ ...labelStyle, color: '#d1d5db' }}>Objet du rendez-vous *</label>
                <textarea
                  name="objetRdv"
                  required
                  rows={4}
                  placeholder="Décrivez l'objet de votre rendez-vous : type de partenariat recherché, investissement envisagé, projet..."
                  value={b2bForm.objetRdv}
                  onChange={handleB2bChange}
                  style={{ ...fieldStyle, backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#f9fafb', resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#E8420A', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontWeight: 700, fontSize: '16px', cursor: 'pointer', width: '100%' }}
              >
                🤝 Réserver mon créneau Speed-Meeting
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
