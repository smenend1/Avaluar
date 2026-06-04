# Quadern LOMLOE PWA

PWA d'avaluació LOMLOE per a professorat, preparada per publicar a GitHub Pages.

## Estructura

```txt
/
├── index.html
├── styles.css
├── app.js
├── sw.js
├── manifest.webmanifest
├── .nojekyll
└── README.md
```

## Publicació a GitHub Pages

1. Crea un repositori nou a GitHub.
2. Puja tots els fitxers d'aquesta carpeta a l'arrel del repositori, no dins d'una subcarpeta.
3. Ves a **Settings → Pages**.
4. A **Build and deployment**, selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** /root
5. Desa els canvis.
6. GitHub generarà una URL semblant a:

```txt
https://usuari.github.io/nom-del-repositori/
```

## Important per a PWA

La PWA necessita servir-se amb HTTP/HTTPS. GitHub Pages és correcte perquè usa HTTPS.

No obris `index.html` amb doble clic si vols provar instal·lació o mode offline, perquè els Service Workers no funcionen bé en mode fitxer local.

## Funcionalitats

- Multi-grup / multi-matèria.
- Importació CSV d'alumnat.
- Activitats variables: una a una o creació massiva, per exemple 20 de cop.
- Càlcul per mitjana ponderada amb pesos o mitjana aritmètica simple.
- Escala LOMLOE: NA = 0,5; AS = 1,5; AN = 2,45; AE = 3,5.
- Resultats finals: AE >= 3,00; AN >= 2,00; AS >= 1,10; NA < 1,10.
- Persistència automàtica amb localStorage.
- Exportació a Excel editable amb desplegables NA/AS/AN/AE i fórmules.
- PWA instal·lable amb Service Worker.

## Exportació Excel / Google Sheets

L'exportació genera un `.xlsx` amb format de quadern:

- alumnes per files;
- activitats per columnes;
- desplegables NA, AS, AN i AE;
- pesos a la primera fila si el mode és ponderat;
- fórmules perquè la mitjana i la qualificació final es recalculin en modificar notes.

A Microsoft Excel és on es conserva millor el format. Google Sheets pot obrir el fitxer, però alguns estils o validacions poden variar segons la importació.

## Prova local opcional

Per provar-la abans de pujar-la a GitHub:

```bash
python3 -m http.server 8080
```

Després obre:

```txt
http://localhost:8080
```

## Nota sobre llibreries externes

Aquesta versió usa Tailwind, SheetJS i JSZip des de CDN. En GitHub Pages funcionen correctament amb connexió. Després de la primera càrrega, el Service Worker intenta cachejar els recursos per funcionar offline.

Per una versió institucional 100% tancada sense cap CDN, caldria afegir una carpeta `vendor/` amb les llibreries descarregades i canviar les rutes a `index.html` i `sw.js`.


## Correcció mòbil

En pantalles petites, la columna de resultat final ja no queda fixada a la dreta perquè amagava les activitats. Ara es veu l’alumne i el primer selector de nota, i es pot desplaçar horitzontalment per veure la resta d’activitats, mitjana i final.
