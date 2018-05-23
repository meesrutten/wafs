import header from './header'
import splash from './splash'
import diagram from './diagram'

export default el => 
	`
		${ header( el ) }
		<main>
			${ el.splash ? 
				`<section id="section_splash" data-section>
					${splash( el )}
				</section>` 
				: '' }
			${ el.api ? 
				`<section id="section_api" data-section>
					<h1>api</h1>
				</section>` 
				: '' }
			${ el.diagram ? 
				`<section id="section_diagram" data-section>
					<h1>Diagrams</h1>
					${diagram( el )}
				</section>` 
				: '' }
		</main>
	`