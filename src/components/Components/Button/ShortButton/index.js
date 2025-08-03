import React from 'react';
import classNames from 'classnames/bind';
import styles from './ShortButton.module.scss';

const cx = classNames.bind(styles);

function ShortButton({ color, backgroundColor, borderColor, href, children, minWidth, maxWidth }) {
  return (
    <a
      href={href}
      className={cx('short-button')}
      style={{
        color,
        backgroundColor,
        borderColor,
        minWidth: minWidth || '100px',
        maxWidth: maxWidth || '200px',
      }}
    >
      {children}
    </a>
  );
}

export default ShortButton;
