import {getLangage} from "./module/apiFunction.js"

let decomposeUrl = window.location.href.split("/");
let id = decomposeUrl[decomposeUrl.length - 1];

let title = document.querySelector("#title");
let description = document.querySelector("#description");

getLangage(id,(langage)=>{
  description.innerText = `le langage ${langage.name} à été crée en ${langage.createdYear} !`;
  title.innerText = langage.name;
});

// gestion du boutton retour
document.querySelector("#button-go-back").addEventListener("click",()=>{
  window.location.href = "/";
})