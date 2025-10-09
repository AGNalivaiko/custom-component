import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { ButtonProp } from './types';
import { useMemo } from 'react';
import { FC } from 'react';
import { DATA_TESTID } from './constants';
import { generateClassName } from '@helpers';

const cx = classNames.bind(styles);

export const Button: FC<ButtonProp> = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  children,
  onClick: clickFromProps,
  ...rest
}) => {
  const className = cx('btn', generateClassName('btn', variant), generateClassName('btn', size), {
    [color]: color !== 'primary',
    btnDisabled: disabled
  });

  const isActive = disabled || loading;
  const onClick = isActive ? undefined : clickFromProps;
  const content = useMemo(
    () =>
      loading ? <span className={styles.btnSpinner} data-testid={DATA_TESTID.spinner} /> : children,
    [loading, children]
  );

  return (
    <button
      className={className}
      disabled={isActive}
      onClick={onClick}
      data-testid={DATA_TESTID.element}
      {...rest}
    >
      {content}
    </button>
  );
};
