let cacheName = 'resturant-cache';

// The install event is fired when an install is successfully completed.
// The install event is generally used to populate your browser’s offline
// caching capabilities with the assets I need to run this app offline.
self.addEventListener('install', function(event) {
  // .waitUntil() method — ensures that the service worker will not install
  // until the code inside waitUntil() has successfully occurred.
  // caches.open() method - creates a new cache called 'resturant-cache',
  // which will be version 1 of the site resources cache.
  // This returns a promise for a created cache; once resolved, run a function that
  // calls addAll() on the created cache, which for its parameter takes an array
  // of origin-relative URLs to all the resources to cache.
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function(cache) {
        cache.addAll([
          '/restaurant.html',
          '/css/responsive_restaurant.css',
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
        ]);
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/css/responsive.css',
          '/sw.js',
          '/js/sw_registration.js',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json'
        ]);
      })
      .then(function(event) {
        self.skipWaiting();
      })
  );
});

// A fetch event fires every time any resource controlled by a service worker
// is fetched. Call the respondWith() method on the event to hijack the HTTP
// responses.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        console.log('I have a response :)');
        return (
          response ||
          fetch(event.request).then(function(networkResponse) {
            if (networkResponse.status === 404) {
              return;
            }
            return caches.open(cacheName).then(function(cache) {
              cache.put(event.request.url, networkResponse.clone());
              return networkResponse;
            });
          })
        );
      })
      .catch(function(error) {
        console.log('Could not load from cache or fetch response');
        console.log(error);
        return new Response('', { status: 404 });
      })
  );
});
