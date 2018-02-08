console.log('router - test');

/* 
JavaScript
Maak in je JavaScript bestand onderstaande objecten met methods en parameters aan:
	app.init()
	routes.init()
	sections.toggle(route)
Er zijn dus drie objecten, ieder met één methode
Omsluit je code met een IIFE en zorg ervoor dat de code in strict mode wordt uitgevoerd
Roep onderaan de code(maar wel in de IIFE) app.init() aan om de applicatie te starten
Roep vanuit app.init() routes.init() aan.In routes.init() zet je een ‘hashchange’ eventlistener.De eventlistener verwijst naar sections.toggle(route) met de route die je hebt aangeklikt als parameter.Let op de scope!
In de toggle functie zorg je ervoor dat de gewenste sectie wordt getoond en alle andere secties(in dit geval één) worden verborgen	
*/