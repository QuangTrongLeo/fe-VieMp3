import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NotificationBar.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function NotificationBar({ notification }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification && notification.trim() !== '') {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [notification]);

  return (
    <div className={cx('notification-wrapper', { visible, hidden: !visible })} aria-live="polite">
      <div className={cx('notification-content')}>
        <span className={cx('notification-icon')}>
          <i className={cx(icons.iconfaExclamationRriangle)}></i>
        </span>
        <span className={cx('notification-content')}>{notification}</span>
      </div>
    </div>
  );
}

export default NotificationBar;
