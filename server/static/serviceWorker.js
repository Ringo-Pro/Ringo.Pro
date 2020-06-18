const CORE_CACHE = 1;
const CACHE_NAME = `core-cache-v${CORE_CACHE}`;

const urlsToCache = [
//   '/callback',
  '/dist/all.js',
  '/dist/index.css',
  '/dist/reset.css',
];

self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Servive worker activated!');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    console.log('fetch event: ', event.request)
    
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {

          if(cachedResponse){
            console.log("Found in cache!")
            return cachedResponse
          }

          return fetch(event.request)
          .then((fetchResponse) => fetchResponse)
        //   .catch((err => {

        //     const isHTMLPage = event.request.method == "GET" && event.request.headers.get("accept").includes("text/html")

        //     if(isHTMLPage) return caches.match("/offline")

        //   }))

        })
    )
})