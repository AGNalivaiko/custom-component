import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import { DEFAULT_CLASSES, CUSTOM_PROPS, CUSTOM_CLASSES, DISABLED_CLASS } from "./constants";

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
    const button = screen.getByTestId("button-element");
    expect(button).toBeInTheDocument();
  });

  it("По умолчанию variant= contained, size=medium, color=primary", () => {
    renderButton();
    const button = screen.getByTestId("button-element");
    expect(button).toHaveClass(...DEFAULT_CLASSES);
    expect(button).not.toHaveClass("success", "error");
  });

  it("Проверяем кастомные классы для variant, size, color", () => {
    renderButton({ ...CUSTOM_PROPS });
    const button = screen.getByTestId("button-element");
    expect(button).toHaveClass(...CUSTOM_CLASSES);
  });

  it("Проверка добавления класса btn-disabled при disabled=true", () => {
    renderButton({ disabled: true });
    const button = screen.getByTestId("button-element");
    expect(button).toHaveClass(DISABLED_CLASS);
  });

  it("Проходит ли клик по кнопке", () => {
    renderButton({ onClick: handleClick });
    const button = screen.getByTestId("button-element");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("Если ли loading", () => {
    renderButton({ loading: true });
    const spinner = screen.getByTestId("button-spinner");

    expect(spinner).toBeInTheDocument();
  });
});
