export default el => `
<h1 id="webappfromscratch">Web app from scratch</h1>

	<p>First, check out Parcel Bundler:
<a href="https://github.com/parcel-bundler/parcel">Parcel Bundler</a></p>

	<h2 id="getstarted">Get started</h2>

	<p class="warning">This project currently only works in Firefox Nightly!</p>

	<h3 id="installwithyarn">Install with yarn:</h3>

	<pre><code>yarn global add parcel-bundler
</code></pre>

	<h3 id="orinstallwithnpm">or install with npm:</h3>

	<pre><code>npm install -g parcel-bundler
</code></pre>

	<h3 id="tostartthisproject">To start this project:</h3>

	<pre><code>yarn
</code></pre>

	<p>or </p>

	<pre><code>npm install
</code></pre>

	<p>To run the server:</p>

	<pre><code>parcel src/index.html
</code></pre>

	<p>Then navigate to localhost:1234/</p>

	<p>If needed, you can also override the default port with the -p option. Add --open to automatically open a browser.</p>

	<h3 id="aboutthisproject">About this project</h3>

	<p>This project is a small single page web app with a router module that includes my library MagicLib for animations. It contains an API call function to display all the original Pokémon.
Its purpose is for me to learn how to create a router, add animations to a router and make good API calls with async/await.</p>

	<h3 id="api">API</h3>

	<p>This project uses the Pokémon API from <a href="https://pokeapi.co/">Pokeapi</a></p>

	<blockquote>
		"There is, however, a daily rate limit of 300 requests per resource per IP  address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load."
	</blockquote>

	<h3 id="principlesandbestpractices">Principles and best practices</h3>

	<p>For this project I used:</p>

	<ul>
		<li>Parcel, for bundling, parcing</li>

		<li>Babel for ES6/ES7 convertion to ES5</li>

		<li>Modular setup</li>

		<li>ES6 Templating strings and <code>insertAdjacentHTML</code> for the template</li>

		<li>Self written Web Animation API library called <a href="https://github.com/meesrutten/MagicLib/">MagicLib</a></li>

		<li>Loader while API call is being made</li>
	</ul>

	<h3 id="featurewishlist">Feature wishlist</h3>

	<p>I would like to add something to reduce renderblocking JS. </p>
`