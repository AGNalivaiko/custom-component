import styles from './Switcher.module.css';
import { SwitcherProp } from './types';
import classNames from 'classnames/bind';
import { FC } from 'react';
import { DATA_TESTID } from './constants';

const cx = classNames.bind(styles);

export const Switcher: FC<SwitcherProp> = ({
  checked,
  onChange,
  disabled = false,
  ref,
  style,
  classNames
}) => {
  const className = cx('switch', classNames, {
    switchDisabled: disabled,
    switchChecked: checked
  });

  return (
    <label className={className}>
      <input
        ref={ref}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.switchInput}
        data-testid={DATA_TESTID.input}
        style={style}
      />
      <span className={styles.switchSlider} data-testid={DATA_TESTID.slider}></span>
    </label>
  );
};
