import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';
import { DEFAULT, FILLED, DISABLED, ERROR } from './constants';

const renderSelect = (props = {}) => {
  return render(<Select {...props} />);
};

describe('Selects component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Рендерит label и variant=standard по умолчанию', () => {
    renderSelect({ ...DEFAULT });

    const container = screen.getByTestId('select-container');
    const label = screen.getByTestId('select-label');

    expect(container).toHaveClass(DEFAULT.variant);
    expect(label).toHaveTextContent(DEFAULT.label);
  });

  it('При клике на input должен появлятся список с option, а при повторном клике должен исчезать', () => {
    renderSelect({ ...DEFAULT });

    expect(screen.queryByTestId('select-listbox')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('select-input'));
    expect(screen.getByTestId('select-listbox')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('select-input'));
    expect(screen.queryByTestId('select-listbox')).not.toBeInTheDocument();
  });

  it('К полю input должна применятся выбранная option', () => {
    renderSelect({ ...DEFAULT });

    fireEvent.click(screen.getByTestId('select-input'));
    fireEvent.click(screen.getByTestId('select-option-1'));

    const selectedValue = screen.getByTestId('selected-value');
    expect(selectedValue).toHaveTextContent('Option 1');

    expect(screen.queryByTestId('select-listbox')).not.toBeInTheDocument();
  });

  it('При переданном variant=filled container должен иметь класс filled', () => {
    renderSelect({ ...FILLED });
    const wrapper = screen.getByTestId('select-container');
    expect(wrapper).toHaveClass('filled');
  });

  it('При переданном error=true container дожнет иметь класс error', () => {
    renderSelect({ ...ERROR });
    const wrapper = screen.getByTestId('select-container');
    expect(wrapper).toHaveClass('error');
  });

  it('При переданном disabled=true container дожнет иметь класс disabled', () => {
    renderSelect({ ...DISABLED });
    const wrapper = screen.getByTestId('select-container');
    expect(wrapper).toHaveClass('disabled');
  });

  it('При рендере со стилями default должен рендерится  helperText', () => {
    renderSelect({ ...DEFAULT });
    const helper = screen.getByTestId('select-helper');
    expect(helper).toHaveTextContent(DEFAULT.helperText);
  });

  it('При клике на input при переданно disabled=true не должен открываться список option', () => {
    renderSelect({ ...DISABLED });

    fireEvent.click(screen.getByTestId('select-input'));
    expect(screen.queryByTestId('select-listbox')).not.toBeInTheDocument();
  });

  it('При переданно required=true должен быть добавлена метка required', () => {
    renderSelect({ ...DEFAULT, required: true });
    const label = screen.getByTestId('select-label');
    expect(label).toHaveTextContent('Choose option *');
  });
});
