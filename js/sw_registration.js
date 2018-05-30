/**
 * Telling the browser to register the 'sw.js' file as the "service worker".
 */
navigator.serviceWorker
  .register('/sw.js')
  .then(function(reg) {
    // If ServiceWorker gets registered console.log this message.
    console.log('Yay! Service worker registered.');

    // If there is no controller , this page wasn't loaded
    // via a service worker. In that case - exit early.
    if (!navigator.serviceWorker.controller) {
      return;
    }

    // If there is an updated worker already waiting -
    // immediately apply it.
    if (reg.waiting) {
      self.skipWaiting();
    }

    // If there is an updated worker installing - track it's progress.
    // If it becomes installed - immediately apply it.
    if (reg.installing) {
      navigator.serviceWorker.addEventListener('statechange', function() {
        if (navigator.serviceWorker.controller.state == 'installed') {
          self.skipWaiting();
        }
      });
    }
  })
  // If ServiceWorker registration failed - console.log this message.
  .catch(function(error) {
    console.log('Boo! Registration failed.');
    console.log(error);
  });
