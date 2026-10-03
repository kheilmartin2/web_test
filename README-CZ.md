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
Na naomilunavoz.com se formulář **odešle sám** přes Web3Forms (tlačítko „Enviar solicitud“) a klient uvidí
potvrzení „Solicitud enviada“ s volitelným tlačítkem WhatsApp. Outlook ani jiná aplikace se neotevírá.
Jen když automatické odeslání selže (nebo v náhledu mimo doménu), nabídne stránka ruční odeslání
přes WhatsApp (+52 951 198 1444) nebo e-mailem (corazonantequera.music@gmail.com).

## Co je dobré doplnit
- **Recenze klientů** — v `index.html` je v sekci Referencias připravená zakomentovaná šablona; vložte jen skutečné citace se souhlasem autorů.
- **Ceník** — na webu je „cotización a la medida“; pokud chcete orientační ceny, doplňte je do FAQ.
- **Názvy videí/místa** — popisky „Quinteto en terraza · Oaxaca“ a „En vivo · Oaxaca“ upravte podle skutečného místa.

## Automatické odesílání formuláře e-mailem (Web3Forms)
Klíč je už vložený v `index.html` (`const W3F_KEY = '…'`). Formulář odesílá e-mail jen z naomilunavoz.com
(a z *.github.io), ne z náhledů. Poptávky chodí na e-mail, se kterým jste si klíč na web3forms.com založil
(první zprávy mohou spadnout do spamu, označte je jako „Není spam“).
Limit zdarma: 250 odeslání měsíčně. Přehled odeslaných zpráv je v účtu na web3forms.com.

## Zapnutí sekce s referencemi
1. V `index.html` najděte `<section class="sec sec-paper" id="testimonios" hidden>`.
2. Texty v hranatých závorkách nahraďte skutečnými citacemi (se souhlasem klientů).
3. Smažte slovo `hidden` a nahrajte soubor.

## Kit pro plannery
Složka `kit/` obsahuje PDF ve španělštině a angličtině, na které odkazuje sekce „Planners“.

## Medailonky muzikantů (sekce Ensamble)
Karta s medailonkem má krátký popisek a tlačítko „Ver semblanza“; po kliknutí se otevře okno s fotkou a textem.
Zatím: Naomi Luna a Canek León. Další člen:
1. V `index.html` najděte `<article class="bio" data-bio="canek"` (na konci stránky), zkopírujte celý `<article>…</article>`
   a změňte `data-bio`, `data-img`, `id` nadpisu a texty.
2. V jeho kartě v sekci Ensamble přidejte `has-bio` do `class`, řádek `<p class="m-tag">` a tlačítko `<button class="m-more" data-bio="…">`
   (stejně jako u Caneka).
Anglické texty jsou ve slovníku `EN` pod klíči `bio.…` a `m.….tag`.

## Nastavení fotek, videí a sestavy (začátek index.html)
Hned na začátku `index.html` je blok NASTAVENÍ WEBU se seznamy pro jednotlivé části stránky.
Upravujete jen text mezi `<template …>` a `</template>`. Řádek začínající `#` se nepoužije.

| Seznam | Část stránky | Formát řádku |
|---|---|---|
| `nl-videa` | Portafolio – videa | `video.mp4 \| popisek ES \| popisek EN` |
| `nl-galerie` | Galerie fotek | `fotka.jpg \| popisek ES \| popisek EN \| tvar` (tvar: velka / siroka / vysoka, nepovinný) |
| `nl-uvodni-fotka` | Velká fotka nahoře | jeden soubor |
| `nl-fotka-ensamble` | Fotka u textu o Corazón Antequera | jeden soubor |
| `nl-sestava` | Karty členů | `Jméno \| nástroj \| fotka.jpg`, volné místo `- \| saxofon` |
| `nl-skryte-fotky` | Celý web | soubory oddělené čárkou, které se nikde nemají ukázat |

**Nové video**
1. Video převeďte na MP4 (H.264), do 25 MB (větší soubor GitHub přes prohlížeč nenahraje) – nebo ho pošlete Claudovi ke zmenšení. Soubory z iPhonu (.MOV/HEVC)
   v Chromu a na Androidu nehrají.
2. Nahrajte ho do `video/` (např. `svatba-hacienda.mp4`).
3. Do `nl-videa` přidejte řádek `svatba-hacienda.mp4 | Boda en hacienda | Wedding at a hacienda`.
   Pořadí řádků = pořadí na webu; první video na šířku je velké přes celou šířku.
4. Náhled (nepovinně): obrázek `img/poster-svatba-hacienda.jpg` se použije sám, jinak se ukáže první záběr.

**Nová fotka do galerie**: nahrajte do `img/` a přidejte řádek do `nl-galerie`.

**Nový člen** (např. saxofonista Pedro Ruiz): fotku do `img/`, v `nl-sestava` přepište `- | saxofon`
na `Pedro Ruiz | saxofon | pedro-ruiz.jpg`.

Úvodní fotka sekce Ensamble se nepoužije, když je na ní někdo, kdo už není v sestavě (seznam lidí na fotce
`ensamble.jpg` je v kódu `GROUP_PEOPLE`); pak se ukáže náhradní fotka.

Úprava z mobilu: GitHub → `index.html` → tužka (Edit) → upravit seznam → Commit changes.
Přes prohlížeč GitHub nahraje soubor do 25 MB; fotky držte kvůli rychlosti do ~500 kB.
