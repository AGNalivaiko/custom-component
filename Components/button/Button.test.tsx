import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import { CONSTANTS } from "./Button.constants";

const renderButton = (props = {}, children = "Hello") => {
  render(<Button {...props}>{children}</Button>);
};

describe("Buttons component", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("рендер children", () => {
    renderButton();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("По умолчанию variant= contained, size=medium, color=primary", () => {
    renderButton();
    const button = screen.getByRole("button");
    expect(button).toHaveClass(...CONSTANTS.DEFAULT_CLASSES);
    expect(button).not.toHaveClass("success", "error");
  });

  it("Проверяем кастомные классы для variant, size, color", () => {
    renderButton({ ...CONSTANTS.CUSTOM_PROPS });
    const button = screen.getByRole("button");
    expect(button).toHaveClass(...CONSTANTS.CUSTOM_CLASSES);
  });

  it("Проверка добавления класса btn-disabled при disabled=true", () => {
    renderButton({ disabled: true });
    const button = screen.getByRole("button");
    expect(button).toHaveClass(CONSTANTS.DISABLED_CLASS);
  });

  it("Проходит ли клик по кнопке", () => {
    renderButton({ onClick: handleClick });
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("Если ли loading", () => {
    renderButton({ loading: true });
    const button = screen.getByRole("button");
    const spinner = button.querySelector(".btn-spinner");

    expect(spinner).toBeInTheDocument();
  });
});
