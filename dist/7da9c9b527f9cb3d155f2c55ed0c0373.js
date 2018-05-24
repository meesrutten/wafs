// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
const servicehandler = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/dist/f1b0e3b27491e4443616e45f26a5015c.js', {
			scope: './'
		}).then(function (registration) {
			var serviceWorker;
			if (registration.installing) {
				serviceWorker = registration.installing;
			} else if (registration.waiting) {
				serviceWorker = registration.waiting;
			} else if (registration.active) {
				serviceWorker = registration.active;
			}
			if (serviceWorker) {
				// logState(serviceWorker.state);
				serviceWorker.addEventListener('statechange', function (e) {
					// logState(e.target.state);
				});
			}
		}).catch(function (error) {
			// Something went wrong during registration. The service-worker.js file
			// might be unavailable or contain a syntax error.
		});
	}
}();

exports.default = servicehandler;
},{"./../service-worker.js":[["f1b0e3b27491e4443616e45f26a5015c.js",15],"f1b0e3b27491e4443616e45f26a5015c.map",15]}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = el => `
<header>
	<nav>
		<ul>
			<li><a href="#section_splash" ${el.splash ? 'aria-current="page"' : ''}">Home</a></li>
			<li><a href="#section_api" ${el.api ? 'aria-current="page"' : ''}>API</a></li>
			<li><a href="#section_diagram" ${el.diagram ? 'aria-current="page"' : ''}>Diagram</a></li>
		</ul>
	</nav>
</header>
`;
},{}],25:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = el => `
<h1 id="webappfromscratch">Web app from scratch</h1>

	<p>First, check out Parcel Bundler:
<a href="https://github.com/parcel-bundler/parcel">Parcel Bundler</a></p>

	<h2 id="getstarted">Get started</h2>

	<p class="warning">This project currently only works in Firefox Nightly!</p>

	<h3 id="installwithyarn">Install with yarn:</h3>

	<pre><code>yarn global add parcel-bundler
</code></pre>

	<h3 id="orinstallwithnpm">or install with npm:</h3>

	<pre><code>npm install -g parcel-bundler
</code></pre>

	<h3 id="tostartthisproject">To start this project:</h3>

	<pre><code>yarn
</code></pre>

	<p>or </p>

	<pre><code>npm install
</code></pre>

	<p>To run the server:</p>

	<pre><code>parcel src/index.html
</code></pre>

	<p>Then navigate to localhost:1234/</p>

	<p>If needed, you can also override the default port with the -p option. Add --open to automatically open a browser.</p>

	<h3 id="aboutthisproject">About this project</h3>

	<p>This project is a small single page web app with a router module that includes my library MagicLib for animations. It contains an API call function to display all the original Pokémon.
Its purpose is for me to learn how to create a router, add animations to a router and make good API calls with async/await.</p>

	<h3 id="api">API</h3>

	<p>This project uses the Pokémon API from <a href="https://pokeapi.co/">Pokeapi</a></p>

	<blockquote>
		"There is, however, a daily rate limit of 300 requests per resource per IP  address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load."
	</blockquote>

	<h3 id="principlesandbestpractices">Principles and best practices</h3>

	<p>For this project I used:</p>

	<ul>
		<li>Parcel, for bundling, parcing</li>

		<li>Babel for ES6/ES7 convertion to ES5</li>

		<li>Modular setup</li>

		<li>ES6 Templating strings and <code>insertAdjacentHTML</code> for the template</li>

		<li>Self written Web Animation API library called <a href="https://github.com/meesrutten/MagicLib/">MagicLib</a></li>

		<li>Loader while API call is being made</li>
	</ul>

	<h3 id="featurewishlist">Feature wishlist</h3>

	<p>I would like to add something to reduce renderblocking JS. </p>
`;
},{}],26:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = el => `
	<section class="diagram">
		<div class="diagram_box">
			<h2>Bundle</h2>
			<p>init:
				<span>function()</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>App.js</h2>
			<p>init:
				<span>function()</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>App.js events</h2>
			<p>routes.init:
				<span>function()</span>
			</p>
			<p>getUrlParams:
				<span>function()</span>
			</p>
			<p>sections.toggle:
				<span>function()</span>
			</p>
			<p>paths:
				<span>function()</span>
			</p>
			<p>render:
				<span>function()</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>Magic</h2>
			<p>Magic:
				<span>Object(element, string)</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>Api</h2>
			<p>createApiCall:
				<span>function()</span>
			</p>
			<p>call:
				<span>function()</span>
			</p>
			<p>manipulateData:
				<span>function()</span>
			</p>
			<p>injectDataList:
				<span>function()</span>
			</p>
			<p>addEvents:
				<span>function()</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>Filter</h2>
			<p>createSearchElement:
				<span>function()</span>
			</p>
			<p>filterElements:
				<span>function()</span>
			</p>
		</div>
		<div class="diagram_box">
			<h2>getDetails</h2>
			<p>getPokemon:
				<span>function()</span>
			</p>
			<p>addDetails:
				<span>function()</span>
			</p>
		</div>
	</section>
	<img class="diagram-image" src="./dist/2ce11420ddc8f796dba0a8f3c2d57c19.png" alt="">
`;
},{}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _splash = require('./splash');

