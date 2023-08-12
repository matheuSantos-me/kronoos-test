import { formatDate } from "./formatDate";

describe("formatDate", () => {
  test("deve formatar a data corretamente", () => {
    const inputDate = "20221227";
    const expectedOutput = "27/12/2022";

    const formattedDate = formatDate(inputDate);

    expect(formattedDate).toBe(expectedOutput);
  });
});
