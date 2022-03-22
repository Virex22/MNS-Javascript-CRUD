// options pour récupérer des éléments
let getAndDeleteOption ={
    method: "GET",
    headers:new Headers(),
    mode: "cors",
    cache: "default",
};

// options pour envoyer des éléments
let postAndPutOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };

// fonction permettant d'appeller l'api qui récupère tout les éléments
export function list(cb){
    getAndDeleteOption.method = "GET";
    fetch("/langage", getAndDeleteOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}
// fonction permettant d'appeller l'api qui récupère un élément à partir de son id
export function getLangage(id, cb){
    getAndDeleteOption.method = "GET";
    fetch(`/langage/${id}`, getAndDeleteOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}

// fonction qui envois les données au serveur pour l'ajout d'un élément
export function uploadLangage(langage, cb){
    postAndPutOption.method = "POST";
    postAndPutOption.body = JSON.stringify(langage);
    fetch("/langage", postAndPutOption)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
          cb(res)
      }); 
}

// fonction qui envois les données au serveur pour l'édition d'un élément
export function editLangage(langage,id, cb){
    postAndPutOption.method = "PUT";
    postAndPutOption.body = JSON.stringify(langage);
    fetch(`/langage/${id}`, postAndPutOption)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
          cb(res)
      }); 
}

// fonction qui envois les données au serveur pour l'édition d'un élément
export function deleteLangage(id, cb){
    getAndDeleteOption.method = "DELETE";
    fetch(`/langage/${id}`, getAndDeleteOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}