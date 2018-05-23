import header from './header'

export default el => `
		${ header(el)}
		<main>
			<section id="section_404" data-section >
				<h1>Shit broke. Use the header to navigate :)</h1>
			</section>
		</main>
	`