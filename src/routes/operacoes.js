import express from "express";
import ControllerOperacoes from "../controllers/operacoes.js";

const router = express.Router();

router.post("/somar", ControllerOperacoes.Somar);
router.post("/subtrair", ControllerOperacoes.Subtrair);
router.post("/multiplicacao", ControllerOperacoes.Multiplicacao);
router.post("/divisao", ControllerOperacoes.Divisao);
router.post("/potencia", ControllerOperacoes.Potencia);

export default router;
