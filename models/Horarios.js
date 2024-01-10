const connection = require("../database/connection");
class Horarios{

    async getDias(id, unidade) {
        const [rows] = await connection.query(
          `SELECT distinct pk_horario, dia_semana, horario from horarios where fk_medico = ${id} and fk_unidade=${unidade} and status = 1`
        );
        return rows;
      }




}

module.exports = new Horarios();
