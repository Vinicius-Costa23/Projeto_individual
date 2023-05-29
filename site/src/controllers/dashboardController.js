var dashboardModel = require("../models/dashboardModel");



function atualizarGrafico(req, res) {

    dashboardModel.atualizarGrafico()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                }  else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    atualizarGrafico,
}