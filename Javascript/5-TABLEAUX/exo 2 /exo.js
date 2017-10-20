let acteur = ["Will Smith" , "Brad pitt" , "Angelina Jolie"];
var add = prompt ("Nom d'acteur");
acteur.push(add);
for (let i=0; i<acteur.length; i++){
  console.log("L'acteur en position " + (i+1) + " est " + acteur[i] + ".");
  document.write("L'acteur en position " + (i+1) + " est " + acteur[i] + ". <br>");
}
