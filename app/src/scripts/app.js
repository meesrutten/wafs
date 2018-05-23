import index from './views/index'
import errorPage from './views/404'
import Magic from './magic.js'
import MakeApiCall from './api'

const App = (function(){
	'strict mode'
	
	//sets the start url to splashpage or previous hash
	let startURL
	window.location.hash.length >= 1 ? startURL = window.location.hash : startURL = '#section_splash'
	
	//Made this init so I won't have to return const routes
	const init = function() {
		routes.init()
	}
	
	const routes = {
		init() {
			sections.toggle(startURL)
			window.addEventListener('hashchange', function(event) {
				let routeHash = getUrlParams(event.newURL)
				let oldRouteHash = getUrlParams(event.oldURL)
				
				if (!oldRouteHash.includes('#')) {
					oldRouteHash = startURL
				}

				sections.toggle(routeHash, oldRouteHash)
			})
			
		},
	}
	const getUrlParams = function(search) {
		let hashes = search.slice(search.lastIndexOf('#'))
		return hashes
	}

	const sections = {
		toggle(route, oldRoute) {
			if (typeof oldRoute !== 'undefined' && oldRoute !== '/') {
				let oldActiveSection = document.querySelector(oldRoute)
				
				if (oldActiveSection === null) {
					oldActiveSection = document.querySelector('#section_404')
				}

				const hide = new Magic(oldActiveSection, 'hide');
				hide.play();
				hide.onfinish = () => {
					//clears body
					if (document.querySelectorAll('header')[0]) {
						document.querySelector('header').remove()
						document.querySelector('main').remove()
					}
				}
			}

			//Checks the hash and sets the content
			if (route in paths) {
				paths[window.location.hash]()
				//removes loader
				const loader = document.querySelectorAll('#loader')
				if (loader[0]) {
					loader[0].remove()
				}
			}
			else {
				paths['404']()
				route = '#section_404'
			}

			const newActiveSection = document.querySelector(route)
			const show = new Magic(newActiveSection, 'show')
			show.play()
			show.onfinish = () => {
				newActiveSection.style = "max-height: 100%; overflow: auto;"
			}
		}
	}

	const paths = {
			''() {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					splash: true
				}))
			},
			'#section_splash'() {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					splash: true
				}))
			},
			'#section_api'() {
				const addElements = new Promise( function (resolve, reject) {
						document.body.insertAdjacentHTML('beforeend', render(index, {
							api: true
						}))
						if(document.querySelectorAll('#section_api')[0]) {
							console.log(document.querySelectorAll('#section_api')[0]);
							resolve()
							MakeApiCall.createApiCall('https://pokeapi.co/api/v2/pokemon/?limit=151')
						}
					}).then( () => {
					
				});
			},
			'#section_diagram'() {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					diagram: true
				}))
			},
			'404'() {
				document.body.insertAdjacentHTML('beforeend', render(errorPage, {
					el:true
				}))
			}
	} 

	const render = function(html, obj) {
		return html( obj )
	}

	return {
		init: init
	}
})()

App.init()