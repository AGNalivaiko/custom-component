import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";
import { DEFAULT, FILLED, DISABLED, ERROR } from "./constants";

const renderSelect = (props = {}) => {
  return render(<Select {...props} />);
};

describe("Selects component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рендерит label и variant=standard по умолчанию", () => {
    renderSelect({ ...DEFAULT });

    const container = screen.getByTestId("select-container");
    const label = screen.getByTestId("select-label");

    expect(container).toHaveClass(DEFAULT.variant);
    expect(label).toHaveTextContent(DEFAULT.label);
  });

  it("Открывает и закрывает список при клике", () => {
    renderSelect({ ...DEFAULT });

    expect(screen.queryByTestId("select-listbox")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("select-input"));
    expect(screen.getByTestId("select-listbox")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("select-input"));
    expect(screen.queryByTestId("select-listbox")).not.toBeInTheDocument();
  });

  it("Выбирает значение при клике на опцию", () => {
    renderSelect({ ...DEFAULT });

    fireEvent.click(screen.getByTestId("select-input"));
    fireEvent.click(screen.getByTestId("select-option-1"));

    const selectedValue = screen.getByTestId("selected-value");
    expect(selectedValue).toHaveTextContent("Option 1");

    expect(screen.queryByTestId("select-listbox")).not.toBeInTheDocument();
  });

  it("Изменяется при variant=filled", () => {
    renderSelect({ ...FILLED });
    const wrapper = screen.getByTestId("select-container");
    expect(wrapper).toHaveClass("filled");
  });

  it("Добавляет класс error", () => {
    renderSelect({ ...ERROR });
    const wrapper = screen.getByTestId("select-container");
    expect(wrapper).toHaveClass("error");
  });

  it("Добавляет класс disabled", () => {
    renderSelect({ ...DISABLED });
    const wrapper = screen.getByTestId("select-container");
    expect(wrapper).toHaveClass("disabled");
  });

  it("Показывает helperText", () => {
    renderSelect({ ...DEFAULT });
    const helper = screen.getByTestId("select-helper");
    expect(helper).toHaveTextContent(DEFAULT.helperText);
  });

  it("Не открывает список если disabled=true", () => {
    renderSelect({ ...DISABLED });

    fireEvent.click(screen.getByTestId("select-input"));
    expect(screen.queryByTestId("select-listbox")).not.toBeInTheDocument();
  });

  it("Добавляет required метку", () => {
    renderSelect({ ...DEFAULT, required: true });
    const label = screen.getByTestId("select-label");
    expect(label).toHaveTextContent("Choose option *");
  });
});
