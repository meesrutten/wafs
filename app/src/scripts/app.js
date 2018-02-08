


(function(){
	'strict mode'
	this.startURL = window.location.hash
	this.animationDuration = 200

	this.init = () => {
		this.routes.init()
	}
	this.routes = {
		init: () => {
			this.sections.toggle(startURL)
			window.addEventListener('hashchange', (event) => {
				const routeHash = this.getUrlParams(event.newURL)
				const oldRouteHash = this.getUrlParams(event.oldURL)
				this.sections.toggle(routeHash, oldRouteHash)
			})
		},
	}
	this.getUrlParams = (search) => {
		let hashes = search.slice(search.lastIndexOf('#'))
		return hashes
	}
	this.sections = {
		toggle: (route, oldRoute) => {
			if (typeof oldRoute !== 'undefined') {
				const oldActiveSection = document.querySelector(oldRoute)
				oldActiveSection.animate(this.animation.hide, this.animation.settingsHide)
			}
			const newActiveSection = document.querySelector(route)
			newActiveSection.animate(this.animation.show, this.animation.settingsShow)
		}
	}
	this.animation = {
		settingsShow: {
			duration: this.animationDuration,
			iterations: 1,
			easing: 'ease-out',
			fill: 'forwards',
			delay: this.animationDuration
		},
		settingsHide: {
			duration: this.animationDuration,
			iterations: 1,
			easing: 'ease-in',
			fill: 'forwards'
		},
		show: [ 
			{ transform: 'scale(0)', opacity: 0 }, 
			{ transform: 'scale(1)', opacity: 1 },
		],
		hide: [
			{ transform: 'scale(1)', opacity: 1 },
			{ transform: 'scale(0)', opacity: 0 } 
		]
	}
	this.init()
})()