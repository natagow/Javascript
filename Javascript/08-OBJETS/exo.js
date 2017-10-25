// Crée un objet "Character" qui contient les informations suivantes :
// name (string)
// age (numero)
// items_to_give (tableau)

var myCara = {
    name:"Nat",
    age :23,
    items_to_give: ["Lunette", "Epée" , "Tasse"],
}


// afficher chaque information sur une ligne séparés dans la console (for in)
//
// faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

for (var key in myCara) {
    console.log(key + " : "+ myCara[key]);
}
