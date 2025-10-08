import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from ".";
import { DEFAULT_CLASSES, CUSTOM_PROPS, CUSTOM_CLASSES } from "./constants";

const renderCheckbox = (prop = {}) => {
  render(<Checkbox {...prop} />);
};

describe("Checkbox component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рисуется ли стандартный чекбокс", () => {
    renderCheckbox({ ...DEFAULT_CLASSES });
    const checkbox = screen.getByTestId("checkbox-text");
    expect(checkbox).toBeInTheDocument();
  });

  it("Применяет классы в зависимости от variant, size, color", () => {
    renderCheckbox({ ...CUSTOM_PROPS });
    const label = screen.getByTestId("checkbox-label");
    expect(label).toHaveClass(...CUSTOM_CLASSES);
  });

  it("Применяется disabled", () => {
    renderCheckbox({ disabled: true });
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeDisabled();
  });

  it("Применяется ли required при required=true", () => {
    renderCheckbox({ required: true });
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeRequired();
  });

  it("Применяется ли checked при checked=true", () => {
    const handleChange = jest.fn();
    renderCheckbox({ checked: true, onChange: handleChange });
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeChecked();
  });

  it("Применяется ли error при error=true", () => {
    renderCheckbox({ error: true });
    const label = screen.getByTestId("checkbox-label");
    expect(label).toHaveClass("checkboxErrorState");
  });

  it("Работает ли onChange", () => {
    const handleChange = jest.fn();
    renderCheckbox({ onChange: handleChange });
    const checkbox = screen.getByTestId("checkbox-input");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});
