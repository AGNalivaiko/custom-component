import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { CustomCheckbox } from "./Checkboxes";

describe("Checkbox component", () => {
  it("Рисуется ли стандартный чекбокс", () => {
    render(
      <CustomCheckbox
        variant="outlined"
        sizeCheckbox="medium"
        color="primary"
        label="enter your label"
      />,
    );
    expect(screen.getByText("enter your label")).toBeInTheDocument();
  });

  it("Применяет классы в зависимости от variant, size, color", () => {
    render(
      <CustomCheckbox variant="contained" sizeCheckbox="large" color="success" label="test" />,
    );
    expect(screen.getByLabelText("test").closest("label")).toHaveClass(
      "checkbox-contained",
      "checkbox-large",
      "checkbox-success",
    );
  });

  it("Применяется disabled, required, checked, error", () => {
    render(<CustomCheckbox disabled required checked error label="testing" />);
    const checkbox = screen.getByRole("checkbox", { name: /testing/i });

    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
    expect(checkbox).toBeRequired();
  });

  it("Работает ли onChange", () => {
    const handleChange = jest.fn();
    render(<CustomCheckbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});
