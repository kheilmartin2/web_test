# Web Naomi Luna & Corazón Antequera — nasazení

## Obsah balíčku
- `index.html` — celý web (španělsky + přepínač EN, SEO meta tagy, schema.org data pro Google)
- `img/` — optimalizované fotky, logo, QR kódy, náhledy videí
- `video/` — obě videa zkomprimovaná pro web (`terraza.mp4`, `jardin.mp4`)

## Nasazení na GitHub Pages
1. Nahrajte **celý obsah** této složky (index.html + složky img a video) do kořene repozitáře.
2. Settings → Pages → Source: `main` / root.
3. Po zveřejnění otevřete `index.html` a v hlavičce odkomentujte řádky `canonical`, `og:url` a `og:image`
   a doplňte skutečnou adresu webu (kvůli náhledu odkazu na WhatsAppu a Facebooku). Obrázek `img/og.jpg` je připravený.

## Rezervační formulář
Statický web nemá server, proto formulář **připraví zprávu** a klient ji odešle jedním klepnutím
přes WhatsApp (+52 951 198 1444) nebo e-mailem (corazonantequera.music@gmail.com).
Pokud chcete poptávky dostávat rovnou do e-mailu bez klepnutí klienta, lze napojit službu typu Formspree.

## Co je dobré doplnit
- **Recenze klientů** — v `index.html` je v sekci Referencias připravená zakomentovaná šablona; vložte jen skutečné citace se souhlasem autorů.
- **Ceník** — na webu je „cotización a la medida“; pokud chcete orientační ceny, doplňte je do FAQ.
- **Názvy videí/místa** — popisky „Quinteto en terraza · Oaxaca“ a „En vivo · Oaxaca“ upravte podle skutečného místa.

## Automatické odesílání formuláře e-mailem (Web3Forms)
1. Na https://web3forms.com zadejte e-mail kapely a získáte „Access Key“.
2. V `index.html` najděte řádek `const W3F_KEY = '';` a mezi apostrofy vložte klíč.
3. Nahrajte `index.html` na GitHub. Každá poptávka pak přijde automaticky e-mailem; WhatsApp tlačítko zůstává.

## Zapnutí sekce s referencemi
1. V `index.html` najděte `<section class="sec sec-paper" id="testimonios" hidden>`.
2. Texty v hranatých závorkách nahraďte skutečnými citacemi (se souhlasem klientů).
3. Smažte slovo `hidden` a nahrajte soubor.

## Kit pro plannery
Složka `kit/` obsahuje PDF ve španělštině a angličtině, na které odkazuje sekce „Planners“.
