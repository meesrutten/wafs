import loader from './views/loader'

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
		
		createSearchElement()
	}

	function getPokemon(event, i) {
		//Prevents extra API calls
		if (!event.target.querySelectorAll('.pokemon-information')[0]) {
			event.target.insertAdjacentHTML('beforeend', loader({}))
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
				.then(
					function (response) {
						if (response.status !== 200) {
							console.log('Looks like there was a problem. Status Code: ' +
								response.status);
							return;
						}

						// Examine the text in the response
						response.json().then(function (data) {
							console.log(data);
							addDetails(data, event.target)
						});
					}
				)
				.catch(function (err) {
					console.log('Fetch Error :-S', err);
				});
		}
	}

	function addDetails(data, elem) {
		console.log(data.id);
		const id = data.id
		const name = data.name
		const weight = data.weight
		const height = data.height
		const sprite = data.sprites.front_default

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
			`
		}

		const loader = document.querySelectorAll('#loader')
		if (loader[0]) {
			loader[0].remove()
		}
		elem.insertAdjacentHTML('beforeend', createElement(id, name, weight, height, sprite))

	}

	function createSearchElement(){
		const elem = document.querySelector('#section_api');
		const input = document.createElement('input');
		input.setAttribute('data-filter', 'pokemon');
		input.setAttribute('data-filters', 'ol [data-pokemon]');
		input.setAttribute('placeholder', 'Search here');

		input.addEventListener('input', filterElements);

		if(!document.querySelectorAll('[data-filter]')[0]) {
			elem.insertBefore(input, elem.firstChild);
		}
	}

	function filterElements(){
		const searchValue = event.target.value;
		const filterName = event.target.getAttribute('data-filter');
		const filterElement = event.target.getAttribute('data-filters');
		const elements = document.querySelectorAll(`[data-${filterName}]`);

		const searchResult = Array.from(elements).filter( (item) => {
			const dataType = item.getAttribute(`data-${filterName}`);
			if ( dataType.includes(searchValue) || item.textContent.includes(searchValue) ) {
				console.log(item);
				return item;
			}
		});

		elements.forEach( (elem) => {
			elem.classList.add('hidden');
		})
		searchResult.forEach( (item) => {
			item.classList.toggle('hidden');
		})
	}

	return {
		createApiCall
	}
})()

export default MakeApiCall
