import React from 'react';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './RectangleCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RectangleCard({ content, desc, cover, href, icon }) {
  return (
    <Link to={href} className={cx('rectangle-card')}>
      <div className={cx('rectangle-cover-container')}>
        {cover ? (
          <img src={cover} alt={content} />
        ) : (
          <div className={cx('icon-placeholder')}>{icon || <i className={`${icons.iconImage} fa-3x`}></i>}</div>
        )}
      </div>
      <div className={cx('rectangle-info')}>
        <span className={cx('rectangle-content')}>{content}</span>
        <span className={cx('rectangle-desc')}>{desc}</span>
      </div>
    </Link>
  );
}

export default RectangleCard;
