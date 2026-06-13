/* =========================================================================
   Actualités — lit les publications depuis le Google Sheet
   "Publications — Site ONG EDUCATION ODD" et les affiche en cartes.

   Aucune dépendance, aucun backend à maintenir : la page lit directement
   la feuille publiée en lecture (endpoint gviz de Google Sheets).

   ➜ Changer de feuille : remplacez SHEET_ID par l'ID de la feuille
      (la longue chaîne dans son URL .../spreadsheets/d/<ID>/edit).

   ➜ Colonnes (ligne 1 = en-têtes, exactement ces noms, ordre libre) :
      date | titre | image | resume | contenu | lien | statut
      - resume  : texte court affiché sur la carte.
      - contenu : (optionnel) article complet -> bouton « Lire la suite ».
      - statut  : "brouillon" => la ligne n'apparaît PAS sur le site.
      - image   : une URL, un lien Google Drive partagé, ou "assets/images/..".

   ➜ Mise en forme (dans resume et contenu) :
      **gras**   _italique_   [texte du lien](https://...)
      - puce de liste            (ligne commençant par "- ")
      ## Sous-titre              (1 à 3 #)
      ligne vide                 = nouveau paragraphe
      (Dans une cellule : Alt+Entrée pour passer à la ligne.)
   ========================================================================= */
