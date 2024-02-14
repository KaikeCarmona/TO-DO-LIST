const express = require("express");
const routes = require("./routes.js");
const db = require("./db.js");
const tarefa = require("./tarefa");

const app = express();
app.use(express.json());
app.use(routes);

app.get("/users", tarefa.findAll);
app.post("/post", function () {
  tarefa.post;
});

db.sync(() => console.log(`Banco de dados conectado: `));
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
