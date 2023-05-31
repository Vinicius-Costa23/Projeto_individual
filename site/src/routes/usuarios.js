var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
// redireciona para algum controller que será tratado os dados
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/votar", function (req, res) {
    usuarioController.votar(req, res);
})



module.exports = router;