import { formatCurrency } from "../src/functions/formatCurrency";

describe("formatCurrency", () => {
  it("deve formatar corretamente", () => {
    const result = formatCurrency(10.5).replace(/\s/g, " ");
    expect(result).toBe("R$ 10,50");
  });
});