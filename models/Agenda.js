const connection = require("../database/connection");


class Agenda{

    //retorna os hoarios disponiveis para a respectiva data


    async agendarConsulta(agendamento){
        try {
            const [rows] = await connection.query(
              `insert into agenda (fk_horario, fk_paciente, data) values(?,?,?)`,
              [
                agendamento.horario,
                agendamento.paciente,
                agendamento.data,
               
              ]
            );
            return { status: "success", insertedId: rows.insertId };
          } catch (error) {
            console.error("Erro ao inserir agendamento:", error.message);
            return { status: "error", error: "Erro interno do servidor ao adicionar paciente" };
          }
    }

    async deleteAgendamento(id){
        try {
        const [rows] = await connection.query("delete from agenda where pk_agenda = ?", id)
          return {status: "success"}
        } catch (error) {
          return {status: "error", mensagem: error.message}
        }
       
      }

}

module.exports = new Agenda();
