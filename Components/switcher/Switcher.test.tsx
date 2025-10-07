import { fireEvent, render, screen } from "@testing-library/react";
import { Switcher } from "./Switcher";

const renderSwitcher = (props = {}) => {
  render(<Switcher {...props} />);
};

describe("Swithcer component", () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("рендерится ли вообще", () => {
    renderSwitcher();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("Применяется ли checked  и disabled", () => {
    renderSwitcher({ checked: true, disabled: true });

    const box = screen.getByRole("checkbox");

    expect(box).toBeChecked();
    expect(box).toBeDisabled();
  });

  it("Вызывается ли onChange при клике", () => {
    renderSwitcher({ onChange: handleChange });

    const box = screen.getByRole("checkbox");

    fireEvent.click(box);
    expect(handleChange).toHaveBeenCalled();
  });
});
