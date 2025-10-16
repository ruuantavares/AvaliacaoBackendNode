class ServiceOperacoes {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Não foi digitado um numero, tente novamente");
    }
    const result = num1 + num2;

    return result;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Não foi digitado um numero, tente novamente");
    }
    const result = num1 - num2;

    return result;
  }
  Multiplicacao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Não foi digitado um numero, tente novamente");
    }
    const result = num1 * num2;

    return result;
  }
  Divisao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Não foi digitado um numero, tente novamente");
    }

    const result = num1 / num2;

    return result;
  }
   Potencia(num1, num2 ) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Não foi digitado um numero, tente novamente");
    }

    const result = num1 ** num2;

    return result;
  }
}

export default new ServiceOperacoes();
