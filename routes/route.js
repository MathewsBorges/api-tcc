const express = require("express");
const router = express.Router();

const PacienteController = require("../controllers/PacienteController");
const MedicoController = require("../controllers/MedicoController");
const UnidadeController = require("../controllers/UnidadeController");

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
router.get("/medico/:id/horarios/:data", MedicoController.getHorarios); 
router.get("/medico/unidade/:id", MedicoController.getMedicoByUnidade);


//Rotas Unidades
router.get("/unidades/:id", UnidadeController.getUnidades); 




module.exports = router;
