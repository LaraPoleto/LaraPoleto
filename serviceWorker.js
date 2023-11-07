const staticOvarium = "dev-ovarium-site-v1";
const assets = [
  "/",
  "perguntas.html",
  "curiosOvarios.html",
  "vestVaginal.html",
  "antic.html",
  "diuHorm.html",
  "infoVagina.html",
  "hpv.html",
  "gepLabios.html",
  "corrim.html",
  "diuPrata.html",
  "tutorial.html",
  "curiosClit.html",
  "sifilis.html",
  "metodosC.html",
  "img/vestVag.png",
  "img/puzzle.svg",
  "img/favicon.gif",
  "img/utero.jpg",
  "img/question.svg",
  "img/casinha.png",
  "img/grandesEpequenoslabios.jpg",
  "img/ovarios.jpg",
  "img/information.svg",
  "img/tubas.jpg",
  "img/home.svg",
  "img/back.svg",
  "img/icons/icon-512x512.png",
  "img/icons/icon-72x72.png",
  "img/icons/icon-152x152.png",
  "img/icons/icon-384x384.png",
  "img/icons/icon-192x192.png",
  "img/icons/icon-96x96.png",
  "img/icons/icon-144x144.png",
  "img/icons/icon-128x128.png",
  "img/interrogacao.png",
  "img/vagina.jpg",
  "img/menu.svg",
  "img/icoOvarium.png",
  "img/clitoris.jpg",
  "curiosTubas.html",
  "curiosVestVag.html",
  "js/func_qst.js",
  "js/main.js",
  "js/app.js",
  "js/questoes.js",
  "infoTubas.html",
  "index.html",
  "infoUtero.html",
  "curiosUtero.html",
  "clitoris.html",
  "utero.html",
  "vaginose.html",
  "edsex.html",
  "infecUri.html",
  "diu.html",
  "css/curiosOvarios.css",
  "css/infec.css",
  "css/perguntas.css",
  "css/tutorial.css",
  "css/orgExt.css",
  "css/utero.css",
  "css/metodosC.css",
  "css/orgint.css",
  "css/curiosClit.css",
  "css/curiosVestVag.css",
  "css/index.css",
  "css/infoOvarios.css",
  "css/curiosGep.css",
  "css/clitoris.css",
  "css/curiosvagina.css",
  "css/tubasUterinas.css",
  "css/infoVestVag.css",
  "css/curiosTubas.css",
  "css/desafios.css",
  "css/infoUtero.css",
  "css/gepLabios.css",
  "css/css_especifico.css",
  "css/infecgeral.css",
  "css/MCgeral.css",
  "css/edsex.css",
  "css/vagina.css",
  "css/infoTubas.css",
  "css/menst.css",
  "css/vestVag.css",
  "css/curiosUtero.css",
  "css/infoClit.css",
  "css/corrim.css",
  "css/infovagina.css",
  "css/SRF.css",
  "css/infogep.css",
  "css/ovarios.css",
  "tubas.html",
  "orgExt.html",
  "infoClit.html",
  "camisinhaF.html",
  "infec.html",
  "vagina.html",
  "gonorreia.html",
  "infoOvarios.html",
  "curiosGepLabios.html",
  "diuCobre.html",
  "ovarios.html",
  "curiosVagina.html",
  "infogepLabios.html",
  "desafios.html",
  "menst.html",
  "orgint.html",
  "candid.html",
  "srf.html",
  "infoVestVag.html",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticOvarium).then(async (cache) => {
      let ok;
      try {
        ok = await cache.addAll(assets);
      } catch (err) {
        console.error("sw: cache.addAll");
        for (let i of assets) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.log(err);
            console.warn("sw: cache.add", i);
          }
        }
      }
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
