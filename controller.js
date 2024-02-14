const Tarefa = require("./tarefa.js");


async function findUsers(req, res) {
  Tarefa.findAll()
    .then((result) => res.json(result))
    .catch((error) => {
      console.error("Erro ao buscar tarefas:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    });
}
async function creatUser(req, res) {
  try {
    const { nome_Tarefa, desc_tarefa, data_finalizacao } = req.body;
    const novaTarefa = await Tarefa.create({
      nome_Tarefa,
      desc_tarefa,
      data_finalizacao,
    });
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.error("Erro ao criar nova tarefa:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

//erro ao esportar mais de uma função//
module.exports = findUsers;
