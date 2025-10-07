import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";
import { LABELS, OPTIONS, HELPERTEXT, VARIANTS } from "./Select.constants";

const renderSelect = (props = {}) => {
  return render(<Select {...props} />);
};

describe("Selects component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рендерит label и variant=standard по умолчанию", () => {
    const { container } = renderSelect({ label: LABELS.default, variants: VARIANTS.standard });
    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass(VARIANTS.standard);
    expect(screen.getByText(LABELS.default)).toBeInTheDocument();
  });

  it("Открывает и закрывает список при клике", () => {
    renderSelect({ label: LABELS.cities, options: OPTIONS.cities });

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Города"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Города"));
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Выбирает значение при клике на опцию", () => {
    renderSelect({ label: LABELS.fruits, options: OPTIONS.fruits });

    fireEvent.click(screen.getByText("Фрукты"));

    fireEvent.click(screen.getByText("Банан"));

    expect(screen.getByText("Банан")).toBeInTheDocument();

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("Добавляет классы disabled и error, variant=filled", () => {
    const { container } = renderSelect({
      label: LABELS.test,
      disabled: true,
      error: true,
      variant: "filled",
    });

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("disabled");
    expect(wrapper).toHaveClass("error");
    expect(wrapper).toHaveClass("filled");
  });

  it("Показывает helperText", () => {
    renderSelect({ label: LABELS.email, helperText: HELPERTEXT });
    expect(screen.getByText(HELPERTEXT)).toBeInTheDocument();
  });

  it("Не открывает список если disabled=true", () => {
    renderSelect({ label: LABELS.countries, disabled: true, options: OPTIONS.countries });

    fireEvent.click(screen.getByText("Страны"));

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Добавляет required метку", () => {
    renderSelect({ label: "Поле", required: true });
    expect(screen.getByText("Поле *")).toBeInTheDocument();
  });
});
