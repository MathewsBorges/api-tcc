const Agenda = require("../models/Agenda");
const Paciente = require("../models/Paciente");
const Medicos = require("../models/Medico");
const Horarios = require("../models/Horarios");
const Unidade = require("../models/Unidade");

class AgendaController {
  async getAgendamentoByPaciente(req, res) {
    const idPaciente = req.body.id;

    const agendamentos = await Agenda.getAgendamentoByPaciente(idPaciente);
    const agenda = [];

    for (const agendamento of agendamentos) {
      const fk_horario = await Horarios.getHorarioByID(agendamento["fk_horario"]);

      const fk_medico = await Medicos.getMedicoByID(fk_horario[0]["fk_medico"]);
      const fk_unidade = await Unidade.getUnidadeByID(fk_horario[0]["fk_unidade"]);
      const fk_paciente = await Paciente.getPacienteByID(agendamento["fk_paciente"]);

      const horariosMedico = fk_horario.map((horario) => {
        return {
          ...horario,
          medico: fk_medico[0],
          unidade: fk_unidade[0],
        };
      });

      agenda.push({
        pk_agenda: agendamento["pk_agenda"],
        horario: horariosMedico[0],
        fk_paciente: fk_paciente[0],
        data: agendamento["data"],
      });
    }
    res.json(agenda);
  }

  async agendarConsulta(req, res) {
    const agendamento = {
      data: req.body.data,
      horario: req.body.horario,
      paciente: req.body.paciente,
    };
    const status = await Agenda.agendarConsulta(agendamento);
    res.json(status)
  }

  async removerConsulta(req, res){
    const id = req.body.id;
    const status = await Agenda.deleteAgendamento(id);
    res.json(status);
  }
}

module.exports = new AgendaController();
