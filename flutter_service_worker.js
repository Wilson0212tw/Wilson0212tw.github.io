'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aeb4befc83dfa60ad021326840e92200",
"index.html": "0484adf6dfeaca8c002820515f2d4a34",
"/": "0484adf6dfeaca8c002820515f2d4a34",
"main.dart.js": "e0030815a0d6fac1308776731e383ebf",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f0d841c4b7e63e6b1ddc4aa467ab8bcc",
"assets/res/images/add.png": "b508adb9adfc4a66bc75658acb1299eb",
"assets/res/images/icon_star.png": "2b1e9177a83822f4734584e7069d5425",
"assets/res/images/icon_version.png": "3675fa8e7738c9c1445aec0385cca36a",
"assets/res/images/icon_realname_bg.png": "aa6da09bc08ea746077c2f36afdc0fec",
"assets/res/images/area/area_60.png": "9ef895ac43c3bf25842653dfabf18ead",
"assets/res/images/area/area_48.png": "78f86e03272c591a6df91279e22cb334",
"assets/res/images/area/area_971.png": "4fe8c98b25814919fe4760935b07a977",
"assets/res/images/area/area_61.png": "aed6f4c78f9767681ab0e3d64bb737d0",
"assets/res/images/area/area_63.png": "81e6604e413bc72209c3a3402ecbdd3c",
"assets/res/images/area/area_972.png": "48a1bd4ff65b7505edde41513c824877",
"assets/res/images/area/area_62.png": "02cbf6c1b6a6f53792df47c7394476b2",
"assets/res/images/area/area_66.png": "aa48e81cca6055f6094104880ab83882",
"assets/res/images/area/area_65.png": "728a7d8a3edc9de9a98e7936fc7445bc",
"assets/res/images/area/area_357.png": "9259f534774836d641b1dc5cdafd390d",
"assets/res/images/area/area_64.png": "67053c7e72c9fabc05ab4db9938e5208",
"assets/res/images/area/area_1.png": "051b836ad7be7b3b72db5be795059ecc",
"assets/res/images/area/area_7.png": "1441a97662a087d8ddac4861d5676e31",
"assets/res/images/area/area_853.png": "060523d68f42162565ecd39209b56279",
"assets/res/images/area/area_852.png": "9b1fc69e4b496f2dcd61932abda59233",
"assets/res/images/area/area_886.png": "fc7d66c68fa13ba0d0dff8f407be011e",
"assets/res/images/area/area_855.png": "0840c65591e681efaac72d0343e911ad",
"assets/res/images/area/area_31.png": "443555c3ef291515f7f6d8e28ed34297",
"assets/res/images/area/area_33.png": "6526f9057d559354ec5c4e1ab60963f4",
"assets/res/images/area/area_82.png": "fc3d9227b207c04f138878357eb3136c",
"assets/res/images/area/area_95.png": "cf8165ae0c53c7a3d52dec01631fa483",
"assets/res/images/area/area_81.png": "ff6c572534162296f7c2890c85640ea0",
"assets/res/images/area/area_90.png": "0acdd5523bd580fa15ac78882167e3fa",
"assets/res/images/area/area_84.png": "892495d8c1f5d69999806e5b9d393746",
"assets/res/images/area/area_44.png": "60bc52d74f73b5dadcdb2d1229baae93",
"assets/res/images/area/area_86.png": "92b0f805b474e88bc56243f134080bef",
"assets/res/images/payment/2.png": "e8976a66d381ff296e81971a092bae79",
"assets/res/images/payment/3.png": "5300346a300bb2115499692b5b8cb54f",
"assets/res/images/payment/1.png": "c27f6a394686cc964bd64657ad175f29",
"assets/res/images/otc365/tabbar_assets_active.png": "229a0ce63664d112e9bc85e32a514a45",
"assets/res/images/otc365/logo_horizontal.png": "aaf878d3673ab0aebe97dc83f7c508fa",
"assets/res/images/otc365/title_logo.png": "de2c1ee92e482ada880ac0855e89d4bc",
"assets/res/images/otc365/tabbar_scan.png": "f1d5614c40aababf81aa2e25486d3cdb",
"assets/res/images/otc365/logo.png": "937223003a9685a4b0393a39f8efd61a",
"assets/res/images/otc365/tabbar_exchange_active.png": "e96ca9e12e24d32f61fee2886020fe44",
"assets/res/images/otc365/tabbar_assets.png": "f9f0b3074b15d27335213c7a55326bdf",
"assets/res/images/otc365/tabbar_scan_active.png": "d4f1fd87d48e3ddebefc94c663ea26c8",
"assets/res/images/otc365/tabbar_exchange.png": "d8e699fc421b69ac7cdc600596060b0c",
"assets/res/images/icon_realname.png": "da6e82c9cc677abf4da04c073f566c7b",
"assets/res/images/icon_phone.png": "4c921522d923bc7dab919d1dd8ff7e3d",
"assets/res/images/icon_loading.png": "a0ece80f19e6bcfcc962049effb44c65",
"assets/res/images/icon_date.png": "28df6669ba406d77f40433afe8aeb5a5",
"assets/res/images/icon_setting.png": "28317d3836ace01a3efe89cf493f4e4c",
"assets/res/images/icon_fundpwd.png": "457181d64ea88f39d5a1df2ba35a23c7",
"assets/res/images/icon_withdraw.png": "1771f0638d40a7ced9229afe902e3f76",
"assets/res/images/coins/eth_white.png": "f9dcffc3375ec5ba7c51acf5dd4d7e6f",
"assets/res/images/coins/cny_white.png": "403f89d3ef25509232819967090bbdf3",
"assets/res/images/coins/eos.png": "34559ab847803b01f47ac725327c3f35",
"assets/res/images/coins/eth.png": "d5a8f237321ca1990136260821a50324",
"assets/res/images/coins/usdt.png": "5ced217b9e4c31a2ee1054d88ebc83f0",
"assets/res/images/coins/btc.png": "998f98546e9adef1f2bdbcacdf39ae40",
"assets/res/images/coins/usdt_white.png": "cfa6ae8417c24d5b8bbdeaf7ecc47e81",
"assets/res/images/coins/btc_white.png": "4a710a1a2a18c4e8e7765e322ce66221",
"assets/res/images/icon_dialog_fundpwd.png": "6df0561dbca1ceb1bd168e8c12d1f621",
"assets/res/images/arrow_right_green.png": "1d0469e2266e19eeb1e8f5347dcf4182",
"assets/res/images/tool_img.png": "89af5d82df7789452cddc4ca9d8c95e2",
"assets/res/images/ubit/tabbar_assets_active.png": "f2743090294b8026fadd21ad68e81c0b",
"assets/res/images/ubit/logo_horizontal.png": "c4ae0228b408afc5de300272501b8c49",
"assets/res/images/ubit/title_logo.png": "4ddcffab27ea9caf454ac625a917f83b",
"assets/res/images/ubit/tabbar_scan.png": "f1d5614c40aababf81aa2e25486d3cdb",
"assets/res/images/ubit/logo.png": "857254a49eae1a8db50945463276f2a9",
"assets/res/images/ubit/tabbar_exchange_active.png": "61788fcce0321a980173ecdaf980b41c",
"assets/res/images/ubit/tabbar_assets.png": "f9f0b3074b15d27335213c7a55326bdf",
"assets/res/images/ubit/tabbar_scan_active.png": "d2f4c7f6460ef3e6f054e08f4efce2a5",
"assets/res/images/ubit/tabbar_exchange.png": "d8e699fc421b69ac7cdc600596060b0c",
"assets/res/images/icon_bankcard.png": "08d5b2b0558b5f9e9c257c61a13bb10a",
"assets/res/images/icon_realname_validate.png": "e517343a9115493e78a732d1c24ea951",
"assets/res/images/minus.png": "84292f23749bdd20d534799e2885b84b",
"assets/res/images/icon_dialog_timeout.png": "53cd7c8bdbf043c7bf73122c528f8fd6",
"assets/res/images/tool_flashlight_open.png": "20bb58a7b68c1751b98a23606e7f9ea9",
"assets/res/images/icon_wallet_water.png": "52ca9389dc9a18103a1245b907639d2f",
"assets/res/images/icon_dialog_card.png": "ae0cea15c188f30f4403f26a4422fa09",
"assets/res/images/icon_dialog_realname.png": "32117f7e156abb6e5669a1e769160993",
"assets/res/images/icon_assets.png": "79762c65f18bac581cf6275bce186e30",
"assets/res/images/icon_empty.png": "d2efeda2ab153ccd920de912933ce2f9",
"assets/res/images/icon_language.png": "5bd4c70915b6c64b7337419eb77c1acb",
"assets/res/images/icon_realname_success.png": "8e470e2613d222c80bbda27b324e8707",
"assets/res/images/reverse.png": "40fbddfa35c3f8eb5df7190bbab26e60",
"assets/res/images/icon_usdt.png": "0cd3d9364e3c7349394a7538aaec9d9c",
"assets/res/images/icon_deposit.png": "8f0947ebc263e7eac80b4891efc73188",
"assets/res/images/chat_send.png": "56a345a11375bf343b16e7dcb6467d22",
"assets/res/images/icon_verify.png": "14537004d61893b824077650ba6653b1",
"assets/res/images/chat_chat.png": "d18ca6a308d06375f800739db096b95c",
"assets/res/images/icon_realname_faield.png": "6560d7474d0af78baf2ff23a378dbf9e",
"assets/res/images/handheld.png": "e79acf4a9c02cc07ca3e1a497e2661bb",
"assets/res/images/tool_flashlight_close.png": "bf36a6199093f74e18ad94f3400225de",
"assets/res/images/chat_image.png": "15d4140da4a60a530d1837fc4ca79860",
"assets/res/images/icon_take_photo.png": "e06960d53565daf4970cd1361868e08a",
"assets/res/images/positive.png": "ecbaba8b5bcf93aab9e1603391adcab2",
"assets/res/images/scan.png": "7ae8c8dc16fc5b3e01737f71472bc16d",
"assets/res/images/financial_title.png": "91ba59f2c7750fd9c710257f0abbffdb",
"assets/res/images/icon_arrow_right.png": "a8346aaea4a6ea38a4312957d81cd24b",
"assets/res/images/icon_service.png": "5a9baa71e608d006c11712591c3b5211",
"assets/res/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/AssetManifest.json": "76b0525f3b62744d7f1c2af5fd6254d2",
"assets/NOTICES": "2b0f2eac91aab3b3350d21f0c3523e02",
"assets/FontManifest.json": "ab3426bf2b3cc2c608065da63332c8b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
