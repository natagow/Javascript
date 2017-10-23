/*exo 4 Bientôt vieux */
var monAge = prompt ("Quel âge avez-vous ?");
var ageMax = prompt ("Combien de temps espérez vous vivre ?");
var denree = prompt ("De quoi vous nourissez vous ?");
var denDay = prompt ("Combien en mangez-vous par jour ?");
var year   = 365;
var plat = (ageMax - monAge) * ( denDay * year );
console.log("Il vous en reste " +  plat );
