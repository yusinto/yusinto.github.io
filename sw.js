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
    "url": "webpack-runtime-712a8f0941c8b7969b81.js"
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
    "revision": "4aad9856801d52b315109784f830b483"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a074f335805e722011c4163bb1e4d67f"
  },
  {
    "url": "0-284a09ba52ecb551f60a.js"
  },
  {
    "url": "component---src-pages-index-js-6b722811c5ff5d695745.js"
  },
  {
    "url": "1-b9d790e4adbe23d5dd29.js"
  },
  {
    "url": "static/d/965/path---index-6a9-RaLBWPTiKiRn50RXIkyPKmsoEx8.json",
    "revision": "29aaa84aa8dcbb6e9d09d3384ad85158"
  },
  {
    "url": "component---src-pages-404-js-c121930d048d5ae1ae51.js"
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
