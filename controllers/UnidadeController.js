const unidade = require('../models/Unidade');

class  UnidadeController {

    async getUnidades(req, res) {
        let id = req.params.id
        const ubs = await unidade.getUnidades(id);
        res.json(ubs);
      }
}

module.exports = new UnidadeController();