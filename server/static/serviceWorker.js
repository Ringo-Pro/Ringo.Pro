const CORE_CACHE = 1;
const CACHE_NAME = `core-cache-v${CORE_CACHE}`;

const urlsToCache = ['/', '/offline', '/dist/main.css'];
// idk of onderstaand werkt, normaal heb ik er een dynamic cache bij
// install service worker
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsToCache);
    })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch events
self.addEventListener('fetch', (evt) => {
  evt.respondWith(caches.match(evt.request));
});
