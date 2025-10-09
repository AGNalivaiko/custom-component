export const DEFAULT = {
  label: 'Choose option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ],
  variant: 'standard',
  helperText: 'Please select an option'
};

export const FILLED = {
  ...DEFAULT,
  variant: 'filled'
};

export const DISABLED = {
  ...DEFAULT,
  disabled: true
};

export const ERROR = {
  ...DEFAULT,
  error: true,
  helperText: 'Something went wrong'
};

export const DATA_TESTID = {
  container: 'select-container',
  input: 'select-input',
  value: 'selected-value',
  label: 'select-label',
  listbox: 'select-listbox',
  helperText: 'select-helper',
  arrow: 'select-arrow'
};
