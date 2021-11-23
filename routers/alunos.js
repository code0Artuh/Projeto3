const express = require("express"); 
const router = express.Router(); 
const alunosController = require("./../controller/alunos.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota alunos ok"});
});

router.get("/listall", alunosController.getAll);

router.get("/listname/:name", alunosController.getSingle);

router.post("/add", alunosController.postCreate);

router.put("/update/:id", alunosController.putUpdate);

router.delete("/delete/:id", alunosController.delDelete);

module.exports = router;