(function () {
  "use strict";

  const SHEET_ID = "1oMIApSNaLrwJ5PWdnoAGJ6fZcGJtiDbwj45QWe0wyO4";
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/" + SHEET_ID +
    "/gviz/tq?tqx=out:json&headers=1";

  const container = document.getElementById("publications");
  if (!container) return;

  let PUBLICATIONS = [];
  const setState = (html) => { container.innerHTML = html; };

  // Un lien Google Drive -> URL d'image directement affichable.
  function resolveImage(url) {
    if (!url) return "";
    const m = String(url).match(/(?:\/d\/|[?&]id=|open\?id=)([A-Za-z0-9_-]{20,})/);
    if (m) return "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w1000";
    return url;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Mise en forme "en ligne" : **gras**, _italique_, [lien](url).
  function inlineFormat(s) {
    return s
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/_([^_]+)_/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
               '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  // Article complet : paragraphes (ligne vide), listes (- ), sous-titres (## ).
  function formatArticle(raw) {
    if (!raw) return "";
    const esc = escapeHtml(raw).replace(/\r\n/g, "\n");
    return esc.split(/\n\s*\n/).map((block) => {
      const lines = block.split("\n").filter((l) => l.trim() !== "");
      if (!lines.length) return "";
      if (lines.every((l) => /^\s*[-•]\s+/.test(l))) {
        return "<ul>" + lines.map((l) =>
          "<li>" + inlineFormat(l.replace(/^\s*[-•]\s+/, "")) + "</li>").join("") + "</ul>";
      }
      if (lines.length === 1 && /^#{1,3}\s+/.test(lines[0])) {
        const lvl = lines[0].match(/^#+/)[0].length + 2;
        return "<h" + lvl + ">" + inlineFormat(lines[0].replace(/^#+\s+/, "")) + "</h" + lvl + ">";
      }
      return "<p>" + lines.map(inlineFormat).join("<br>") + "</p>";
    }).join("");
  }

  // Texte brut (pour fabriquer un extrait sans la syntaxe).
  function plain(s) {
    return String(s || "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[#*_>]/g, "")
      .replace(/^\s*[-•]\s+/gm, "")
      .replace(/\s+/g, " ").trim();
  }

  function formatDate(disp, raw) {
    const m = String(raw).match(/^Date\((\d+),(\d+),(\d+)/);
    let d = null;
    if (m) d = new Date(+m[1], +m[2], +m[3]);
    else if (disp) { const t = Date.parse(disp); if (!isNaN(t)) d = new Date(t); }
    if (!d || isNaN(d)) return escapeHtml(disp);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  }

  function sortKey(disp, raw) {
    const m = String(raw).match(/^Date\((\d+),(\d+),(\d+)/);
    if (m) return new Date(+m[1], +m[2], +m[3]).getTime();
    const t = Date.parse(disp);
    return isNaN(t) ? 0 : t;
  }

  // ----- Fenêtre de lecture (article complet) -----
  let modal = null;
  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "actu-modal";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="actu-modal__backdrop" data-close></div>' +
      '<div class="actu-modal__dialog" role="dialog" aria-modal="true">' +
        '<button class="actu-modal__close" type="button" aria-label="Fermer" data-close>&times;</button>' +
        '<div class="actu-modal__content"></div>' +
      "</div>";
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) closeModal();
    });
    return modal;
  }
  function openModal(p) {
    ensureModal();
    const img = resolveImage(p.image);
    modal.querySelector(".actu-modal__content").innerHTML =
      (img ? '<div class="actu-modal__media"><img src="' + escapeHtml(img) + '" alt="' + escapeHtml(p.titre) + '"></div>' : "") +
      '<div class="actu-modal__text">' +
        (p.dateDisp ? '<span class="actu-card__date">' + formatDate(p.dateDisp, p.dateRaw) + "</span>" : "") +
        '<h2 class="actu-modal__title">' + escapeHtml(p.titre) + "</h2>" +
        '<div class="actu-article">' + (formatArticle(p.contenu) || "<p>" + escapeHtml(p.resume) + "</p>") + "</div>" +
        (p.lien ? '<a class="actu-card__link" href="' + escapeHtml(p.lien) + '" target="_blank" rel="noopener">En savoir plus →</a>' : "") +
      "</div>";
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  function render(rows) {
    PUBLICATIONS = rows;
    if (!rows.length) {
      setState('<p class="actu-empty">Aucune publication pour le moment. Revenez bientôt !</p>');
      return;
    }
    const cards = rows.map((p, i) => {
      const img = resolveImage(p.image);
      const media = img
        ? '<div class="actu-card__media"><img src="' + escapeHtml(img) + '" alt="' + escapeHtml(p.titre) +
          '" loading="lazy" onerror="this.closest(\'.actu-card__media\').remove()"></div>'
        : "";
      const date = p.dateDisp ? '<span class="actu-card__date">' + formatDate(p.dateDisp, p.dateRaw) + "</span>" : "";
      let exc = p.resume ? plain(p.resume) : plain(p.contenu);
      if (exc.length > 150) exc = exc.slice(0, 150).replace(/\s+\S*$/, "") + "…";
      const excerpt = exc ? '<p class="actu-card__excerpt">' + escapeHtml(exc) + "</p>" : "";
      let action = "";
      if (p.contenu) action = '<button class="actu-card__link" type="button" data-action="open" data-idx="' + i + '">Lire la suite →</button>';
      else if (p.lien) action = '<a class="actu-card__link" href="' + escapeHtml(p.lien) + '" target="_blank" rel="noopener">En savoir plus →</a>';
      return (
        '<article class="actu-card">' + media +
          '<div class="actu-card__body">' + date +
            '<h2 class="actu-card__title">' + escapeHtml(p.titre) + "</h2>" +
            excerpt + action +
          "</div>" +
        "</article>"
      );
    }).join("");
    setState('<div class="actu-grid">' + cards + "</div>");
  }

  // Délégation : survit aux re-rendus.
  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='open']");
    if (!btn) return;
    const p = PUBLICATIONS[+btn.getAttribute("data-idx")];
    if (p) openModal(p);
  });

  async function load() {
    setState('<p class="actu-loading">Chargement des actualités…</p>');
    try {
      const res = await fetch(SHEET_URL, { cache: "no-store" });
      const text = await res.text();
      const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));
      const table = (json && json.table) || {};
      const cols = (table.cols || []).map((c) => String(c.label || "").trim().toLowerCase());

      let iDate = cols.indexOf("date"), iTitre = cols.indexOf("titre"),
          iImage = cols.indexOf("image"), iResume = cols.indexOf("resume"),
          iContenu = cols.indexOf("contenu"), iLien = cols.indexOf("lien"),
          iStatut = cols.indexOf("statut");
      if (iTitre === -1) { iDate = 0; iTitre = 1; iImage = 2; iResume = 3; iContenu = 4; iLien = 5; iStatut = 6; }

      const val = (c, i) => { const cell = i > -1 ? c[i] : null; return cell ? (cell.f != null ? cell.f : (cell.v != null ? cell.v : "")) : ""; };
      const raw = (c, i) => { const cell = i > -1 ? c[i] : null; return cell && cell.v != null ? cell.v : ""; };

      const rows = (table.rows || []).map((r) => {
        const c = r.c || [];
        return {
          dateDisp: val(c, iDate), dateRaw: raw(c, iDate),
          titre: val(c, iTitre), image: val(c, iImage),
          resume: val(c, iResume), contenu: val(c, iContenu),
          lien: val(c, iLien),
          statut: String(val(c, iStatut)).trim().toLowerCase()
        };
      })
      .filter((p) => p.titre && p.titre.toLowerCase() !== "titre")
      .filter((p) => p.statut !== "brouillon");

      rows.sort((a, b) => sortKey(b.dateDisp, b.dateRaw) - sortKey(a.dateDisp, a.dateRaw));
      render(rows);
    } catch (e) {
      setState(
        '<p class="actu-error">Impossible de charger les actualités pour le moment.<br>' +
        "Vérifiez que la feuille Google est bien partagée en lecture, puis réessayez.</p>"
      );
    }
  }

  load();
})();
