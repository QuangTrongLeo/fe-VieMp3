import React from 'react';
import classNames from 'classnames/bind';
import styles from './CircleCard.module.scss';

const cx = classNames.bind(styles);

function CircleCard({ content, cover, href }) {
  return (
    <a href={href} className={cx('circle-card')}>
      <div className={cx('circle-cover-container')}>
        <img src={cover} alt={content} />
      </div>
      <div className={cx('circle-content')}>{content}</div>
    </a>
  );
}

export default CircleCard;
