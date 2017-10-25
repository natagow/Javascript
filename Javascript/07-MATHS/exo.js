// exercice 0
var math_min = Math.min (7,5,-12,6,32,18,14,-2);
var math_max = Math.max (-3,9,21,36,27,54,17,35);
var add = math_min + math_max;

console.log (math_min);
console.log(math_max);
console.log(add);


// exercice 1

var floatBateau = 10.4;
var couleBateau = Math.floor (floatBateau);
var voleBateau  = Math.ceil (floatBateau);

console.log("valeur " + floatBateau);
console.log("arrondi en dessous " + couleBateau);
console.log("arrondi au dessus "  + voleBateau);

//exercice 2

var chiffre_min = Math.floor(50);
var chiffre_max = Math.ceil(100);

console.log("Le chiffre au hasard est  " + Math.floor(Math.random() * (chiffre_max-chiffre_min) + chiffre_min));

var chiffre = Math.random();
console.log("Au hasard entre 0 et 1 ");
console.log(Math.round(chiffre));

let mortal = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero" ];
var aleatoire = mortal [Math.floor(mortal.length * Math.random())];

console.log (aleatoire);
