import styles from './TextArea.module.css';
import classNames from 'classnames/bind';
import { TextFieldProp } from './types';
import { ChangeEvent, useCallback, useState } from 'react';
import { FC } from 'react';
import { DATA_TESTID, DEFAULT_PROPS } from './constants';

const cx = classNames.bind(styles);

export const TextField: FC<TextFieldProp> = ({
  variant = DEFAULT_PROPS.outlined,
  sizeField = DEFAULT_PROPS.medium,
  label = '',
  required = false,
  disabled = false,
  readOnly = false,
  error = false,
  helperText = '',
  value,
  onChange: onChangeFromProps,
  ref,
  style,
  classNames
}: TextFieldProp) => {
  const [valueState, setValueState] = useState(value ?? '');

  const className = cx(
    'textfieldContainer',
    `${variant}`,
    `textfield${sizeField.charAt(0).toUpperCase() + sizeField.slice(1)}`,
    classNames,
    {
      textfieldDisabled: disabled,
      textfieldError: error
    }
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setValueState(val);
      onChangeFromProps?.(val, e);
    },
    [onChangeFromProps]
  );

  return (
    <div className={className} data-testid={DATA_TESTID.container}>
      <input
        ref={ref}
        id={`textfield-${label}`}
        value={valueState}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        data-testid={DATA_TESTID.input}
        style={style}
      />
      {label && (
        <label
          htmlFor={`textfield-${label}`}
          className={cx({ filled: !!valueState })}
          data-testid={DATA_TESTID.label}
        >
          {label} {required ? '*' : ''}
        </label>
      )}
      {helperText && (
        <span className={styles.helperText} data-testid={DATA_TESTID.helperText}>
          {helperText}
        </span>
      )}
    </div>
  );
};
