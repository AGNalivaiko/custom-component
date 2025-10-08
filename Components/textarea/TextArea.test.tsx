import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextArea";
import { LABELS, HELPERS, VARIANTS, SIZES, CLASSES } from "./constants";

const renderTextField = (props = {}) => {
  return render(<TextField {...props} />);
};

describe("TextField component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рендерится без ошибок и имеет роль textbox", () => {
    renderTextField();
    const input = screen.getByTestId("textfield-input");
    expect(input).toBeInTheDocument();
  });

  it("Отображает label и * если required=true", () => {
    renderTextField({ label: LABELS.default, required: true });
    const label = screen.getByTestId("textfield-label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(`${LABELS.default} *`);
  });

  it("Применяет variant и sizeField классы", () => {
    renderTextField({ variant: VARIANTS.filled, sizeField: SIZES.small, label: LABELS.test });
    const wrapper = screen.getByTestId("textfield-container");
    // Проверяем основной класс + variant + sizeField (с учетом твоего TextField)
    expect(wrapper).toHaveClass(CLASSES.container);
    expect(wrapper).toHaveClass(VARIANTS.filled);
    expect(wrapper).toHaveClass(`textfield${SIZES.small}`);
  });

  it("Добавляет disabled класс и блокирует ввод", () => {
    renderTextField({ disabled: true, label: LABELS.default });
    const wrapper = screen.getByTestId("textfield-container");
    const input = screen.getByTestId("textfield-input");
    expect(wrapper).toHaveClass(CLASSES.disabled);
    expect(input).toBeDisabled();
  });

  it("Добавляет error класс", () => {
    renderTextField({ error: true, label: LABELS.default });
    const wrapper = screen.getByTestId("textfield-container");
    expect(wrapper).toHaveClass(CLASSES.error);
  });

  it("Показывает helperText если передан", () => {
    renderTextField({ label: LABELS.default, helperText: HELPERS });
    const helper = screen.getByTestId("textfield-helper");
    expect(helper).toBeInTheDocument();
    expect(helper).toHaveTextContent(HELPERS);
  });

  it("Добавляет атрибут readOnly", () => {
    renderTextField({ readOnly: true, label: LABELS.default });
    const input = screen.getByTestId("textfield-input");
    expect(input).toHaveAttribute("readonly");
  });

  it("Изменяет value при вводе текста", () => {
    const handleChange = jest.fn();
    renderTextField({ label: LABELS.test, onChange: handleChange });
    const input = screen.getByTestId("textfield-input");

    fireEvent.change(input, { target: { value: "user@example.com" } });
    expect(input).toHaveValue("user@example.com");
    expect(handleChange).toHaveBeenCalledWith("user@example.com", expect.any(Object));
  });

  it("Добавляет класс filled, если значение не пустое", () => {
    renderTextField({ label: LABELS.default });
    const input = screen.getByTestId("textfield-input");
    const label = screen.getByTestId("textfield-label");

    fireEvent.change(input, { target: { value: "test" } });
    expect(label).toHaveClass("filled");
  });

  it("Не рендерит label если он не передан", () => {
    renderTextField();
    const label = screen.queryByTestId("textfield-label");
    expect(label).toBeNull();
  });
});
