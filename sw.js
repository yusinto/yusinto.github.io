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
    "url": "webpack-runtime-1d641518dabfa28d5ecc.js"
  },
  {
    "url": "app.60176bdc619a5f4de8c3.css",
    "revision": "e46b9d811dd003878d588441d9b498a8"
  },
  {
    "url": "app-be37f85b7dd30aefeabf.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d289ef08d48f76646baf.js"
  },
  {
    "url": "index.html",
    "revision": "4afac89483f843e47cc5ed712c643d72"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9bee4fdf4be8433ad4df89a0f71bb5d6"
  },
  {
    "url": "1-7041305cd7a2e36b35d9.js"
  },
  {
    "url": "component---src-pages-index-js-44b7134839d7200aef04.js"
  },
  {
    "url": "2-0176520bb45a7e9b934a.js"
  },
  {
    "url": "0-8d511d0d8e3254cdc719.js"
  },
  {
    "url": "static/d/587/path---index-6a9-xylNmy7Yiz4a7jfFOEfRRna4X0.json",
    "revision": "e9f64f17a9c6d04d70977d4031927d78"
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
