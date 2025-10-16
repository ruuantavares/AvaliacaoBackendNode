import { describe, it, expect } from "@jest/globals";
import ServiceOperaracoes from "../src/services/operacoes.js";

describe("Testando operações", () => {
  it("Testando a multiplicação de numeros positivos", () => {
    const result = ServiceOperaracoes.Multiplicacao(10, 5);

    expect(result).toBe(50);
  });
  it("Testando a multiplicação de numeros negativos", () => {
    const result = ServiceOperaracoes.Multiplicacao(-10, -5);

    expect(result).toBe(50);
  });
  it("Testando a multiplicação de numeros com zero", () => {
    const result = ServiceOperaracoes.Multiplicacao(1, 0);

    expect(result).toBe(0);
  });
  it("Testando a multiplicação do zero com numeros", () => {
    const result = ServiceOperaracoes.Multiplicacao(0, 2);

    expect(result).toBe(0);
  });
  it("Testando a multiplicação de numero com letras", () => {
    const result = () => ServiceOperaracoes.Multiplicacao('a', 10);

    expect(result).toThrow("Não foi digitado um numero, tente novamente");
  });
});
