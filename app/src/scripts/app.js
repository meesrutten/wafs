import index from './views/index'
import errorPage from './views/404'

import Magic from './magic.js'
const App = (function(){
	'strict mode'
	
	let startURL
	window.location.hash.length >= 1 ? startURL = window.location.hash : startURL = '#section_splash'
	
	const init = () => {
		routes.init()
	}
	
	const routes = {
		init: () => {
			sections.toggle(startURL)
			window.addEventListener('hashchange', (event) => {
				let routeHash = getUrlParams(event.newURL)
				let oldRouteHash = getUrlParams(event.oldURL)
				
				if (!oldRouteHash.includes('#')) {
					oldRouteHash = startURL
				}

				sections.toggle(routeHash, oldRouteHash)
			})
		},
	}
	const getUrlParams = (search) => {
		let hashes = search.slice(search.lastIndexOf('#'))
		return hashes
	}

	const sections = {
		toggle: (route, oldRoute) => {
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

			if (route in paths) {
				paths[window.location.hash]()
			}
			else {
				paths['404']()
				route = '#section_404'
			}

			const newActiveSection = document.querySelector(route)
			const show = new Magic(newActiveSection, 'show');
			show.play();
		}
	}

	const paths = {
			'': () => {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					splash: true
				}))
			},
			'#section_splash': () => {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					splash: true
				}))
			},
			'#section_api': () => {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					api: true
				}))
			},
			'#section_test': () => {
				document.body.insertAdjacentHTML('beforeend', render(index, {
					test: true
				}))
			},
			'404': () => {
				document.body.insertAdjacentHTML('beforeend', render(errorPage, {
					el:true
				}))
			}
	} 

	const render = (html, obj) => {
		return html( obj )
	}

	return {
		init: init
	}
})()

App.init()