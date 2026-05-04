import { render, screen } from "@testing-library/react";
import { StatusButton } from "../src/components/StatusButton";

describe("StatusButton", () => {
  it("deve aplicar fundo vermelho quando estiver desabilitado", () => {
    render(<StatusButton disabled />);

    const button = screen.getByRole("button", { name: "Enviar" });

    expect(button).toBeDisabled();
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });
});