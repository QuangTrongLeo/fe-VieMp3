import React from 'react';
import classNames from 'classnames/bind';
import styles from './ShortButton.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShortButton({ color, backgroundColor, borderColor, href, children, minWidth, maxWidth }) {
  return (
    <Link
      to={href}
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
    </Link>
  );
}

export default ShortButton;
