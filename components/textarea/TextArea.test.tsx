import { fireEvent, render, screen } from '@testing-library/react';
import { TextField } from './TextArea';
import { LABELS, HELPERS, VARIANTS, SIZES, CLASSES } from './constants';

const renderTextField = (props = {}) => {
  return render(<TextField {...props} />);
};

describe('TextField component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Рендерится input со стандраными стилями', () => {
    renderTextField();
    const input = screen.getByTestId('textfield-input');
    expect(input).toBeInTheDocument();
  });

  it('Отображает label и * если required=true', () => {
    renderTextField({ label: LABELS.default, required: true });
    const label = screen.getByTestId('textfield-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(`${LABELS.default} *`);
  });

  it('При передачи кастомных стилей container меняет свой стиль', () => {
    renderTextField({ variant: VARIANTS.filled, sizeField: SIZES.small, label: LABELS.test });
    const wrapper = screen.getByTestId('textfield-container');

    expect(wrapper).toHaveClass(CLASSES.container);
    expect(wrapper).toHaveClass(VARIANTS.filled);
    expect(wrapper).toHaveClass(`textfield${SIZES.small}`);
  });

  it('При переданном disabled=true container дожен иметь класс disabled, а input быть disabled', () => {
    renderTextField({ disabled: true, label: LABELS.default });
    const wrapper = screen.getByTestId('textfield-container');
    const input = screen.getByTestId('textfield-input');
    expect(wrapper).toHaveClass(CLASSES.disabled);
    expect(input).toBeDisabled();
  });

  it('При переданном error=true container должен иметь класс .textfieldError', () => {
    renderTextField({ error: true, label: LABELS.default });
    const wrapper = screen.getByTestId('textfield-container');
    expect(wrapper).toHaveClass(CLASSES.error);
  });

  it('Если передан helperText, то отображает его на странице с переданным содержимым', () => {
    renderTextField({ label: LABELS.default, helperText: HELPERS });
    const helper = screen.getByTestId('textfield-helper');
    expect(helper).toBeInTheDocument();
    expect(helper).toHaveTextContent(HELPERS);
  });

  it('Добавляет атрибут readOnly к input', () => {
    renderTextField({ readOnly: true, label: LABELS.default });
    const input = screen.getByTestId('textfield-input');
    expect(input).toHaveAttribute('readonly');
  });

  it('Изменяется input при вводе текста в его поле ', () => {
    const handleChange = jest.fn();
    renderTextField({ label: LABELS.test, onChange: handleChange });
    const input = screen.getByTestId('textfield-input');

    fireEvent.change(input, { target: { value: 'user@example.com' } });
    expect(input).toHaveValue('user@example.com');
    expect(handleChange).toHaveBeenCalledWith('user@example.com', expect.any(Object));
  });

  it('Добавляет input класс filled, если значение не пустое', () => {
    renderTextField({ label: LABELS.default });
    const input = screen.getByTestId('textfield-input');
    const label = screen.getByTestId('textfield-label');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(label).toHaveClass('filled');
  });

  it('Не рендерит label если он не передан', () => {
    renderTextField();
    const label = screen.queryByTestId('textfield-label');
    expect(label).toBeNull();
  });
});
