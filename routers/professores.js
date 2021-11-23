const express = require("express"); 
const router = express.Router(); 
const professorController = require("./../controller/professores.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota professores ok"});
});

router.get("/listall", professorController.getAll);

router.get("/listid/:id", professorController.getSingle);

router.post("/add", professorController.postCreate);

router.put("/update/:id", professorController.putUpdate);

router.delete("/delete/:id", professorController.delDelete);

module.exports = router;