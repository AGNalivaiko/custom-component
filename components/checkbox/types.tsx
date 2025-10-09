import { ComponentPropsWithRef } from 'react';

type CheckboxVariants = 'text' | 'contained' | 'outlined';

type CheckboxSizes = 'small' | 'medium' | 'large';

type CheckboxColors = 'primary' | 'success' | 'error';

export type CustomCheckboxProps = ComponentPropsWithRef<'input'> & {
  variant?: CheckboxVariants;
  sizeCheckbox?: CheckboxSizes;
  color?: CheckboxColors;
  error?: boolean;
  label?: string;
  classNames?: string;
};
