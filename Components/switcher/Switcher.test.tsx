import { fireEvent, render, screen } from "@testing-library/react";
import { Switcher } from "./Switcher";

const renderSwitcher = (props = {}) => {
  render(<Switcher {...props} />);
};

describe("Swithcer component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("рендерится ли вообще", () => {
    renderSwitcher();
    expect(screen.getByTestId("switcher-input")).toBeInTheDocument();
  });

  it("Применяется ли disabled", () => {
    renderSwitcher({ disabled: true });

    const box = screen.getByTestId("switcher-input");

    expect(box).toBeDisabled();
  });

  it("Применяется ли checked ", () => {
    const handleChange = jest.fn();
    renderSwitcher({ checked: true, onChange: handleChange });

    const box = screen.getByTestId("switcher-input");

    expect(box).toBeChecked();
  });

  it("Вызывается ли onChange при клике", () => {
    const handleChange = jest.fn();
    renderSwitcher({ onChange: handleChange });

    const box = screen.getByTestId("switcher-input");

    fireEvent.click(box);
    expect(handleChange).toHaveBeenCalled();
  });
});
