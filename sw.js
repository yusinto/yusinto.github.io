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
    "url": "webpack-runtime-526e318f1012c22d8949.js"
  },
  {
    "url": "app.60176bdc619a5f4de8c3.css",
    "revision": "e46b9d811dd003878d588441d9b498a8"
  },
  {
    "url": "app-ed278419a1d61a1fe0bd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b968c701549028672092.js"
  },
  {
    "url": "index.html",
    "revision": "72f427a08935918f1d17949b616ce5c7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "960ef7f1ab636ee021da656a72fccd61"
  },
  {
    "url": "0-284a09ba52ecb551f60a.js"
  },
  {
    "url": "component---src-pages-index-js-99956f831c918f385905.js"
  },
  {
    "url": "1-b9d790e4adbe23d5dd29.js"
  },
  {
    "url": "static/d/917/path---index-6a9-q4S5uGcUaBnrm3NVNvMUWAbOM.json",
    "revision": "1020c14c1b7eb792c091ba487d750411"
  },
  {
    "url": "component---src-pages-404-js-942c901747922e980f0c.js"
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
