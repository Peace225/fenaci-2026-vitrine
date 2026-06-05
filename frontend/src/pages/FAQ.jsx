import { useState } from 'react'

const faqs = [
  {
    categorie: '🗳️ Vote & Concours',
    questions: [
      {
        q: "Comment voter pour ma localité ?",
        a: "Rendez-vous sur la page 'Choix du Consommateur', sélectionnez votre localité dans la liste des 25 villes, entrez votre numéro de téléphone mobile et cliquez sur 'Valider mon vote'. Un SMS de confirmation vous sera envoyé."
      },
      {
        q: "Combien de fois puis-je voter ?",
        a: "1 vote par numéro de téléphone mobile. Le système détecte automatiquement les doublons pour garantir la transparence du processus."
      },
      {
        q: "Quel est l'objectif de votes ?",
        a: "L'objectif national est d'atteindre 500 000 voix au total avant la clôture du festival le 27 septembre 2026."
      },
      {
        q: "Quand les résultats seront-ils annoncés ?",
        a: "Les résultats définitifs seront proclamés lors de la cérémonie de clôture du FENACI 2026 le 27 septembre 2026 à Abidjan."
      },
    ]
  },
  {
    categorie: '🏛️ Village Ancestral',
    questions: [
      {
        q: "Comment inscrire ma localité au Village Ancestral ?",
        a: "Remplissez le formulaire d'inscription disponible sur la page 'Village Ancestral'. Vous devrez fournir le nom de votre localité, le représentant ou la coopérative, le nombre de transformatrices engagées et une description de votre savoir-faire traditionnel."
      },
      {
        q: "Quels sont les critères de sélection ?",
        a: "Les critères d'évaluation incluent : l'authenticité du savoir-faire traditionnel, le nombre de transformatrices impliquées, la qualité de la présentation, et la valeur patrimoniale de la technique."
      },
      {
        q: "Qui peut s'inscrire ?",
        a: "Les mairies, coopératives de femmes, groupements villageois et associations culturelles représentant une localité de Côte d'Ivoire peuvent s'inscrire."
      },
    ]
  },
  {
    categorie: '⚙️ Village Moderne & Exposants',
    questions: [
      {
        q: "Quelles sont les options de stands disponibles ?",
        a: "Trois options sont disponibles : Stand A (9 m² — 250 000 FCFA), Stand B (18 m² — 450 000 FCFA), et Stand C Premium (36 m² — 800 000 FCFA). Les prix incluent la location, l'électricité et le badge exposant."
      },
      {
        q: "Comment réserver un stand ?",
        a: "Remplissez le formulaire d'inscription exposant sur la page 'Village Moderne'. Notre équipe commerciale vous contactera sous 48h pour finaliser votre dossier et procéder au paiement."
      },
      {
        q: "Quels types d'entreprises peuvent exposer ?",
        a: "Fabricants d'équipements agricoles, sociétés d'emballage et conditionnement, startups agri-tech, distributeurs, institutions financières, et tout acteur de la chaîne de valeur de l'attiéké."
      },
    ]
  },
  {
    categorie: '💼 B2B & Speed-Meetings',
    questions: [
      {
        q: "Comment participer au programme B2B ?",
        a: "Rendez-vous sur la page B2B, remplissez le formulaire d'inscription avec votre entité, type d'activité et secteur. Notre équipe vous confirmera votre intégration au programme sous 48h."
      },
      {
        q: "Combien de temps dure un speed-meeting ?",
        a: "Chaque speed-meeting dure 30 minutes. Vous pouvez réserver plusieurs créneaux horaires dans la journée selon vos disponibilités."
      },
      {
        q: "Qui peut participer aux speed-meetings ?",
        a: "Investisseurs, fonds d'investissement, distributeurs, industriels, délégations gouvernementales, mairies, conseils régionaux et tout décideur économique."
      },
    ]
  },
  {
    categorie: '💳 Billetterie & Paiement',
    questions: [
      {
        q: "Comment acheter des billets pour le festival ?",
        a: "Les billets sont disponibles via notre plateforme partenaire TickoFiesta. Cliquez sur 'Billetterie' dans le menu pour accéder à la plateforme de réservation."
      },
      {
        q: "Quels moyens de paiement sont acceptés ?",
        a: "Wave CI, Orange Money, MTN MoMo, et carte bancaire via la passerelle sécurisée. Un reçu numérique est automatiquement généré après chaque paiement."
      },
      {
        q: "Les paiements sont-ils sécurisés ?",
        a: "Oui. Tous les paiements sont sécurisés par certificat SSL et traités via notre passerelle certifiée. Vos données bancaires ne sont jamais stockées sur nos serveurs."
      },
    ]
  },
  {
    categorie: '📞 Support & Contact',
    questions: [
      {
        q: "Comment contacter l'équipe FENACI ?",
        a: "Via le formulaire de la page 'Nous Contacter', par email à contact@fenaci.ci, ou via notre canal WhatsApp disponible en bas de page. Notre équipe répond sous 24h ouvrables."
      },
      {
        q: "Y a-t-il un accès presse pour les journalistes ?",
        a: "Oui. Les journalistes et équipes médias peuvent demander une accréditation presse en contactant presse@fenaci.ci. Les dossiers de presse sont disponibles sur la page Espace Média."
      },
    ]
  },
]

function FAQItem({ question, reponse }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '18px 20px', backgroundColor: open ? '#fff4f1' : '#ffffff',
          border: 'none', cursor: 'pointer', textAlign: 'left', gap: '12px',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '15px', color: '#111827', lineHeight: 1.4 }}>{question}</span>
        <span style={{ color: '#E8420A', fontSize: '20px', flexShrink: 0, fontWeight: 700 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 20px', backgroundColor: '#fff4f1' }}>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{reponse}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: '#E8420A', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 800 300" preserveAspectRatio="xMaxYMid slice">
          {[50,110,170,230,290,350].map((r, i) => <circle key={i} cx="750" cy="150" r={r} stroke="white" strokeWidth="1.5" fill="none" />)}
        </svg>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 16px' }}>
            Foire Aux <span style={{ color: 'rgba(255,255,255,0.75)' }}>Questions</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.65, margin: 0 }}>
            Toutes les réponses à vos questions sur le FENACI 2026 — vote, exposants, B2B, billetterie et plus.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          {faqs.map((cat) => (
            <div key={cat.categorie} style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#111827', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {cat.categorie}
              </h2>
              {cat.questions.map((item) => (
                <FAQItem key={item.q} question={item.q} reponse={item.a} />
              ))}
            </div>
          ))}

          {/* CTA Contact */}
          <div style={{ backgroundColor: '#fff4f1', border: '1px solid #fde0d4', borderRadius: '16px', padding: '40px', textAlign: 'center', marginTop: '48px' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
            <h3 style={{ fontWeight: 900, fontSize: '1.3rem', color: '#111827', margin: '0 0 8px' }}>
              Vous n'avez pas trouvé la réponse ?
            </h3>
            <p style={{ color: '#6b7280', fontSize: '15px', margin: '0 0 24px' }}>
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ backgroundColor: '#E8420A', color: 'white', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Nous contacter
              </a>
              <a href="https://wa.me/2250700000000" target="_blank" rel="noopener noreferrer"
                style={{ backgroundColor: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
