const responsavel = require('../model/responsaveis');

exports.getAll = async (req,res) => {
    await responsavel.find({}).then((responsaveis) => {
        console.log(responsaveis);
        res.status(200).json(responsaveis);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await responsavel.find({ _id:nome }).then((responsavel) => { 
        console.log(responsavel);
        if(responsavel == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(responsavel);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => { 
    
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.aluno){
        res.status(400).json({message: "esta faltando aluno"});
        return;
    }
    
    await responsavel.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
};

exports.putUpdate = async (req,res) => {
    const id = req.params.id;
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.aluno){
        res.status(400).json({message: "esta faltando aluno"});
        return;
    }

    await responsavel.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await responsavel.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
};
