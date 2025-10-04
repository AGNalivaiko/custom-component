import { fireEvent, render, screen } from "@testing-library/react";
import { Switcher } from "./Switcher";

describe("Swithcer component", () => {
  it("рендерится ли вообще", () => {
    render(<Switcher />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("Применяется ли checked  и disabled", () => {
    render(<Switcher checked disabled />);

    const box = screen.getByRole("checkbox");

    expect(box).toBeChecked();
    expect(box).toBeDisabled();
  });

  it("Вызывается ли onChange при клике", () => {
    const handleChange = jest.fn();

    render(<Switcher onChange={handleChange} />);

    const box = screen.getByRole("checkbox");

    fireEvent.click(box);
    expect(handleChange).toHaveBeenCalled();
  });
});
