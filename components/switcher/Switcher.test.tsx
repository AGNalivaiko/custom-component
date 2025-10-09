import { fireEvent, render, screen } from '@testing-library/react';
import { Switcher } from './Switcher';

const renderSwitcher = (props = {}) => {
  render(<Switcher {...props} />);
};

describe('Swithcer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Рендерится ли swithcer со стилями default', () => {
    renderSwitcher();
    expect(screen.getByTestId('switcher-input')).toBeInTheDocument();
  });

  it('При переданном disabled=true swithcer должен быть disabled', () => {
    renderSwitcher({ disabled: true });

    const box = screen.getByTestId('switcher-input');

    expect(box).toBeDisabled();
  });

  it('При переданном checked=true swithcer должен быть checked', () => {
    const handleChange = jest.fn();
    renderSwitcher({ checked: true, onChange: handleChange });

    const box = screen.getByTestId('switcher-input');

    expect(box).toBeChecked();
  });

  it('При клике на switcher он должен менять переключаться с on на off и наоборот', () => {
    const handleChange = jest.fn();
    renderSwitcher({ onChange: handleChange });

    const box = screen.getByTestId('switcher-input');

    fireEvent.click(box);
    expect(handleChange).toHaveBeenCalled();
  });
});
