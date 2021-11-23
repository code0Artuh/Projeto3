const express = require("express"); 
const router = express.Router(); 
const responsavel = require("./../model/responsaveis"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota responsaveis ok"});
});

router.get('/listall', async (req,res) => {
    await responsavel.find({}).then((responsaveis) => {
        console.log(responsaveis);
        res.status(200).json(responsaveis);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const nome = req.params.nome;
    await responsavel.find({ nome:nome }).then((responsavel) => { 
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
});

router.post('/add', async (req,res) => { 


    await responsavel.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.idade){
        res.status(400).json({message: "esta faltando idade"});
        return;
    }
    else if(!req.body.turma){
        res.status(400).json({message: "esta faltando turma"});
        return; 
    }
    else if(!req.body.niver){
        res.status(400).json({message: "esta faltando niver"});
        return; 
    }
    else if(!req.body.responsavel){
        res.status(400).json({message: "esta faltando responsavel"});
        return; 
    }

    await responsavel.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/delete/:id', async (req,res) => {
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
});

module.exports = router;