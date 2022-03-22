// init express et bdd
let express = require("express");
let app = express();
app.use(require("express").json());

const data = require("./src/bdd.js") ;

// const variable
const PORT = 3000;

// mise en place des routes
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/index.html`);
});

app.get("/add", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/add.html`);
});

app.get("/edit/:name", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/edit.html`);
});

app.get("/delete", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/delete.html`);
});

app.get("/view/:id", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/view.html`);
});

// route de données

app.put("/langage/:id", (req, res) => {
  let id = req.params.id;
  data.forEach((element, index) => {
    if (element.id == id) {
      data[index] = req.body;
      res.send(data[index]);
    }
  });
});
app.delete("/langage/:id", (req, res) => {
  const indexElem = data.findIndex((elem) => elem.id == req.params.id);
  if (indexElem === -1) return res.status(404).send("élément inexistant");
  data.splice(indexElem, 1);
  res.send(data);
});
app.get("/langage", (req, res) => {
  res.send(data);
});
app.get("/langage/:id", (req, res) => {
  let id = req.params.id;
  data.forEach((element) => {
    if (element.id == id) res.send(element);
  });
});
app.post("/langage", (req, res) => {
  let localData = req.body;
  localData.id = data.length + 1;
  data.push(localData);
  res.send(data);
});

// élément à utilisé comme une arboressence de fichier
app.use("/public", express.static("./public"));

// démarage du serveur
app.listen(3000, () => {
  console.log(`Le serveur est ouvert sur le port ${PORT}`);
});
