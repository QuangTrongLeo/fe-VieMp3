import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function SearchRow({ type, cover, content, desc }) {
  const path = type === 'artist' ? `/artist/${encodeURIComponent(content)}` : `/song/${encodeURIComponent(content)}`;

  return (
    <a href={path} className={cx('search-row-link')}>
      <div className={cx('search-row', 'd-flex', 'align-items-center', 'px-3', 'py-1')}>
        <img
          src={cover}
          alt={content}
          className={cx('search-row-cover', 'me-3', { 'artist-avatar': type === 'artist' })}
        />

        <div>
          <div className={cx('search-row-content')}>{content}</div>
          <div className={cx('search-row-desc', 'small')}>{desc}</div>
        </div>
      </div>
    </a>
  );
}

export default SearchRow;
