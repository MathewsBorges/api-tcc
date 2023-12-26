const connection = require("../database/connection");

class Medico {
  async getMedicos() {
    const [rows] = await connection.query(
      "SELECT medico.nome, medico.sobrenome, medico.crm, especialidade.nome as especialidade FROM medico JOIN especialidade ON medico.fk_especialidade = especialidade.pk_especialidade where medico.status = 1"
    );
    return rows;
  }

  //Pega o dia e converte em dia da semana
  async getHorariosByDia(id, dia) {
    const [rows] = await connection.query(
      `SELECT * from horarios where fk_medico = '${id}' and dia_semana = '${dia}'`
    );
    return rows;
  }

  async getMedicoByUnidade(unidade) {
    const [rows] = await connection.query(
      `SELECT DISTINCT medico.*, especialidade.nome AS fk_especialidade
       FROM medico INNER JOIN horarios ON medico.pk_medico = horarios.fk_medico
       INNER JOIN especialidade ON medico.fk_especialidade = especialidade.pk_especialidade
       WHERE horarios.fk_unidade = ${unidade} and medico.status = 1`
    );
    return rows;
  }
}

module.exports = new Medico();
