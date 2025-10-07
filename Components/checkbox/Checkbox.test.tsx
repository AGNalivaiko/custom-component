import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from ".";
import { CONSTANTS } from "./Checkbox.constants";

const renderCheckbox = (prop = {}) => {
  render(<Checkbox {...prop} />);
};

describe("Checkbox component", () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рисуется ли стандартный чекбокс", () => {
    renderCheckbox({ ...CONSTANTS.DEFAULT_CLASSES });
    expect(screen.getByText("enter your label")).toBeInTheDocument();
  });

  it("Применяет классы в зависимости от variant, size, color", () => {
    renderCheckbox({ ...CONSTANTS.CUSTOM_PROPS });
    expect(screen.getByLabelText("test").closest("label")).toHaveClass(...CONSTANTS.CUSTOM_CLASSES);
  });

  it("Применяется disabled, required, checked, error", () => {
    renderCheckbox({
      disabled: true,
      required: true,
      checked: true,
      error: true,
      label: "testing",
    });
    const checkbox = screen.getByRole("checkbox", { name: /testing/i });

    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
    expect(checkbox).toBeRequired();
  });

  it("Работает ли onChange", () => {
    renderCheckbox({ onChange: handleChange });
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});
