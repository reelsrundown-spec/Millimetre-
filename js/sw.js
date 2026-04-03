const cacheName = 'snl-v1';
const assets = ['./', './index.html', './loading.html', './home.html', './game.html', './style.css', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

<script>
    if ('serviceWorker' in navigator) {
        // '../js/sw.js' ennalla, root-il aanel 'sw.js' ennu mathram mathi
        navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log("SW Register Error:", err));
    }
</script>