var _splash2 = _interopRequireDefault(_splash);

var _diagram = require('./diagram');

var _diagram2 = _interopRequireDefault(_diagram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = el => `
		${(0, _header2.default)(el)}
		<main>
			${el.splash ? `<section id="section_splash" data-section>
					${(0, _splash2.default)(el)}
				</section>` : ''}
			${el.api ? `<section id="section_api" data-section>
					<h1>api</h1>
				</section>` : ''}
			${el.diagram ? `<section id="section_diagram" data-section>
					<h1>Diagrams</h1>
					${(0, _diagram2.default)(el)}
				</section>` : ''}
		</main>
	`;
},{"./header":24,"./splash":25,"./diagram":26}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = el => `
		${(0, _header2.default)(el)}
		<main>
			<section id="section_404" data-section >
				<h1>Shit broke. Use the header to navigate :)</h1>
			</section>
		</main>
	`;
},{"./header":24}],27:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [[{
	transform: 'scale(0) translateY(-10%)', opacity: 0, willChange: 'transform, opacity', maxHeight: '100vh'
}, {
	transform: 'scale(1) translateY(0)', opacity: 1, willChange: 'auto', maxHeight: '100vh'
}], {
	duration: 300,
	iterations: 1,
	easing: 'ease-out',
	fill: 'forwards',
	delay: 300
}];
},{}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [[{
	transform: 'scale(1) translateY(0)', opacity: 1, willChange: 'transform, opacity', maxHeight: '100vh'
}, {
	transform: 'scale(0) translateY(-10%)', opacity: 0, willChange: 'auto', maxHeight: '100vh'
}], {
	duration: 300,
	iterations: 1,
	easing: 'ease-in',
	fill: 'forwards'
}];
},{}],22:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = undefined;

var _show = require('./show');

var _show2 = _interopRequireDefault(_show);

var _hide = require('./hide');

var _hide2 = _interopRequireDefault(_hide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.show = _show2.default;
exports.hide = _hide2.default;
},{"./show":27,"./hide":28}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('./magic/index');

var animations = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Magic(node, animationName) {

	const options = animations[animationName];

	const keyFrameEffect = new KeyframeEffect(node, ...options);
	return new Animation(keyFrameEffect, document.timeline);
}

