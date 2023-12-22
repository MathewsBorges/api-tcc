const connection = require('../database/connection')

class Unidade{

    async getUnidades(cidade){
        const[rows] = await connection.query(`select * from unidade where fk_cidade = ${cidade}`)
        return rows
    }
}


module.exports = new Unidade()