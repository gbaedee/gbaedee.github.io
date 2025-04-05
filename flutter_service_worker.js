'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63aaa2dabce852a8266eb9a0aa49cfa2",
"assets/AssetManifest.bin.json": "cb2f8a2697ed27bb3e7979dbd2fc6120",
"assets/AssetManifest.json": "796d5deab45c08083cd7b43822057a64",
"assets/assets/annuity.png": "2b5e8dd0f9f335b6f0fa7460353dfa76",
"assets/assets/index.png": "f38b3ca62df5617c6f86482d3ed89aff",
"assets/assets/landingImg.png": "865588cdcbdbb7aeea0489f621a6b60e",
"assets/assets/logo.png": "5d8901ac50fbec69c721ed07055144cd",
"assets/assets/mission.png": "70b5ee8b601b54fdc4d45515da4c4720",
"assets/assets/termlife.png": "cca951a4b564caf8fb8d3f1f03a1b130",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ed81b96e4159fb4280b9c38330601a34",
"assets/NOTICES": "52ce051650821bf5ff38752b2a5d3698",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"favicon.png": "5d8901ac50fbec69c721ed07055144cd",
"favicons.png": "8ff2365bdcb16321352d8cfe0b816f66",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1e29cb2c9bae57fef270a800d72959ac",
"help_cors_e.js": "d41d8cd98f00b204e9800998ecf8427e",
"icons/favicon.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/favicon.png": "5d8901ac50fbec69c721ed07055144cd",
"icons/favicons.png": "8ff2365bdcb16321352d8cfe0b816f66",
"icons/Icon-192.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/Icon-192.png": "5d8901ac50fbec69c721ed07055144cd",
"icons/Icon-192s.png": "8ff2365bdcb16321352d8cfe0b816f66",
"icons/Icon-512%20-%20Copy.png": "f335eb8f3e13cdc3d9af122e3a8cd7e2",
"icons/Icon-512.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/Icon-512.png": "5d8901ac50fbec69c721ed07055144cd",
"icons/Icon-512s.png": "8ff2365bdcb16321352d8cfe0b816f66",
"icons/Icon-maskable-192%20-%20Copy.png": "f335eb8f3e13cdc3d9af122e3a8cd7e2",
"icons/Icon-maskable-192.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/Icon-maskable-192.png": "5d8901ac50fbec69c721ed07055144cd",
"icons/Icon-maskable-192s.png": "8ff2365bdcb16321352d8cfe0b816f66",
"icons/Icon-maskable-512.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/Icon-maskable-512.png": "5d8901ac50fbec69c721ed07055144cd",
"icons/Icon-maskable-512s.png": "8ff2365bdcb16321352d8cfe0b816f66",
"icons/logo%20EPS-01.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"icons/logo%20PNG-01.png": "f335eb8f3e13cdc3d9af122e3a8cd7e2",
"icons/logo.png": "5d8901ac50fbec69c721ed07055144cd",
"index.html": "595e70a8dacdc5e2f06ee8544a9af14e",
"/": "595e70a8dacdc5e2f06ee8544a9af14e",
"logo%20EPS-01.jpg": "5b6708c1dcd2995f864f8e2ca2fc7b8c",
"logo%20PNG-01.png": "f335eb8f3e13cdc3d9af122e3a8cd7e2",
"main.dart.js": "c49d0ee9b9fd21607950dfe0b8abbcea",
"manifest.json": "9ca5eced819c7a2223411bf04b7d57d9",
"version.json": "807a03fc0e8826f569cd9dfcb0495daf"};
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
