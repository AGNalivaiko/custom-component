import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

describe("Selects component", () => {
  it("Рендерит label по умолчанию", () => {
    render(<Select label="Выбери значение" />);
    expect(screen.getByText("Выбери значение")).toBeInTheDocument();
  });

  it("Открывает и закрывает список при клике", () => {
    render(
      <Select
        label="Города"
        options={[
          { label: "Москва", value: "moscow" },
          { label: "Питер", value: "spb" },
        ]}
      />,
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Города"));
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Города"));
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Выбирает значение при клике на опцию", () => {
    render(
      <Select
        label="Фрукты"
        options={[
          { label: "Яблоко", value: "apple" },
          { label: "Банан", value: "banana" },
        ]}
      />,
    );

    fireEvent.click(screen.getByText("Фрукты"));

    fireEvent.click(screen.getByText("Банан"));

    expect(screen.getByText("Банан")).toBeInTheDocument();

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Добавляет классы disabled и error", () => {
    const { container } = render(<Select label="Test" disabled error variant="filled" />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("disabled");
    expect(wrapper).toHaveClass("error");
    expect(wrapper).toHaveClass("filled");
  });

  it("Показывает helperText", () => {
    render(<Select label="Email" helperText="Введите правильный email" />);
    expect(screen.getByText("Введите правильный email")).toBeInTheDocument();
  });

  it("Не открывает список если disabled=true", () => {
    render(<Select label="Страны" disabled options={[{ label: "Россия", value: "ru" }]} />);

    fireEvent.click(screen.getByText("Страны"));

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
