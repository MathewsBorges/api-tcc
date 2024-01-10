const connection = require("../database/connection");


class Agenda{

    //retorna os hoarios disponiveis para a respectiva data
    async getHorariosDisponiveis(data, medico, dia, unidade ){
        const [rows] = await connection.query(` SELECT *
        FROM horarios h
        LEFT JOIN agenda a ON h.pk_horario = a.fk_horario AND a.data = '${data}'
        WHERE h.fk_medico = ${medico} and h.dia_semana = ${dia}
        AND h.fk_unidade = ${unidade}
        AND a.fk_horario IS NULL;`
        )
    }





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
