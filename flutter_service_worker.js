'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "08f9d00e290a52a11b5127a00b1953a5",
"assets/AssetManifest.bin.json": "407e8da4216068424672f38fb78d2ca0",
"assets/AssetManifest.json": "53a4bdac700e7119e931cf19011f81f0",
"assets/assets/animations/curve.json": "44565ad9d7718acfdedbff1c3917c051",
"assets/assets/animations/dash.png": "adf03c5e3c90d4e867f7116a3a331ba1",
"assets/assets/images/AC.jpg": "977a140279c5b9e2b3993954ee7fed48",
"assets/assets/images/ahmed.jpg": "40f9362e88d17a55fd49bd71c090a6ff",
"assets/assets/images/book.png": "22b1fde86c817d892f37fae55d6516a6",
"assets/assets/images/Carpentry.jpg": "d0c917c9fa3bf2c3bd8a4350e14e5447",
"assets/assets/images/Cleaning.jpg": "6013bda75832a100337cac251cf6dd47",
"assets/assets/images/Decoration.jpg": "d5ed9384f0b45ec219f41d6cb93bb00d",
"assets/assets/images/electric.jpg": "f7e9212bcca1cd93b53321fd5be38551",
"assets/assets/images/Electricity.jpg": "da6543ed8b4d814ad5a791c280a0103e",
"assets/assets/images/facebook.png": "18ea0f46eacae557f21cdc8e6ae73119",
"assets/assets/images/hazem.jpg": "a79162c9d42b385e842b0e8e39d9fcea",
"assets/assets/images/logoserfast.png": "2125e3ec4019021d9624d5a63b7f32ad",
"assets/assets/images/Medical.jpg": "a41fe2b5a7db1fc69b6da07ceb2092f4",
"assets/assets/images/onboarding0.png": "2df33040c11b48d80e0a8b91716c3f1a",
"assets/assets/images/onboarding1.png": "bbb74d46c7879bd14c809cb917ddb08e",
"assets/assets/images/onboarding2.png": "b2428bfb68d5a758e950c3d8c975739a",
"assets/assets/images/Plumbing.jpg": "76de1e1ff4228dc63611e3133d966c6b",
"assets/assets/images/share.png": "c783c22390ba009b0db0ee65a933ca44",
"assets/assets/images/syria.jpg": "1bab23fcbc9cf8f759ec77dc0dae6247",
"assets/assets/images/Technical.jpg": "2b62315153a15aa32fd4b51f79fe811d",
"assets/assets/images/wallpaperflare.com_wallpaper.jpg": "c70192d2125892841198245381a887c9",
"assets/assets/images/WhatsApp%2520Image%25202025-04-02%2520at%252021.09.19_37a90355.png": "e8192bcdfb1c165162e2f0e4b14d26c2",
"assets/assets/images/whatsapp.png": "34a8ffd9716fb4c351131183220f7d1b",
"assets/assets/lottie/done.json": "c04027ddd5393ce9016c0a5b8db9cbb7",
"assets/assets/lottie/loader.json": "5a99653dbf9fcb8216d5e7552d9acd0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "11e2ee249b163c20d0636adc32f0d92c",
"assets/NOTICES": "c2bacdf1464f13c0ec16aa00232f1610",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "b78c2208377a10f5570085034afa3625",
"canvaskit/canvaskit.wasm": "b1a2bc9cf33a10c80c9c8461160b65ec",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "b80a4e8040226eb7e58d02dc3c7c42e9",
"canvaskit/chromium/canvaskit.wasm": "84ba37fc970b3884f62c712981c73303",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "2047ecb92c6d860ea16ee9dbc9c4def7",
"canvaskit/skwasm.wasm": "d51f820f99f1324f76723cafe7be132d",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ffe122a19859f37dfc314fc998f72899",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d85bf880f8b909e85235d94c1c0ffe7",
"/": "6d85bf880f8b909e85235d94c1c0ffe7",
"main.dart.js": "850b30927aca2de934ef25322c956c0e",
"manifest.json": "99715eeb91a26c407e689bd9e4ab4a1d",
"version.json": "67220960887b66a9062562ae5876021f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
