# ⚛️ React + Vite + SCSS + JSDoc Starter Template

![License](https://img.shields.io/github/license/morpheus0208/react-vite-jsdoc-template)
![GitHub stars](https://img.shields.io/github/stars/morpheus0208/react-vite-jsdoc-template)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)

---

## 🧭 Présentation

Ce dépôt est un **template de démarrage rapide** pour les projets React utilisant :

- ⚡️ Vite pour un bundling ultra-rapide
- 🎨 Sass avec structure **7-1** et convention **BEM**
- 📘 JSDoc pour générer une documentation automatique
- 📁 Arborescence claire et prête pour des projets professionnels

---

## 🧱 Stack technique

| Outil / techno | Utilisation principale                     |
| -------------- | ------------------------------------------ |
| React          | UI frontend (JSX)                          |
| Vite           | Dev server + build                         |
| SCSS (Sass)    | Styling avec structure 7-1 + BEM           |
| JSDoc          | Documentation automatique du code JS/React |

---

## 🚀 Utilisation du template

### ✅ Avec le bouton GitHub

> **Crée un nouveau dépôt en 1 clic depuis ce template :**

[![Use this template](https://img.shields.io/badge/-Use%20this%20template-brightgreen?style=for-the-badge&logo=github)](https://github.com/morpheus0208/react-vite-jsdoc-template/generate)

---

### 🧩 Avec degit (local sans GitHub)

```bash
npx degit morpheus0208/react-vite-jsdoc-template mon-projet
cd mon-projet
npm install
npm run dev
```

---

## 🔧 Scripts disponibles

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Lance le serveur Vite                |
| `npm run build`   | Build de production                  |
| `npm run preview` | Lance un serveur local sur le build  |
| `npm run doc`     | Génère la documentation dans `/docs` |

---

## 📂 Structure SCSS (pattern 7-1)

```
src/
└── styles/
    ├── abstracts/      // variables, mixins, fonctions
    ├── base/           // reset, typographie
    ├── components/     // éléments UI BEM (boutons, cartes, etc.)
    ├── layout/         // header, footer, grid
    ├── pages/          // styles spécifiques aux pages
    ├── themes/         // dark/light mode (optionnel)
    └── vendors/        // styles externes ou lib CSS
```

---

## 📘 Générer la documentation JSDoc

```bash
npm run doc
```

Puis ouvre : `docs/index.html` dans ton navigateur.

---

## 🙌 Contributions

Tu peux forker ce repo ou l'utiliser comme point de départ.  
N’hésite pas à proposer des issues, des améliorations ou des pull requests !

---

## 📚 Liens utiles

- [Documentation React](https://react.dev/)
- [Guide officiel Vite](https://vitejs.dev/guide/)
- [Guide Sass (7-1)](https://sass-guidelin.es/#architecture)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
