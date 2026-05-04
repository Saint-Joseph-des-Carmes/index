import fetch from "node-fetch";
import { writeFileSync } from "fs";
import { resolve } from "path";

const TARGET = "https://www.saintjosephdescarmes.com";

(async () => {
  const resp = await fetch(TARGET);
  if (!resp.ok) throw new Error(`Erreur ${resp.status}`);
  let html = await resp.text();

  // Remplacement du texte
  html = html.replace(/Chanteurs/gi, "Rapeurs");

  // Enregistre le résultat dans public/
  writeFileSync(resolve("public", "remote.html"), html);
})();
