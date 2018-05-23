const createSearchElement = function() {
	const elem = document.querySelector('#section_api');
	const input = document.createElement('input');
	const label = document.createElement('label');
	label.textContent = "Search"
	label.for = "filter"
	label.classList.add("label");
	input.setAttribute('data-filter', 'pokemon');
	input.setAttribute('data-filters', 'ol [data-pokemon]');
	input.setAttribute('placeholder', 'Search here');
	input.setAttribute('name', 'filter');

	input.addEventListener('input', filterElements);
	label.appendChild(input);

	if (!document.querySelectorAll('[data-filter]')[0]) {
		elem.insertBefore(label, elem.children[1]);
	}
}

const filterElements = function() {
	const searchValue = event.target.value;
	const filterName = event.target.getAttribute('data-filter');
	const filterElement = event.target.getAttribute('data-filters');
	const elements = document.querySelectorAll(`[data-${filterName}]`);

	const searchResult = Array.from(elements).filter((item) => {
		const dataType = item.getAttribute(`data-${filterName}`);
		if (dataType.includes(searchValue) || item.textContent.includes(searchValue)) {
			return item;
		}
	});

	elements.forEach((elem) => {
		elem.classList.add('hidden');
	})
	searchResult.forEach((item) => {
		item.classList.toggle('hidden');
	})
}

export {
	createSearchElement, 
	filterElements
}