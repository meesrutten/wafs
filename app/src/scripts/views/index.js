import header from './header'
import api from './api'

export default el => 
	`
		${ header( el ) }
		<main>
			${ el.splash ? 
				`<section id="section_splash" data-section>
					<h1>Splash</h1>
				</section>` 
				: '' }
			${ el.api ? 
				`<section id="section_api" data-section>
					<h1>api</h1>
					${ api( el ) }
				</section>` 
				: '' }
			${ el.test ? 
				`<section id="section_test" data-section>
					<h1>test</h1>
				</section>` 
				: '' }
		</main>
	`