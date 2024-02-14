const Tarefa = require("./tarefa.js");

async function findAll(req, res) {
    Tarefa.findAll()
  .then((result) => res.json(result))
  .catch((error) => {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  });
}


module.exports = findAll;
