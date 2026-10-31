# Atelier FM — Musiques actuelles et jazz

Un atelier en ligne, libre et gratuit, pour travailler la formation musicale en **musiques actuelles et jazz** : quiz de cours, lecture et oreille, degrés et grilles, rythme et batterie, écoute de morceaux.

Il a été conçu pour les cours de FM des **cycles 1 et 2** de conservatoire, mais il sert à tout élève ou enseignant de musiques actuelles.

👉 **Utiliser l'atelier :** https://mlevan8395.github.io/atelier-fm/

## Installer l'appli sur un téléphone ou un ordinateur

L'atelier s'installe comme une application, gratuitement et sans passer par une boutique :

- **Android** (Chrome) : ouvre le site, puis touche le bouton **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, sons compris (seuls les liens YouTube demandent une connexion). Elle se met à jour toute seule à chaque ouverture avec une connexion : une modification faite sur GitHub arrive chez les élèves sans rien réinstaller.

## Ce qu'on y trouve

| Onglet | Exercices |
|---|---|
| **Quiz de cours** | 100 questions par cycle, 20 tirées au hasard à chaque série, avec une explication pour chaque réponse |
| **Intervalles et accords** | Reconnaissance **à la lecture** (portée seule) ou **à l'oreille** (son seul), jamais les deux en même temps |
| **Degrés et grilles** | Degrés, cadences, dictée de degrés à l'oreille (au piano, tempo réglable), analyse de grille, transposition, grilles de vrais morceaux. Les enchaînements sont générés au hasard selon les règles de l'harmonie tonale |
| **Rythme et batterie** | Compter une mesure (1 i et a, 1 ti ti), reconnaître un groove ou une clave, passer d'une partition de batterie à la grille et inversement. Les grooves varient à chaque fois |
| **Écoute** | Morceaux à écouter (lien direct vers la vidéo YouTube, officielle quand elle existe) : style, instrument, son de guitare, clavier, effet, placement rythmique, type de chant |

Un bouton **Cycle 1 / Cycle 2** adapte toutes les questions au niveau.

## Principes

- **Aucune donnée collectée.** Les scores restent dans le navigateur de l'élève. Pas de compte, pas de publicité, pas de cookie de suivi.
- **Rien à installer.** Une page web. Pour l'utiliser hors ligne, télécharge le dossier : ouverte directement depuis le disque (`index.html`), la page remplace les sons de piano et de batterie par des sons de synthèse, car le navigateur bloque la lecture des fichiers locaux ; lancée depuis un petit serveur local (`python3 -m http.server`), elle a tous ses sons.
- **Conventions de notation françaises** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G ») ; intervalles notés ♭2, 2, ♭3, 3…
- **Pas d'extrait audio protégé** : les morceaux sont cités, et un lien ouvre la vidéo sur YouTube (version officielle ou chaîne de l'artiste quand elle existe). Les exercices utilisent des échantillons libres de piano et de batterie (dossier `sons/`, voir les crédits).
- **Thème sombre** par défaut, avec un bouton pour passer en thème clair.

## Contribuer

Tu es prof de musiques actuelles et tu veux ajouter des questions, des morceaux, des grilles ou corriger une erreur ? Tout le contenu est dans **un seul fichier**, [`contenu/contenu.js`](contenu/contenu.js), séparé du code.

Voir **[CONTRIBUER.md](CONTRIBUER.md)** : pas besoin d'être développeur.

## Licences

- **Code** (`index.html`) : licence [MIT](LICENSE).
- **Contenu pédagogique** (`contenu/`) : [Creative Commons BY-SA 4.0](LICENCE-CONTENU.md). Tu peux le réutiliser et le modifier, en citant l'auteur et en partageant sous la même licence.
- **Sons** (`sons/`) : piano sous licence CC BY 3.0, batterie et percussions en CC0 (domaine public). Détails dans [sons/LISEZMOI.md](sons/LISEZMOI.md).

## Crédits

- Conception et contenu : Mickael Le Van, professeur de musiques actuelles et jazz.
- Développement : réalisé avec l'aide de Claude (Anthropic).
- Glyphes musicaux (clé de sol, altérations, silences) : tracés issus de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police.
- Piano : **Salamander Grand Piano V3**, par Alexander Holm, licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) (https://archive.org/details/SalamanderGrandPianoV3), dans la version MP3 du projet Tone.js. Notes raccourcies et passées en mono.
- Batterie, claves et cloche : **Virtuosity Drums** (batteur : Austin McMahon), licence CC0 (https://github.com/sfzinstruments/virtuosity_drums). Mélangés, raccourcis et convertis en MP3.
- Polices : Bodoni Moda (titre) et Atkinson Hyperlegible (Google Fonts, licence SIL OFL) ; accords et degrés en Verdana (police du système).
