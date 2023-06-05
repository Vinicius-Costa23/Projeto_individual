var database = require("../database/config");

function atualizarGrafico() {

    instrucaoSql = ''


     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(fkJogador) as qtdeVotos, jogadores.nome as nomeJogador from usuario
        right join jogadores on fkJogador = idJogador group by fkJogador, nomeJogador;`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    atualizarGrafico

}