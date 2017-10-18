var score = prompt ("Quel est votre score ?");

var résultat = prompt ("Vous êtes rang = ");

if (score <= 50) {
  document.write ("Rang C (C'est archi nul..)");
}
else if (score < 90) {
  document.write ("Rang B (C'est bien continuez !)");
}
else if (score < 90) {
  document.write ("Rang A (Excellent ! Vous êtes le meilleur !)");
}
else {
  document.write ("Euh.. c'est pas un chiffre ça..");
}
