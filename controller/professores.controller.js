const professor = require('../model/professores');

exports.getAll = async (req,res) => {
    await professor.find({}).then((professores) => {
        console.log(professores);
        res.status(200).json(professores);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await professor.find({ _id:nome }).then((professor) => { 
        console.log(professor);
        if(professor == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(professor);
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
    }else if(!req.body.turma){
        res.status(400).json({message: "esta faltando turma"});
        return;
    }
    else if(!req.body.disciplina){
        res.status(400).json({message: "esta faltando disciplina"});
        return; 
    }

    await professor.create(req.body).then(() => {
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
    }else if(!req.body.turma){
        res.status(400).json({message: "esta faltando turma"});
        return;
    }
    else if(!req.body.disciplina){
        res.status(400).json({message: "esta faltando disciplina"});
        return;
    }
    await professor.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await professor.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
};