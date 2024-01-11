const medico = require("../models/Medico");

class MedicoController {

  async getMedicos(req, res) {
    const usuario = await medico.getMedicos();
    res.json(usuario);
  }


  async getMedicoByUnidade(req, res){
    const medicos = await medico.getMedicoByUnidade(req.params.id);
    medicos.length>0 ? res.json(medicos) : res.json("Unidade não possui médicos");
  }
 

}



module.exports = new MedicoController();
