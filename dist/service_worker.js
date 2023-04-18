const cacheName = 'MyAppCache-v1'

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    event.respondWith(respondFromNetworkOrCache(event.request));
  }
});

async function respondFromNetworkOrCache(request) {
  const cache = await caches.open(cacheName)

  try {
    const fetchedResponse = await fetch(request)
    cache.put(request, fetchedResponse.clone())
    return fetchedResponse
  } catch {
    return cache.match(request)
  }
}