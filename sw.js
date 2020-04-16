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

workbox.precaching.precacheAndRoute([{"revision":"7e02ca75669a170ad134872f4210bac6","url":"index.html"},{"revision":"0a0527f4acb34f2e89b49137db041d3b","url":"index.js"},{"revision":"29c729087703e4096d7d3f62c0d4459a","url":"server.js"},{"revision":"2c5bf8b1888bb9123b5476fbb41bd4f3","url":"workbox-config-injectManifest.js"},{"revision":"20bd4112f1b190bc721c2a5a9f7f8742","url":"workbox-config.js"}])
