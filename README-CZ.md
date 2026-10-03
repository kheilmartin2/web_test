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
Fotky v okně medailonku se nastavují v `nastaveni.js` → `portfolio` (např. `Canek León | canek-leon-contrabajo.jpg, canek-leon-retrato.jpg`).
Je-li fotek víc, ukážou se na fotce malé náhledy; přepíná se klepnutím na náhled nebo na velkou fotku.

## Nastavení fotek, videí a sestavy – soubor `nastaveni.js`
Seznamy pro jednotlivé části stránky jsou v malém souboru `nastaveni.js` (platí pro španělskou i anglickou verzi).
Upravujete jen text mezi zpětnými apostrofy ` … ` (apostrofy nemažte). Řádek začínající `#` se nepoužije.

| Položka | Část stránky | Formát řádku |
|---|---|---|
| `videa` | Portafolio – videa | `video.mp4 \| popisek ES \| popisek EN` |
| `galerie` | Galerie fotek | `fotka.jpg \| popisek ES \| popisek EN \| tvar` (tvar: velka / siroka / vysoka, nepovinný) |
| `uvodni_fotka` | Velká fotka nahoře | jeden soubor |
| `fotka_ensamble` | Fotka u textu o Corazón Antequera | jeden soubor |
| `sestava` | Karty členů | `Jméno \| nástroj \| fotka.jpg`, volné místo `- \| saxofon` |
| `portfolio` | Fotky v okně „Ver semblanza“ | `Jméno \| fotka1.jpg, fotka2.jpg` (víc fotek = náhledy pro přepínání) |
| `skryte_fotky` | Celý web | soubory oddělené čárkou, které se nikde nemají ukázat |

Kdyby se v souboru něco rozbilo (např. smazaný apostrof), web ukáže základní verzi obsahu – stačí chybu opravit.

**Nové video**: MP4 do 25 MB (větší soubor GitHub přes prohlížeč nenahraje; videa z iPhonu .MOV v Chromu nehrají – pošlete je
Claudovi ke zmenšení), nahrát do `video/`, přidat řádek do `videa`. Náhled `img/poster-<název videa>.jpg` se použije sám.
**Nová fotka do galerie**: nahrát do `img/`, přidat řádek do `galerie`.
**Nový člen**: fotku do `img/`, v `sestava` přepsat `- | saxofon` na `Pedro Ruiz | saxofon | pedro-ruiz.jpg`.
**Další fotky muzikanta do medailonku**: nahrát do `img/`, v `portfolio` přidat název za čárku na řádek s jeho jménem.

Úprava z mobilu: GitHub → `nastaveni.js` → tužka (Edit) → upravit → Commit changes. Fotky do ~500 kB.

## Jazykové verze a vyhledávače
- `naomilunavoz.com/` je španělsky, `naomilunavoz.com/en/` anglicky (anglický text je přímo v HTML, aby ho Google
  našel např. při hledání „Oaxaca wedding singer“). Tlačítka ES/EN přepínají mezi těmito adresami.
- `en/index.html` se vytváří z `index.html` (texty se mění u Clauda) – ručně stačí upravovat `nastaveni.js`.
- `sitemap.xml` a `robots.txt` jsou pro vyhledávače; v Google Search Console a Bing Webmaster Tools zadejte
  `https://naomilunavoz.com/sitemap.xml`.
