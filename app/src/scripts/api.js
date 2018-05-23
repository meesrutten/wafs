import loader from './views/loader'
import { createSearchElement, filterElements } from './filter'
import { createSortElement, sortElements } from './sorting'
import { getPokemon, addDetails } from './getDetails'


const MakeApiCall = (function(){
	'strict mode'

	const createApiCall = async function(URL){
		const data = JSON.parse(localStorage.getItem(URL)) || await call(URL)
		//If there is no saved api call url in localstorage
		if (!localStorage.getItem(URL) === null) {
			manipulateData(data)
		}
		else {
			localStorage.setItem(URL, JSON.stringify(data));
			manipulateData(data)
		}
	}
	
	const call = async function (URL) {
		const response = await fetch(URL)
		const data = response.json()
		return data
	}

	function manipulateData(data) {
		const mappedResult = data.results.map((item) => {
			return item = item.name
		})
		injectDataList(mappedResult)
	}

	function injectDataList(result) {
		const loader = document.querySelectorAll('#loader')
		if (loader[0]) {
			loader[0].remove()
		}
		const contentSection = document.querySelector('#section_api')
		contentSection.insertAdjacentHTML('beforeend', '<ol></ol>')

		const fragment = document.createDocumentFragment();

		result.forEach((name, i) => {
			const li = document.createElement('li')
			li.textContent = name
			li.setAttribute('data-pokemon', name.toLowerCase())
			fragment.appendChild(li)

			if (i + 1 === result.length) {
				console.log('end')
				contentSection.querySelector('ol').appendChild(fragment)
				addEvents()
			}
		})
	}

	function addEvents() {
		const pokemon = document.querySelectorAll('[data-pokemon]')

		pokemon.forEach((poke, i) => {
			i += 1
			poke.addEventListener('click', function _func(event) {
				getPokemon(event, i)
				this.removeEventListener('click', _func)
			})
		})
		
		createSearchElement();
		createSortElement();
	}

	return {
		createApiCall
	}
})()

export default MakeApiCall
