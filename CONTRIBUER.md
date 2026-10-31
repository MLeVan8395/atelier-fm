# Contribuer à l'Atelier de FM

Merci ! Ce projet est fait par et pour des profs de musiques actuelles. **Pas besoin d'être développeur** pour proposer du contenu.

## Trois façons de contribuer

1. **Signaler une erreur ou proposer une idée** : ouvre une *issue* (onglet « Issues » sur GitHub) et décris simplement ce qui ne va pas ou ce que tu proposes.
2. **Proposer des questions sans toucher au code** : ouvre une *issue* avec tes questions rédigées comme dans les modèles ci-dessous ; on les intégrera.
3. **Modifier directement le contenu** : édite le fichier [`contenu/contenu.js`](contenu/contenu.js) depuis GitHub (bouton crayon ✏️), puis propose ta modification (*pull request*).

## Règles d'écriture

- **Notes seules** en solfège : Do, Ré, Mi, Fa♯, Si♭… (jamais une lettre seule pour une note).
- **Accords et tonalités** en lettres : C, Am7, F♯7, B♭Maj7, « en G ».
- **Intervalles** : ♭2, 2, ♭3, 3, 4, ♯4, ♭5, 5, ♭6, 6, ♭7, 7, 8.
- **Altérations** : utiliser les vrais signes ♯ et ♭ (copier-coller depuis ce fichier).
- **Tutoiement** de l'élève, phrases courtes, vocabulaire adapté à des collégiens.
- **Morceaux** : titre exact et artiste. Ajoute l'identifiant de la vidéo YouTube dans la liste `YT` (les 11 caractères après `watch?v=`), en choisissant la version officielle ou celle de la chaîne de l'artiste. Sans identifiant, le lien ouvre une recherche YouTube. Vérifie à l'écoute ce que tu affirmes (instrument, effet, tonalité, accords).
- **Niveau** : `c:1` si la question convient dès le cycle 1, `c:2` si elle est réservée au cycle 2.

## Modèles

### Question de cours (`QUIZ1` pour le cycle 1, `QUIZ2` pour le cycle 2)

```js
{q:"Quelle note caractérise le mode mixolydien ?",
 o:["La ♭7","La ♯4","La ♭2","La 6 majeure en mineur"],
 a:0,
 e:"Mixolydien = gamme majeure avec ♭7 : Sweet Home Alabama (Lynyrd Skynyrd)."},
```

- `q` : la question ; `o` : 4 réponses ; `a` : numéro de la bonne réponse (0 = la première) ; `e` : l'explication affichée après la réponse.

### Question d'écoute (`LISTEN`)

```js
{cat:'fx', c:1, t:"Misirlou", a:"Dick Dale",
 q:"Quel effet donne ce son « surf » ?",
 o:["La reverb à ressort (spring)","Le chorus","Le flanger","La wah-wah"],
 e:"La reverb à ressort des amplis Fender."},
```

- `cat` : `inst` (instrument), `guit` (son de guitare), `clav` (clavier), `fx` (effet), `place` (placement rythmique), `voix` (chant).
- **La bonne réponse est toujours la première** de la liste `o` : l'ordre est mélangé à l'affichage.

### Style et morceaux (`STYLES`)

```js
{s:"Funk", c:1, d:"Groove en doubles croches, accent sur le 1, slap",
 songs:[["Superstition","Stevie Wonder"],["Cold Sweat","James Brown"]]},
```

### Analyse de grille (`ANA`)

```js
{c:2, k:'C', ch:['Dm7','G7','CMaj7','A7'], d:['IIm7','V7','IMaj7','V7/II']},
```

- `ch` : les accords ; `d` : les degrés attendus, dans le même ordre. Les degrés doivent faire partie de la liste `ANAOPT` du cycle.

### Grille de morceau commentée (`SONGQ`)

```js
{c:2, k:'E', song:"Isn't She Lovely — Stevie Wonder", show:"C♯m7 – F♯7 – A/B – E",
 q:"Quelle est la fonction de F♯7 ?", o:["V7/V","V7/VI","IV7","II7 diatonique"], a:0,
 e:"F♯7 va vers B (V)…"},
```

## Vérifier avant de proposer

Ouvre `index.html` dans ton navigateur (double-clic) : si la page s'affiche et que ta question apparaît, c'est bon. Si la page reste blanche, il manque sans doute une virgule ou un guillemet dans `contenu.js`.

## Licence de tes contributions

En contribuant, tu acceptes que ton contenu soit publié sous licence **CC BY-SA 4.0** (contenu) ou **MIT** (code), comme le reste du projet.
