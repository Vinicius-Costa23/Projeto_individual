var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")
router.get("/atualizar_grafico", function(req, res){
dashboardController.atualizarGrafico(req, res)
    
})

module.exports = router;