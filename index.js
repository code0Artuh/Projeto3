const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json());  

const port = process.env.DB_PORT || 3000;

const conn = require("./model/conn/index"); 

conn();

app.get('/', (req,res) => {
    res.status(200).json({message:"Sistema Escolar"});
});

const alunoRouters = require("./routers/alunos");
app.use('/aluno',alunoRouters);

const professorRouters = require("./routers/professores");
app.use('/professor',professorRouters);

const responsavelRouters = require("./routers/responsaveis");
app.use('/responsavel',responsavelRouters);

const livroRouters = require("./routers/livros");
app.use('/livro',livroRouters);

const disciplinaRouters = require("./routers/disciplinas");
app.use('/disciplina',disciplinaRouters);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});