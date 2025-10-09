import { Button } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import { DEFAULT_CLASSES, CUSTOM_PROPS, CUSTOM_CLASSES, DISABLED_CLASS } from './constants';

const renderButton = (props = {}, children = 'Hello') => {
  render(<Button {...props}>{children}</Button>);
};

describe('Buttons component', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Рендерится default button на странице с переданным children', () => {
    renderButton();
    const button = screen.getByTestId('button-element');
    expect(button).toBeInTheDocument();
  });

  it('Рендерится button со стилями variant= contained, size=medium, color=primary', () => {
    renderButton();
    const button = screen.getByTestId('button-element');
    expect(button).toHaveClass(...DEFAULT_CLASSES);
    expect(button).not.toHaveClass('success', 'error');
  });

  it('Рендерится кнопка с кастомными классами для variant, size, color', () => {
    renderButton({ ...CUSTOM_PROPS });
    const button = screen.getByTestId('button-element');
    expect(button).toHaveClass(...CUSTOM_CLASSES);
  });

  it('Проверка добавления класса btn-disabled при disabled=true', () => {
    renderButton({ disabled: true });
    const button = screen.getByTestId('button-element');
    expect(button).toHaveClass(DISABLED_CLASS);
  });

  it('Реагирует ли кнопка на клик', () => {
    renderButton({ onClick: handleClick });
    const button = screen.getByTestId('button-element');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('При добавлении класса loading, вместо children на странице должен появляться spinner', () => {
    renderButton({ loading: true });
    const spinner = screen.getByTestId('button-spinner');

    expect(spinner).toBeInTheDocument();
  });
});
