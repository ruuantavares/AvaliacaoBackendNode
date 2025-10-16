import ServiceOperacoes from "../services/operacoes.js";

class ControllerOperacoes {
  Somar(req, res) {
    try {
      const { num1, num2 } = req.body;

      const result = ServiceOperacoes.Somar(num1, num2);

      res.status(201).send({ data: { result } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }

  Subtrair(req, res) {
    try {
      const { num1, num2 } = req.body;

      const result = ServiceOperacoes.Subtrair(num1, num2);

      res.status(201).send({ data: { result } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
  Multiplicacao(req, res) {
    try {
      const { num1, num2 } = req.body;

      const result = ServiceOperacoes.Multiplicacao(num1, num2);

      res.status(201).send({ data: { result } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
  Divisao(req, res) {
    try {
      const { num1, num2 } = req.body;

      const result = ServiceOperacoes.Divisao(num1, num2);

      res.status(201).send({ data: { result } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
  Potencia(req, res) {
    try {
      const { num1, num2 } = req.body;

      const result = ServiceOperacoes.Potencia(num1, num2);

      res.status(201).send({ data: { result } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
}
export default new ControllerOperacoes();
