const CORE_CACHE = 1
const CACHE_NAME = `core-cache-v${CORE_CACHE}`

const urlsToCache = [
    '/callback',
    '/dist/all.js',
    '/dist/index.css',
    '/dist/reset.css'
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache).then(() => self.skipWaiting);
        })
    );
  });

  self.addEventListener('activate', (event) => {
    console.log('Servive worker activated!')
    event.waitUntil(clients.claim())
  })