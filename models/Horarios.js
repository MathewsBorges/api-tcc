const connection = require("../database/connection");
class Horarios{

    async getDias(id, unidade) {
        const [rows] = await connection.query(
          `SELECT distinct pk_horario, dia_semana, horario from horarios where fk_medico = ${id} and fk_unidade=${unidade} and status = 1`
        );
        return rows;
      }

      async getHorariosDisponiveis(data, medico, dia, unidade ){
        const [rows] = await connection.query(` SELECT *
        FROM horarios h
        LEFT JOIN agenda a ON h.pk_horario = a.fk_horario AND a.data = '${data}'
        WHERE h.fk_medico = ${medico} and h.dia_semana = ${dia}
        AND h.fk_unidade = ${unidade}
        AND a.fk_horario IS NULL;`
        );
        return rows;
    }




}

module.exports = new Horarios();
