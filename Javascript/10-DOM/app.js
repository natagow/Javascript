document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");

var select=document.getElementById("first-paragraph")
select.classList.remove("bg-lime");
select.classList.remove("gray");
select.classList.add("aqua");

var select_2 = document.querySelector("blockquote");
  select_2.classList.remove("bg-silver");
  select_2.classList.add("bg-teal");


var select_3=document.querySelector("blockquote");
  select_3.classList.add("bg-white");


var select_4 = document.getElementById("my-table");
  select_4.classList.add("bg-purple");


var table=document.querySelector("#my-table");
  table.classList.add("bg-purple");
var container=document.querySelectorAll('.container');
for (var i = 0; i < container.length; i++) {
  container[i].classList.add('shadow');
}

var pre=document.querySelectorAll('pre');
  pre.style.color = "black";
  pre.style.backgroundColor= "white";
  pre.style.borderTop = "3px solid red";
  pre.style.borderBottom= "3px solid red";

var titre = document.querySelector("h3");
  titre.innerHTML = "<em>Itelic title ! yeah !</em>";

var titre_2 = document.querySelector("h2");
  titre2.innerText = "<strong>HTML doens't work !</strong>";

var liste = document.querySelector("ul");
var element = document.createElement("li");
var txt = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com'>Google</a>")

liste.appendChild(element);
var nouveau = document.querySelector("li", "a");
nouveau.style.color="blue";


var select = document.querySelector("ol");
for (var i = 0; i < select.length; i++) {
}
ordre.removeChild(ordre.childNodes[i]);

let tab = ["Silent Teacher", "Code Monkey", "Code Combat"];
for (var i = 0; i < tab.length; i++) {
  tab[i];
}
var new_li = document.createElement("li");
