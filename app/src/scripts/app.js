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
				const routeHash = getUrlParams(event.newURL)
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
			console.log(route, oldRoute);
			if (typeof oldRoute !== 'undefined' && oldRoute !== '/') {
				const oldActiveSection = document.querySelector(oldRoute)
				const hide = new Magic(oldActiveSection, 'hide');
				hide();
			}
			const newActiveSection = document.querySelector(route)
			//newActiveSection.animate(Magic.toggle.show, Magic.toggle.settingsShow)
			const show = new Magic(newActiveSection, 'show');
			show();
		}
	}
	return {
		init: init
	}
})()

App.init()