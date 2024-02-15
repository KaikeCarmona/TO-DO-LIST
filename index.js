const express = require('express');
const db = require("./db");
const router = require('./routes');
const app = express();

app.use(express.json());

app.use(router)

db.sync(() => console.log(`Banco de dados conectado: `));

app.listen(3000, ()=>{
    console.log('funcionando na porta 3000')
})