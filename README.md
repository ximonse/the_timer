# the_timer

En visuell lektionsklocka i webbläsaren. Bygger på en enkel idé: tiden är lättare att förstå när man kan **se** den krympa.

Tänkt för lärare som vill ge klassen en tydlig överblick av lektionens delar — men funkar lika bra för alla som har svårt att hålla koll på tiden, behöver hjälp att fokusera, eller bara vill ha en mjuk påminnelse om att avrunda i tid.

## Varför

Vanliga digitala timers visar siffror som räknar ner. Det funkar för vissa, men för många — särskilt barn, personer med ADHD, eller den som är djupt inne i en uppgift — säger siffrorna ingenting förrän det är för sent. Den här klockan visar tiden som **yta**: en cirkel som gradvis fylls och tömms, indelad i färgade sektorer per moment. Då ser man med en blick var man är.

## Funktioner

- **Lektionsdelar** — skriv en rad per moment. Lägg till `-` framför en rad för en underrubrik som visas i sidopanelen.
- **Info-ruta** — fri text för viktig info (läxa, material, dagens fokus) som dyker upp som en egen ruta.
- **Roterad startpunkt** — klockan börjar vid faktisk klocktid, inte 12, så visaren är där den ska vara.
- **Drag-och-släpp** — dra gränsen mellan sektorer för att justera längder direkt i klockan. Dra lektionens start eller slut för att flytta hela passet.
- **Snabbstart** — en knapp som startar lektionen från och med nu.
- **Donut eller pie** — togglas, sluttid syns i mitten i donut-läget.
- **Dag- och nattläge** — varma jordtoner som inte stör.
- **Mjuk pling** — 2-minutersvarning per segment (Web Audio, ren ton, ingen larmkänsla).
- **Tidvisare** — ett tydligt spjut som följer riktig klocktid, alltid synligt.
- **Markeringar** — togglebara minut-, 5-minuters- och kvartstreck.
- **Sparat** — alla inställningar ligger kvar i webbläsaren mellan besök.
- **Mobilvänlig** — fungerar på telefon och surfplatta.

## För vem

- **Lärare** som vill ge eleverna förutsägbarhet i lektionens upplägg
- **Elever** som behöver visuellt stöd för tidsuppfattning
- **Personer med ADHD** eller andra exekutiva utmaningar
- **Mötesledare**, föreläsare, instruktörer
- **Hemmabruk** — skärmtidens slut, läxstund, träningspass, matlagning

## Köra lokalt

Ingen build, inga beroenden. Öppna bara `index.html` i webbläsaren — eller kör `npx serve` om du vill ha en lokal server.

## Hosting

Statisk sajt. Deployas automatiskt till Vercel via GitHub-integration.

## Tekniskt

Ren HTML, CSS och JavaScript i en enda fil. SVG för klockan. Web Audio för ljud. localStorage för persistens. Inga ramverk, inga byggsteg.
