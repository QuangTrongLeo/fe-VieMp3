import React from 'react';
import classNames from 'classnames/bind';
import styles from './SongRow.module.scss';

const cx = classNames.bind(styles);

function SongRow({ song }) {
  return (
    <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-3')}>
      {/* Cột: Bài hát */}
      <div className="col-6 d-flex align-items-center">
        <img src={song.cover} alt={song.title} className={cx('song-cover', 'me-3')} />
        <div>
          <div className={cx('song-title')}>{song.title}</div>
          <div className={cx('song-artists', 'text-muted', 'small')}>{song.artists.join(', ')}</div>
        </div>
      </div>

      {/* Cột: Album */}
      <div className="col-4 text-muted">{song.album}</div>

      {/* Cột: Thời gian */}
      <div className="col-2 d-flex justify-content-end align-items-center">
        <i className={cx('icon-favorite-song', 'me-2', 'fas', 'fa-heart')}></i>
        <span className="small">{song.duration}</span>
      </div>
    </div>
  );
}

export default SongRow;
