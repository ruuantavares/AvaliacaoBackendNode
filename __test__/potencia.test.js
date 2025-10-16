import { describe, it, expect } from "@jest/globals";
import ServiceOperaracoes from "../src/services/operacoes.js";

describe("Testando operações", () => {
  it("Testando a Potencia de numeros positivos", () => {
    const result = ServiceOperaracoes.Potencia(2, 5);

    expect(result).toBe(32);
  });
  
});
