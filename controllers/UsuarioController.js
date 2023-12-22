const usuario = require("../models/Usuario");

class UsuarioController {
  async getUsuarios(req, res) {
    const usuario = await Colaborador.getColaboradores();
    res.json(usuario);
  }

  async getLogin(req, res) {
    const cpf = req.params.cpf;
    const senha = req.params.senha;
    if (cpf === "000.000.000-00") {
      res.json("Dados Incorretos no Database, consulte um Administrador");
    }else{
      const usuario = await Colaborador.getLogin(cpf, senha);
      usuario.length > 0 ? res.json(usuario) : res.json("Dados de Login incorretos, Tente Novamente");
    }


  }
}

module.exports = new ColaboradorController();
