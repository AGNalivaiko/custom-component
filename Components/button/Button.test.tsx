import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Buttons component", () => {
  it("рендер children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("По умолчанию variant= contained, size=medium, color=primary", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn", "btn-contained", "btn-medium");
    expect(button).not.toHaveClass("success", "error");
  });

  it("Проверяем кастомные классы для variant, size, color", () => {
    render(
      <Button variant="outlined" size="large" color="success">
        Custom
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-outlined", "btn-large", "success");
  });

  it("Проверка добавления класса btn-disabled при disabled=true", () => {
    render(<Button disabled>disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-disabled");
  });

  it("Проходит ли клик по кнопке", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Cick</Button>);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
