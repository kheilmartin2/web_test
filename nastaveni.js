/* ============================ NASTAVENÍ WEBU ============================
   Fotky, videa a sestava pro obě jazykové verze webu (naomilunavoz.com i /en/).
   Upravujte jen text MEZI zpětnými apostrofy ` … ` – apostrofy samotné nemažte.
   Fotky patří do složky img/, videa do video/. Pište jen název souboru přesně tak,
   jak se soubor jmenuje (GitHub rozlišuje velká a malá písmena).
   Řádek začínající # se nepoužije (hodí se na dočasné vypnutí).
   ======================================================================= */
window.NL_NASTAVENI = {

  /* VIDEA (sekce Portafolio): jeden řádek = jedno video
       video.mp4 | popisek španělsky | popisek anglicky
     · první video na šířku je velké přes celou šířku, ostatní se samy seřadí do řad
     · náhled: obrázek na konci řádku (| nahled.jpg), jinak img/poster-<název videa>.jpg, jinak první záběr
     · délka se doplní sama; video musí být MP4 a do 25 MB (větší GitHub přes prohlížeč nenahraje) */
  videa: `
con-banda.mp4 | En vivo con su banda | Live with her band
saxofon.mp4 | Voz y saxofón | Vocals and saxophone
jardin.mp4 | En vivo · Oaxaca | Live · Oaxaca
# terraza.mp4 | Quinteto en terraza · Oaxaca | Quintet on a terrace · Oaxaca
`,

  /* GALERIE (fotky pod videi): jeden řádek = jedna fotka
       fotka.jpg | popisek španělsky | popisek anglicky | tvar
     · tvar je nepovinný: velka (2×2), siroka (2 políčka na šířku), vysoka (2 políčka na výšku) */
  galerie: `
vivo-blanco-canta.jpg | Voz en vivo | Live vocals | velka
naomi-tradicional.jpg | Traje tradicional oaxaqueño | Traditional Oaxacan dress | vysoka
vivo-blanco-risa.jpg | Alegría en escena | Joy on stage
vivo-vino-canta.jpg | Bolero en vivo | Bolero, live
vivo-huipil.jpg | Con Corazón Antequera · Oaxaca | With Corazón Antequera · Oaxaca | siroka
vivo-banda.jpg | Con su banda | With her band | siroka
dia-de-muertos.jpg | Día de Muertos · Praga | Day of the Dead · Prague | siroka
vivo-vino-perfil.jpg | En concierto | In concert
vivo-vino-neon.jpg | Luces de escenario | Stage lights
vivo-vino.jpg | En escena · Oaxaca | On stage · Oaxaca
festival.jpg | Festival de cultura mexicana · Europa | Mexican culture festival · Europe
vivo-blanco-sonrisa.jpg | Conexión con el público | Connecting with the audience | siroka
`,

  /* ÚVODNÍ FOTKA (velká fotka nahoře vedle jména): jeden soubor, ideálně na výšku */
  uvodni_fotka: `hero.jpg`,

  /* FOTKA SOUBORU (sekce Ensamble vedle textu o Corazón Antequera): jeden soubor, ideálně na šířku */
  fotka_ensamble: `ensamble-grupo.jpg`,

  /* SESTAVA (karty členů v sekci Ensamble): jeden řádek = jeden člen
       Jméno | nástroj | fotka.jpg
     · nástroj: voz, piano, saxofon, bateria, bajo, guitarra, violin, trompeta, percusion, teclados, coros
     · volné místo = pomlčka místo jména:  - | saxofon  → „Nuevo integrante · Próximamente“
     · pořadí řádků = pořadí karet; první řádek je velká karta
     · kdo v sestavě není, zmizí z medailonků a z dat pro Google (na společných fotkách zůstává) */
  sestava: `
Naomi Luna | voz | naomi-escenario.jpg
Canek León | bajo | canek-leon.jpg
Juan Cruz | piano | juan-cruz.jpg
- | saxofon
- | bateria
`,

  /* SKRYTÉ FOTKY A VIDEA: názvy souborů oddělené čárkou, které se nikde na webu nemají ukázat */
  skryte_fotky: `erick-avendano.jpg, belem-vasquez.jpg`

};
