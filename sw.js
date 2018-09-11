/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-95416c5e857abba7bc4e.js"
  },
  {
    "url": "app.60176bdc619a5f4de8c3.css",
    "revision": "e46b9d811dd003878d588441d9b498a8"
  },
  {
    "url": "app-3fa9ad55a2388e62f346.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d289ef08d48f76646baf.js"
  },
  {
    "url": "index.html",
    "revision": "91bbdd958d60793a6190e506a98eeab4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7a08882c64f36f5ae8b57fad9fb4166c"
  },
  {
    "url": "1-76d506966343745b8095.js"
  },
  {
    "url": "component---src-pages-index-js-b5923bb113f597e4850c.js"
  },
  {
    "url": "2-50a781756278403ef49e.js"
  },
  {
    "url": "0-7c7fda51839ffae4a5f6.js"
  },
  {
    "url": "static/d/424/path---index-6a9-AOY9qwZg47nbKR0MckymuR6Pg.json",
    "revision": "cfe89a527fb2b9d2e70ac84e1b0792ef"
  },
  {
    "url": "component---src-pages-404-js-7301dc1ebd4e1ec81876.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
