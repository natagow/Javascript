var a = prompt ("Quel est votre score ?")
for (a=0;a<101;a++) {
  if (a>=90) {
    grade = "a";
  }
  else if ( (a<100) && (a>=80) ) {
    grade = "b";
  }
  else if ( (a<80) && (a>=70) ) {
    grade = "c";
  }
  else if ( (a<70) && (a>=65) ) {
    grade = "d";
  }
  else {
    grade = "e";
  }
}
console.log("Félicitation vous avez le grade "+grade);
