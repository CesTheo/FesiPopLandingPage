# Documentation Technique : Installation de l'application Next.js avec Tailwind CSS

## Introduction

Ce document fournit des instructions détaillées pour installer et lancer l'application Next.js avec Tailwind CSS. L'application est conçue pour le festival FESIPOP, un événement 100% K-pop en France.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (Node Package Manager) ou yarn

## Installation

### Étape 1 : Cloner le dépôt

Clonez le dépôt de l'application depuis GitHub :

```bash
git clone https://github.com/votre-utilisateur/fesipop-landingpage.git
cd fesipop-landingpage
```

### Étape 2 : Installer les dépendances

Installez les dépendances nécessaires en utilisant npm ou yarn :

```bash
npm install
# ou
yarn install
```

### Étape 3 : Configurer Tailwind CSS

Tailwind CSS est déjà configuré dans le projet. Vous pouvez vérifier les fichiers de configuration suivants :

- `tailwind.config.js`
- `postcss.config.js`

### Étape 4 : Lancer l'application en mode développement

Pour lancer l'application en mode développement, utilisez la commande suivante :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse `http://localhost:3000`.

### Étape 5 : Construire l'application pour la production

Pour construire l'application pour la production, utilisez la commande suivante :

```bash
npm run build
# ou
yarn build
```

### Étape 6 : Démarrer l'application en mode production

Pour démarrer l'application en mode production, utilisez la commande suivante :

```bash
npm start
# ou
yarn start
```

## Structure du projet

Le projet est structuré de la manière suivante :

```
fesipop-landingpage/
├── components/
│   └── ArtistCards.js
├── pages/
│   └── index.js
├── public/
│   └── logo.png
│   └── bar.jpg
│   └── camping.jpg
│   └── scene.jpg
│   └── shop.jpg
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Composants principaux

### `ArtistCards`

Le composant `ArtistCards` est utilisé pour afficher les cartes des artistes dans la section "Line up !".

### `Home`

Le composant `Home` est la page principale de l'application. Il contient les sections suivantes :

- Header avec le logo et la navigation
- Section d'accueil avec le titre et les boutons d'action
- Section "La vie du festival" avec des descriptions et des images
- Section "Line up !" avec les cartes des artistes
- Section "Fesi'App ?" avec des informations sur l'application mobile
- Section finale avec des liens de téléchargement de l'application
- Footer avec des liens vers les conditions d'utilisation et la politique de confidentialité

## Conclusion

Cette documentation vous a guidé à travers les étapes nécessaires pour installer et lancer l'application Next.js avec Tailwind CSS pour le festival FESIPOP. Si vous avez des questions ou des problèmes, n'hésitez pas à consulter la documentation officielle de Next.js et Tailwind CSS ou à contacter l'équipe de développement.

---

Merci d'avoir choisi FESIPOP pour votre expérience festivalière !