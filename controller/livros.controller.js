const livro = require("../model/livros")

exports.getAll = async (req,res) => {
    await livro.find({}).then((livros) => {
        console.log(livros);
        res.status(200).json(livros);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await livro.find({ _id:nome }).then((livro) => { 
        console.log(livro);
        if(livro == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(livro);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => { 
    
        if(!req.body.titulo){
        res.status(400).json({message: "esta faltando titulo"});
        return;
    }else if(!req.body.edicao){
        res.status(400).json({message: "esta faltando edicao"});
        return;
    }
    else if(!req.body.ano){
        res.status(400).json({message: "esta faltando ano"});
        return; 
    }
    else if(!req.body.autor){
        res.status(400).json({message: "esta faltando autor"});
        return; 
    }
    else if(!req.body.disciplina){
        res.status(400).json({message: "esta faltando disciplina"});
        return; 
    }

    await livro.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
};

exports.putUpdate = async (req,res) => {
    const id = req.params.id;
    if(!req.body.titulo){
        res.status(400).json({message: "esta faltando titulo"});
        return;
    }else if(!req.body.edicao){
        res.status(400).json({message: "esta faltando edicao"});
        return;
    }
    else if(!req.body.ano){
        res.status(400).json({message: "esta faltando ano"});
        return; 
    }
    else if(!req.body.autor){
        res.status(400).json({message: "esta faltando autor"});
        return; 
    }
    else if(!req.body.disciplina){
        res.status(400).json({message: "esta faltando disciplina"});
        return; 
    }

    await livro.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await livro.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
};
