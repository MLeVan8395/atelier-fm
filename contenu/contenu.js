// =====================================================================
//  Atelier de FM — contenu pédagogique
//  Licence : CC BY-SA 4.0 (voir LICENCE-CONTENU.md). Pour contribuer : CONTRIBUER.md
//  Règles d'écriture : notes seules en solfège (Do, Ré, Mi…), accords et tonalités
//  en lettres (C, Am7, « en G »), intervalles notés ♭2, 2, ♭3, 3, 4, ♯4, ♭5, 5…
//  Dans chaque question à choix, la PREMIÈRE option (o[0]) ou l'indice a est la bonne réponse :
//    QUIZ1/QUIZ2/SONGQ : champ a = indice de la bonne réponse
//    LISTEN : la bonne réponse est toujours o[0] (l'ordre est mélangé à l'affichage)
// =====================================================================
// ===== Données de cours =====
const QUIZ1=[
 {q:"Dans la notation des accords, la lettre A correspond à…",o:["La","Sol","Si","Do"],a:0,e:"A B C D E F G = La Si Do Ré Mi Fa Sol. Les lettres servent pour les accords ; une note seule s'écrit Do, Ré, Mi…"},
 {q:"Quelle suite de tons et demi-tons forme la gamme majeure ?",o:["1 – 1 – ½ – 1 – 1 – 1 – ½","1 – ½ – 1 – 1 – ½ – 1 – 1","½ – 1 – 1 – 1 – ½ – 1 – 1","1 – 1 – 1 – ½ – 1 – 1 – ½"],a:0,e:"Ton, ton, demi-ton, ton, ton, ton, demi-ton : en Do, les demi-tons sont Mi–Fa et Si–Do."},
 {q:"Combien de demi-tons dans une tierce majeure (3) ?",o:["4","3","5","2"],a:0,e:"3 = 4 demi-tons (Do–Mi). La tierce mineure ♭3 en compte 3 (Do–Mi♭)."},
 {q:"Un accord majeur se construit avec…",o:["1 3 5","1 ♭3 5","1 4 5","1 3 ♯5"],a:0,e:"Fondamentale, tierce majeure, quinte juste. Avec ♭3, l'accord devient mineur."},
 {q:"Quelle note change entre C et Cm ?",o:["La tierce : Mi devient Mi♭","La quinte : Sol devient Sol♭","La fondamentale","Aucune"],a:0,e:"Seule la tierce change. C'est ce qu'on entend dans Creep (Radiohead) quand C devient Cm."},
 {q:"En C majeur, quels accords portent les degrés I, IV et V ?",o:["C, F, G","C, E, G","C, Dm, G","C, F, Am"],a:0,e:"I = C, IV = F, V = G : les trois accords de base du blues, du rock'n'roll et de nombreuses chansons."},
 {q:"Quel accord trouve-t-on sur le VIe degré d'une gamme majeure ?",o:["Un accord mineur","Un accord majeur","Un accord diminué","Un accord augmenté"],a:0,e:"En C : VIm = Am. C'est le relatif mineur de la tonalité."},
 {q:"Quel est le relatif mineur de C majeur ?",o:["A mineur","E mineur","C mineur","D mineur"],a:0,e:"Même armure, même notes : La mineur commence sur le VIe degré de Do majeur."},
 {q:"Combien de dièses à l'armure de G majeur ?",o:["Un : Fa♯","Deux : Fa♯ et Do♯","Aucun","Un : Do♯"],a:0,e:"Chaque quinte ajoute un dièse : G (1♯), D (2♯), A (3♯)…"},
 {q:"Quel est l'ordre des dièses ?",o:["Fa Do Sol Ré La Mi Si","Si Mi La Ré Sol Do Fa","Do Ré Mi Fa Sol La Si","Fa Sol La Si Do Ré Mi"],a:0,e:"Il suit le cycle des quintes. L'ordre des bémols est l'inverse : Si Mi La Ré Sol Do Fa."},
 {q:"Combien de mesures dure le plus souvent une grille de blues ?",o:["12","8","16","32"],a:0,e:"La grille de 12 mesures, avec I, IV et V : la forme la plus importante des musiques actuelles."},
 {q:"Dans le rythme rock de base, où joue la caisse claire ?",o:["Sur 2 et 4","Sur 1 et 3","Sur tous les temps","Sur les « et »"],a:0,e:"C'est le backbeat. La grosse caisse joue sur 1 et 3, la charleston en croches."},
 {q:"Comment compte-t-on un débit de doubles croches ?",o:["1 i et a","1 et 2 et","1 ti ti","1 2 3 4"],a:0,e:"Quatre doubles croches par temps : 1 i et a, 2 i et a…"},
 {q:"Comment compte-t-on un débit de croches ?",o:["1 et 2 et","1 i et a","1 ti ti","1 a 2 a"],a:0,e:"Deux croches par temps : le temps, puis le « et »."},
 {q:"Dans le format chanson, quelle partie revient avec les mêmes paroles à chaque fois ?",o:["Le refrain","Le couplet","Le pont","L'intro"],a:0,e:"Le couplet raconte l'histoire (paroles qui changent), le refrain est la partie mémorable, répétée."},
 {q:"Que contient un power chord (C5) ?",o:["La fondamentale et la quinte","La fondamentale et la tierce","Trois notes : 1 3 5","La fondamentale et la quarte"],a:0,e:"Sans tierce, il n'est ni majeur ni mineur : idéal avec la saturation (Back in Black, Smoke on the Water)."},
 {q:"Combien de notes dans une gamme pentatonique ?",o:["5","6","7","4"],a:0,e:"Penta = cinq. La pentatonique mineure de La : La Do Ré Mi Sol."},
 {q:"De quel pays vient le reggae ?",o:["La Jamaïque","Cuba","Le Brésil","Les États-Unis"],a:0,e:"Comme le ska et le rocksteady avant lui."},
 {q:"Dans quelle décennie naît le rock'n'roll ?",o:["Les années 1950","Les années 1930","Les années 1970","Les années 1990"],a:0,e:"Chuck Berry, Elvis Presley, Bill Haley : le blues rencontre la country."},
 {q:"Quel élément de la batterie se joue au pied et donne la pulsation grave ?",o:["La grosse caisse","La caisse claire","La ride","Le tom alto"],a:0,e:"La grosse caisse (« Boum ») ; la caisse claire (« Ka ») marque le backbeat."},
 {q:"Quel enchaînement forme une cadence parfaite ?",o:["V → I","IV → I","I → V","V → VIm"],a:0,e:"La dominante qui se résout sur la tonique : la conclusion la plus forte."},
];
const QUIZ2=[
 {q:"Une quinte renversée devient…",o:["Une quarte","Une sixte","Une tierce","Une quinte"],a:0,e:"Chiffre + chiffre = 9 : 5 + 4 = 9. De même, 3 ↔ 6 et 2 ↔ 7."},
 {q:"Renverser une tierce majeure donne…",o:["Une sixte mineure","Une sixte majeure","Une quarte juste","Une tierce mineure"],a:0,e:"Majeur ↔ mineur, juste ↔ juste : Do–Mi (3) devient Mi–Do (♭6)."},
 {q:"Quelle note caractérise le mode mixolydien ?",o:["La ♭7","La ♯4","La ♭2","La 6 majeure en mineur"],a:0,e:"Mixolydien = gamme majeure avec ♭7 : Sweet Home Alabama (Lynyrd Skynyrd), Norwegian Wood (Beatles)."},
 {q:"Quel mode est mineur avec une sixte majeure ?",o:["Dorien","Éolien","Phrygien","Locrien"],a:0,e:"Dorien : 1 2 ♭3 4 5 6 ♭7. So What (Miles Davis), Oye Como Va (Santana)."},
 {q:"Quel est le mode le plus brillant ?",o:["Lydien","Ionien","Mixolydien","Locrien"],a:0,e:"Du lydien au locrien, chaque mode baisse une seule note d'un demi-ton. Le lydien a la ♯4."},
 {q:"Qu'est-ce qui distingue la musique modale de la musique tonale ?",o:["Pas d'enchaînement cadentiel V7 → I : c'est la couleur du mode qui compte","Elle n'utilise que les touches blanches","Elle est toujours en mineur","Elle n'a pas de mélodie"],a:0,e:"Le modal est plus ancien ; la musique tonale est propre à l'Occident et apparaît à la fin du Moyen Âge."},
 {q:"Dans G7, entre quelles notes se trouve le triton ?",o:["Si et Fa","Sol et Ré","Sol et Fa","Ré et Fa"],a:0,e:"La sensible Si monte vers Do, le Fa descend vers Mi : la tension se résout sur C."},
 {q:"Quelle gamme mineure donne un vrai V7 (avec la sensible) ?",o:["La mineure harmonique","La mineure naturelle","La pentatonique mineure","Le mode dorien"],a:0,e:"Elle hausse le 7e degré : en A mineur, Sol♯, et le V devient E7."},
 {q:"Combien existe-t-il d'accords de 7e diminuée différents ?",o:["3","12","4","6"],a:0,e:"Accord symétrique en tierces mineures : chaque renversement redonne un dim7, par enharmonie."},
 {q:"Bdim7 contient les notes de G7♭9…",o:["Sans la fondamentale Sol","Sans la tierce Si","Sans la septième Fa","Avec une note en plus"],a:0,e:"C'est pourquoi le VIIdim7 peut remplacer le V7."},
 {q:"En C, quelle est la dominante secondaire de Dm (V7/II) ?",o:["A7","D7","G7","E7"],a:0,e:"Une quinte au-dessus de Ré : La. A7 contient Do♯, la sensible de Ré."},
 {q:"Dans le pont des Rhythm Changes en B♭, D7 – G7 – C7 – F7, D7 est…",o:["Le V du V du V du V","Le V du V","Le IV","Le VI"],a:0,e:"Une cascade de dominantes : chaque accord est la dominante du suivant jusqu'à F7 (V)."},
 {q:"En C majeur, quel accord est emprunté à C mineur (IVm) ?",o:["Fm","F","Dm","Am"],a:0,e:"Échange intermodal : même tonique, autre mode. On l'entend dans Creep et Space Oddity."},
 {q:"La substitution tritonique remplace G7 par…",o:["D♭7","C♯m7","D7","B♭7"],a:0,e:"Fondamentale à un triton. G7 et D♭7 partagent leurs tierce et septième (Si/Do♭ et Fa)."},
 {q:"Dans un blues avec quick change, que joue-t-on à la 2e mesure ?",o:["Le IV7","Le I7","Le V7","Le VIm7"],a:0,e:"I7 – IV7 – I7 – I7… Exemple : Malted Milk (Robert Johnson)."},
 {q:"Quel est le chiffrage de la gamme blues ?",o:["1 ♭3 4 ♭5 5 ♭7","1 2 ♭3 4 5 ♭6 ♭7","1 2 3 5 6","1 ♭3 4 5 ♭7"],a:0,e:"La pentatonique mineure + la blue note ♭5. Cowboys from Hell (Pantera) est construit sur cette gamme."},
 {q:"Quelles sont les blue notes ?",o:["♭3, ♭5 et ♭7","♭2, ♭6 et 7","♯4 et ♭7","3, 5 et 7"],a:0,e:"Jouées même sur des accords majeurs, souvent « entre » deux demi-tons (bend, glissé)."},
 {q:"Vers quelle ville le blues du Delta s'électrifie-t-il dans les années 1950 ?",o:["Chicago","La Nouvelle-Orléans","Memphis","Nashville"],a:0,e:"Muddy Waters, Howlin' Wolf, Buddy Guy : le Chicago blues électrique."},
 {q:"F/G (F sur basse Sol) sonne comme…",o:["G9sus4 : couleur mixolydienne","Fmaj7","G7♭9","Dm7"],a:0,e:"Triade majeure un ton sous la basse = mixolydien. Exemple : I Don't Need No Doctor (John Mayer)."},
 {q:"Dans la gamme bebop majeure, quelle note de passage ajoute-t-on ?",o:["La ♭6","La ♭7","La ♯4","La ♭3"],a:0,e:"En alternant C6 et Bdim7 renversés, la mélodie monte : Do Ré Mi Fa Sol La♭ La Si Do."},
 {q:"V → VIm (G7 → Am en C), c'est une cadence…",o:["Rompue","Parfaite","Plagale","Demi-cadence"],a:0,e:"On attend I, on entend VIm : effet de surprise."},
 {q:"Jouer « au fond du temps », c'est jouer…",o:["Laid back, légèrement derrière le temps","Devant le temps","En doubles croches","Sans métronome"],a:0,e:"Détendu, lourd sans ralentir : D'Angelo, Bob Marley, B.B. King."},
 {q:"Dans une clave 3-2, la première mesure contient…",o:["3 coups","2 coups","4 coups","1 coup"],a:0,e:"3 coups puis 2. En 2-3, on commence par la mesure à 2 coups (Ran Kan Kan, Tito Puente)."},
 {q:"Dans le skank beat (thrash), où joue la caisse claire ?",o:["Sur tous les « et »","Sur 2 et 4","Sur toutes les doubles croches","Sur le 3 seulement"],a:0,e:"Grosse caisse sur les temps, caisse claire entre les deux : Necrophobic (Slayer), Dyers Eve (Metallica)."},
 {q:"Que fait un compresseur ?",o:["Il égalise le signal : remonte les notes faibles, baisse les trop fortes","Il ajoute de l'écho","Il double le son à l'octave","Il sature le son"],a:0,e:"C'est l'effet le plus utilisé à la basse et au mixage."},
 {q:"Quel effet entend-on sur le riff de Seven Nation Army (The White Stripes) ?",o:["Un octaver","Un flanger","Une wah-wah","Un chorus"],a:0,e:"La guitare passée à l'octave inférieure sonne comme une basse."},
 {q:"Le solo de Trevor Rabin sur Owner of a Lonely Heart (Yes) utilise…",o:["Un harmoniseur à la quinte","Une reverb à ressort","Un delay slapback","Une pédale fuzz"],a:0,e:"L'harmoniseur ajoute une voix à un intervalle fixe."},
 {q:"Quelle sourdine Miles Davis utilise-t-il dans les années 50 ?",o:["La Harmon","La sèche","Le plunger","La sourdine bol"],a:0,e:"Son feutré, intime, un peu métallique (Bye Bye Blackbird)."},
 {q:"Dans l'enveloppe ADSR, le A correspond à…",o:["L'attaque","L'amplitude","L'aigu","L'accord"],a:0,e:"Attack, Decay, Sustain, Release : attaque, chute, maintien, extinction."},
 {q:"Les harmoniques d'un son sont…",o:["Des multiples entiers de la fréquence fondamentale","Des bruits parasites","Toujours plus graves que la fondamentale","Les notes de l'accord joué"],a:0,e:"Pour un La à 110 Hz : 220, 330, 440 Hz… Leur dosage fait le timbre."},
 {q:"L'oreille humaine entend à peu près de…",o:["20 Hz à 20 000 Hz","200 Hz à 2 000 Hz","2 Hz à 200 Hz","20 Hz à 2 000 Hz"],a:0,e:"Elle entend le mieux les médiums, là où se trouve la voix."},
 {q:"Le djent se reconnaît à…",o:["Des guitares 7 ou 8 cordes très graves et des riffs syncopés en palm mute","Des cuivres et un tempo rapide","Un son clair et des arpèges","Une boîte à rythmes TR-808"],a:0,e:"Meshuggah, Periphery, Animals as Leaders."},
];
// Grilles de morceaux (cycle 2 sauf mention)
const SONGQ=[
 {c:1,k:'C',song:"La Bamba — Ritchie Valens",show:"C – F – G – F",q:"Quels degrés ?",o:["I – IV – V – IV","I – V – IV – V","I – II – III – II","I – VIm – IV – V"],a:0,e:"Les trois accords majeurs de la tonalité."},
 {c:1,k:'C',song:"Let It Be — The Beatles",show:"C – G – Am – F",q:"Quels degrés ?",o:["I – V – VIm – IV","I – IV – VIm – V","I – V – IIIm – IV","I – II – VIm – IV"],a:0,e:"Une des suites les plus utilisées de la pop."},
 {c:1,k:'G',song:"Creep — Radiohead",show:"G – B – C – Cm",q:"Quelle note change entre C et Cm ?",o:["Mi devient Mi♭","Do devient Si","Sol devient Sol♯","Rien"],a:0,e:"Seule la tierce change. Au cycle 2 : Cm est le IVm emprunté à G mineur, et B le V/VI."},
 {c:2,k:'C',song:"All of Me — standard",show:"C6 – E7 – A7 – Dm",q:"Quelle est la fonction de E7 ?",o:["V7/VI","V7/II","V7","IV7"],a:0,e:"E7 est la dominante de Am (VI). Puis A7 = V7/II, qui va vers Dm."},
 {c:2,k:'F',song:"Yesterday — The Beatles",show:"F – Em7 – A7 – Dm",q:"Que forment Em7 – A7 ?",o:["Un II–V secondaire qui tonicise Dm","Une cadence plagale","Un emprunt à F mineur","Une substitution tritonique"],a:0,e:"Em7 = IIm7/VI, A7 = V7/VI : on va vers Dm (VIm)."},
 {c:2,k:'C',song:"Space Oddity — David Bowie (refrain)",show:"C – E – F – Fm",q:"Quelle est la fonction de Fm ?",o:["IVm, emprunté à C mineur","IV","V/IV","IIm"],a:0,e:"Le La devient La♭ : la couleur s'assombrit. Le C qui suit sonne comme le V du IV."},
 {c:2,k:'E',song:"Isn't She Lovely — Stevie Wonder",show:"C♯m7 – F♯7 – A/B – E",q:"Quelle est la fonction de F♯7 ?",o:["V7/V","V7/VI","IV7","II7 diatonique"],a:0,e:"F♯7 va vers B (V). A/B est un V « adouci » (triade du IV sur la basse du V), puis E (I)."},
 {c:2,k:'B♭',song:"Rhythm Changes — pont",show:"D7 – G7 – C7 – F7",q:"Comment s'appelle cet enchaînement ?",o:["Une cascade de dominantes secondaires","Un blues mineur","Un emprunt modal","Une cadence plagale"],a:0,e:"V/V/V/V – V/V/V – V/V – V, puis retour sur B♭."},
 {c:2,k:'F',song:"Have You Met Miss Jones? — Rodgers & Hart",show:"FMaj7 – F♯dim7 – Gm7 – C7",q:"Quel est le rôle de F♯dim7 ?",o:["Il remplace le V7/II (D7) et crée une basse chromatique","C'est le VIIe degré de F","C'est un emprunt à F mineur","C'est une substitution tritonique"],a:0,e:"F♯dim7 = D7♭9 sans fondamentale. La basse monte : Fa – Fa♯ – Sol."},
 {c:2,k:'C',song:"The Girl from Ipanema — A. C. Jobim",show:"FMaj7 – G7 – Gm7 – G♭7",q:"G♭7 est…",o:["La substitution tritonique de C7","Un emprunt à C mineur","Le V7/V","Un accord diminué"],a:0,e:"G♭7 remplace C7 (V7/IV) : la basse descend par demi-tons Sol – Sol♭ – Fa."},
 {c:2,k:'B♭',song:"Stella by Starlight — V. Young",show:"A♭7 – B♭Maj7",q:"Comment s'appelle cette cadence ?",o:["La cadence « backdoor » (♭VII7 → I)","La cadence parfaite","La cadence rompue","La demi-cadence"],a:0,e:"A♭7 est emprunté à B♭ mineur et se résout sur B♭Maj7."},
];
// Grooves de batterie : 16 cases (doubles croches) ou 12 (triolets)
const GROOVES=[
 {id:'rock',name:'Rock / pop',c:1,n:16,hh:[0,2,4,6,8,10,12,14],sn:[4,12],bd:[0,8],e:"Grosse caisse sur 1 et 3, caisse claire sur 2 et 4 (le backbeat), charleston en croches."},
 {id:'disco',name:'Disco (four on the floor)',c:1,n:16,hh:[2,6,10,14],sn:[4,12],bd:[0,4,8,12],e:"Grosse caisse sur tous les temps, charleston ouverte sur les « et »."},
 {id:'shuffle',name:'Shuffle (blues)',c:1,n:12,hh:[0,2,3,5,6,8,9,11],sn:[3,9],bd:[0,6],e:"Croches ternaires « longue – courte » : on compte 1 ti ti. Pride and Joy (Stevie Ray Vaughan)."},
 {id:'funkgh',name:'Funk avec ghost notes',c:2,n:16,hh:[...Array(16).keys()],sn:[4,12],gh:[7,9,15],bd:[0,2,10],e:"Charleston en doubles croches, ghost notes très légères entre les backbeats : Funky Drummer (James Brown)."},
 {id:'funksy',name:'Funk syncopé',c:2,n:16,hh:[0,2,4,6,8,10,12,14],sn:[4,12],bd:[0,3,7,10,14],e:"La grosse caisse joue aussi sur le « a » du temps : Cissy Strut (The Meters)."},
 {id:'onedrop',name:'Reggae one drop',c:2,n:16,hh:[0,2,4,6,8,10,12,14],xs:[8],bd:[8],e:"Rien sur le 1 : grosse caisse et cross-stick sur le 3. Is This Love (Bob Marley)."},
 {id:'steppers',name:'Reggae steppers',c:2,n:16,hh:[0,2,4,6,8,10,12,14],xs:[8],bd:[0,4,8,12],e:"Grosse caisse sur tous les temps : Exodus (Bob Marley)."},
 {id:'swing',name:'Swing (jazz)',c:2,n:12,ride:[0,3,5,6,9,11],hp:[3,9],e:"Ride « Ding – Ding ga », charleston au pied sur 2 et 4."},
 {id:'skank',name:'Skank beat (thrash)',c:2,n:16,hh:[0,4,8,12],sn:[2,6,10,14],bd:[0,4,8,12],e:"Grosse caisse sur les temps, caisse claire sur tous les « et » : une polka très rapide."},
 {id:'dbl',name:'Double pédale (metal)',c:2,n:16,hh:[0,4,8,12],sn:[4,12],bd:[...Array(16).keys()],e:"Backbeat rock, grosse caisse en doubles croches continues : Electric Eye (Judas Priest)."},
 {id:'blast',name:'Blast beat',c:2,n:16,hh:[...Array(16).keys()],sn:[...Array(16).keys()],bd:[...Array(16).keys()],e:"Tous les éléments sur toutes les doubles croches : death et black metal."},
];
// Styles et morceaux (c = cycle minimum)
const STYLES=[
 {s:"Delta blues",c:2,d:"Guitare acoustique, slide, voix seule (1920–1930)",songs:[["Cross Road Blues","Robert Johnson"],["Death Letter Blues","Son House"]]},
 {s:"Chicago blues",c:1,d:"Blues électrifié, harmonica, section rythmique (1950)",songs:[["Hoochie Coochie Man","Muddy Waters"],["Smokestack Lightnin'","Howlin' Wolf"]]},
 {s:"Blues-rock",c:1,d:"Guitare saturée, solos, shuffle",songs:[["Pride and Joy","Stevie Ray Vaughan"],["Red House","Jimi Hendrix"],["The Thrill Is Gone","B.B. King"]]},
 {s:"Rock'n'roll",c:1,d:"Blues + country, années 1950",songs:[["Johnny B. Goode","Chuck Berry"],["Hound Dog","Elvis Presley"]]},
 {s:"Hard rock",c:1,d:"Riffs saturés, voix puissante, solos",songs:[["Back in Black","AC/DC"],["Smoke on the Water","Deep Purple"],["Whole Lotta Love","Led Zeppelin"]]},
 {s:"Rock progressif",c:2,d:"Formes longues, mesures irrégulières, claviers",songs:[["Roundabout","Yes"],["Money","Pink Floyd"]]},
 {s:"Punk",c:1,d:"Court, rapide, trois accords",songs:[["Blitzkrieg Bop","Ramones"],["London Calling","The Clash"]]},
 {s:"Grunge",c:1,d:"Saturation brute, couplet calme / refrain fort",songs:[["Smells Like Teen Spirit","Nirvana"],["Black Hole Sun","Soundgarden"]]},
 {s:"Thrash metal",c:2,d:"Très rapide, riffs serrés en palm mute, skank beat",songs:[["Master of Puppets","Metallica"],["Necrophobic","Slayer"]]},
 {s:"Djent",c:2,d:"7 ou 8 cordes très graves, riffs syncopés",songs:[["Bleed","Meshuggah"],["CAFO","Animals as Leaders"]]},
 {s:"Soul",c:1,d:"Héritage gospel, voix, cuivres (Motown, Stax)",songs:[["Respect","Aretha Franklin"],["What's Going On","Marvin Gaye"]]},
 {s:"Funk",c:1,d:"Groove en doubles croches, accent sur le 1, slap",songs:[["Superstition","Stevie Wonder"],["Cold Sweat","James Brown"],["What Is Hip?","Tower of Power"]]},
 {s:"Disco",c:1,d:"Four on the floor, cordes, basse octaviée",songs:[["Le Freak","Chic"],["Good Times","Chic"]]},
 {s:"Reggae",c:1,d:"One drop, contretemps à la guitare, basse en avant",songs:[["Is This Love","Bob Marley & the Wailers"],["Exodus","Bob Marley & the Wailers"]]},
 {s:"Ska",c:2,d:"Tempo rapide, contretemps, cuivres (Jamaïque, 1960)",songs:[["Guns of Navarone","The Skatalites"]]},
 {s:"Hip-hop",c:1,d:"Breakbeats, samples, flow rappé",songs:[["The Message","Grandmaster Flash"],["Can I Kick It?","A Tribe Called Quest"]]},
 {s:"French touch",c:2,d:"House filtrée, samples disco",songs:[["Around the World","Daft Punk"],["One More Time","Daft Punk"]]},
 {s:"Swing (jazz)",c:1,d:"Big band, croches ternaires, danse",songs:[["Take the A Train","Duke Ellington"],["Sing, Sing, Sing","Benny Goodman"]]},
 {s:"Bebop",c:2,d:"Tempos rapides, harmonies complexes, petites formations",songs:[["Now's the Time","Charlie Parker"],["Salt Peanuts","Dizzy Gillespie"]]},
 {s:"Jazz modal",c:2,d:"Improvisation sur des modes, peu d'accords",songs:[["So What","Miles Davis"],["Maiden Voyage","Herbie Hancock"]]},
 {s:"Bossa nova",c:2,d:"Samba ralentie, guitare, voix douce, accords à 4 sons",songs:[["The Girl from Ipanema","Antônio Carlos Jobim"]]},
 {s:"Chanson à texte",c:1,d:"Texte poétique, guitare ou piano",songs:[["La Mauvaise Réputation","Georges Brassens"],["Ne me quitte pas","Jacques Brel"]]},
];

