#Vocabulaire JS
    - Pour lier l'html avec le JS *A mettre ABSOLUMENT avant le </body> et non pas au début*
        <script src="lenomdufichierjs.js" type="text/javascript"></script>
    - Créer une variable  
      var nomVariable (majuscule au deuxième mot) =
        * si variable doit s'afficher sous forme de console   
          var nomVariable = prompt
        * si variable est sous forme de chaine de caractère
          var nomVariable = ("Chaine de cara")
        * si variable sous forme de chiffre simple à modifier (add sous mult div)
          var nomVariable = 0
        *  Pour addition plusieurs variable, vous pouvez créer une variable qui  contient l'addition exemple
                          var monAge = prompt ("Quel âge avez-vous ?");
                          var ageMax = prompt ("Combien de temps espérez vous vivre ?");
                          var denree = prompt ("De quoi vous nourissez vous ?");
                          var denDay = prompt ("Combien en mangez-vous par jour ?");
                          var year   = 365;
                          var plat = (ageMax - monAge) * ( denDay * year );
    - Pour afficher les données dans la console console.log
        * Pour afficher plusieurs choses dans la console il faut les additionner
          console.log ("Nous sommes en" + monAge)

  
