function getApiData() {
	let apiData
	fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
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
					manipulateData(data)
				});
			}
		)
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});

	function manipulateData(data) {
		const mappedResult = data.results.map((item) => {
			return item = item.name.charAt(0).toUpperCase() + item.name.slice(1)
		})

		injectData(mappedResult)
	}

	function injectData(result) {
		const loader = document.querySelectorAll('#loader')
		if (loader[0]) {
			loader[0].remove()
		}
		const contentSection = document.querySelector('#section_api')
		result.forEach((name, i) => {
			contentSection.insertAdjacentHTML('beforeend', `<p data-pokemon="${name.toLowerCase()}">#${i + 1} ${name}</p>`)
			if (i + 1 === result.length) {
				console.log('end');
				addEvents()
			}
		})
	}

	function addEvents() {
		const pokemon = document.querySelectorAll('[data-pokemon]')
		console.log(pokemon);
		pokemon.forEach((poke, i) => {
			i += 1
			poke.addEventListener('click', function (event) {
				getPokemon(event, i)
			})
		})
	}

	function getPokemon(event, i) {
		console.log(i);

		//Prevents extra API calls
		if (!event.target.querySelectorAll('.pokemon-information')[0]) {
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

		elem.insertAdjacentHTML('beforeend', createElement(id, name, weight, height, sprite))

		function createElement(id, name, weight, height, sprite) {
			return `
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
			`
		}
	}

	return ''
}

export default getApiData