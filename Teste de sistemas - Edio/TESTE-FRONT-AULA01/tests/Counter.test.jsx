import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../src/components/Counter";

describe("Counter", () => {
  it("deve incrementar o contador quando o botão for clicado", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    expect(screen.getByText("Contador: 0")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Incrementar" }));

    expect(screen.getByText("Contador: 1")).toBeInTheDocument();
  });
});