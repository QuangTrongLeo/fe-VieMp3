import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  const [liked, setLiked] = useState(false);
  const [duration, setDuration] = useState('00:00');
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const toggleLike = e => {
    e.stopPropagation();
    setLiked(prev => !prev);
  };

  const handleClick = () => {
    navigate(`/song/${song.songName}`);
  };

  const formatTime = seconds => {
    seconds = Math.floor(seconds);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedMetadata = () => {
        setDuration(formatTime(audio.duration));
      };
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [song.audio]);

  return (
    <div className={cx('song-row', 'd-flex justify-content-between align-items-center')} onClick={handleClick}>
      <div className="d-flex align-items-center">
        <img
          src={song.cover || 'https://via.placeholder.com/40'}
          alt={song.songName}
          className={cx('song-cover', 'me-2')}
        />
        <div>
          <div className={cx('song-name')} title={song.songName}>
            {song.songName}
          </div>
          <div className={cx('song-artist')}>{song.artistName}</div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <i className={cx(icons.iconHeart, 'song-heart-icon', { liked })} onClick={toggleLike}></i>
        <span className={cx('song-duration')}>{duration}</span>
      </div>

      {song.audio && <audio ref={audioRef} src={song.audio} preload="metadata" style={{ display: 'none' }} />}
    </div>
  );
}

export default SongItem;
