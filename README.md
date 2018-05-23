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
## Flow Diagram

## Feature wishlist
- I would like to add something to reduce renderblocking JS. 
- Feedback to user when using api

TO DO:

- Onderzoek nog niet klaar
- Readme + 2x flow, API beschrijving
- Object model diagram geeft inzicht in opzet van de code
- interaction flow diagram laat zien goe de gebruiker interacteert met de app en de app views genereert


Het betreft een SPA die online gehost is (github pages)
Readme.md op GH met 2x flow, api beschr.    Het object model diagram geeft inzicht in de opzet van de code    
Het interaction flow diagram laat zien hoe de gebruiker interacteert met de app en de app views genereert    
Overview, detail paginas    
De code is modulair opgezet (met modules of iig object lits)    
Externe data wordt middels een templating engine naar HTML gerendered    
De data wordt gemanipuleerd met filter/sort/map/reduce    
Er is feedback naar de user over het laden van data en wat gebeurt er als API offline gaat    Student toont begrip van: object, method, callback, this, context, scope, closure, module, strict mode,code flow    
De code volgt OOP of functional principes en de student kan pattern keuze verdedigen        Alles tot hier  voor voldoende    
Ophoging voor bijv. Complexiteit, Goede uitleg of beschrijving, zinvolle applicatie, slimme code structuur, goede design patterns, lazy loading, ES6, web worker, classes, hulp aan andere studenten (edited)