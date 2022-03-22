import {list,deleteLangage} from "./module/apiFunction.js"

let containerListe = document.querySelector("#data-wrapper");
let selectedDeleteId = 0;

list((langages)=>{
  langages.forEach((langage) => {
      createRow(langage);
    });
})

// gestion du modal
let modal = document.querySelector("#modalId");
let modalDeleteButton = document.querySelector("#modal-delete-button");
let bgModal = document.querySelector("#bg-modal");

modal.style.display = bgModal.style.display = "none";

document.querySelectorAll(".close-modal").forEach(element=>{
  element.addEventListener("click",(event)=>{
    modal.style.display = bgModal.style.display = "none";
  })
})

modalDeleteButton.addEventListener("click",(event)=>{
  deleteLangage(selectedDeleteId,(res)=>{
    containerListe.innerHTML = "";
    res.forEach((element) => {
      createRow(element);
    });
    modal.style.display = bgModal.style.display = "none";
  });
});

// crée et ajoute une ligne sur le tableau des différents langage
function createRow(data) {
  if (!data) return;
  let tr = document.createElement('tr');
  tr.innerHTML =  `
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.createdYear}</td>
    <td>
      <a href="/edit/${data.id}" class="btn btn-secondary">Modifier</a>
      <button class="btn btn-danger crud-btn-delete">Supprimer</button>
    </td>
  `;
  tr.querySelector(".crud-btn-delete").addEventListener("click", (event) => {
    modal.style.display = bgModal.style.display = "block";
    selectedDeleteId = data.id;
  });
  tr.addEventListener("click",(event)=>{
    if (event.target.localName !== "td") return;
    window.location.href = `/view/${data.id}`
  });
  containerListe.appendChild(tr);
}





