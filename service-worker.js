if(!self.define){let e,r={};const s=(s,l)=>(s=new URL(s+".js",l).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(l,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let n={};const c=e=>s(e,i),u={module:{uri:i},exports:n,require:c};r[i]=Promise.all(l.map((e=>u[e]||c(e)))).then((e=>(t(...e),n)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tap-treck"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/tap-treck/css/52.04dab391.css",revision:null},{url:"/tap-treck/css/842.3ed5a930.css",revision:null},{url:"/tap-treck/css/app.9dedc64b.css",revision:null},{url:"/tap-treck/css/chunk-vendors.2ba887c2.css",revision:null},{url:"/tap-treck/fonts/bootstrap-icons.02685dab.woff2",revision:null},{url:"/tap-treck/fonts/bootstrap-icons.8463cb1e.woff",revision:null},{url:"/tap-treck/img/Google-Original.83e07efe.svg",revision:null},{url:"/tap-treck/img/Layer1.b0fa8dad.svg",revision:null},{url:"/tap-treck/img/Telegram-Original.76b0b3c9.svg",revision:null},{url:"/tap-treck/img/VK-Original.59760642.svg",revision:null},{url:"/tap-treck/img/check-square-fill.0d118505.svg",revision:null},{url:"/tap-treck/img/user.debbc52e.svg",revision:null},{url:"/tap-treck/index.html",revision:"9cc0d24ad6e60171aca818517c867ff5"},{url:"/tap-treck/js/176.61447245.js",revision:null},{url:"/tap-treck/js/378.5230ba25.js",revision:null},{url:"/tap-treck/js/469.45c9f8f6.js",revision:null},{url:"/tap-treck/js/517.0c99699c.js",revision:null},{url:"/tap-treck/js/52.3f6147c2.js",revision:null},{url:"/tap-treck/js/566.0ad52add.js",revision:null},{url:"/tap-treck/js/842.65e89705.js",revision:null},{url:"/tap-treck/js/944.438b6da2.js",revision:null},{url:"/tap-treck/js/96.2eebef24.js",revision:null},{url:"/tap-treck/js/app.59a02cf0.js",revision:null},{url:"/tap-treck/js/chunk-vendors.e6b132f2.js",revision:null},{url:"/tap-treck/manifest.json",revision:"ec8200a3f352b0e52cb67e4a1439f6f3"},{url:"/tap-treck/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map