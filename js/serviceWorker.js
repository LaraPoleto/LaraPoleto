const staticOvarium = "dev-ovarium-site-v1";
const assets = [
  "/",
  "index.html",
  "css/clitoris.css",
  "css/corrim.css ",
  "css/css_especifico.css",
  "css/curiosClit.css ",
  "css/curiosGep.css ",
  "css/curiosOvarios.css ",
  "css/curiosTubas.css ",
  "css/curiosUtero.css ",
  "css/curiosvagina.css ",
  "css/curiosVestVag.css ",
  "css/desafios.css ",
  "css/edsex.css ",
  "css/gepLabios.css ",
  "css/index.css ",
  "css/infec.css ",
  "css/infecgeral.css ",
  "css/infoClit.css ",
  "css/infogep.css ",
  "css/infoOvarios.css ",
  "css/infoTubas.css ",
  "css/infoUtero.css",
  "css/infovagina.css ",
  "css/infoVestVag.css ",
  "css/MCgeral.css ",
  "css/menst.css ",
  "css/metodosC.css ",
  "css/orgExt.css ",
  "css/orgint.css ",
  "css/ovarios.css ",
  "css/perguntas.css ",
  "css/SRF.css ",
  "css/tubasUterinas.css ",
  "css/tutorial.css ",
  "css/utero.css ",
  "css/vagina.css ",
  "css/vestVag.css",
  "js/app.js",
  "js/manifest.json",
  "js/main.js",
  "js/questoes.js",
  "js/func_qst.js",
  "antic.html",
  "camisinhaF.html ",
  "candid.html ",
  "clitoris.html ",
  "corrim.html ",
  "curiosClit.html ",
  "curiosGepLabios.html ",
  "curiosOvarios.html ",
  "curiosTubas.html ",
  "curiosUtero.html ",
  "curiosVagina.html ",
  "curiosVestVag.html ",
  "desafios.html ",
  "diu.html ",
  "diuCobre.html ",
  "diuHorm.html ",
  "diuPrata.html ",
  "edsex.html ",
  "gepLabios.html ",
  "gonorreia.html ",
  "hpv.html ",
  "infec.html ",
  "infecUri.html ",
  "infogepLabios.html ",
  "infoOvarios.html ",
  "infoTubas.html ",
  "infoUtero.html ",
  "infoVagina.html ",
  "infoVestVag.html ",
  "menst.html ",
  "metodosC.html ",
  "orgExt.html ",
  "orgint.html ",
  "ovarios.html ",
  "perguntas.html ",
  "sifilis.html ",
  "srf.html ",
  "tubas.html ",
  "tutorial.html ",
  "utero.html ",
  "vagina.html ",
  "vaginose.html ",
  "vestVaginal.html",
  "img/casinha.png",
  "img/back.svg",
  "img/clitoris.jpg",
  "img/favicon.gif",
  "img/icoOvarium.png",
  "img/grandesEpequenoslabios.jpg",
  "img/home.svg",
  "img/information.svg",
  "img/interrogacao.png",
  "img/menu.svg",
  "img/ovarios.jpg",
  "img/puzzle.svg",
  "img/question.svg",
  "img/tubas.jpg",
  "img/utero.jpg",
  "img/vagina.jpg",
  "img/vestVag.png",
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
})
;
