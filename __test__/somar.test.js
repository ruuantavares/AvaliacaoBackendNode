import { describe, it, expect } from "@jest/globals";
import ServiceOperaracoes from "../src/services/operacoes.js";

describe("Testando operações", () => {
  it("Testando a soma de numeros positivos", () => {
    const result = ServiceOperaracoes.Somar(10, 5);

    expect(result).toBe(15);
  });
  it("Testando a soma de numeros negativos", () => {
    const result = ServiceOperaracoes.Somar(-10, -5);

    expect(result).toBe(-15);
  });
  it("Testando a soma de numeros com casa decimais", () => {
    const result = ServiceOperaracoes.Somar(1.1, 2.1);

    expect(result).toBe(3.2);
  });
  it("Testando a soma de numeros com zero", () => {
    const result = ServiceOperaracoes.Somar(1, 0);

    expect(result).toBe(1);
  });
  it("Testando a soma do zero com numeros", () => {
    const result = ServiceOperaracoes.Somar(0, 2);

    expect(result).toBe(2);
  });
  it("Testando a soma de numero com letras", () => {
    const result = () => ServiceOperaracoes.Somar('a', 10);

    expect(result).toThrow("Não foi digitado um numero, tente novamente");
  });
});
