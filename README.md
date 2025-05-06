# Portfolio - Lilian Marzet

Bienvenue sur le dépôt de mon **portfolio personnel**, développé avec **React** et **TypeScript**. Ce projet a pour objectif de présenter mes projets, mes compétences, et mon parcours de développeur à travers une interface moderne, professionnelle et responsive.

[Voir le site en ligne](https://lilian-marzet.com/)  
[Voir le code sur GitHub](https://github.com/LilianMrzt/portfolio-react)

---

## Aperçu

Un portfolio de développeur moderne, construit avec les dernières technologies front-end. Il comprend notamment :

- Un **design responsive** avec **prise en charge du mode sombre**
- Une **interface multilingue** (français et anglais)
- Une **présentation claire des projets**, des compétences et des témoignages
- Une **navigation mobile optimisée**, avec un menu coulissant

---

## Détails techniques

Ce projet a été développé avec les technologies et concepts suivants :

- **React 18** — pour la construction de l’interface
- **TypeScript** — pour un typage statique robuste
- **React Router** — pour la gestion de la navigation
- **Context API** — pour la gestion du thème (sombre/clair) et de la langue
- **ESLint** — pour assurer la qualité du code

L’architecture repose sur des composants réutilisables et la logique métier est séparée de la présentation. Les thèmes et langues sont gérés via des contextes, assurant une expérience fluide et centralisée.

---

## Structure du projet

```
portfolio-react/
├── public/               # Fichiers statiques (favicon, index.html, images publiques...)
│   ├── files/            # Fichiers statiques
│   ├── images/           # Images statiques
│   ├── locales/          # Fichiers de traduction
├── src/                  # Code source principal de l'application
│   ├── constants/        # Constantes du projet
│   ├── fixtures/         # Données statiques du projet
│   ├── hooks/            # Hooks et Contexts React (thème, langue, etc.)
│   ├── interfaces/       # Interfaces et types Typescript
│   ├── resources/        # Ressources statiques : icônes, images, logos...
│   ├── ui/               # Pages et composants React
│   │   ├── components/   # Composants dde l'application
│   │   ├── navigation/   # Composants relatifs à la navigation et à React Router
│   │   ├── views/        # Pages de l'application
│   ├── utils/            # Fonctions utilitaires génériques
│   └── App.tsx           # Composant racine de l'application
├── .eslintrc.js          # Configuration ESLint
├── tsconfig.json         # Configuration TypeScript
├── package.json          # Dépendances du projet
└── README.md             # Documentation principale du projet
```

---

## Fonctionnalités

- Design réactif compatible avec tous les formats d’écran
- Thème clair / sombre avec persistance locale
- Langue dynamique (FR/EN) avec détection automatique du language du navigateur
- Présentation des projets avec aperçu détaillé
- Navigation fluide grâce à React Router
- Structure modulaire et extensible

---

## Installation

### Pré-requis

- Node.js ≥ 18.x
- Yarn ≥ 1.22

### Étapes

1. **Cloner le dépôt :**
```bash
git clone https://github.com/LilianMrzt/portfolio-react.git
cd portfolio-react
```

2. **Installer les dépendances :**

Si vous n’avez pas Yarn, installez-le avec :
```bash
npm install --global yarn
```

Pour installer les dépendances:

```bash
yarn install
yarn start
```

3. **Lancer le projet localement :**
```bash
yarn start
```

Le site sera accessible à l’adresse suivante :
http://localhost:3000
