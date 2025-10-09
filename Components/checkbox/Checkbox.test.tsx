import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from '.';
import { DEFAULT_CLASSES, CUSTOM_PROPS, CUSTOM_CLASSES } from './constants';

const renderCheckbox = (prop = {}) => {
  render(<Checkbox {...prop} />);
};

describe('Checkbox component', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Рендерится чекбокс с default стилями', () => {
    renderCheckbox({ ...DEFAULT_CLASSES });
    const checkbox = screen.getByTestId('checkbox-text');
    expect(checkbox).toBeInTheDocument();
  });

  it('Изменяется ли стиль чекбокса при рендере с кастомными пропсами', () => {
    renderCheckbox({ ...CUSTOM_PROPS });
    const label = screen.getByTestId('checkbox-label');
    expect(label).toHaveClass(...CUSTOM_CLASSES);
  });

  it('При переданном в пропсах disabled=true чекбокс должен иметь класс checkboxDisabled', () => {
    renderCheckbox({ disabled: true });
    const checkbox = screen.getByTestId('checkbox-input');
    expect(checkbox).toBeDisabled();
  });

  it('При переданном required=true чекбокс должен быть required', () => {
    renderCheckbox({ required: true });
    const checkbox = screen.getByTestId('checkbox-input');
    expect(checkbox).toBeRequired();
  });

  it('При переданном checked=true label должен быть checked', () => {
    renderCheckbox({ checked: true, onChange });
    const checkbox = screen.getByTestId('checkbox-input');
    expect(checkbox).toBeChecked();
  });

  it('При передачи error=true label должен иметь класс checkboxErrorState', () => {
    renderCheckbox({ error: true });
    const label = screen.getByTestId('checkbox-label');
    expect(label).toHaveClass('checkboxErrorState');
  });

  it('При клике на чекбокс он должен применять событие onChange, менять свое состояние с on на off и наоборот', () => {
    renderCheckbox({ onChange });
    const checkbox = screen.getByTestId('checkbox-input');

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
