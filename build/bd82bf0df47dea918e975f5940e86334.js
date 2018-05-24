require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({37:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=void("serviceWorker"in navigator&&navigator.serviceWorker.register("93d7b3be91462e150c65581d97fa0d42.js",{scope:"./"}).then(function(e){var t;e.installing?t=e.installing:e.waiting?t=e.waiting:e.active&&(t=e.active),t&&t.addEventListener("statechange",function(e){})}).catch(function(e){}));exports.default=e;
},{"./../service-worker.js":[["93d7b3be91462e150c65581d97fa0d42.js",42],42]}],51:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=(a=>`\n<header>\n\t<nav>\n\t\t<ul>\n\t\t\t<li><a href="#section_splash" ${a.splash?'aria-current="page"':""}">Home</a></li>\n\t\t\t<li><a href="#section_api" ${a.api?'aria-current="page"':""}>API</a></li>\n\t\t\t<li><a href="#section_diagram" ${a.diagram?'aria-current="page"':""}>Diagram</a></li>\n\t\t</ul>\n\t</nav>\n</header>\n`);
},{}],52:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=(t=>'\n<h1 id="webappfromscratch">Web app from scratch</h1>\n\n\t<p>First, check out Parcel Bundler:\n<a href="https://github.com/parcel-bundler/parcel">Parcel Bundler</a></p>\n\n\t<h2 id="getstarted">Get started</h2>\n\n\t<p class="warning">This project currently only works in Firefox Nightly!</p>\n\n\t<h3 id="installwithyarn">Install with yarn:</h3>\n\n\t<pre><code>yarn global add parcel-bundler\n</code></pre>\n\n\t<h3 id="orinstallwithnpm">or install with npm:</h3>\n\n\t<pre><code>npm install -g parcel-bundler\n</code></pre>\n\n\t<h3 id="tostartthisproject">To start this project:</h3>\n\n\t<pre><code>yarn\n</code></pre>\n\n\t<p>or </p>\n\n\t<pre><code>npm install\n</code></pre>\n\n\t<p>To run the server:</p>\n\n\t<pre><code>parcel src/index.html\n</code></pre>\n\n\t<p>Then navigate to localhost:1234/</p>\n\n\t<p>If needed, you can also override the default port with the -p option. Add --open to automatically open a browser.</p>\n\n\t<h3 id="aboutthisproject">About this project</h3>\n\n\t<p>This project is a small single page web app with a router module that includes my library MagicLib for animations. It contains an API call function to display all the original Pokémon.\nIts purpose is for me to learn how to create a router, add animations to a router and make good API calls with async/await.</p>\n\n\t<h3 id="api">API</h3>\n\n\t<p>This project uses the Pokémon API from <a href="https://pokeapi.co/">Pokeapi</a></p>\n\n\t<blockquote>\n\t\t"There is, however, a daily rate limit of 300 requests per resource per IP  address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load."\n\t</blockquote>\n\n\t<h3 id="principlesandbestpractices">Principles and best practices</h3>\n\n\t<p>For this project I used:</p>\n\n\t<ul>\n\t\t<li>Parcel, for bundling, parcing</li>\n\n\t\t<li>Babel for ES6/ES7 convertion to ES5</li>\n\n\t\t<li>Modular setup</li>\n\n\t\t<li>ES6 Templating strings and <code>insertAdjacentHTML</code> for the template</li>\n\n\t\t<li>Self written Web Animation API library called <a href="https://github.com/meesrutten/MagicLib/">MagicLib</a></li>\n\n\t\t<li>Loader while API call is being made</li>\n\t</ul>\n\n\t<h3 id="featurewishlist">Feature wishlist</h3>\n\n\t<p>I would like to add something to reduce renderblocking JS. </p>\n');
},{}],53:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=(t=>'\n\t<section class="diagram">\n\t\t<div class="diagram_box">\n\t\t\t<h2>Bundle</h2>\n\t\t\t<p>init:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>App.js</h2>\n\t\t\t<p>init:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>App.js events</h2>\n\t\t\t<p>routes.init:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>getUrlParams:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>sections.toggle:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>paths:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>render:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>Magic</h2>\n\t\t\t<p>Magic:\n\t\t\t\t<span>Object(element, string)</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>Api</h2>\n\t\t\t<p>createApiCall:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>call:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>manipulateData:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>injectDataList:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>addEvents:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>Filter</h2>\n\t\t\t<p>createSearchElement:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>filterElements:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>Sort</h2>\n\t\t\t<p>createSortElement:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>sortElements:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="diagram_box">\n\t\t\t<h2>getDetails</h2>\n\t\t\t<p>getPokemon:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t\t<p>addDetails:\n\t\t\t\t<span>function()</span>\n\t\t\t</p>\n\t\t</div>\n\t</section>\n\t<img class="diagram-image" src="./dist/2ce11420ddc8f796dba0a8f3c2d57c19.png" alt="">\n\t<img class="diagram-image" src="./dist/21bb03cbe605a76234cbca85d0fd485b.png" alt="">\n\t<img class="diagram-image" src="./dist/b28ed9ead43afa9047d7c3ff06a3b4c6.png" alt="">\n');
},{}],44:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./header"),e=r(t),n=require("./splash"),a=r(n),i=require("./diagram"),s=r(i);function r(t){return t&&t.__esModule?t:{default:t}}exports.default=(t=>`\n\t\t${(0,e.default)(t)}\n\t\t<main>\n\t\t\t${t.splash?`<section id="section_splash" data-section>\n\t\t\t\t\t${(0,a.default)(t)}\n\t\t\t\t</section>`:""}\n\t\t\t${t.api?'<section id="section_api" data-section>\n\t\t\t\t\t<h1>api</h1>\n\t\t\t\t</section>':""}\n\t\t\t${t.diagram?`<section id="section_diagram" data-section>\n\t\t\t\t\t<h1>Diagrams</h1>\n\t\t\t\t\t${(0,s.default)(t)}\n\t\t\t\t</section>`:""}\n\t\t</main>\n\t`);
},{"./header":51,"./splash":52,"./diagram":53}],45:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./header"),e=n(t);function n(t){return t&&t.__esModule?t:{default:t}}exports.default=(t=>`\n\t\t${(0,e.default)(t)}\n\t\t<main>\n\t\t\t<section id="section_404" data-section >\n\t\t\t\t<h1>Shit broke. Use the header to navigate :)</h1>\n\t\t\t</section>\n\t\t</main>\n\t`);
},{"./header":51}],54:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=[[{transform:"scale(0) translateY(-10%)",opacity:0,willChange:"transform, opacity",maxHeight:"100vh"},{transform:"scale(1) translateY(0)",opacity:1,willChange:"auto",maxHeight:"100vh"}],{duration:300,iterations:1,easing:"ease-out",fill:"forwards",delay:300}];
},{}],55:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=[[{transform:"scale(1) translateY(0)",opacity:1,willChange:"transform, opacity",maxHeight:"100vh"},{transform:"scale(0) translateY(-10%)",opacity:0,willChange:"auto",maxHeight:"100vh"}],{duration:300,iterations:1,easing:"ease-in",fill:"forwards"}];
},{}],46:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hide=exports.show=void 0;var e=require("./show"),r=s(e),t=require("./hide"),o=s(t);function s(e){return e&&e.__esModule?e:{default:e}}exports.show=r.default,exports.hide=o.default;
},{"./show":54,"./hide":55}],41:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./magic/index"),t=r(e);function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(e,r){const n=t[r],i=new KeyframeEffect(e,...n);return new Animation(i,document.timeline)}exports.default=n;
},{"./magic/index":46}],50:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=(e=>'\n<svg version="1.1" id="loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">\n<path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n  s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n  c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>\n<path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n  C22.32,8.481,24.301,9.057,26.013,10.047z">\n  <animateTransform attributeType="xml"\n    attributeName="transform"\n    type="rotate"\n    from="0 20 20"\n    to="360 20 20"\n    dur="0.5s"\n    repeatCount="indefinite"/>\n  </path>\n</svg>\n');
},{}],47:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=function(){const e=document.querySelector("#section_api"),r=document.createElement("input"),a=document.createElement("label");a.textContent="Search",a.for="filter",a.classList.add("label"),r.setAttribute("data-filter","pokemon"),r.setAttribute("data-filters","ol [data-pokemon]"),r.setAttribute("placeholder","Search here"),r.setAttribute("name","filter"),r.addEventListener("input",t),a.appendChild(r),document.querySelectorAll("[data-filter]")[0]||e.insertBefore(a,e.children[1])},t=function(){const e=event.target.value,t=event.target.getAttribute("data-filter"),r=(event.target.getAttribute("data-filters"),document.querySelectorAll(`[data-${t}]`)),a=Array.from(r).filter(r=>{if(r.getAttribute(`data-${t}`).includes(e)||r.textContent.includes(e))return r});r.forEach(e=>{e.classList.add("hidden")}),a.forEach(e=>{e.classList.toggle("hidden")})};exports.createSearchElement=e,exports.filterElements=t;
},{}],48:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=function(){const t=document.querySelector("#section_api");document.querySelectorAll("ol [data-pokemon]").forEach((t,e)=>{e++,t.setAttribute("data-number",e)}),document.querySelectorAll("[data-sort]")[0]||t.querySelector("h1").insertAdjacentHTML("afterend",'\n\t\t\t<label for="sort" class="label">Sort by\n\t\t\t\t<select name="sort" data-sort="pokemon" data-sorts="ol [data-pokemon]"> \x3c!--Supplement an id here instead of using \'text\'--\x3e\n\t\t\t\t\t<option selected value="Number">Number</option>\n\t\t\t\t\t<option value="Alphabetical">Alphabetical</option>\n\t\t\t\t\t<option value="Number reverse">Number reverse</option>\n\t\t\t\t\t<option value="Alphabetical reverse">Alphabetical reverse</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t\t'),document.querySelector("[data-sort]").addEventListener("change",e)},e=function(){const t=event.target.value,e=event.target.getAttribute("data-sorts"),r=document.querySelectorAll(e);let o;switch(t){case"Number":a(o=Array.from(r).sort((t,e)=>Number(t.dataset.number)-Number(e.dataset.number)));break;case"Alphabetical":a(o=Array.from(r).sort((t,e)=>t.textContent.localeCompare(e.textContent)));break;case"Number reverse":a(o=Array.from(r).sort((t,e)=>Number(e.dataset.number)-Number(t.dataset.number)));break;case"Alphabetical reverse":a(o=Array.from(r).sort((t,e)=>e.textContent.localeCompare(t.textContent)))}function a(t){const e=document.createDocumentFragment();t.forEach(t=>{e.appendChild(t)}),document.querySelector("ol").appendChild(e)}};exports.createSortElement=t,exports.sortElements=e;
},{}],49:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDetails=exports.getPokemon=void 0;var t=require("./views/loader"),e=o(t);function o(t){return t&&t.__esModule?t:{default:t}}const n=function(t,o){t.target.querySelectorAll(".pokemon-information")[0]||(t.target.insertAdjacentHTML("beforeend",(0,e.default)({})),fetch(`https://pokeapi.co/api/v2/pokemon/${o}`).then(function(e){200===e.status?e.json().then(function(e){console.log(e),r(e,t.target)}):console.log("Looks like there was a problem. Status Code: "+e.status)}).catch(function(t){console.log("Fetch Error :-S",t)}))},r=function(t,e){console.log(t.id);const o=t.id,n=t.name,r=t.weight,i=t.height,a=t.sprites.front_default;const s=document.querySelectorAll("#loader");s[0]&&s[0].remove(),e.insertAdjacentHTML("beforeend",function(t,e,o,n,r){return`\n\t\t\t<a href="https://bulbapedia.bulbagarden.net/wiki/${e}_(Pokémon)">\n\t\t\t\t<article class="pokemon-information">\n\t\t\t\t\t<section>\n\t\t\t\t\t\t<p>ID: ${t}</p>\n\t\t\t\t\t\t<p>Weight: ${o}</p>\n\t\t\t\t\t\t<p>Height: ${n}</p>\n\t\t\t\t\t</section>\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src="${r}" alt="An image of ${e}">\n\t\t\t\t\t</figure>\n\t\t\t\t</article>\n\t\t\t</a>\n\t\t\t`}(o,n,r,i,a))};exports.getPokemon=n,exports.addDetails=r;
},{"./views/loader":50}],43:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./views/loader"),t=c(e),o=require("./filter"),n=require("./sorting"),r=require("./getDetails");function c(e){return e&&e.__esModule?e:{default:e}}const a=function(){"strict mode";const e=async function(e){return(await fetch(e)).json()};function t(e){!function(e){const t=document.querySelectorAll("#loader");t[0]&&t[0].remove();const c=document.querySelector("#section_api");c.insertAdjacentHTML("beforeend","<ol></ol>");const a=document.createDocumentFragment();e.forEach((t,l)=>{const i=document.createElement("li");i.textContent=t,i.setAttribute("data-pokemon",t.toLowerCase()),a.appendChild(i),l+1===e.length&&(console.log("end"),c.querySelector("ol").appendChild(a),document.querySelectorAll("[data-pokemon]").forEach((e,t)=>{t+=1,e.addEventListener("click",function e(o){(0,r.getPokemon)(o,t),this.removeEventListener("click",e)})}),(0,o.createSearchElement)(),(0,n.createSortElement)())})}(e.results.map(e=>e.name))}return{createApiCall:async function(o){const n=JSON.parse(localStorage.getItem(o))||await e(o);null===!localStorage.getItem(o)?t(n):(localStorage.setItem(o,JSON.stringify(n)),t(n))}}}();exports.default=a;
},{"./views/loader":50,"./filter":47,"./sorting":48,"./getDetails":49}],36:[function(require,module,exports) {
"use strict";var e=require("./views/index"),t=d(e),n=require("./views/404"),o=d(n),i=require("./magic.js"),c=d(i),l=require("./api"),r=d(l);function d(e){return e&&e.__esModule?e:{default:e}}const u=function(){"strict mode";let e;e=window.location.hash.length>=1?window.location.hash:"#section_splash";const n={init(){l.toggle(e),window.addEventListener("hashchange",function(t){let n=i(t.newURL),o=i(t.oldURL);o.includes("#")||(o=e),l.toggle(n,o)})}},i=function(e){return e.slice(e.lastIndexOf("#"))},l={toggle(e,t){if(void 0!==t&&"/"!==t){let e=document.querySelector(t);null===e&&(e=document.querySelector("#section_404"));const n=new c.default(e,"hide");n.play(),n.onfinish=(()=>{document.querySelectorAll("header")[0]&&(document.querySelector("header").remove(),document.querySelector("main").remove())})}if(e in d){d[window.location.hash]();const e=document.querySelectorAll("#loader");e[0]&&e[0].remove()}else d[404](),e="#section_404";const n=document.querySelector(e),o=new c.default(n,"show");o.play(),o.onfinish=(()=>{n.style="max-height: 100%; overflow: auto;"})}},d={""(){document.body.insertAdjacentHTML("beforeend",u(t.default,{splash:!0}))},"#section_splash"(){document.body.insertAdjacentHTML("beforeend",u(t.default,{splash:!0}))},"#section_api"(){new Promise(function(e,n){document.body.insertAdjacentHTML("beforeend",u(t.default,{api:!0})),document.querySelectorAll("#section_api")[0]&&(console.log(document.querySelectorAll("#section_api")[0]),e(),r.default.createApiCall("https://pokeapi.co/api/v2/pokemon/?limit=151"))}).then(()=>{})},"#section_diagram"(){document.body.insertAdjacentHTML("beforeend",u(t.default,{diagram:!0}))},404(){document.body.insertAdjacentHTML("beforeend",u(o.default,{el:!0}))}},u=function(e,t){return e(t)};return{init:function(){n.init()}}}();u.init();
},{"./views/index":44,"./views/404":45,"./magic.js":41,"./api":43}],15:[function(require,module,exports) {
"use strict";var e=require("./servicehandler"),r=t(e),s=require("./app.js"),u=t(s);function t(e){return e&&e.__esModule?e:{default:e}}console.log("bundle.js - test");
},{"./servicehandler":37,"./app.js":36}]},{},[15])