// Questions d'écoute (cat, cycle minimum, morceau, artiste, question, options (la 1re est la bonne), explication, h=hors livret)
const LISTEN=[
 // Instruments
 {cat:'inst',c:1,t:"Sing, Sing, Sing",a:"Benny Goodman",q:"Quel instrument ouvre le morceau, seul ?",o:["Les toms de la batterie","La contrebasse","Le piano","Les claquements de mains"],e:"Gene Krupa joue un motif obstiné sur les toms ; la clarinette de Benny Goodman arrive ensuite."},
 {cat:'inst',c:1,t:"Sing, Sing, Sing",a:"Benny Goodman",q:"Quel est l'instrument soliste de Benny Goodman ?",o:["La clarinette","Le saxophone ténor","La trompette","Le trombone"],e:"Benny Goodman, « roi du swing », est clarinettiste. La clarinette est en Si♭ : un instrument transpositeur."},
 {cat:'inst',c:2,t:"So What",a:"Miles Davis",q:"Quel instrument joue la phrase d'appel du thème ?",o:["La contrebasse","Le saxophone alto","La trompette","Le piano"],e:"Paul Chambers à la contrebasse pose la question ; le piano et les cuivres répondent « So what ».",h:0},
 {cat:'inst',c:1,t:"Englishman in New York",a:"Sting",q:"Quel instrument joue les solos ?",o:["Le saxophone soprano","La clarinette","Le saxophone baryton","La flûte"],e:"C'est Branford Marsalis au saxophone soprano, droit comme une clarinette mais en métal."},
 {cat:'inst',c:1,t:"Baker Street",a:"Gerry Rafferty",q:"Quel instrument joue le célèbre riff ?",o:["Le saxophone alto","La trompette","La guitare électrique","Le synthé"],e:"Le riff est joué par Raphael Ravenscroft au saxophone alto.",h:1},
 {cat:'inst',c:1,t:"Heart of Gold",a:"Neil Young",q:"Quel instrument joue les petites phrases entre les couplets ?",o:["L'harmonica","L'accordéon","Le violon","Le saxophone"],e:"Un harmonica, tenu sur un porte-harmonica pendant que Neil Young joue de la guitare.",h:1},
 {cat:'inst',c:2,t:"Bags' Groove",a:"Milt Jackson",q:"Quel instrument joue le thème ?",o:["Le vibraphone","Le piano","La guitare","Le xylophone"],e:"Milt Jackson est l'un des grands vibraphonistes du jazz : des lames métalliques et des résonateurs qui vibrent.",h:1},
 {cat:'inst',c:2,t:"Minor Swing",a:"Django Reinhardt & Stéphane Grappelli",q:"Quels instruments jouent les solos ?",o:["La guitare et le violon","Le piano et la trompette","La clarinette et le banjo","Le saxophone et la guitare"],e:"Le jazz manouche : guitare solo de Django Reinhardt, violon de Stéphane Grappelli, guitares en « pompe »."},
 {cat:'inst',c:2,t:"Portrait of Tracy",a:"Jaco Pastorius",q:"Comment Jaco Pastorius joue-t-il ce morceau ?",o:["À la basse, uniquement en harmoniques","À la contrebasse, à l'archet","À la guitare, en arpèges","Au piano électrique"],e:"On effleure la corde au-dessus des frettes 12, 7, 5 : un son de cloche."},
 // Sons de guitare
 {cat:'guit',c:1,t:"Under the Bridge",a:"Red Hot Chili Peppers",q:"Quel son de guitare entend-on dans l'intro ?",o:["Un son clair","Un son saturé","Un son fuzz","Une guitare acoustique"],e:"Son clair, en arpèges et accords enrichis."},
 {cat:'guit',c:1,t:"Sultans of Swing",a:"Dire Straits",q:"Quel son de guitare ?",o:["Un son clair, très défini","Un son fuzz","Un son très saturé (metal)","Une guitare acoustique"],e:"Mark Knopfler joue aux doigts, en son clair, sur une Stratocaster."},
 {cat:'guit',c:1,t:"(I Can't Get No) Satisfaction",a:"The Rolling Stones",q:"Quel son de guitare entend-on sur le riff ?",o:["Un son fuzz","Un son clair","Une guitare acoustique","Un son avec chorus"],e:"Le riff passe par une pédale fuzz : un son baveux, presque « cuivré ».",h:1},
 {cat:'guit',c:1,t:"Purple Haze",a:"Jimi Hendrix",q:"Quel son de guitare ?",o:["Un son fuzz","Un son clair","Une guitare acoustique","Un son de guitare jazz"],e:"Hendrix utilise une pédale fuzz (Fuzz Face).",h:1},
 {cat:'guit',c:1,t:"Back in Black",a:"AC/DC",q:"Quel son de guitare ?",o:["Saturé, mais assez léger (crunch)","Un son clair","Un son fuzz très baveux","Une distorsion metal très compressée"],e:"Le son AC/DC : un ampli poussé, sans pédale, assez de grain pour les power chords."},
 {cat:'guit',c:2,t:"Master of Puppets",a:"Metallica",q:"Quel son de guitare ?",o:["Une distorsion épaisse, jouée en palm mute","Un son clair","Un son crunch léger","Une guitare acoustique"],e:"Distorsion très compressée, beaucoup de sustain, riffs étouffés de la paume (palm mute)."},
 {cat:'guit',c:1,t:"Smells Like Teen Spirit",a:"Nirvana",q:"Comment le son de guitare change-t-il entre couplet et refrain ?",o:["Clair au couplet, saturé au refrain","Saturé partout","Clair partout","Acoustique au couplet, clair au refrain"],e:"La dynamique couplet calme / refrain fort, typique du grunge et du rock alternatif."},
 {cat:'guit',c:1,t:"Wonderwall",a:"Oasis",q:"Quelle guitare joue la rythmique ?",o:["Une guitare acoustique","Une guitare électrique saturée","Une guitare électrique en son clair avec chorus","Une guitare 12 cordes avec fuzz"],e:"Une guitare folk (acoustique), grattée.",h:1},
 // Claviers
 {cat:'clav',c:1,t:"Superstition",a:"Stevie Wonder",q:"Quel clavier joue le riff ?",o:["Le clavinet","L'orgue Hammond","Le piano acoustique","Le Rhodes"],e:"Le clavinet : des cordes frappées et captées par des micros, un son très percussif, idéal en funk."},
 {cat:'clav',c:1,t:"Green Onions",a:"Booker T. & the M.G.'s",q:"Quel clavier ?",o:["L'orgue Hammond","Le clavinet","Le piano acoustique","Le synthé"],e:"L'orgue Hammond, souvent joué avec une cabine Leslie (haut-parleur tournant).",h:1},
 {cat:'clav',c:1,t:"A Whiter Shade of Pale",a:"Procol Harum",q:"Quel clavier joue la célèbre mélodie ?",o:["L'orgue Hammond","Le Rhodes","Le clavecin","Le synthé"],e:"Un orgue Hammond, au son tenu.",h:1},
 {cat:'clav',c:2,t:"Riders on the Storm",a:"The Doors",q:"Quel clavier ?",o:["Le piano électrique Rhodes","Le clavinet","Le piano acoustique","Le clavecin"],e:"Le Rhodes : des lames métalliques frappées, un son rond et « mouillé »."},
 {cat:'clav',c:2,t:"What'd I Say",a:"Ray Charles",q:"Quel clavier joue l'intro ?",o:["Le piano électrique Wurlitzer","L'orgue Hammond","Le clavinet","Le synthé"],e:"Un Wurlitzer, plus nasal et plus « sale » que le Rhodes.",h:1},
 {cat:'clav',c:1,t:"Jump",a:"Van Halen",q:"Quel clavier joue le riff ?",o:["Un synthétiseur","Un orgue Hammond","Un piano acoustique","Un clavinet"],e:"Un synthé polyphonique (Oberheim) : typique des années 80.",h:1},
 {cat:'clav',c:1,t:"Take On Me",a:"a-ha",q:"Quel clavier joue le riff ?",o:["Un synthétiseur","Un piano acoustique","Un orgue d'église","Un Rhodes"],e:"La synth-pop des années 80 : synthés et boîte à rythmes.",h:1},
 {cat:'clav',c:2,t:"Chameleon",a:"Herbie Hancock",q:"Quel instrument joue la ligne de basse ?",o:["Un synthétiseur","Une basse électrique","Une contrebasse","Un orgue Hammond"],e:"Herbie Hancock joue la basse au synthé (ARP Odyssey) : jazz-funk, années 70.",h:1},
 {cat:'clav',c:1,t:"Imagine",a:"John Lennon",q:"Quel clavier ?",o:["Le piano acoustique","Le synthé","L'orgue Hammond","Le clavinet"],e:"Un piano droit, joué simplement.",h:1},
 // Effets
 {cat:'fx',c:1,t:"Voodoo Child (Slight Return)",a:"Jimi Hendrix",q:"Quel effet entend-on sur la guitare de l'intro ?",o:["La wah-wah","Le chorus","Le delay","La reverb à ressort"],e:"La pédale wah-wah, actionnée au pied, fait « parler » la guitare."},
 {cat:'fx',c:1,t:"Seven Nation Army",a:"The White Stripes",q:"Quel effet sur le riff ?",o:["L'octave inférieure (octaveur, pédale Whammy)","La wah-wah","Le chorus","Le flanger"],e:"La guitare passée à l'octave inférieure sonne comme une basse."},
 {cat:'fx',c:1,t:"Come As You Are",a:"Nirvana",q:"Quel effet sur la guitare du riff ?",o:["Le chorus","La wah-wah","La fuzz","Le delay long"],e:"Le chorus double le son avec une copie légèrement désaccordée : un son plus large, qui « ondule »."},
 {cat:'fx',c:2,t:"Where the Streets Have No Name",a:"U2",q:"Quel effet sur la guitare de l'intro ?",o:["Un delay rythmique","Une wah-wah","Une fuzz","Un octaveur"],e:"The Edge règle l'écho du delay sur le tempo : les répétitions créent un motif en doubles croches."},
 {cat:'fx',c:1,t:"Misirlou",a:"Dick Dale",q:"Quel effet donne ce son « surf » ?",o:["La reverb à ressort (spring)","Le chorus","Le flanger","La wah-wah"],e:"La reverb à ressort des amplis Fender."},
 {cat:'fx',c:2,t:"Rock This Town",a:"Stray Cats",q:"Quel effet sur la guitare ?",o:["Un delay court (slapback)","Une reverb de cathédrale","Une wah-wah","Une distorsion"],e:"Une seule répétition très rapide : le son du rockabilly."},
 {cat:'fx',c:2,t:"Owner of a Lonely Heart",a:"Yes",q:"Quel effet pendant le solo de guitare ?",o:["Un harmoniseur à la quinte","Une wah-wah","Un delay slapback","Une reverb à ressort"],e:"Trevor Rabin double sa ligne une quinte au-dessus avec un harmoniseur."},
 {cat:'fx',c:2,t:"Unchained",a:"Van Halen",q:"Quel effet sur la guitare du riff ?",o:["Un flanger","Une wah-wah","Un octaveur","Un chorus léger"],e:"Le flanger : un balayage métallique, comme un « avion qui passe ».",h:1},
 {cat:'fx',c:1,t:"Livin' on a Prayer",a:"Bon Jovi",q:"Quel effet sur la guitare du riff ?",o:["Une talk box","Un vocodeur","Une wah-wah","Un auto-tune"],e:"La talk box envoie le son de la guitare dans un tuyau, dans la bouche du guitariste : la guitare « parle ».",h:1},
 {cat:'fx',c:1,t:"Believe",a:"Cher",q:"Quel effet sur la voix ?",o:["L'Auto-Tune, réglé de façon très visible","Un delay","Une reverb","Une distorsion"],e:"Le premier grand tube à utiliser l'Auto-Tune comme effet : la voix « saute » d'une note à l'autre.",h:1},
 {cat:'fx',c:1,t:"Boulevard of Broken Dreams",a:"Green Day",q:"Quel effet sur la guitare de l'intro ?",o:["Le trémolo","Le flanger","La talk box","L'octaveur"],e:"Le trémolo fait varier le volume très régulièrement : le son « palpite ».",h:1},
 // Placement rythmique
 {cat:'place',c:2,t:"Blitzkrieg Bop",a:"Ramones",q:"Comment le groupe joue-t-il par rapport au temps ?",o:["Légèrement devant le temps","Au fond du temps (laid back)","Pile sur le temps, comme une machine","Sans pulsation régulière"],e:"Devant le temps : l'urgence, l'énergie du punk.",h:1},
 {cat:'place',c:2,t:"Untitled (How Does It Feel)",a:"D'Angelo",q:"Comment la voix et la rythmique se placent-elles ?",o:["Au fond du temps (laid back)","Devant le temps","Pile sur le temps, quantisé","En avance sur la batterie"],e:"Très en arrière, sans ralentir : la marque de la néo-soul."},
 {cat:'place',c:2,t:"Is This Love",a:"Bob Marley & the Wailers",q:"Quel placement rythmique ?",o:["Au fond du temps (laid back)","Devant le temps","Pile sur le temps, quantisé","En rubato, sans tempo"],e:"Le reggae se joue détendu, en arrière du temps."},
 {cat:'place',c:2,t:"Around the World",a:"Daft Punk",q:"Quel placement rythmique ?",o:["Pile sur le temps : programmé, quantisé","Au fond du temps","Devant le temps","Sans pulsation"],e:"Les machines placent tout exactement sur la grille : un groove carré, hypnotique."},
 // Chant
 {cat:'voix',c:1,t:"Stayin' Alive",a:"Bee Gees",q:"Quel registre de voix ?",o:["Le falsetto","La voix de poitrine","Le growl","La voix parlée"],e:"Le falsetto : une voix légère et aiguë, au-dessus de la voix normale."},
 {cat:'voix',c:2,t:"How High the Moon (live à Berlin, 1960)",a:"Ella Fitzgerald",q:"Quelle manière de chanter pendant l'improvisation ?",o:["Le scat","Le rap","Le parlé-chanté","Le yodel"],e:"Le scat : une improvisation sur des syllabes sans sens, comme un instrument.",h:1},
 {cat:'voix',c:1,t:"The Message",a:"Grandmaster Flash and the Furious Five",q:"Quelle manière de chanter ?",o:["Rappé","Chanté avec mélismes","Scat","Falsetto"],e:"Le rap : un texte dit en rythme, le flow."},
 {cat:'voix',c:2,t:"I Will Always Love You",a:"Whitney Houston",q:"Quel effet de voix entend-on beaucoup ?",o:["Les mélismes","Le growl","Le scat","La voix fry"],e:"Plusieurs notes sur une même syllabe : la marque de la soul et du R&B.",h:1},
 {cat:'voix',c:2,t:"Bad Guy",a:"Billie Eilish",q:"Quelle couleur de voix ?",o:["Une voix soufflée, très proche du micro","Une voix éraillée","Un growl","Une voix lyrique puissante"],e:"Beaucoup d'air dans le son, chantée tout près du micro."},
 {cat:'voix',c:2,t:"With a Little Help from My Friends (Woodstock)",a:"Joe Cocker",q:"Quelle couleur de voix ?",o:["Une voix éraillée","Une voix blanche","Un falsetto","Une voix soufflée"],e:"Le grain cassé, rocailleux, qui fait sonner la voix « blues ».",h:1},
 {cat:'voix',c:2,t:"Tous les garçons et les filles",a:"Françoise Hardy",q:"Quelle couleur de voix ?",o:["Une voix blanche, sans vibrato","Une voix éraillée","Un growl","Des mélismes soul"],e:"Une voix droite, douce, sans effet : la voix blanche.",h:1},
 {cat:'voix',c:2,t:"Hammer Smashed Face",a:"Cannibal Corpse",q:"Quel type de chant ?",o:["Le growl","Le falsetto","Le scat","La voix blanche"],e:"Le growl : une voix gutturale, saturée, typique du death metal.",h:1},
 {cat:'voix',c:2,t:"Nemo",a:"Nightwish",q:"Quelle tessiture pour la chanteuse Tarja Turunen ?",o:["Soprano","Alto","Ténor","Baryton"],e:"Une soprano lyrique, de formation classique.",h:1},
 {cat:'voix',c:2,t:"Fast Car",a:"Tracy Chapman",q:"Quelle tessiture ?",o:["Une voix grave de femme (alto)","Soprano","Ténor","Basse"],e:"Une voix de femme grave et chaude.",h:1},
 {cat:'voix',c:2,t:"You Want It Darker",a:"Leonard Cohen",q:"Quelle tessiture ?",o:["Basse","Ténor","Alto","Soprano"],e:"Une voix d'homme très grave, presque parlée.",h:1},
 {cat:'voix',c:2,t:"Somebody to Love",a:"Queen",q:"Quelle tessiture pour Freddie Mercury ?",o:["Ténor","Basse","Baryton","Alto"],e:"Une voix d'homme aiguë et puissante.",h:1},
];
const LCAT={style:'Style',inst:'Instrument',guit:'Son de guitare',clav:'Clavier',fx:'Effet',place:'Placement rythmique',voix:'Chant'};
// Claves (cases en croches ; 16 = 2 mesures de 4/4, 12 = une mesure de 12/8)
const CLAVES=[
 {id:'son32',name:'Son clave 3-2',n:16,h:[0,3,6,10,12],e:"3 coups dans la 1re mesure, 2 dans la 2e. Bo Diddley, salsa."},
 {id:'son23',name:'Son clave 2-3',n:16,h:[2,4,8,11,14],e:"Le même motif, en commençant par la mesure à 2 coups : Ran Kan Kan (Tito Puente)."},
 {id:'rumba32',name:'Rumba clave 3-2',n:16,h:[0,3,7,10,12],e:"Comme la son clave, mais le 3e coup est décalé d'une croche."},
 {id:'bossa',name:'Clave bossa nova',n:16,h:[0,3,6,10,13],e:"La 2e mesure est décalée : The Girl from Ipanema."},
 {id:'bell',name:'Cloche africaine en 12/8',n:12,h:[0,2,4,5,7,9,11],e:"La « timeline » d'Afrique de l'Ouest : on la sent à la fois en 2 et en 3 temps."},
];
// Analyse de grille : accords et degrés attendus
const ANA=[
 {c:1,k:'C',ch:['C','Am','F','G'],d:['I','VIm','IV','V']},
 {c:1,k:'G',ch:['G','D','Em','C'],d:['I','V','VIm','IV']},
 {c:1,k:'D',ch:['D','G','A','D'],d:['I','IV','V','I']},
 {c:1,k:'F',ch:['F','Dm','B♭','C'],d:['I','VIm','IV','V']},
 {c:1,k:'C',ch:['C','G','Am','Em','F','C','F','G'],d:['I','V','VIm','IIIm','IV','I','IV','V']},
 {c:1,k:'A',ch:['A','F♯m','D','E'],d:['I','VIm','IV','V']},
 {c:2,k:'C',ch:['Dm7','G7','CMaj7','A7'],d:['IIm7','V7','IMaj7','V7/II']},
 {c:2,k:'F',ch:['FMaj7','D7','Gm7','C7'],d:['IMaj7','V7/II','IIm7','V7']},
 {c:2,k:'C',ch:['CMaj7','E7','Am7','D7','Dm7','G7','CMaj7'],d:['IMaj7','V7/VI','VIm7','V7/V','IIm7','V7','IMaj7']},
 {c:2,k:'B♭',ch:['B♭Maj7','G7','Cm7','F7'],d:['IMaj7','V7/II','IIm7','V7']},
 {c:2,k:'C',ch:['CMaj7','Fm6','CMaj7','B♭7'],d:['IMaj7','IVm6','IMaj7','♭VII7']},
 {c:2,k:'C',ch:['Dm7','D♭7','CMaj7','CMaj7'],d:['IIm7','SubV7','IMaj7','IMaj7']},
 {c:2,k:'E',ch:['C♯m7','F♯7','A/B','E'],d:['VIm7','V7/V','IV/V','I']},
 {c:2,k:'F',ch:['FMaj7','F♯dim7','Gm7','C7'],d:['IMaj7','♯Idim7','IIm7','V7']},
 {c:2,k:'G',ch:['GMaj7','Em7','Am7','D7','Bm7','E7','Am7','D7'],d:['IMaj7','VIm7','IIm7','V7','IIIm7','V7/II','IIm7','V7']},
];
const ANAOPT={1:['I','IIm','IIIm','IV','V','VIm','VIIdim'],2:['IMaj7','IIm7','IIIm7','IVMaj7','V7','VIm7','VIIm7♭5','V7/II','V7/III','V7/IV','V7/V','V7/VI','IVm6','♭VII7','SubV7','♯Idim7','IV/V','I']};
// Dictée : degrés possibles  [libellé, degré de la gamme, qualité, cible secondaire]
const DICT={1:[['I',0,''],['IIm',1,'m'],['IIIm',2,'m'],['IV',3,''],['V',4,''],['VIm',5,'m']],
            2:[['IMaj7',0,'Maj7'],['IIm7',1,'m7'],['IIIm7',2,'m7'],['IVMaj7',3,'Maj7'],['V7',4,'7'],['VIm7',5,'m7'],['V7/II',null,'7',1],['V7/V',null,'7',4],['V7/VI',null,'7',5]]};
const DICT_T={1:[['I','VIm','IV','V'],['I','IV','V','I'],['I','V','VIm','IV'],['I','IIIm','IV','V'],['I','IV','I','V'],['I','VIm','IIm','V']],
              2:[['IMaj7','VIm7','IIm7','V7'],['IIm7','V7','IMaj7','VIm7'],['IMaj7','V7/II','IIm7','V7'],['IMaj7','V7/VI','VIm7','V7'],['IIIm7','VIm7','IIm7','V7'],['IMaj7','IVMaj7','IIIm7','VIm7'],['IMaj7','V7/V','V7','IMaj7'],['VIm7','IIm7','V7','IMaj7']]};
const yt=(t,a)=>'https://www.youtube.com/results?search_query='+encodeURIComponent(t+' '+a);
