const mongoose = require("mongoose");

const alunosModel = new mongoose.Schema({
    nome: { type: String, required: true},
    idade: { type: Number, required: true},
    turma: { type: String, required: true},
    niver: { type: String, required: false},
    responsavel : { type: String, required: false},
    dataCriacao: { type: Date, default: Date.now }
});

const aluno = mongoose.model("alunos", alunosModel);
module.exports = aluno;
