import { formatCPFOrCNPJ } from "./formatCPFOrCNPJ";

describe("formatCPFOrCNPJ", () => {
  test("deve formatar um CPF corretamente", () => {
    const inputCPF = "12345678909";
    const expectedOutput = "123.456.789-09";

    const formattedCPF = formatCPFOrCNPJ(inputCPF);

    expect(formattedCPF).toBe(expectedOutput);
  });

  test("deve formatar um CNPJ corretamente", () => {
    const inputCNPJ = "12345678000100";
    const expectedOutput = "12.345.678/0001-00";

    const formattedCNPJ = formatCPFOrCNPJ(inputCNPJ);

    expect(formattedCNPJ).toBe(expectedOutput);
  });

  test("deve retornar vazio para entrada inválida", () => {
    const inputInvalid = "123456";
    const expectedOutput = undefined;

    const formattedInvalid = formatCPFOrCNPJ(inputInvalid);

    expect(formattedInvalid).toBe(expectedOutput);
  });
});