exports.default = Magic;
},{"./magic/index":22}],23:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = el => `
<svg version="1.1" id="loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
<path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
  s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
  c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
<path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
  C22.32,8.481,24.301,9.057,26.013,10.047z">
  <animateTransform attributeType="xml"
    attributeName="transform"
    type="rotate"
    from="0 20 20"
    to="360 20 20"
    dur="0.5s"
    repeatCount="indefinite"/>
  </path>
</svg>
`;
},{}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
const createSearchElement = function () {
	const elem = document.querySelector('#section_api');
	const input = document.createElement('input');
	const label = document.createElement('label');
	label.textContent = "Search";
	label.for = "filter";
	label.classList.add("label");
	input.setAttribute('data-filter', 'pokemon');
	input.setAttribute('data-filters', 'ol [data-pokemon]');
	input.setAttribute('placeholder', 'Search here');
	input.setAttribute('name', 'filter');

	input.addEventListener('input', filterElements);
	label.appendChild(input);

	if (!document.querySelectorAll('[data-filter]')[0]) {
		elem.insertBefore(label, elem.firstChild);
	}
};

const filterElements = function () {
	const searchValue = event.target.value;
	const filterName = event.target.getAttribute('data-filter');
	const filterElement = event.target.getAttribute('data-filters');
	const elements = document.querySelectorAll(`[data-${filterName}]`);

	const searchResult = Array.from(elements).filter(item => {
		const dataType = item.getAttribute(`data-${filterName}`);
		if (dataType.includes(searchValue) || item.textContent.includes(searchValue)) {
			return item;
		}
	});

	elements.forEach(elem => {
		elem.classList.add('hidden');
	});
	searchResult.forEach(item => {
		item.classList.toggle('hidden');
	});
};

exports.createSearchElement = createSearchElement;
exports.filterElements = filterElements;
},{}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
const createSortElement = function () {
	const elem = document.querySelector('#section_api');
	// input.setAttribute('data-sort', 'pokemon');
	const elements = document.querySelectorAll('ol [data-pokemon]');
	// input.setAttribute('placeholder', 'Search here');

	elem.insertAdjacentHTML('afterbegin', `
			<label for="sort" class="label">Sort by
				<select name="sort" data-sort="pokemon" data-sorts="ol [data-pokemon]"> <!--Supplement an id here instead of using 'text'-->
					<option selected value="Number">Number</option>
					<option value="Alphabetical">Alphabetical</option>
					<option value="Number reverse">Number reverse</option>
					<option value="Alphabetical reverse">Alphabetical reverse</option>
				</select>
			</label>
				`);

	const select = document.querySelector('[data-sort]');

	select.addEventListener('change', sortElements);

	//Adds a number to the elements
	elements.forEach((element, i) => {
		i++;
		element.setAttribute('data-number', i);
	});

	if (!document.querySelectorAll('[data-sort]')[0]) {
		elem.insertAdjacentHTML('afterbegin', `
			<select name="sort" data-sort="pokemon" data-sorts="ol [data-pokemon]"> <!--Supplement an id here instead of using 'text'-->
				<option selected value="Number">Number</option>
				<option value="Alphabetical">Alphabetical</option>
				<option value="Number reverse">Number reverse</option>
				<option value="Alphabetical reverse">Alphabetical reverse</option>
			</select>
				`);
	}
};

const sortElements = function () {
	const sortValue = event.target.value;

	const sortElement = event.target.getAttribute('data-sorts');
	const elements = document.querySelectorAll(sortElement);
	let sortResult;

	switch (sortValue) {
		case 'Number':
			sortResult = Array.from(elements).sort((a, b) => {
				return Number(a.dataset.number) - Number(b.dataset.number);
			});
			replaceElements(sortResult);
			break;

		case 'Alphabetical':
			sortResult = Array.from(elements).sort((a, b) => a.textContent.localeCompare(b.textContent));
			replaceElements(sortResult);
			break;

		case 'Number reverse':
			sortResult = Array.from(elements).sort((a, b) => {
				return Number(b.dataset.number) - Number(a.dataset.number);
			});
			replaceElements(sortResult);
			break;

		case 'Alphabetical reverse':
			sortResult = Array.from(elements).sort((a, b) => b.textContent.localeCompare(a.textContent));
			replaceElements(sortResult);
			break;
	}

	function replaceElements(sortResult) {
		const frag = document.createDocumentFragment();
		sortResult.forEach(result => {
			frag.appendChild(result);
		});

		document.querySelector('ol').appendChild(frag);
	}
};

