# ONG EDUCATION ODD — Site web

**Dernière MAJ : 2026-06-14**

## 🎯 Phase
Finalisation du site vitrine statique (`education-odd.com`, GitHub Pages) + ajout des **fonctionnalités dynamiques** : formulaires de contact par e-mail et **page Actualités** alimentée par un Google Sheet.

## ✅ Fait
- [x] 15 pages de contenu + architecture maintenable (header/footer en partials via `includes.js`, CSS découpé), favicon animé, contenu des 17 ODD aligné sur l'ONU, domaine `CNAME`, commit `stable`
- [x] **Réseaux sociaux câblés** : YouTube (`@ONG-EDUCATION-ODD`) + Facebook dans le header partagé, le hero d'accueil et `contact.html` (Instagram/LinkedIn/X retirés — comptes inexistants)
- [x] **Formulaires de contact fonctionnels** : accueil + `contact.html` reliés à **Web3Forms** → envoi vers `codescooper@gmail.com` (clé d'accès intégrée, anti-spam, accusé de réception)
- [x] **Page Actualités** : `blog.html` transformé (était une copie de la page ODD 4) en vraie page d'actus — rendu dynamique en cartes + fenêtre de lecture, mise en forme (gras, italique, sous-titres, listes, liens) ; lien « ACTUALITES » ajouté au menu (il était commenté/cassé)
- [x] **Backend publications le plus simple** : Google Sheet « Publications — Site ONG EDUCATION ODD » lu en direct via l'endpoint **gviz** (aucun serveur, aucun Apps Script). Code : `assets/js/pages/actualites.js`, `assets/css/pages/blog.css`
- [x] **Feuille Google équipée** : onglet « Mode d'emploi » complet, en-tête vert/gras/figé, colonne `contenu`, menu déroulant `statut` (publié/brouillon)

## 🚧 En cours / À faire
- [ ] **Committer + pousser** les travaux du jour (tout est encore local → pas encore en ligne sur GitHub Pages)
- [ ] **(Action client)** Partager le Google Sheet en lecture (« disposant du lien → Lecteur ») — sinon la page Actualités reste vide
- [ ] Formulaire `devenir-partenaire.html` et newsletter du footer encore non reliés (seuls les 2 formulaires de contact le sont)
- [ ] Liens morts restants : bouton « FAIRE UN DON » du header et liens du footer en `href="#"`
- [ ] Traiter `construction.html` (page placeholder orpheline, `lang="en"`)
- [ ] Ajouter un README (installation / déploiement) ; optimiser les médias (~77 jpg + vidéos mp4)

## ⏭️ Prochaine action
**Committer et pousser** les modifications du jour (réseaux sociaux, formulaires → Gmail, page Actualités) pour les mettre en ligne sur GitHub Pages — puis, en parallèle, partager le Google Sheet en lecture pour activer les actualités.

## ⚠️ Risques
- **Rien n'est en ligne tant que ce n'est pas commité/poussé** : tout le travail du jour est dans le dépôt local uniquement
- **Actualités vides** tant que le Google Sheet n'est pas (et ne reste pas) partagé en lecture
- **Liens morts en prod** : « FAIRE UN DON » (header) + liens du footer en `#` ; `construction.html` accessible
- **Dépendances tierces** sans fallback : Web3Forms (formulaires), gviz Google Sheets (actus), Font Awesome / Google Fonts. La clé Web3Forms et l'ID de la feuille sont en clair dans le code (acceptable pour ces services). Pas de README / doc de déploiement

## 🧱 Stack & structure
Site **statique** HTML/CSS/JS vanilla (aucun build, pas de `package.json`). Hébergé sur GitHub Pages (`CNAME` = `education-odd.com`). ~18 pages HTML + `partials/` (header/footer), `assets/css` (CSS découpé + un par page), `assets/js` (dont `includes.js` pour les partials et `pages/actualites.js` pour les actus). **Dynamique sans serveur** : formulaires de contact → Web3Forms (e-mail) ; page Actualités → lecture directe d'un Google Sheet publié (gviz JSON). Branche `main` ; travaux du jour non commités.
