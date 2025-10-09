import styles from './Select.module.css';
import { useState } from 'react';
import { SelectProps } from './types';
import classNames from 'classnames/bind';
import { FC } from 'react';
import { DATA_TESTID, DEFAULT_PROPS } from './constants';

const cx = classNames.bind(styles);

export const Select: FC<SelectProps> = ({
  label = DEFAULT_PROPS.default_label,
  options = [],
  variant = DEFAULT_PROPS.standard,
  disabled = false,
  required = false,
  error = false,
  helperText = '',
  className,
  style
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');

  const classNameSelectContainer = cx('selectContainer', className, {
    filled: variant === 'filled',
    outlined: variant === 'outlined',
    standard: variant === 'standard',
    disabled,
    error
  });

  const classNameArrow = cx('arrow', { arrowOpen: open });

  const toggleOpen = () => setOpen((prev) => !prev);
  const onClick = !disabled ? toggleOpen : undefined;

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={classNameSelectContainer} data-testid={DATA_TESTID.container}>
      <div
        className={styles.selectInput}
        onClick={onClick}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClick?.();
        }}
        data-testid={DATA_TESTID.input}
        style={style}
      >
        <span className={cx('selectedValue', { filled: selected })} data-testid={DATA_TESTID.value}>
          {selected || ''}
        </span>
        <label className={selected ? styles.filled : ''} data-testid={DATA_TESTID.label}>
          {label} {required ? '*' : ''}
        </label>
        <span className={classNameArrow} data-testid={DATA_TESTID.arrow}>
          ▾
        </span>
      </div>

      {open && (
        <ul className={styles.selectDropdown} role='listbox' data-testid={DATA_TESTID.listbox}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles.selectOption}
              onClick={() => handleSelect(opt.label)}
              role='option'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelect(opt.label);
              }}
              data-testid={`select-option-${opt.value}`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {helperText && (
        <span className={styles.helperText} data-testid={DATA_TESTID.helperText}>
          {helperText}
        </span>
      )}
    </div>
  );
};
