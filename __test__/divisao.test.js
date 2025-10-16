import { describe, it, expect } from "@jest/globals";
import ServiceOperaracoes from "../src/services/operacoes.js";

describe("Testando operações", () => {
  it("Testando a Divisão de numeros positivos", () => {
    const result = ServiceOperaracoes.Divisao(10, 5);

    expect(result).toBe(2);
  });
  it("Testando a Divisão de numeros negativos", () => {
    const result = ServiceOperaracoes.Divisao(-10, -5);

    expect(result).toBe(2);
  });
  it("Testando a Divisão de numero com letras", () => {
    const result = () => ServiceOperaracoes.Divisao('a', 10);

    expect(result).toThrow("Não foi digitado um numero, tente novamente");
  });
});
