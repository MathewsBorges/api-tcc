const paciente = require("../models/Paciente");

class PacienteController {
  async getPacientes(req, res) {

      const usuario = await paciente.getPacientes();
      res.json(usuario);
    

  }

  async getLogin(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    const usuario = await paciente.getLogin(email, senha);
    res.json(usuario)

  }

  async postPaciente(req, res) {
    const objPaciente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      sexo: req.body.sexo,
      endereco: req.body.endereco,
      fk_cidade: req.body.fk_cidade,
      cartao_sus: req.body.cartao_sus,
      email: req.body.email,
      senha: req.body.senha,
    };

    const status = await paciente.insertPaciente(objPaciente);
    res.json(status);
  }

  async deletePaciente(req, res){
    const status = await paciente.deletePaciente(req.params.id);
    res.json(status);
  }

}

module.exports = new PacienteController();
