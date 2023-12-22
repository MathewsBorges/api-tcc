const connection = require('../database/connection')

class Colaborador{

 async getUsuarios(){
    const [rows] = await connection.query("select * from colaborador where status = 'A'")
    return rows
}

async getLogin(cpf, senha) {
    const [rows] = await connection.query(`select * from colaborador where cpf = '${cpf}' and senha_app = '${senha}' and perfil=2 and status='A'`)
    return rows
}




}



module.exports = new Colaborador()