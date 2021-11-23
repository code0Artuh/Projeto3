const express = require("express"); 
const router = express.Router(); 
const livroController = require("./../controller/livros.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota livros ok"});
});

router.get("/listall", livroController.getAll);

router.get("/listid/:id", livroController.getSingle);

router.post("/add", livroController.postCreate);

router.put("/update/:id", livroController.putUpdate);

router.delete("/delete/:id", livroController.delDelete);

module.exports = router;