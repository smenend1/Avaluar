# Quadern LOMLOE PWA

PWA per a GitHub Pages amb quaderns multi-grup, activitats editables, càlcul LOMLOE i exportació Excel editable.

## Publicació a GitHub Pages

1. Puja tots els fitxers a l'arrel del repositori.
2. Ves a Settings > Pages.
3. Source: Deploy from a branch.
4. Branch: main, folder: /root.
5. Obre la URL HTTPS de GitHub Pages.

## Instal·lació

A Android/Chrome hauria d'aparèixer el botó **Instal·lar**. Si no apareix la finestra automàtica, toca el menú del navegador i tria **Afegeix a pantalla d'inici** o **Instal·la app**.

A iPhone/iPad cal obrir-ho amb Safari i fer **Compartir > Afegir a pantalla d'inici**.

## Excel

L'exportació genera un `.xlsx` amb:

- noms visibles des de la cel·la A1;
- desplegables NA, AS, AN i AE;
- fórmules de mitjana i criteri final;
- valors calculats ja escrits perquè es vegi millor en visors mòbils;
- full de llegenda.

Alguns visors mòbils d'Excel poden obrir el full en una posició de scroll antiga. Si passa, toca la cel·la A1 o torna a l'inici del full.


## Actualització important

Aquesta versió usa cache v9 i carrega `app.js` i `styles.css` amb paràmetre de versió per evitar que GitHub Pages o la PWA instal·lada mantinguin fitxers antics. Si veus una pàgina en blanc, desinstal·la la PWA anterior i esborra les dades del lloc abans de reinstal·lar.
