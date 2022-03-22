import {editLangage,getLangage} from "./module/apiFunction.js"
import * as validator from "./module/validator.js"

// mise a jours du formulaire
let yearsElement = document.querySelector("#years");
let nameElement = document.querySelector("#name");
let form = document.querySelector("#form-edit");
let errorContainer = document.querySelector("#error-container");

let decomposeUrl = window.location.href.split("/");
let id = decomposeUrl[decomposeUrl.length - 1];

getLangage(id,(langage)=>{
    yearsElement.value = langage.createdYear;
    nameElement.value = langage.name;
  });
  
// gestion de l'événement du click du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorContainer.innerHTML="";
  // validateur avec 2 test pour que la mise a jour de l'interface soit appliquer au 2
  let validName = validator.ValidateString(document.querySelector("#name"),errorContainer,20);
  let validYears = validator.ValidateNumber(document.querySelector("#years"),errorContainer,1900,2050)
  if (!validName || !validYears) return;
  let langage = {
    id: +id,
    name: nameElement.value,
    createdYear: +yearsElement.value,
  };
  editLangage(langage,+id,()=>{
    window.location.href = "/";
  })
});

  
