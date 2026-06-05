export default function CGU() {
  return (
    <main style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '2rem', color: '#111827', marginBottom: '8px' }}>Conditions Générales d'Utilisation</h1>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '48px' }}>Dernière mise à jour : Juin 2026</p>

        {[
          {
            titre: '1. Objet',
            contenu: "Les présentes CGU définissent les conditions d'utilisation du site web et de la plateforme digitale du Festival National de l'Attiéké de Côte d'Ivoire (FENACI 2026)."
          },
          {
            titre: '2. Acceptation des conditions',
            contenu: "L'utilisation de ce site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser ce site."
          },
          {
            titre: '3. Règles de vote',
            contenu: "Le vote 'Choix du Consommateur' est strictement limité à 1 vote par numéro de téléphone mobile. Tout tentative de fraude (faux numéros, votes multiples automatisés, manipulation du scrutin) entraînera l'annulation des votes concernés et pourra faire l'objet de poursuites judiciaires conformément à la loi ivoirienne."
          },
          {
            titre: '4. Inscription exposants',
            contenu: "L'inscription comme exposant au Village Moderne est soumise à validation par l'équipe FENACI. Le FENACI se réserve le droit de refuser toute candidature ne répondant pas aux critères de l'événement, sans obligation de justification."
          },
          {
            titre: '5. Paiements',
            contenu: "Tout paiement effectué sur la plateforme est définitif. En cas d'annulation de votre participation, les conditions de remboursement sont définies dans le contrat de stand signé avec l'équipe FENACI."
          },
          {
            titre: '6. Comportement des utilisateurs',
            contenu: "Les utilisateurs s'engagent à ne pas utiliser ce site à des fins illicites, à ne pas tenter d'accéder sans autorisation aux systèmes informatiques, et à ne pas diffuser de contenu offensant, trompeur ou portant atteinte aux droits de tiers."
          },
          {
            titre: '7. Modification des CGU',
            contenu: "Le FENACI se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur ce site."
          },
          {
            titre: '8. Droit applicable',
            contenu: "Les présentes CGU sont soumises au droit ivoirien. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents d'Abidjan, Côte d'Ivoire."
          },
        ].map((section) => (
          <div key={section.titre} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#111827', marginBottom: '12px' }}>{section.titre}</h2>
            <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7, whiteSpace: 'pre-line', margin: 0 }}>{section.contenu}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
