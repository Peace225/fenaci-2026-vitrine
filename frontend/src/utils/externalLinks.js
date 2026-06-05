/**
 * externalLinks.js
 * Centralisation de tous les liens sortants du site FENACI.
 *
 * Regroupés par catégorie pour faciliter la maintenance.
 * Toujours utiliser ces constantes plutôt que des URLs en dur dans les composants.
 */

// ─── Billetterie & Inscriptions ────────────────────────────────────────────
export const TICKO_LINKS = {
  /** Page d'achat de billets visiteurs sur TickoFiesta */
  billetterie: 'https://tickofiesta.com/fenaci-2026',
  /** Vote Choix du Consommateur */
  vote: 'https://tickofiesta.com/fenaci-2026/vote',
  /** Formulaire d'inscription exposants */
  inscriptionExposant: 'https://tickofiesta.com/fenaci-2026/exposants',
  /** Formulaire de demande de sponsoring */
  sponsoring: 'https://tickofiesta.com/fenaci-2026/sponsoring',
  /** Concours "Le Choix du Consommateur" */
  concours: 'https://tickofiesta.com/fenaci-2026/concours',
  /** Stands / Village Moderne */
  stands: 'https://tickofiesta.com/fenaci-2026/stands',
}

// ─── Réseaux sociaux FENACI ─────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/fenaci.officiel',
  instagram: 'https://instagram.com/fenaci_officiel',
  twitter: 'https://twitter.com/FENACI_CI',
  linkedin: 'https://linkedin.com/company/fenaci',
  youtube: 'https://youtube.com/@fenaci',
}

// ─── Partenaires institutionnels ────────────────────────────────────────────
export const PARTNER_LINKS = {
  ministreCommerce: 'https://www.commerce.gouv.ci',
  chambreCommerce: 'https://www.cci.ci',
  unionAfricaine: 'https://au.int',
  cedeao: 'https://www.ecowas.int',
  bad: 'https://www.afdb.org',
  bceao: 'https://www.bceao.int',
}

// ─── Documents téléchargeables ───────────────────────────────────────────────
export const DOC_LINKS = {
  plaquette: '/docs/plaquette-fenaci-2026.pdf',
  programme: '/docs/programme-fenaci-2026.pdf',
  dossierSponsoring: '/docs/dossier-sponsoring-fenaci-2026.pdf',
  kitPresse: '/docs/kit-presse-fenaci-2026.pdf',
}
