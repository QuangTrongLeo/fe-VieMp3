// import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NotificationBar.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function NotificationBar({ notification, visible }) {
  if (!notification) return null;

  return (
    <div className={cx('notification-wrapper', { visible, hidden: !visible })} aria-live="polite">
      <div className={cx('notification-content')}>
        <span className={cx('notification-icon')}>
          <i className={cx(icons.iconfaExclamationRriangle)}></i>
        </span>
        <span className={cx('notification-text')}>{notification}</span>
      </div>
    </div>
  );
}

export default NotificationBar;
