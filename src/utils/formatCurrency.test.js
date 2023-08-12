import { formatCurrency } from "./formatCurrency";

const sanitizeCurrencyFormat = (value) => value.replace(/\s+/g, " ");

describe("formatCurrency", () => {
  test("deve formatar a moeda corretamente", () => {
    const currency = 12345.67;
    const expectedOutput = "R$ 12.345,67";

    const formattedCurrency = formatCurrency(currency);

    expect(sanitizeCurrencyFormat(formattedCurrency)).toBe(
      sanitizeCurrencyFormat(expectedOutput)
    );
  });
});
