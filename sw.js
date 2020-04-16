importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js")


workbox.routing.registerRoute(
  /^https:\/\/cdn.jsdelivr.net\/.*/,
  new workbox.strategies.CacheFirst({
    cacheName: 'cdn.jsdelivr'
  })
)

// workbox.routing.registerRoute(
//   /^https:\/\/cdnjs.cloudflare.com\/.*/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'cdnjs-cache'
//   })
// )

// workbox.routing.registerRoute(
//   /.*\.json/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'json-cache'
//   })
// )

// workbox.routing.registerRoute(
//   /.*\.js/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'js-cache'
//   })
// )

// workbox.routing.registerRoute(
//   /.*\.css/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'css-cache'
//   })
// )

// workbox.routing.registerRoute(
//   /.*\.png/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'png-cache'
//   })
// )
// cache index.html page
// workbox.routing.registerRoute(
//   /\/$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'index-cache'
//   })
// )

self.addEventListener('install', function() {
  // skipWaiting 可以跳過等待，直接套用最新的快取
  self.skipWaiting()
})

workbox.precaching.precacheAndRoute([{"revision":"730c6f1ebf1438d15078a4e4a087100b","url":"css/style.css"},{"revision":"38500fb134bf71c7cb0ef94ba9cca358","url":"index.html"},{"revision":"c8d648cb02542991e540c1520d49f521","url":"index.js"},{"revision":"2233ae7e6a087528dfa05011035a32e0","url":"js/test.js"},{"revision":"29c729087703e4096d7d3f62c0d4459a","url":"server.js"},{"revision":"d58ad07747ad3ed0701a73079fd84259","url":"workbox-config-injectManifest.js"},{"revision":"20bd4112f1b190bc721c2a5a9f7f8742","url":"workbox-config.js"}])
