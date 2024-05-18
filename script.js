document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const listeMots = ["Gouloum", "Bang", "Mongueul"];
    const listePhrases = ["Na un inconvénient ?", "Mon gueul fé rire a zot ?", "ZANMATO LES GARS"];

    let score = 0;

    function afficherMessage(message) {
        let resultatDiv = document.getElementById("resultat");
        resultatDiv.innerHTML += message + "<br>";
    }

    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");

    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    }

    if (choix === "mots") {
        // On parcourt le tableau des mots
        for (let i = 0; i < listeMots.length; i++) {
            // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
            let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
            if (motUtilisateur === listeMots[i]) {
                // Si le mot saisi par l'utilisateur est correct, on incrémente le score
                score++;
            }
        }
        afficherMessage("Votre score est de " + score + " sur " + listeMots.length);
    } else if (choix === "phrases") {
        // On parcourt le tableau des phrases
        for (let i = 0; i < listePhrases.length; i++) {
            // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
            let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
            if (phraseUtilisateur === listePhrases[i]) {
                // Si la phrase saisie par l'utilisateur est correcte, on incrémente le score
                score++;
            }
        }
        afficherMessage("Votre score est de " + score + " sur " + listePhrases.length);
    }

    // Message de fin pour indiquer que le jeu est terminé
    afficherMessage("Le jeu est terminé gouloum. Merci d'avoir joué à ma merde !");
});