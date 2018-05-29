var cacheName = 'resturant-cache';

// The install event is fired when an install is successfully completed.
// The install event is generally used to populate your browser’s offline
// caching capabilities with the assets I need to run this app offline.
self.addEventListener('install', function(event) {
  let urlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
  ];
  // .waitUntil() method — ensures that the service worker will not install
  // until the code inside waitUntil() has successfully occurred.
  // caches.open() method - creates a new cache called 'resturant-cache',
  // which will be version 1 of the site resources cache.
  // This returns a promise for a created cache; once resolved, run a function that
  // calls addAll() on the created cache, which for its parameter takes an array
  // of origin-relative URLs to all the resources to cache.
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// An activate event - for getting rid of old caches.
self.addEventListener('activate', function(event) {
  event.waitUntil(caches.delete(cacheName));
});

// A fetch event fires every time any resource controlled by a service worker
// is fetched. Call the respondWith() method on the event to hijack the HTTP
// responses.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Start by simply responding with the resource whose url matches
    // that of the network request
    caches
      .match(event.request)
      // If the resources isn't in the cache, it is requested from the network.
      .then(function(response) {
        return response || fetch(event.request);
      })
      // Error handling
      .catch(function(error) {
        console.log('Upps, no cache entry!');
      })
  );
});
