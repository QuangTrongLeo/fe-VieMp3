import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SongRow.module.scss';
import { Link } from 'react-router-dom';
import { apiGetArtist } from '~/api/services/serviceArtists';
import { apiGetAlbum } from '~/api/services/serviceAlbums';

const cx = classNames.bind(styles);

function SongRow({ song, liked = false, onToggleFavorite }) {
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [isLiked, setIsLiked] = useState(liked);
  const [duration, setDuration] = useState('');

  const audioRef = useRef(null);

  // fetch artist
  const fetchArtist = async () => {
    try {
      if (!song.artistId) return;

      const data = await apiGetArtist(song.artistId);
      setArtist(data);
    } catch (error) {
      console.error('Lỗi khi lấy artist:', error);
    }
  };

  // fetch album
  const fetchAlbum = async () => {
    try {
      if (!song.albumId) return;

      const data = await apiGetAlbum(song.albumId);
      setAlbum(data);
    } catch (error) {
      console.error('Lỗi khi lấy album:', error);
    }
  };

  useEffect(() => {
    fetchArtist();
    fetchAlbum();
  }, [song.artistId, song.albumId]);

  const toggleLike = async e => {
    e.preventDefault();
    try {
      await onToggleFavorite(song.id);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Favorite error:', error);
    }
  };

  const handleLoadedMetadata = () => {
    const seconds = audioRef.current.duration;

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    const formatted = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    setDuration(formatted);
  };

  return (
    <Link to={`/song/${song.id}`} className={cx('song-row-link')}>
      <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-2')}>
        {/* Bài hát */}
        <div className="col-6 d-flex align-items-center">
          <img src={song.cover} alt={song.title} className={cx('song-row-cover', 'me-3')} />

          <div className={cx('song-row-info')}>
            <div className={cx('song-row-title')} title={song.title}>
              {song.title}
            </div>

            <div className={cx('song-row-artists')} title={artist?.name || 'Unknown Artist'}>
              {artist?.name || 'Unknown Artist'}
            </div>
          </div>
        </div>

        {/* Album */}
        <div className={cx('song-row-album', 'col-4')}>{album?.title || ''}</div>

        {/* Thời gian + Favorite */}
        <div className="col-2 d-flex justify-content-end align-items-center">
          <i
            className={cx('song-row-favorite-icon', isLiked && 'active', 'me-2', 'fas', 'fa-heart')}
            onClick={toggleLike}
          ></i>

          <span className="small">{duration}</span>
        </div>

        {/* Audio hidden để lấy duration */}
        {song.audio && (
          <audio ref={audioRef} src={song.audio} onLoadedMetadata={handleLoadedMetadata} style={{ display: 'none' }} />
        )}
      </div>
    </Link>
  );
}

export default SongRow;
