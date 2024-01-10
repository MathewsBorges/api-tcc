const connection = require('../database/connection')

class Unidade{

    async getUnidades(cidade){
        const[rows] = await connection.query(`select unidade.pk_unidade, unidade.nome, unidade.endereco, unidade.bairro, unidade.fk_cidade, unidade.telefone, tipo_unidade.nome as tipo from unidade JOIN tipo_unidade ON unidade.fk_tipo = tipo_unidade.pk_tipo where fk_cidade = ${cidade}`)

        return rows
    }

    async getUnidadeByID(id){
        const[rows] = await connection.query(`select unidade.pk_unidade, unidade.nome, unidade.endereco, unidade.bairro, unidade.fk_cidade, unidade.telefone, tipo_unidade.nome as tipo from unidade JOIN tipo_unidade ON unidade.fk_tipo = tipo_unidade.pk_tipo where pk_unidade=${id}`)

        return rows
    }
}


module.exports = new Unidade()