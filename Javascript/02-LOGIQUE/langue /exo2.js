/* exo 2 création de variable */
var langue = prompt ("Quel langue parlez-vous ? (eng , es ou fr)");

if (langue=="fr") {
  document.write ("Bonjour à vous !");
}
else if (langue == "eng") {
  document.write ("Hello world !");
}
else if (langue == "es") {
  document.write ("Hola kétal ? *boop*");
}
else {
  document.write ("Sorry..");
}
