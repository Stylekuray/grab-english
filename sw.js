var C="ge-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(m){
var n=fetch(e.request).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return r}).catch(function(){return m});
return m||n}))});
