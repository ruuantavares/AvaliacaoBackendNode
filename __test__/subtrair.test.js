import { describe, it, expect } from "@jest/globals";
import ServiceOperaracoes from "../src/services/operacoes.js";

describe("Testando operações", () => {
  it("Testando a subtração de numeros positivos", () => {
    const result = ServiceOperaracoes.Subtrair(10, 5);

    expect(result).toBe(5);
  });
  it("Testando a subtração de numeros negativos", () => {
    const result = ServiceOperaracoes.Subtrair(-10, -5);

    expect(result).toBe(-5);
  });
  it("Testando a subtração de numeros com zero", () => {
    const result = ServiceOperaracoes.Subtrair(1, 0);

    expect(result).toBe(1);
  });
  it("Testando a subtração do zero com numeros", () => {
    const result = ServiceOperaracoes.Subtrair(0, 2);

    expect(result).toBe(-2);
  });
  it("Testando a subtração de numero com letras", () => {
    const result = () => ServiceOperaracoes.Subtrair('a', 10);

    expect(result).toThrow("Não foi digitado um numero, tente novamente");
  });
});
