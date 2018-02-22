# Web app from scratch

First, check out Parcel Bundler:
[Parcel Bundler](https://github.com/parcel-bundler/parcel)

## Get started

This project currently only works in Firefox Nightly!

### Install with yarn:
```
yarn global add parcel-bundler
```
### or install with npm:
```
npm install -g parcel-bundler
```


### To start this project:
```
yarn
```

or 

```
npm install
```

To run the server:
```
parcel src/index.html
```
Then navigate to localhost:1234/

If needed, you can also override the default port with the -p option. Add --open to automatically open a browser.

### About this project
This project is a small single page web app with a router module that includes my library MagicLib for animations. It contains an API call function to display all the original Pokémon. 
Its purpose is for me to learn how to create a router, add animations to a router and make good API calls with async/await.

### API
This project uses the Pokémon API from [Pokeapi](https://pokeapi.co/)

> There is, however, a daily rate limit of 300 requests per resource per IP  address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load.

### Principles and best practices
For this project I used:
- Parcel, for bundling, parcing
- Babel for ES6/ES7 convertion to ES5
- Modular setup
- ES6 Templating strings and `insertAdjacentHTML` for the template
- Self written Web Animation API library called [MagicLib](https://github.com/meesrutten/MagicLib/)
- Loader while API call is being made

### Feature wishlist
I would like to add something to reduce renderblocking JS. 