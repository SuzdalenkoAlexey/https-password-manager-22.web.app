var CACHE_NAME = 'mysiteA';
var urlsToCache = [
    '/',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('mysiteA');
          return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) { // console.log( event.request );
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
              console.log(response);
              return response;
          }
          return fetch(event.request);
        }
      )
    );
});  


console.log('pwa')