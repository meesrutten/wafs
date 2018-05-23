export default el => `
<header>
	<nav>
		<ul>
			<li><a href="#section_splash" ${ el.splash ? 'aria-current="page"' : '' }">Home</a></li>
			<li><a href="#section_api" ${ el.api ? 'aria-current="page"' : '' }>API</a></li>
			<li><a href="#section_diagram" ${ el.diagram ? 'aria-current="page"' : '' }>Diagram</a></li>
		</ul>
	</nav>
</header>
`