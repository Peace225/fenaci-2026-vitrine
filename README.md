# 🌍 FENACI - Site Vitrine Officiel

Plateforme institutionnelle et événementielle du Festival National de l'Attiéké de Côte d'Ivoire.

## 🔗 Redirections & Architecture Multi-Repo
Ce site agit comme une vitrine. Toutes les transactions (votes, billetterie, réservation de stands) sont gérées de manière externe via **[TickoFiesta.com](https://tickofiesta.com)**.

> **⚠️ REMARQUE IMPORTANTE POUR L'ÉQUIPE (Séparation des dépôts) :**
> Le code de ce site vitrine (FENACI) doit obligatoirement se trouver dans **un dépôt (repositories) Git totalement distincts**, et  sur des branches différentes d'un même dépôt.
> 
> * **Dépôt 1 :** `fenaci-2026-vitrine` (Ce dépôt : UI, marketing, galeries).

> *Pourquoi cette règle stricte ?* Cela garantit une sécurité maximale. Une erreur ou une mise à jour sur la vitrine ne pourra jamais faire planter le système de paiement ou la base de données des votes.

---

## 📁 Arborescence du Projet

Voici la structure de notre code source (`src/`) pour faciliter le travail en équipe :

```text
src/
├── assets/
│   ├── images/          # Photos d'archives, logo FENACI, maquettes
│   └── videos/          # Teasers et reportages FENACI
├── components/
│   ├── layout/          # Navbar, Footer (composants globaux)
│   ├── sections/        # Blocs de pages (HeroSection, ProjetsSection...)
│   ├── media/           # Visionneuses de galeries photos/vidéos
│   └── ui/              # Composants réutilisables (Boutons premium, Cards)
├── pages/
│   ├── Home.jsx         # Page d'accueil (Vision & Call-to-Action)
│   ├── LeFenaci.jsx     # Présentation, mission et souveraineté alimentaire
│   ├── Projets.jsx      # Hubs logistiques, champs de manioc, usines
│   ├── Archives.jsx     # Rétrospective des éditions précédentes
│   └── Concours.jsx     # Détails du concours "Le Choix du Consommateur"
├── utils/
│   └── externalLinks.js # Centralisation des liens sortants vers TickoFiesta
├── App.jsx              # Configuration du routage React
└── main.jsx             # Point d'entrée de l'application