import React from 'react';
import classNames from 'classnames/bind';
import styles from './RectangleCard.module.scss';

const cx = classNames.bind(styles);

function RectangleCard({ content, desc, cover, href }) {
  return (
    <a href={href} className={cx('rectangle-card')}>
      <div className={cx('rectangle-cover-container')}>
        <img src={cover} alt={content} />
      </div>
      <div className={cx('rectangle-info')}>
        <span className={cx('rectangle-content')}>{content}</span>
        <span className={cx('rectangle-desc')}>{desc}</span>
      </div>
    </a>
  );
}

export default RectangleCard;
