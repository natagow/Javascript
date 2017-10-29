var tentative = 0;

// On définit min et max comme des constantes
// et on leur affecte une valeur
// Généralement, par convention, les
// constantes sont en majuscules

const MIN = 20;
const MAX = 80;

// crée la fonction qui va coder le résultat préétabli de la machine
// que le joueur devra deviner

function random() {
return (Math.floor(Math.random() * (MAX - MIN)) + MIN);
}
const resultat = random();

// faire en sorte que le résultat de la fonction ne changera pas
// avec toute les réponses encodés


//fonction principal

function main() {
    const choix = window.prompt('Trouvez une valeur entre 20 et 80');
    if (+choix === resultat) {
        reussite();
    }
    else if (choix > resultat) {
        window.alert("C'est moins");
        tentative++;
        main();
    }
    else if (choix < resultat) {
        window.alert("C'est plus");
        tentative++;
        main();
}

function reussite() {
    window.alert("Réussi en " + tentative + " tentative !");
}

}
main();
