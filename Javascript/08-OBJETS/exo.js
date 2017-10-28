// Crée un objet "Character" qui contient les informations suivantes :
// name (string)
// age (numero)
// items_to_give (tableau)

var myCara = {
    name:"Nat",
    age :23,
    items_to_give: ["Lunette", "Epée" , "Tasse"],
}
console.log(myCara);

// afficher chaque information sur une ligne séparés dans la console (for in)

for (var a in myCara) {
console.log(myCara [a]);
}

// faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

function giveItem () {
  var items_to_give = ["café", "chocolat", "aile"]
  var choix = (Math.floor(Math.random()*items_to_give.length))
  console.log (items_to_give[choix]);
}

giveItem ()

var boutique= [

  {
    title: "BeCodemug",
    physic: 300,
    magic: 300,
    minLevel: 10,
    available: false,
  },

  {
    title: "Souris",
    physic: 50,
    magic: 20,
    minLevel: 2,
    available: true,
  },

  {
    title: "cable",
    physic: 15,
    magic: 15,
    minLevel: 5,
    available: true,
  },

  {
    title: "pc",
    physic: 250,
    magic: 25,
    minLevel: 2,
    available: false,
  }

  ];

  function showShop() {
    for (i in Boutique); {
  console.log(Boutique[i]);
}
}
