import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = e => {
    e.stopPropagation(); // tránh click lan sang dòng bài hát
    setLiked(prev => !prev);
  };

  return (
    <div className={cx('song-row', 'd-flex justify-content-between align-items-center')}>
      <div className="d-flex align-items-center">
        <img
          src={song.cover || 'https://via.placeholder.com/40'}
          alt={song.name}
          className={cx('song-cover', 'me-2')}
        />
        <div>
          <div className={cx('song-name')} title={song.name}>
            {song.name}
          </div>
          <div className={cx('song-artist')}>{song.artist}</div>
        </div>
      </div>

      {/* Group icon heart và duration */}
      <div className="d-flex align-items-center gap-2">
        <i className={cx(icons.iconHeart, 'song-heart-icon', { liked })} onClick={toggleLike}></i>
        <span className={cx('song-duration')}>{song.duration}</span>
      </div>
    </div>
  );
}

export default SongItem;
