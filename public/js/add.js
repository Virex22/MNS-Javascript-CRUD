import {uploadLangage} from "./module/apiFunction.js"
import * as validator from "./module/validator.js"

let form = document.querySelector("#form-add");
let errorContainer = document.querySelector("#error-container");

// evénement du formulaire d'ajout
form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorContainer.innerHTML="";
  // validateur avec 2 test pour que la mise a jour de l'interface soit appliquer au 2
  let validName = validator.ValidateString(document.querySelector("#name"),errorContainer,20);
  let validYears = validator.ValidateNumber(document.querySelector("#years"),errorContainer,1900,2050)
  if (!validName || !validYears) return;
  let req = {
    id: 0,
    name: document.querySelector("#name").value,
    createdYear: + document.querySelector("#years").value,
  };
  uploadLangage(req,(response)=>{
    window.location.href = "/";
  });
});

