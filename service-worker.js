"use strict";var precacheConfig=[["/coin-exchange/index.html","d5a7e833dad348f4f5e47eeeafe6d0e6"],["/coin-exchange/static/css/main.abbb9e94.css","13ebb780b8be186dd6e3be4a89662ca1"],["/coin-exchange/static/js/0.762a7801.chunk.js","3f02e4b54bbca5d9f376bb95840891c7"],["/coin-exchange/static/js/main.eb0e9f35.js","30ecfa7f133b5500cda0f7b1ba4a4796"],["/coin-exchange/static/media/logo.06e73328.svg","06e733283fa43d1dd57738cfc409adbd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var a="/coin-exchange/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});