
importScripts("/scripts/node_modules/workbox-sw.js");

const staticCacheName = `static-cache-v68`;
// Stale till network changes based static cache
const staleCacheName = `stale-cache-v68`;
// Page Cache
const pageCacheName = `page-cache-v68`;

console.debug("Registering static routes");

console.log(workbox)
