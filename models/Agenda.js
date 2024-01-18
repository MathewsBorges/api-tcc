const connection = require("../database/connection");

class Agenda {
  //retorna os hoarios disponiveis para a respectiva data

  async agendarConsulta(agendamento) {
 

    if (await this.getAgendamentoByDia(agendamento.data, agendamento.paciente)) {
      const [rows] = await connection.query(
        `insert into agenda (fk_horario, fk_paciente, data) values(?,?,?)`,
        [agendamento.horario, agendamento.paciente, agendamento.data]
      );
      return 200;
    } else {
      return 500;
    }
  }

  async deleteAgendamento(id) {
    try {
      const [rows] = await connection.query("delete from agenda where pk_agenda = ?", id);
      return 200;
    } catch (error) {
      return 404;
    }
  }

  async getAgendamentoByPaciente(id) {
    try {
      const [rows] = await connection.query(
        "select * from agenda where fk_paciente = ? order by data",
        id
      );
      return rows;
    } catch (e) {
      return e;
    }
  }

  async getAgendamentoByDia(data, id) {
    try {
      const [rows] = await connection.query(
        `select * from agenda where fk_paciente = ${id} and data = '${data}'`
      );
      return rows.length > 0 ? false : true;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new Agenda();
