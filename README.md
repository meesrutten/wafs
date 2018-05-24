# Web app from scratch

This project is a small single page web app with a router module that includes my library MagicLib for animations. It contains an API call function to display all the original Pokémon. 
Its purpose is for me to learn how to create a router, add animations to a router and make good API calls with async/await.

## Table of contents
- [Get started](#get-started)
	- [Installing](#install)
	- [Running](#running)
- [Features](#features)
- [API](#api)
- [Principles and best practices](#principles-and-best-practices)
	- [Parcel](#parcel)
	- [Babel](#babel)
	- [ES6 Template literals](#es6-template-literals)
	- [Magic Library](#magic-library)
- [Actor Diagram](#actor-diagram)
- [Flow Diagram](#flow-diagram)

First, check out Parcel Bundler:
[Parcel Bundler](https://github.com/parcel-bundler/parcel)

## Get started
First clone the repo with `git clone https://github.com/meesrutten/wafs/`
### Install
install with Yarn
```
yarn global add parcel-bundler
```
or install with npm:
```
npm install -g parcel-bundler
```

### Running
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

## Features
- Ability to **browse Pokémon**
- **Search** for Pokémon
- **Filter** by type

## API
This project uses the Pokémon API from [Pokeapi](https://pokeapi.co/)

This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.

For more information about the usage of this API read the
[Pokeapi docs](https://pokeapi.co/docsv2/)

> There is, however, a daily rate limit of 300 requests per resource per IP address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load.

There is no api key requirement.
But there is a limit of 300 calls for a specific resource.
Which this app will never meet if it uses [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Principles and best practices
For this project I used:
- [Parcel](https://parceljs.org/)
- [Babel](https://babeljs.io/)
- [ES6 Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 
- Self written Web Animation API library called [MagicLib](https://github.com/meesrutten/MagicLib/)
- SVG Loader while API call is being made

### Parcel
For bundling, parcing and running a local http server

### Babel
for ES6/ES7 convertion to ES5

### ES6 Template literals
and `insertAdjacentHTML` for templating

### Magic Library

## Actor Diagram
In the Actor Diagram you can see an overview of all the methods and functions that could be called and where they belong in the app.

<img src="https://github.com/meesrutten/wafs/blob/master/src/assets/images/actor-diagram.png">

## Flow Diagram
These diagrams display the flow of the application.

### Routing flow
This diagram shows what happens when a client navigates to a page.
<img src="https://github.com/meesrutten/wafs/blob/master/dist/b28ed9ead43afa9047d7c3ff06a3b4c6.png">

### API section flow
This diagram shows what happens when a client navigates to the API page.
<img src="https://github.com/meesrutten/wafs/blob/master/dist/21bb03cbe605a76234cbca85d0fd485b.png">

## Feature wishlist
- I would like to add something to reduce renderblocking JS. 
- Feedback to user when using api