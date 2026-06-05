export default function Confidentialite() {
  return (
    <main style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '2rem', color: '#111827', marginBottom: '8px' }}>Politique de Confidentialité</h1>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '48px' }}>Dernière mise à jour : Juin 2026</p>

        {[
          {
            titre: '1. Collecte des données',
            contenu: `Le FENACI collecte des données personnelles uniquement dans les cas suivants :\n• Inscription comme exposant ou localité\n• Participation au vote "Choix du Consommateur" (numéro de téléphone)\n• Inscription au programme B2B\n• Abonnement à la newsletter\n• Envoi du formulaire de contact`
          },
          {
            titre: '2. Données collectées',
            contenu: `Les données collectées peuvent inclure : nom, prénom, email, numéro de téléphone, nom de l'entreprise, secteur d'activité. Aucune donnée bancaire n'est stockée sur nos serveurs — les paiements sont traités par des passerelles sécurisées certifiées.`
          },
          {
            titre: '3. Utilisation des données',
            contenu: `Vos données sont utilisées exclusivement pour :\n• Gérer votre participation au FENACI\n• Vous envoyer des confirmations et informations relatives à l'événement\n• Assurer la sécurité et la transparence du vote\n• Vous contacter dans le cadre de votre demande`
          },
          {
            titre: '4. Sécurité des données',
            contenu: 'Toutes les données sont transmises via des connexions sécurisées (SSL/TLS). Nous appliquons des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou destruction.'
          },
          {
            titre: '5. Conservation des données',
            contenu: 'Vos données sont conservées pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées, et au maximum 3 ans après la fin du FENACI 2026.'
          },
          {
            titre: '6. Vos droits',
            contenu: `Conformément à la réglementation applicable, vous disposez des droits suivants :\n• Droit d'accès à vos données\n• Droit de rectification\n• Droit à l'effacement\n• Droit d'opposition\n\nPour exercer ces droits, contactez-nous : privacy@fenaci.ci`
          },
          {
            titre: '7. Cookies',
            contenu: 'Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de traçage publicitaire n\'est utilisé sans votre consentement explicite.'
          },
          {
            titre: '8. Contact',
            contenu: 'Pour toute question relative à la protection de vos données personnelles :\nEmail : privacy@fenaci.ci\nAdresse : Plateau, Abidjan, Côte d\'Ivoire'
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
