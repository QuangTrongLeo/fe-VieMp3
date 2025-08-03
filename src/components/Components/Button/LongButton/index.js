import React from 'react';
import classNames from 'classnames/bind';
import styles from './LongButton.module.scss';

const cx = classNames.bind(styles);

function LongButton({
  children,
  href = '#',
  color = 'var(--black-color)',
  backgroundColor = 'var(--white-color)',
  borderColor = 'transparent',
  minWidth,
  maxWidth,
}) {
  return (
    <a
      href={href}
      className={cx('long-button')}
      style={{
        color,
        backgroundColor,
        borderColor,
        minWidth: minWidth || '160px',
        maxWidth: maxWidth || '250px',
      }}
    >
      {children}
    </a>
  );
}

export default LongButton;
