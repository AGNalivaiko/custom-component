import styles from './Checkbox.module.css';
import classNames from 'classnames/bind';
import { CustomCheckboxProps } from './types';
import { FC } from 'react';
import { generateClassName } from '@helpers';
import { DATA_TESTID, DEFAULT_PROPS } from './constants';

const cx = classNames.bind(styles);

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  variant = DEFAULT_PROPS.outlined,
  sizeCheckbox = DEFAULT_PROPS.medium,
  color = DEFAULT_PROPS.primary,
  label = DEFAULT_PROPS.default_label,
  disabled = false,
  required = false,
  error = false,
  checked,
  onChange,
  ref,
  style,
  classNames
}) => {
  const className = cx(
    'checkbox',
    generateClassName('checkbox', variant),
    generateClassName('checkbox', sizeCheckbox),
    generateClassName('checkbox', color),
    classNames,
    {
      checkboxDisabled: disabled,
      checkboxErrorState: error,
      checkboxRequired: required
    }
  );

  return (
    <label className={className} data-testid={DATA_TESTID.label}>
      <input
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        required={required}
        ref={ref}
        data-testid={DATA_TESTID.input}
        type='checkbox'
        style={style}
      />
      {label && (
        <span className={styles.checkboxLabel} data-testid={DATA_TESTID.text}>
          {label}
          {required && (
            <span className={styles.checkboxRequiredMark} data-testid={DATA_TESTID.required}>
              *
            </span>
          )}
        </span>
      )}
    </label>
  );
};
