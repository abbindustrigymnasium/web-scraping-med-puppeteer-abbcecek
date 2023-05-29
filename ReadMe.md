<h1 align="center"> Webscraper projekt - Väder </h1>

Detta projekt är ett webskrapnings-projekt där jag har skrapat väderwebsidan [yr.no](https://www.yr.no/en). Jag har använt node-biblioteket ['puppeteer'](https://pptr.dev/) för att skrapa sidan och [vue](https://vuejs.org/) samt [tailwindcss](https://tailwindcss.com/) för en finare presentation i form av en webbsida. 

## Systemkrav
- node v18
- npm v9


## Vad gör koden?
Puppeteer gör någonting som kallas "headless browsing", vilket betyder att det inte är en människa bakom 'webbsurfandet'. Koden skrapar sidan på information och sparar ner allt i en JSON-fil. Jag kan alltså sen komma åt den datafilen i min webbsidas kod och presentera den på ett finare sätt än en .json fil.  

## Setup
Följande steg utförs i kommandoprompt

### Steg 1
Klona koden från repo `git@github.com:abbindustrigymnasium/web-scraping-med-puppeteer-abbcecek.git`

### Steg 2
Installera paketen genom att köra 
``` 
npm install
```

### Steg 3
För att köra programmet skriver du:
```
node index.js
```
### Steg 4
Gå till mappen `weather-scraper-vue` och starta en lokal webbserver.
```
cd weather-scraper-vue

npm run serve
```

Om index.js körs då lokala webbservern är uppe kommer dess värden att uppdatera automatiskt.

## Roadmap
- Tester
- Installationsskript
- Uppdateringsknapp
- Grafer för visualisering

## License
Detta projekt är licensierat under MIT-licens.