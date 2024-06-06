/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "23d1b77a3b70974ae250dfb8bfbcd6fe"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1ac8998a.css",
    "revision": "b83e3b17c30f079d3d6c275a8d5d83e0"
  },
  {
    "url": "assets/img/1_get.dfad6115.png",
    "revision": "dfad6115df29e3637234507593446f7d"
  },
  {
    "url": "assets/img/2_post_(test).31dac79c.png",
    "revision": "31dac79c03f8a6c80a5403e2775ac48a"
  },
  {
    "url": "assets/img/2_post.266515a8.png",
    "revision": "266515a88a7f9babd1a0c68abf3e5a58"
  },
  {
    "url": "assets/img/3_put_(test).2ad22c6a.png",
    "revision": "2ad22c6a500737c28fd9137a5f39668d"
  },
  {
    "url": "assets/img/3_put.c733b575.png",
    "revision": "c733b5758d7bf8d84936fecaaa88cd60"
  },
  {
    "url": "assets/img/4_delete_(test).390c5178.png",
    "revision": "390c51781a45ce68ece10ea8a866b8a7"
  },
  {
    "url": "assets/img/4_delete.1cb410d0.png",
    "revision": "1cb410d031e7e3587850569eb17da8bf"
  },
  {
    "url": "assets/img/relation_scheme.5720773c.png",
    "revision": "5720773c9758a4bdc326f511a469a74b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.94346ec7.js",
    "revision": "ac802e18bc2454395cb4d5fc3438208d"
  },
  {
    "url": "assets/js/11.101ea241.js",
    "revision": "3a345c0a76a515679660ce771bcb078f"
  },
  {
    "url": "assets/js/12.6dc2c68c.js",
    "revision": "53226b8b47317299e142432ba44212d0"
  },
  {
    "url": "assets/js/13.26fb2143.js",
    "revision": "555bb564cc3d675a36552e79c25a27e6"
  },
  {
    "url": "assets/js/14.b2ae539c.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.201943cb.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.69f4c419.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.4d1f891f.js",
    "revision": "5bf6d9d587567d3817172b9a57dc40ba"
  },
  {
    "url": "assets/js/18.b1595af0.js",
    "revision": "c98dd2ffe2c0755100f87d0142f03bf3"
  },
  {
    "url": "assets/js/19.671b63a4.js",
    "revision": "9decb9b0ab67979112a56f66ee024915"
  },
  {
    "url": "assets/js/2.e7233cd2.js",
    "revision": "89bb4fa98919538846affd12a79681a9"
  },
  {
    "url": "assets/js/20.a5bdfb94.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.f759c0d2.js",
    "revision": "e0a545f83538a023c1a25ff6a5b783b7"
  },
  {
    "url": "assets/js/22.8a6648eb.js",
    "revision": "5a5cd02e2d218cd0b065b47c42c2d386"
  },
  {
    "url": "assets/js/23.4c75eda7.js",
    "revision": "fe4a5567b2b6cb303e6174ee228941a9"
  },
  {
    "url": "assets/js/24.4ad95f39.js",
    "revision": "7505efcc02a3c5a4095e38f9dd90a580"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.865562d4.js",
    "revision": "4ab8c05e22c23127487699a9f6c776d8"
  },
  {
    "url": "assets/js/4.7afb3527.js",
    "revision": "7abfc44b2a0a951011ed10b4f289f05b"
  },
  {
    "url": "assets/js/5.882afd91.js",
    "revision": "4ecce7890c3f8fb85b4f8c6d89197e0a"
  },
  {
    "url": "assets/js/6.22b0b4c8.js",
    "revision": "2aa554c598e15fca3d815a5a3fdd1e8c"
  },
  {
    "url": "assets/js/7.a5019164.js",
    "revision": "693e92d3863d3f51f7429af0fc8aec65"
  },
  {
    "url": "assets/js/8.fad27e07.js",
    "revision": "82d3f4d162a618a5ebeb50b4963b381d"
  },
  {
    "url": "assets/js/9.0dde91e4.js",
    "revision": "a23e2d9d7c97c6ddf1098d8426413e75"
  },
  {
    "url": "assets/js/app.16168a5c.js",
    "revision": "6c2cdcce90462e604c2dba621aa11f76"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c60cff307d05173ce0aaa410f0bb5fe5"
  },
  {
    "url": "design/index.html",
    "revision": "8a3b1bf57ccd5e088152cf5800d68181"
  },
  {
    "url": "index.html",
    "revision": "4e0e5dcd1effc27118325bbb20b67ec4"
  },
  {
    "url": "intro/index.html",
    "revision": "3ae81acbcd51a39a4e8030938f1259bc"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f16022ab1ee6d4ba94d7260f5c7b7c4c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "25194066d87c081ea657d3e49520cb9a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b4727641231dd6c16312563418727428"
  },
  {
    "url": "software/index.html",
    "revision": "c990d3ad9f57b0b6bd980a851e30b37b"
  },
  {
    "url": "test/index.html",
    "revision": "e66e728fd5f3a93d910670f837edd1e6"
  },
  {
    "url": "use cases/index.html",
    "revision": "2679fe3741caf2bfca655010eec56f78"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
