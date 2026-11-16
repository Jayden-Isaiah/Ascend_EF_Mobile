# Grimoire

Application Android de gestion de fiches de personnages pour jeux de rôle (système générique), réalisée dans le cadre du cours 420-512-MV – Développement d'applications mobiles, Cégep Marie-Victorin, automne 2026.

## Équipe

| Membre | Responsabilité principale |
| --- | --- |
| Adam Roy | Navigation, écrans, composants, thèmes |
| Sarragossa Kaiss | Serveur Express, authentification, contrôle d'accès |
| Jayden Saint-Cyr | Prisma/SQLite serveur, modèle de données, résumé, APK |
| À compléter | SQLite mobile, chiffrement, synchronisation, animations |

## Structure du dépôt

```
grimoire/
├── mobile/                 Application React Native + Expo (TypeScript)
│   ├── App.tsx
│   ├── src/
│   │   ├── composants/     Composants réutilisables
│   │   ├── ecrans/         Écrans de l'application
│   │   ├── navigation/     Auth Stack, onglets, modals
│   │   ├── contextes/      AuthContext, CampagneContext, ThemeContext
│   │   ├── hooks/          Hooks personnalisés
│   │   ├── themes/         Parchemin, Donjon, Arcane
│   │   ├── types/          Types TypeScript partagés
│   │   ├── services/       apiClient et appels REST
│   │   ├── bd/             baseLocale (SQLite chiffrée), migrations
│   │   ├── sync/           fileSync, serviceSync, politiqueConflit
│   │   ├── securite/       stockageSessionSecurise, fournisseurCle
│   │   ├── animations/     Les quatre animations
│   │   └── logique/        Fonctions pures testées
│   └── __tests__/
├── serveur/                API REST Node.js + Express + Prisma (SQLite)
│   ├── prisma/             schema.prisma, migrations, seed.ts
│   ├── src/
│   │   ├── routes/
│   │   ├── controleurs/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validateurs/
│   │   ├── app.ts
│   │   ├── bd.ts
│   │   └── index.ts
│   └── tests/
├── docs/                   Planification, schémas, captures d'écran
└── .github/                Modèles d'issue et de pull request
```

## Prérequis

- Node.js 22 ou plus récent
- Android Studio (émulateur) ou un téléphone Android
- Un build de développement Expo (`expo-dev-client`) : SQLCipher ne fonctionne pas dans Expo Go

## Démarrage du serveur

```bash
cd serveur
npm install
cp .env.example .env
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

Le serveur écoute sur `http://localhost:3000`. Vérification : `GET /sante`.

## Démarrage de l'application mobile

```bash
cd mobile
npm install
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
npx expo install expo-sqlite expo-secure-store expo-crypto @react-native-community/netinfo react-native-reanimated expo-dev-client
npx expo start
```

Les dépendances doivent être ajoutées avec `npx expo install` pour obtenir des versions compatibles avec le SDK Expo.

## Identifiants de démonstration

| Courriel | Mot de passe |
| --- | --- |
| demo@grimoire.ca | demo1234 |

## Tests

```bash
cd serveur
npm test
```

Tests mobiles : à configurer avec `jest-expo` et React Native Testing Library.

## Génération de l'APK

À compléter (EAS Build ou `npx expo run:android --variant release`).

## Limites connues

À compléter.

## Ressources externes

À compléter : bibliothèques, images, icônes et autres ressources utilisées.

## Utilisation de l'intelligence artificielle

À compléter : principaux usages (génération initiale, débogage, refactorisation, tests, documentation ou autre).