exports.createSortElement = createSortElement;
exports.sortElements = sortElements;
},{}],21:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addDetails = exports.getPokemon = undefined;

var _loader = require('./views/loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPokemon = function (event, i) {
	//Prevents extra API calls
	if (!event.target.querySelectorAll('.pokemon-information')[0]) {
		event.target.insertAdjacentHTML('beforeend', (0, _loader2.default)({}));
		fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function (response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + response.status);
				return;
			}

			// Examine the text in the response
			response.json().then(function (data) {
				console.log(data);
				addDetails(data, event.target);
			});
		}).catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
	}
};

const addDetails = function (data, elem) {
	console.log(data.id);
	const id = data.id;
	const name = data.name;
	const weight = data.weight;
	const height = data.height;
	const sprite = data.sprites.front_default;

	function createElement(id, name, weight, height, sprite) {
		return `
			<a href="https://bulbapedia.bulbagarden.net/wiki/${name}_(Pokémon)">
				<article class="pokemon-information">
					<section>
						<p>ID: ${id}</p>
						<p>Weight: ${weight}</p>
						<p>Height: ${height}</p>
					</section>
					<figure>
						<img src="${sprite}" alt="An image of ${name}">
					</figure>
				</article>
			</a>
			`;
	}

	const loader = document.querySelectorAll('#loader');
	if (loader[0]) {
		loader[0].remove();
	}
	elem.insertAdjacentHTML('beforeend', createElement(id, name, weight, height, sprite));
};

exports.getPokemon = getPokemon;
exports.addDetails = addDetails;
},{"./views/loader":23}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _loader = require('./views/loader');

var _loader2 = _interopRequireDefault(_loader);

var _filter = require('./filter');

var _sorting = require('./sorting');

var _getDetails = require('./getDetails');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MakeApiCall = function () {
	'strict mode';

	const createApiCall = async function (URL) {
		const data = JSON.parse(localStorage.getItem(URL)) || (await call(URL));
		//If there is no saved api call url in localstorage
		if (!localStorage.getItem(URL) === null) {
			manipulateData(data);
		} else {
			localStorage.setItem(URL, JSON.stringify(data));
			manipulateData(data);
		}
	};

	const call = async function (URL) {
		const response = await fetch(URL);
		const data = response.json();
		return data;
	};

	function manipulateData(data) {
		const mappedResult = data.results.map(item => {
			return item = item.name;
		});
		injectDataList(mappedResult);
	}

	function injectDataList(result) {
		const loader = document.querySelectorAll('#loader');
		if (loader[0]) {
			loader[0].remove();
		}
		const contentSection = document.querySelector('#section_api');
		contentSection.insertAdjacentHTML('beforeend', '<ol></ol>');

		const fragment = document.createDocumentFragment();

		result.forEach((name, i) => {
			const li = document.createElement('li');
			li.textContent = name;
			li.setAttribute('data-pokemon', name.toLowerCase());
			fragment.appendChild(li);

			if (i + 1 === result.length) {
				console.log('end');
				contentSection.querySelector('ol').appendChild(fragment);
				addEvents();
			}
		});
	}

	function addEvents() {
		const pokemon = document.querySelectorAll('[data-pokemon]');

		pokemon.forEach((poke, i) => {
			i += 1;
			poke.addEventListener('click', function _func(event) {
				(0, _getDetails.getPokemon)(event, i);
				this.removeEventListener('click', _func);
			});
		});

		(0, _filter.createSearchElement)();
		(0, _sorting.createSortElement)();
	}

	return {
		createApiCall
	};
}();

