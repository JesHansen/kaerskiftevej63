(this.webpackJsonpkaerskiftevej63=this.webpackJsonpkaerskiftevej63||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),w=(t(11),t(12),t(5)),c=t(3),D=t(4),s=function(){function e(){Object(c.a)(this,e),this._periods=void 0,this._periods=[[new Date(2019,9,1),new Date(2020,0,1),236e4,2341388],[new Date(2020,0,1),new Date(2020,3,1),2341388,2313295],[new Date(2020,3,1),new Date(2020,6,1),2313295,2285202],[new Date(2020,6,1),new Date(2020,9,1),2285202,2257109],[new Date(2020,9,1),new Date(2021,0,1),2257109,2229016],[new Date(2021,0,1),new Date(2021,3,1),2229016,2200923],[new Date(2021,3,1),new Date(2021,6,1),2200923,2172830],[new Date(2021,6,1),new Date(2021,9,1),2172830,2144737],[new Date(2021,9,1),new Date(2022,0,1),2200923,2172830],[new Date(2022,0,1),new Date(2022,3,1),2172830,2144737],[new Date(2022,3,1),new Date(2022,6,1),2144737,2116644],[new Date(2022,6,1),new Date(2022,9,1),2116644,2088551],[new Date(2022,9,1),new Date(2023,0,1),2088551,2060457],[new Date(2023,0,1),new Date(2023,3,1),2060457,2032364],[new Date(2023,3,1),new Date(2023,6,1),2032364,2004271],[new Date(2023,6,1),new Date(2023,9,1),2004271,1976178],[new Date(2023,9,1),new Date(2024,0,1),2257109,2229016],[new Date(2024,0,1),new Date(2024,3,1),2341388,2313295],[new Date(2024,3,1),new Date(2024,6,1),2313295,2285202],[new Date(2024,6,1),new Date(2024,9,1),2285202,2257109],[new Date(2024,9,1),new Date(2025,0,1),2257109,2229016],[new Date(2025,0,1),new Date(2025,3,1),2341388,2313295],[new Date(2025,3,1),new Date(2025,6,1),2313295,2285202],[new Date(2025,6,1),new Date(2025,9,1),2285202,2257109],[new Date(2025,9,1),new Date(2026,0,1),2257109,2229016],[new Date(2026,0,1),new Date(2026,3,1),2341388,2313295],[new Date(2026,3,1),new Date(2026,6,1),2313295,2285202],[new Date(2026,6,1),new Date(2026,9,1),2285202,2257109],[new Date(2026,9,1),new Date(2027,0,1),2257109,2229016],[new Date(2027,0,1),new Date(2027,3,1),2341388,2313295],[new Date(2027,3,1),new Date(2027,6,1),2313295,2285202],[new Date(2027,6,1),new Date(2027,9,1),2285202,2257109],[new Date(2027,9,1),new Date(2028,0,1),2257109,2229016],[new Date(2028,0,1),new Date(2028,3,1),2341388,2313295],[new Date(2028,3,1),new Date(2028,6,1),2313295,2285202],[new Date(2028,6,1),new Date(2028,9,1),2285202,2257109],[new Date(2028,9,1),new Date(2029,0,1),2257109,2229016],[new Date(2029,0,1),new Date(2029,3,1),2341388,2313295],[new Date(2029,3,1),new Date(2029,6,1),2313295,2285202],[new Date(2029,6,1),new Date(2029,9,1),2285202,2257109],[new Date(2029,9,1),new Date(2030,0,1),2257109,2229016]]}return Object(D.a)(e,[{key:"GetMyHousePercentage",value:function(e){var n=this._periods.find((function(n){return n[0]<e&&n[1]>e}));if(n){var t=this.GetInterpolation(n[0],n[1],n[2],n[3])(e),a=n[2]-t;return[100*(1-a/236e4),a]}return[0,0]}},{key:"GetInterpolation",value:function(e,n,t,a){var r=t-a,o=Math.abs(n.getTime()-e.getTime());return function(n){var t=Math.abs(n.getTime()-e.getTime());return r*(t/o)}}}]),e}(),u=function(){var e=Object(a.useState)([0,0]),n=Object(w.a)(e,2),t=n[0],o=n[1],i=new s;Object(a.useEffect)((function(){var e=setInterval((function(){o((function(){return i.GetMyHousePercentage(new Date)}))}),1e3);return function(){return clearInterval(e)}}),[]);var c=new Intl.NumberFormat("da-DK",{style:"currency",currency:"DKK"});return r.a.createElement("div",null,"Vi ejer ",t[0].toFixed(9)," % af huset. ",r.a.createElement("br",null),"Vi skylder"," ",c.format(t[1]))},l=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(u,null)))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(l,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kaerskiftevej63",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/kaerskiftevej63","/service-worker.js");f?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.0ce99e97.chunk.js.map