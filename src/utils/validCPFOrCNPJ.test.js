import { validCPFOrCNPJ } from "./validCPFOrCNPJ";

describe("validCPFOrCNPJ", () => {
  test("should validate a valid CPF correctly", () => {
    const validCPF = "43161513800";
    const isValid = validCPFOrCNPJ(validCPF);

    expect(isValid).toBe(true);
  });

  test("should validate a valid CNPJ correctly", () => {
    const validCNPJ = "17913532000112";
    const isValid = validCPFOrCNPJ(validCNPJ);

    expect(isValid).toBe(true);
  });

  describe("should reject all sequential character CPFs", () => {
    test("should reject a sequential CPF", () => {
      const invalidCPF = "00000000000";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "11111111111";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "22222222222";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "33333333333";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "44444444444";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "55555555555";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "66666666666";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "77777777777";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "88888888888";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CPF", () => {
      const invalidCPF = "99999999999";
      const isValid = validCPFOrCNPJ(invalidCPF);

      expect(isValid).toBe(false);
    });
  });

  describe("should reject all sequential character CNPJs", () => {
    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "00000000000000";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "11111111111111";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "22222222222222";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "33333333333333";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "44444444444444";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "55555555555555";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "66666666666666";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "77777777777777";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "88888888888888";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });

    test("should reject a sequential CNPJ", () => {
      const invalidCNPJ = "99999999999999";
      const isValid = validCPFOrCNPJ(invalidCNPJ);

      expect(isValid).toBe(false);
    });
  });

  test("should return false for input with incorrect length", () => {
    const incorrectLength = "123456789";
    expect(validCPFOrCNPJ(incorrectLength)).toBe(false);
  });
});
