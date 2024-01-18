const express = require("express");
const router = express.Router();

const PacienteController = require("../controllers/PacienteController");
const MedicoController = require("../controllers/MedicoController");
const UnidadeController = require("../controllers/UnidadeController");
const HorariosController = require("../controllers/HorariosController");
const AgendaController = require("../controllers/AgendaController");

router.use(express.json());

router.get("/", (req, res) => {
  res.send("API TCC");
});

//Rotas Paciente
router.get("/paciente/", PacienteController.getPacientes);
router.post("/paciente/", PacienteController.postPaciente);
router.post("/paciente/login", PacienteController.getLogin);
router.delete("/paciente/:id", PacienteController.deletePaciente);


//Rotas Médicos
router.get("/medico/", MedicoController.getMedicos); 
router.get("/medico/unidade/:id", MedicoController.getMedicoByUnidade);


//Rotas Unidades
router.get("/unidades/:id", UnidadeController.getUnidades); 


//Rotas Horarios 

router.post("/horarios/medico/", HorariosController.getDias);
router.post("/horarios/medico/agendamento/", HorariosController.getHorarios)


router.post("/agenda/paciente/", AgendaController.getAgendamentoByPaciente)
router.post("/agenda/", AgendaController.agendarConsulta)

module.exports = router;
