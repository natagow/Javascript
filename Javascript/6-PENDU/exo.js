// Tableau des variables composantes du pendu
var lettre = ["B" , "O" , "N" , "J" , "O" , "U" , "R"];
var lettreGuessed = ["_" , "_" , "_" , "_" , "_" , "_" , "_"];

// Fonction qui va coder le pendu

function guessLetter() {
  // nom de la fonction
    var message = window.prompt ("Devinez le mot avec les lettres de l'alphabet") [0];

    //début de la boucle qui va ajouter une lettre corect à chaque bonne réponse

    for (var i = 0; i < lettre.length; i = i + 1) {
      var letter = lettre[i];
      if (letter.toLowerCase() === message.toLowerCase()) lettreGuessed[i] = letter;
  }

    //Fin du jeu et félicitation
    alert(lettreGuessed.join(' '));
    if (lettreGuessed.indexOf("_") === -1) alert ("Félicitation !");
    else guessLetter();
  }
    //appel de la fonction pour sa mise en place
guessLetter();
