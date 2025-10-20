# 📚 Study Hub - Votre Compagnon d'Étude Ultime

<div align="center">

**Une application web moderne et complète pour maximiser votre productivité d'étude**

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/GlamgarOnDiscord/study-website)
[![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[🚀 Demo Live](#) • [📖 Documentation](#fonctionnalités-) • [🐛 Signaler un Bug](https://github.com/GlamgarOnDiscord/study-website/issues)

</div>

---

## 🌟 Aperçu

Study Hub est une application web tout-en-un conçue pour les étudiants modernes. Combinant **design glassmorphism**, **animations fluides** et **fonctionnalités puissantes**, elle vous aide à rester concentré, organisé et productif.

### ✨ Nouveautés v2.0

- 🎯 **Mode Étude Flashcards** - Modal immersif avec navigation et progression
- 🔄 **Export/Import** - Sauvegardez et transférez vos données
- 🎨 **Filtres Tâches** - Visualisez toutes/actives/complétées
- ⌨️ **Raccourcis Clavier** - Navigation rapide au clavier
- 💾 **Auto-Save** - Sauvegarde automatique toutes les 10s
- 🌙 **Dark Mode** - Design dark par défaut
- ♿ **Accessibilité WCAG AA** - Pour tous les utilisateurs

---

## 🎯 Fonctionnalités Principales

### ⏱️ Timer Pomodoro Intelligent

- ⚡ **Presets rapides** : 15, 25, 45 minutes
- 🔔 **Notifications navigateur** : Alertes à la fin
- 🎵 **Musique d'ambiance** : Lecteur audio intégré
- ⌨️ **Raccourcis** : Ctrl+Space, Ctrl+R, Ctrl+M
- 📊 **Titre dynamique** : Affiche le temps restant

### ✅ To-Do List Avancée

- ✨ **Checkbox interactifs** : Animation au clic
- 🎯 **Filtres** : Toutes / Actives / Complétées
- 📈 **Statistiques** : Total et complétées en temps réel
- 🗑️ **Suppression facile** : Bouton au survol
- 💾 **Persistence** : LocalStorage automatique

### 📝 Notes Rapides

- 📅 **Horodatage** : Date de création automatique
- 🎨 **Grid responsive** : Adapté à tous les écrans
- ✏️ **Édition simple** : Créez et supprimez facilement
- 🌈 **Cards modernes** : Design glassmorphism

### 🎴 Flashcards avec Mode Étude

**Mode Liste** :
- 🔄 **Flip 3D** : Retournement fluide
- 🎲 **Carte aléatoire** : Révision surprise
- 🎨 **Design différencié** : Question vs Réponse

**Mode Étude** (NOUVEAU) :
- 📺 **Affichage plein écran** : Une carte à la fois
- ⬅️➡️ **Navigation** : Précédent/Suivant avec flèches
- 📊 **Barre de progression** : Visualisation de l'avancement
- 🔀 **Mélange** : Ordre aléatoire
- ⏱️ **Auto-flip** : Retournement automatique après 3s
- ⌨️ **Raccourcis** : ←/→ navigation, Espace/Enter flip, Esc fermer

### 💾 Gestion des Données

- 📤 **Export JSON** : Téléchargez toutes vos données
- 📥 **Import JSON** : Restaurez ou transférez vos données
- 💽 **Auto-Save** : Sauvegarde automatique toutes les 10s
- 🔒 **LocalStorage** : Persistence locale des données

---

## 🎨 Design & UX

### Système de Design Moderne

- 🎨 **Multi-Fonts** : Outfit (titres) + Inter (corps) + Caveat (accents)
- 🌈 **Palette Cohérente** : #00BFFF avec variations et gradients
- 💎 **Glassmorphism** : backdrop-blur sur toutes les cartes
- ✨ **Animations Fluides** : 0.3-0.6s avec easing naturel
- 🌙 **Dark Mode** : Fond #0A0E1A par défaut
- 🔆 **Glow Effects** : Ombres lumineuses sur éléments importants

### Responsive Design

| Device | Breakpoint | Layout |
|--------|-----------|---------|
| 📱 Mobile | 320px+ | Stack vertical, full width |
| 📲 Tablet | 768px+ | Grids 2 colonnes |
| 💻 Desktop | 1024px+ | Espacements généreux |
| 🖥️ Large | 1280px+ | Max 1200px container |

### Accessibilité ♿

- ✅ **aria-labels** sur tous les boutons
- ✅ **Focus states** visibles avec outline
- ✅ **Contraste WCAG AA** : 4.5:1 minimum
- ✅ **Navigation clavier** complète
- ✅ **Roles ARIA** pour screen readers
- ✅ **Reduced motion** support

---

## ⌨️ Raccourcis Clavier

### Globaux

| Raccourci | Action |
|-----------|--------|
| `Ctrl/Cmd + Space` | Démarrer/Pause le timer |
| `Ctrl/Cmd + R` | Réinitialiser le timer |
| `Ctrl/Cmd + M` | Toggle musique |

### Mode Étude

| Raccourci | Action |
|-----------|--------|
| `←` Flèche Gauche | Carte précédente |
| `→` Flèche Droite | Carte suivante |
| `Espace` ou `Enter` | Retourner la carte |
| `Esc` | Fermer le mode étude |

---

## 🚀 Installation & Utilisation

### Méthode 1 : Téléchargement Direct

1. Cliquez sur le bouton **Code** → **Download ZIP**
2. Extrayez le fichier ZIP dans un dossier
3. Ouvrez `index.html` dans votre navigateur

### Méthode 2 : Git Clone

```bash
git clone https://github.com/GlamgarOnDiscord/study-website.git
cd study-website
# Ouvrir index.html dans votre navigateur
```

### Méthode 3 : Live Server (Recommandé pour développement)

```bash
# Avec VS Code Live Server extension
npm install -g live-server
live-server
```

---

## 🛠️ Technologies Utilisées

### Front-End
- **HTML5** - Structure sémantique
- **CSS3** - Variables CSS, Grid, Flexbox, Animations
- **JavaScript ES6+** - Modules, Arrow functions, Destructuring

### Fonts
- **Outfit** - Google Fonts (Titres)
- **Inter** - Google Fonts (Corps)
- **Caveat** - Google Fonts (Accents)

### Outils
- **LocalStorage API** - Persistence des données
- **Notification API** - Alertes timer
- **FileReader API** - Import/Export JSON

---

## 📁 Structure du Projet

```
study-website/
├── index.html              # Page principale
├── README.md              # Documentation
├── src/
│   ├── css/
│   │   └── style.css      # Styles (1594 lignes)
│   ├── js/
│   │   └── main.js        # Logique (750+ lignes)
│   └── musique/
│       ├── music1.mp3     # Ambiance chill
│       └── music2.mp3     # Son TikTok
└── .vscode/
    └── settings.json      # Config VS Code
```

---

## 📊 Statistiques du Code

| Métrique | Valeur |
|----------|--------|
| **HTML** | ~420 lignes |
| **CSS** | ~1594 lignes |
| **JavaScript** | ~750 lignes |
| **Fonts** | 3 polices |
| **SVG** | 100% inline |
| **Animations** | 20+ keyframes |
| **Responsive** | 5 breakpoints |

---

## 🎯 Fonctionnalités Techniques

### Performance

- ⚡ **Lazy Loading** : SVG backgrounds avec IntersectionObserver
- 🎨 **GPU Acceleration** : transform/opacity uniquement
- 💾 **Optimisation Mémoire** : Cleanup des timeouts/intervals
- 📦 **Pas de Framework** : Vanilla JS pour performance maximale

### Sauvegarde des Données

```javascript
// Auto-save toutes les 10 secondes
setInterval(saveToLocalStorage, 10000);

// Save avant fermeture
window.addEventListener('beforeunload', saveToLocalStorage);
```

### Export Format JSON

```json
{
  "todos": [...],
  "notes": [...],
  "flashcards": [...],
  "exportDate": "2025-01-15T10:30:00.000Z",
  "version": "1.0"
}
```

---

## 🔮 Roadmap Future

- [ ] 🌈 **Thèmes de couleurs** - Personnalisation de la palette
- [ ] 📊 **Statistiques avancées** - Temps d'étude, graphiques
- [ ] 🔄 **Synchronisation Cloud** - Firebase/Supabase
- [ ] 📱 **PWA** - App installable
- [ ] 🧠 **Spaced Repetition** - Algorithme de révision
- [ ] 🎤 **Voice Notes** - Enregistrement audio
- [ ] 🌐 **Multi-langue** - i18n support
- [ ] 🤝 **Collaboration** - Partage de flashcards

---

## 🐛 Signaler un Bug / Suggestion

Si vous trouvez un bug ou avez une suggestion :

1. Vérifiez les [Issues existantes](https://github.com/GlamgarOnDiscord/study-website/issues)
2. Créez une [Nouvelle Issue](https://github.com/GlamgarOnDiscord/study-website/issues/new)
3. Fournissez un maximum de détails :
   - Navigateur et version
   - Étapes pour reproduire
   - Screenshots si possible

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment :

1. **Fork** le projet
2. Créez une **branche** (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Guidelines

- ✅ Code propre et commenté
- ✅ Respecter le style existant
- ✅ Tester sur mobile/desktop
- ✅ Pas d'emojis en production (SVG uniquement)
- ✅ Accessibilité WCAG AA minimum

---

## 📜 Licence & Attribution

**Open Source** - Vous pouvez utiliser et modifier librement ce projet.

### Conditions

- ✅ Attribution requise (lien vers le projet original)
- ✅ Conserver les crédits dans le footer
- ✅ Partager vos améliorations (apprécié)

```html
<!-- Attribution footer -->
Créé avec ❤️ par Glamgar
```

---

## 💖 Remerciements

Un grand merci à :

- **Claude AI** - Pour l'assistance au développement
- **Google Fonts** - Pour les polices gratuites
- **La communauté GitHub** - Pour l'inspiration

---

## 📧 Contact

**Glamgar** - [@GlamgarOnDiscord](https://github.com/GlamgarOnDiscord)

**Project Link** : [https://github.com/GlamgarOnDiscord/study-website](https://github.com/GlamgarOnDiscord/study-website)

---

<div align="center">

**⭐ Si ce projet vous a aidé, laissez une étoile !**

© 2023-2025 Study Hub by Glamgar. Tous droits réservés.

Fait avec ❤️ et beaucoup de ☕

</div>
