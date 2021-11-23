const mongoose = require("mongoose");

const livrosModel = new mongoose.Schema({
    titulo: { type: String, required: true},
    edicao: { type: Number, required: true},
    ano: { type: Number, required: true},
    autor : { type: String, required: true},
    disciplina: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const livro = mongoose.model("livros", livrosModel);
module.exports = livro;