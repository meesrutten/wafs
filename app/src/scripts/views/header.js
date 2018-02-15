export default el => `
<header>
	<nav>
		<ul>
			<li><a href="#section_splash" ${ el.splash ? 'aria-current="page"' : '' }">Home</a></li>
			<li><a href="#section_api" ${ el.api ? 'aria-current="page"' : '' }>API</a></li>
			<li><a href="#section_test" ${ el.test ? 'aria-current="page"' : '' }>test</a></li>
		</ul>
	</nav>
</header>
`