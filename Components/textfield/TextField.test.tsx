import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField component", () => {
  it("Рендерится без ошибок", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Отображает label и * если required=true", () => {
    render(<TextField required label="Username" />);
    const input = screen.getByLabelText(/Username\s*\*/i);
    expect(input).toBeInTheDocument();
  });

  it("Применяет классы variant, size, disabled, error и показывает helperText", () => {
    render(
      <TextField
        variant="filled"
        sizeField="small"
        disabled
        error
        label="Test"
        helperText="Enter your name"
      />,
    );

    const input = screen.getByLabelText("Test");
    const wrapper = input.closest(".textfield-container");

    expect(wrapper).toHaveClass("filled", "small", "textfield-disabled", "textfield-error");
  });

  it("Недействительно если disabled=true", () => {
    render(<TextField disabled label="test" />);

    const input = screen.getByLabelText("test");

    expect(input).toBeDisabled();
  });
});
