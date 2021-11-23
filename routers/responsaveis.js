const express = require("express"); 
const router = express.Router(); 
const responsavelController = require("./../controller/responsaveis.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota responsaveis ok"});
});

router.get("/listall", responsavelController.getAll);

router.get("/listid/:id", responsavelController.getSingle);

router.post("/add", responsavelController.postCreate);

router.put("/update/:id", responsavelController.putUpdate);

router.delete("/delete/:id", responsavelController.delDelete);

module.exports = router;