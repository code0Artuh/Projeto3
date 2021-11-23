const mongoose = require("mongoose");

const alunosModel = new mongoose.Schema({
    nome: { type: String, required: true},
    idade: { type: Number, required: true},
    turma: { type: String, required: true},
    niver: { type: String, required: true},
    responsavel : { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const aluno = mongoose.model("alunos", alunosModel);
module.exports = aluno;