export default function MentionsLegales() {
  return (
    <main style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '2rem', color: '#111827', marginBottom: '8px' }}>Mentions Légales</h1>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '48px' }}>Dernière mise à jour : Juin 2026</p>

        {[
          {
            titre: '1. Éditeur du site',
            contenu: `Le site fenaci.ci est édité par le Commissariat Général du Festival National de l'Attiéké de Côte d'Ivoire (FENACI), représenté par son Commissaire Général KOUAME N'guessan Jean Vincent, Promoteur Culturel agréé par le Ministère de la Culture et de la Francophonie (MCF).`
          },
          {
            titre: '2. Siège social',
            contenu: 'Abidjan, Plateau, Côte d\'Ivoire\nEmail : contact@fenaci.ci'
          },
          {
            titre: '3. Hébergement',
            contenu: 'Ce site est hébergé par un prestataire d\'hébergement professionnel. Pour toute question relative à l\'hébergement, contactez notre équipe technique à tech@fenaci.ci.'
          },
          {
            titre: '4. Propriété intellectuelle',
            contenu: 'L\'ensemble du contenu de ce site (textes, images, logos, vidéos, éléments graphiques) est la propriété exclusive du FENACI ou de ses partenaires et est protégé par les lois ivoiriennes et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.'
          },
          {
            titre: '5. Responsabilité',
            contenu: 'Le FENACI s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, il ne peut garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.'
          },
          {
            titre: '6. Liens hypertextes',
            contenu: 'Ce site peut contenir des liens vers des sites tiers. Le FENACI n\'exerce aucun contrôle sur ces sites et n\'est pas responsable de leur contenu.'
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
