const mongoose = require("mongoose");

const professoresModel = new mongoose.Schema({
    nome: { type: String, required: true},
    turma: { type: String, required: true},
    disciplina: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const professor= mongoose.model("professores", professoresModel);
module.exports = professor;