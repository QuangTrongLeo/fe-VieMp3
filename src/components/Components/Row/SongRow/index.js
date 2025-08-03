import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SongRow.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SongRow({ cover, song, artist, album, mp3 }) {
  const [liked, setLiked] = useState(false);
  const [duration, setDuration] = useState('');
  const audioRef = useRef(null);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Lấy duration khi audio load xong metadata
  const handleLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatted = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    setDuration(formatted);
  };

  return (
    <Link to={`/song/${song}`} className={cx('song-row-link')}>
      <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-2')}>
        {/* Cột: Bài hát */}
        <div className="col-6 d-flex align-items-center">
          <img src={cover} alt={song} className={cx('song-row-cover', 'me-3')} />
          <div>
            <div className={cx('song-row-title')}>{song}</div>
            <div className={cx('song-row-artists', 'small')}>{artist}</div>
          </div>
        </div>

        {/* Cột: Album */}
        <div className={cx('song-row-album', 'col-4')}>{album}</div>

        {/* Cột: Thời gian */}
        <div className="col-2 d-flex justify-content-end align-items-center">
          <i
            className={cx('song-row-favorite-icon', liked && 'active', 'me-2', 'fas', 'fa-heart')}
            onClick={e => {
              e.preventDefault(); // chặn nhảy trang khi bấm vào icon
              toggleLike();
            }}
          ></i>
          <span className="small">{duration}</span>
        </div>

        {/* Audio ẩn để lấy duration */}
        {mp3 && <audio ref={audioRef} src={mp3} onLoadedMetadata={handleLoadedMetadata} style={{ display: 'none' }} />}
      </div>
    </Link>
  );
}

export default SongRow;
