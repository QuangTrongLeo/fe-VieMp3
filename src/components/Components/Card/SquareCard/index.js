import React from 'react';
import classNames from 'classnames/bind';
import styles from './SquareCard.module.scss';

const cx = classNames.bind(styles);

function SquareCard({ content, desc, cover, href, icon }) {
  return (
    <a href={href} className={cx('square-card')}>
      <div className={cx('square-cover-container')}>
        {cover ? (
          <img src={cover} alt={content} />
        ) : (
          <div className={cx('icon-placeholder')}>{icon || <i className="fas fa-image fa-3x"></i>}</div>
        )}
      </div>
      <div className={cx('square-content')}>{content}</div>
      <div className={cx('square-desc')}>{desc}</div>
    </a>
  );
}

export default SquareCard;
