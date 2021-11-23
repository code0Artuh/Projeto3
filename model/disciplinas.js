const mongoose = require("mongoose");

const disciplinasModel = new mongoose.Schema({
    nome: { type: String, required: true},
    professor: { type: String, required: true},
    turma: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const disciplina = mongoose.model("disciplinas", disciplinasModel);
module.exports = disciplina;