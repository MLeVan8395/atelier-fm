// Atelier FM : fonctionnement hors ligne.
// Page, contenu et manifeste : on demande d'abord la version en ligne (pour que les modifications faites
// sur GitHub arrivent tout de suite), et on se rabat sur la copie enregistrée sans connexion.
// Sons, icônes et polices : copie enregistrée d'abord (ils ne changent pas).
// Si tu ajoutes ou renommes un fichier de son, ajoute-le à la liste FICHIERS et change VERSION.
const VERSION='atelier-fm-4';
const FICHIERS=["./", "index.html", "contenu/contenu.js", "manifest.webmanifest", "icones/icone-192.png", "icones/icone-512.png", "sons/batterie/caisse-ghost.mp3", "sons/batterie/caisse.mp3", "sons/batterie/claves.mp3", "sons/batterie/cloche.mp3", "sons/batterie/cross-stick.mp3", "sons/batterie/hh-doux.mp3", "sons/batterie/hh-ferme.mp3", "sons/batterie/hh-ouvert.mp3", "sons/batterie/hh-pied.mp3", "sons/batterie/kick.mp3", "sons/batterie/ride-cloche.mp3", "sons/batterie/ride.mp3", "sons/piano/A1.mp3", "sons/piano/A2.mp3", "sons/piano/A3.mp3", "sons/piano/A4.mp3", "sons/piano/A5.mp3", "sons/piano/A6.mp3", "sons/piano/C2.mp3", "sons/piano/C3.mp3", "sons/piano/C4.mp3", "sons/piano/C5.mp3", "sons/piano/C6.mp3", "sons/piano/C7.mp3", "sons/piano/Ds1.mp3", "sons/piano/Ds2.mp3", "sons/piano/Ds3.mp3", "sons/piano/Ds4.mp3", "sons/piano/Ds5.mp3", "sons/piano/Ds6.mp3", "sons/piano/Fs1.mp3", "sons/piano/Fs2.mp3", "sons/piano/Fs3.mp3", "sons/piano/Fs4.mp3", "sons/piano/Fs5.mp3", "sons/piano/Fs6.mp3"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
const enLigneDabord=req=>fetch(req).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return r; }).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./')));
const copieDabord=req=>caches.match(req).then(r=>r||fetch(req).then(n=>{ if(n.ok||n.type==='opaque'){ const c=n.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return n; }));
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    if(req.mode==='navigate'||/\.(html|js|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/')) e.respondWith(enLigneDabord(req));
    else e.respondWith(copieDabord(req));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) e.respondWith(copieDabord(req));
});
