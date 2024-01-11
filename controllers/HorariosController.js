const horarios = require('../models/Horarios');
const medico = require('../models/Medico');
const unidade = require('../models/Unidade');


class HorariosController{

    async getDias(req, res) {
        const idmedico = req.body.medico;
        const idunidade = req.body.unidade;

           const doutor = await medico.getMedicoByID(idmedico);
           const dias = await horarios.getDias(idmedico, idunidade);
           const local = await unidade.getUnidadeByID(idunidade);
           const diasComMedico = dias.map(dia => {
            return {
                ...dia,
                medico: doutor[0],
                unidade: local[0],
            };
        });
          
          res.json(diasComMedico);
        
      }


    async getHorarios(req, res){
        const idmedico = req.body.medico;
        const idunidade = req.body.unidade;
        const data = req.body.data;
        const dia = req.body.dia;

        const horario = await horarios.getHorariosDisponiveis(data, idmedico, dia, idunidade )
        const doutor = await medico.getMedicoByID(idmedico);
        const local = await unidade.getUnidadeByID(idunidade);
        const horariosMedico = horario.map(horario => {
            return {
                ...horario,
                medico: doutor[0],
                unidade: local[0],
            };
        });
        
        res.json(horariosMedico);

    }  
    
}

module.exports = new HorariosController();