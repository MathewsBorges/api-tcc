const medico = require("../models/Medico");

class MedicoController {

  async getMedicos(req, res) {
    const usuario = await medico.getMedicos();
    res.json(usuario);
  }

  async getHorarios(req, res) {
    const id = req.params.id;
    const dia = obterDiaSemana(req.params.data);

    
       const horarios = await medico.getHorarios(id, dia);
       horarios.length > 0 ? res.json(horarios) : res.json("Médico não possui horários");
    
  }

  async getMedicoByUnidade(req, res){
    const medicos = await medico.getMedicoByUnidade(req.params.id);
    medicos.length>0 ? res.json(medicos) : res.json("Unidade não possui médicos");
  }
 




}

function obterDiaSemana(data) {
 
    const dataAtualBrasilia = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const dataObjBrasilia = new Date(dataAtualBrasilia);
    
    // getUTCDay() retorna um número de 0 a 6 (0 = domingo, 6 = sábado)
    const diaSemanaBrasilia = dataObjBrasilia.getUTCDay()+2;
  
    return diaSemanaBrasilia;
  }
  

module.exports = new MedicoController();
