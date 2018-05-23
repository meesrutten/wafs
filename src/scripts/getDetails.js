import loader from './views/loader'

const getPokemon = function(event, i) {
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

const addDetails = function(data, elem) {
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

export {
	getPokemon,
	addDetails
}