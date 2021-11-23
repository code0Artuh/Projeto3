const express = require("express"); 
const router = express.Router(); 
const disciplinaController = require("./../controller/disciplinas.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota disciplinas ok"});
});

router.get("/listall", disciplinaController.getAll);

router.get("/listid/:id", disciplinaController.getSingle);

router.post("/add", disciplinaController.postCreate);

router.put("/update/:id", disciplinaController.putUpdate);

router.delete("/delete/:id", disciplinaController.delDelete);

module.exports = router;