const mongoose = require("mongoose");

const responsaveisModel = new mongoose.Schema({
    nome: { type: String, required: true},
    aluno: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const responsavel= mongoose.model("responsaveis", responsaveisModel);
module.exports = responsavel;