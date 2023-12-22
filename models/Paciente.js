const connection = require("../database/connection");

class Paciente {
  async getPacientes() {
    const [rows] = await connection.query("select * from paciente where status = 1;");
    return rows;
  }

  async getLogin(email, senha) {
    const [rows] = await connection.query(
      `select * from paciente where email = '${email}' and senha = '${senha}' and status=1`
    );
    return rows;
  }

  async insertPaciente(paciente) {
    try {
      const [rows] = await connection.query(
        `insert into paciente (nome, sobrenome, data_nascimento, cpf, telefone, sexo, endereco, fk_cidade, cartao_sus, email,senha) values(?,?,?,?,?,?,?,?,?,?,?)`,
        [
          paciente.nome,
          paciente.sobrenome,
          paciente.data_nascimento,
          paciente.cpf,
          paciente.telefone,
          paciente.sexo,
          paciente.endereco,
          paciente.fk_cidade,
          paciente.cartao_sus,
          paciente.email,
          paciente.senha,
        ]
      );
      return { status: "success", insertedId: rows.insertId };
    } catch (error) {
      console.error("Erro ao inserir paciente:", error.message);
      return { status: "error", error: "Erro interno do servidor ao adicionar paciente" };
    }
  }

  async deletePaciente(id){
    try {
    const [rows] = await connection.query("delete from paciente where pk_paciente = ?", id)
      return {status: "success"}
    } catch (error) {
      return {status: "error", mensagem: error.message}
    }
   
  }
}

module.exports = new Paciente();
