var objet = prompt ("Avez-vous un ordinateur ? (oui / non)");
  if (objet === "oui") {
    var nombr = prompt ("Combien en avez-vous ?");
    if (nombr == 0) {
      document.write ("Oh dommage, c'est utile pourtant..");
    }
    else if (nombr == 1) {
      document.write ("Cool !");
    }
    else if (nombr == 2) {
      document.write ("Comme moi !");
    }
    else if (nombr > 2) {
      document.write ("C'est énorme..");
    }
    else {
      document.write ("Je te demande juste combien, c'est pas un chiffre ça..");
    }
  } else if (objet === "non") {
    document.write ("Dommage, overwatch c'est cool pourtant..");
  } else {
    document.write ("Calme toi gérard");
  }
