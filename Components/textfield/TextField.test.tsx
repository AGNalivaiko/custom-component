import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";
import { LABELS, HELPERS, VARIANTS, SIZES, CLASSES } from "./TextField.constants";

const renderTextField = (props = {}) => {
  return render(<TextField {...props} />);
};

describe("TextField component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Рендерится без ошибок и имеет роль textbox", () => {
    renderTextField();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Отображает label и * если required=true", () => {
    renderTextField({ label: LABELS.default, required: true });
    const label = screen.getByText(/Username\s*\*/i);
    expect(label).toBeInTheDocument();
  });

  it("Применяет variant и sizeField классы", () => {
    renderTextField({ variant: VARIANTS.filled, sizeField: SIZES.small, label: LABELS.test });
    const input = screen.getByLabelText(LABELS.test);
    const wrapper = input.closest(`.${CLASSES.container}`);
    expect(wrapper).toHaveClass(VARIANTS.filled, SIZES.small);
  });

  it("Добавляет disabled класс и блокирует ввод", () => {
    renderTextField({ disabled: true, label: LABELS.default });
    const input = screen.getByLabelText(LABELS.default);
    const wrapper = input.closest(`.${CLASSES.container}`);
    expect(wrapper).toHaveClass(CLASSES.disabled);
    expect(input).toBeDisabled();
  });

  it("Добавляет error класс", () => {
    renderTextField({ error: true, label: LABELS.default });
    const input = screen.getByLabelText(LABELS.default);
    const wrapper = input.closest(`.${CLASSES.container}`);
    expect(wrapper).toHaveClass(CLASSES.error);
  });

  it("Показывает helperText если передан", () => {
    renderTextField({ label: LABELS.default, helperText: HELPERS });
    expect(screen.getByText(HELPERS)).toBeInTheDocument();
  });

  it("Добавляет атрибут readOnly", () => {
    renderTextField({ readOnly: true, label: LABELS.default });
    const input = screen.getByLabelText(LABELS.default);
    expect(input).toHaveAttribute("readonly");
  });

  it("Изменяет value при вводе текста", () => {
    renderTextField({ label: LABELS.test });
    const input = screen.getByLabelText(LABELS.test);

    fireEvent.change(input, { target: { value: "user@example.com" } });
    expect(input).toHaveValue("user@example.com");
  });

  it("Добавляет класс filled, если значение не пустое", () => {
    renderTextField({ label: LABELS.default });
    const input = screen.getByLabelText(LABELS.default);
    const label = screen.getByText(LABELS.default);

    fireEvent.change(input, { target: { value: "test" } });
    expect(label).not.toHaveClass(VARIANTS.filled);
  });

  it("Не рендерит label если он не передан", () => {
    renderTextField();
    expect(screen.queryByLabelText(/./)).toBeNull();
  });
});
