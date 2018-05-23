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
				`
	);

	const select = document.querySelector('[data-sort]');

	select.addEventListener('change', sortElements);

	//Adds a number to the elements
	elements.forEach( (element, i) => {
		i++
		element.setAttribute('data-number', i);
	})

	if (!document.querySelectorAll('[data-sort]')[0]) {
		elem.insertAdjacentHTML('afterbegin', `
			<select name="sort" data-sort="pokemon" data-sorts="ol [data-pokemon]"> <!--Supplement an id here instead of using 'text'-->
				<option selected value="Number">Number</option>
				<option value="Alphabetical">Alphabetical</option>
				<option value="Number reverse">Number reverse</option>
				<option value="Alphabetical reverse">Alphabetical reverse</option>
			</select>
				`
		);
	}
}

const sortElements = function () {
	const sortValue = event.target.value;

	const sortElement = event.target.getAttribute('data-sorts');
	const elements = document.querySelectorAll(sortElement);
	let sortResult;

	switch (sortValue) {
		case 'Number':
			sortResult = Array.from(elements).sort((a, b) => {
				return Number(a.dataset.number) - Number(b.dataset.number);
			})
			replaceElements(sortResult);
			break;

		case 'Alphabetical':
			sortResult = Array.from(elements).sort((a, b) => a.textContent.localeCompare(b.textContent))
			replaceElements(sortResult);
			break;

		case 'Number reverse':
			sortResult = Array.from(elements).sort((a, b) => {
				return Number(b.dataset.number) - Number(a.dataset.number);
			})
			replaceElements(sortResult);
			break;

		case 'Alphabetical reverse':			
			sortResult = Array.from(elements).sort((a, b) => b.textContent.localeCompare(a.textContent))
			replaceElements(sortResult);
			break;
	}

	function replaceElements(sortResult) {
		const frag = document.createDocumentFragment()
		sortResult.forEach( (result) => {
			frag.appendChild(result);
		} )
		
		document.querySelector('ol').appendChild(frag);
	}
}

export {
	createSortElement,
	sortElements
}