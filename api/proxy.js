import fetch from "node-fetch";

export default async function handler(req, res) {
  const remoteUrl = "https://www.saintjosephdescarmes.com";

  try {
    const response = await fetch(remoteUrl);
    if (!response.ok) {
      return res
        .status(response.status)
        .send(`Erreur lors de la récupération du site distant : ${response.statusText}`);
    }

    let html = await response.text();

    // ---- Remplacement du texte ----
    // Remplace toutes les occurrences de "Chanteurs" (insensible à la casse) par "Rapeurs"
    html = html.replace(/Chanteurs/gi, "Rapeurs");

    // Vous pouvez ajouter d’autres transformations ici (injection de CSS, etc.)

    // Envoi du HTML modifié
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch (err) {
    console.error("Erreur proxy :", err);
    res.status(500).send("Erreur interne du proxy");
  }
}
