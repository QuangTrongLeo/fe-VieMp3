import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';
import { apiGetArtist } from '~/api/services/serviceArtists';
import { apiAddSongToFavorite, apiRemoveSongFromFavorite } from '~/api/services/serviceSongs';

const cx = classNames.bind(styles);

function SongItem({ song, favoriteSongs, setFavoriteSongs }) {
  const [duration, setDuration] = useState('00:00');
  const [artist, setArtist] = useState(null);

  const audioRef = useRef(null);
  const navigate = useNavigate();
  const liked = favoriteSongs?.some(fav => String(fav.song.id) === String(song.id));

  const toggleLike = async e => {
    e.stopPropagation();
    try {
      let success = false;
      if (!liked) {
        success = await apiAddSongToFavorite(song.id);
        if (success) {
          setFavoriteSongs(prev => [...prev, { song }]);
        }
      } else {
        success = await apiRemoveSongFromFavorite(song.id);
        if (success) {
          setFavoriteSongs(prev => prev.filter(fav => String(fav.song.id) !== String(song.id)));
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = () => {
    navigate(`/song/${song.id}`);
  };

  const formatTime = seconds => {
    seconds = Math.floor(seconds);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // ===== GET ARTIST =====
  const handleGetArtist = async () => {
    try {
      if (!song.artistId) return;
      const data = await apiGetArtist(song.artistId);
      setArtist(data);
    } catch (error) {
      console.error('Lỗi khi lấy artist:', error);
    }
  };

  useEffect(() => {
    handleGetArtist();
  }, [song.artistId]);

  // ===== GET DURATION =====
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
          alt={song.title}
          className={cx('song-cover', 'me-2')}
        />

        <div>
          <div className={cx('song-name')} title={song.title}>
            {song.title}
          </div>

          <div className={cx('song-artist')}>{artist ? artist.name : 'Đang tải...'}</div>
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
