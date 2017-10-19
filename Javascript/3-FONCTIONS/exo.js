var a = prompt ("Première variable");
var b = prompt ("Deuxième variable");
console.log (a, b)

//soustraction//
function subs (a, b){
   return (a-b);
 }

//division//

function div (a, b){
  return (a/b);
}

//multiplication//

function mult (a, b){
  return (a*b);
}

//percent//

function percent (a, b){
  return ((b/100)*a)
}

//speed//

function speed (a , b){
  return (a/b)+" Km/h";
}



console.log(subs(a,b) );
document.write ( "<br/>La soustraction est de " + subs(a,b));
console.log(div (a,b));
document.write (" <br/> La division est de " + div(a,b));
console.log(mult (a,b));
document.write ("<br/> La multiplication est de " + mult(a,b));
console.log(percent (a,b));
document.write ("<br/> Le pourcentage est de " + percent(a,b));
console.log(speed (a,b));
document.write ("<br/> La vitesse est de " + speed(a,b));