exports.default = MakeApiCall;
},{"./views/loader":23,"./filter":20,"./sorting":32,"./getDetails":21}],12:[function(require,module,exports) {
'use strict';

var _index = require('./views/index');

var _index2 = _interopRequireDefault(_index);

var _ = require('./views/404');

var _2 = _interopRequireDefault(_);

var _magic = require('./magic.js');

var _magic2 = _interopRequireDefault(_magic);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = function () {
	'strict mode';

	//sets the start url to splashpage or previous hash

	let startURL;
	window.location.hash.length >= 1 ? startURL = window.location.hash : startURL = '#section_splash';

	//Made this init so I won't have to return const routes
	const init = function () {
		routes.init();
	};

	const routes = {
		init() {
			sections.toggle(startURL);
			window.addEventListener('hashchange', function (event) {
				let routeHash = getUrlParams(event.newURL);
				let oldRouteHash = getUrlParams(event.oldURL);

				if (!oldRouteHash.includes('#')) {
					oldRouteHash = startURL;
				}

				sections.toggle(routeHash, oldRouteHash);
			});
		}
	};
	const getUrlParams = function (search) {
		let hashes = search.slice(search.lastIndexOf('#'));
		return hashes;
	};

	const sections = {
		toggle(route, oldRoute) {
			if (typeof oldRoute !== 'undefined' && oldRoute !== '/') {
				let oldActiveSection = document.querySelector(oldRoute);

				if (oldActiveSection === null) {
					oldActiveSection = document.querySelector('#section_404');
				}

				const hide = new _magic2.default(oldActiveSection, 'hide');
				hide.play();
				hide.onfinish = () => {
					//clears body
					if (document.querySelectorAll('header')[0]) {
						document.querySelector('header').remove();
						document.querySelector('main').remove();
					}
				};
			}

			//Checks the hash and sets the content
			if (route in paths) {
				paths[window.location.hash]();
				//removes loader
				const loader = document.querySelectorAll('#loader');
				if (loader[0]) {
					loader[0].remove();
				}
			} else {
				paths['404']();
				route = '#section_404';
			}

			const newActiveSection = document.querySelector(route);
			const show = new _magic2.default(newActiveSection, 'show');
			show.play();
			show.onfinish = () => {
				newActiveSection.style = "max-height: 100%; overflow: auto;";
			};
		}
	};

	const paths = {
		''() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				splash: true
			}));
		},
		'#section_splash'() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				splash: true
			}));
		},
		'#section_api'() {
			const addElements = new Promise(function (resolve, reject) {
				document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
					api: true
				}));
				if (document.querySelectorAll('#section_api')[0]) {
					console.log(document.querySelectorAll('#section_api')[0]);
					resolve();
					_api2.default.createApiCall('https://pokeapi.co/api/v2/pokemon/?limit=151');
				}
			}).then(() => {});
		},
		'#section_diagram'() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				diagram: true
			}));
		},
		'404'() {
			document.body.insertAdjacentHTML('beforeend', render(_2.default, {
				el: true
			}));
		}
	};

	const render = function (html, obj) {
		return html(obj);
	};

	return {
		init: init
	};
}();

App.init();
},{"./views/index":18,"./views/404":19,"./magic.js":16,"./api":17}],3:[function(require,module,exports) {
'use strict';

var _servicehandler = require('./servicehandler');

var _servicehandler2 = _interopRequireDefault(_servicehandler);

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // Import a module using CommonJS syntax
// const dep = require('./path/to/dep');

// // Import a module using ES6 import syntax
// import dep from './path/to/dep';

// // Import a CSS file
// import './test.css';

// // Import a CSS file with CSS modules
// import classNames from './test.css';

// // Import the URL to an image file
// import imageURL from './test.png';
console.log('bundle.js - test');
},{"./servicehandler":13,"./app.js":12}],34:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '57699' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[34,3])
//# sourceMappingURL=/dist/7da9c9b527f9cb3d155f2c55ed0c0373.map