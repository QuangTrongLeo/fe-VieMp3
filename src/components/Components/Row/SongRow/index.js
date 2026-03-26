import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import icons from '~/assets/icons';
import styles from './SongRow.module.scss';
import { apiGetArtist } from '~/api/services/serviceArtists';
import { apiGetAlbum } from '~/api/services/serviceAlbums';
import { apiGetMyPlaylists } from '~/api/services/servicePlaylists';
import LimitedList from '../../LimitedList';

const cx = classNames.bind(styles);

function SongRow({ song, liked = false, onToggleFavorite }) {
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [isLiked, setIsLiked] = useState(liked);
  const [duration, setDuration] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const audioRef = useRef(null);

  // ===== FETCH ARTIST + ALBUM =====
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (song.artistId) {
          const data = await apiGetArtist(song.artistId);
          setArtist(data);
        }
        if (song.albumId) {
          const data = await apiGetAlbum(song.albumId);
          setAlbum(data);
        }
      } catch (error) {
        console.error('Lỗi fetch data:', error);
      }
    };
    fetchData();
  }, [song.artistId, song.albumId]);

  // ===== FETCH PLAYLIST =====
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = await apiGetMyPlaylists();
        setPlaylists(data || []);
      } catch (error) {
        console.error('Lỗi lấy playlist:', error);
      }
    };
    fetchPlaylists();
  }, []);

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  const handleActionClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleToggleLike = async e => {
    handleActionClick(e);
    try {
      await onToggleFavorite(song.id);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Lỗi toggle favorite:', error);
    }
  };

  const handleLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    setDuration(`${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
  };

  // ===== RENDER PLAYLIST ITEM =====
  const renderPlaylistItem = pl => (
    <div key={pl.id} className={cx('menu-item')}>
      <i className="fas fa-plus"></i>
      <span className="ms-2">{pl.name}</span>
    </div>
  );

  // ===== PLAYLIST MENU =====
  const renderPlaylistMenu = attrs => (
    <div className={cx('menu-popper')} tabIndex="-1" {...attrs} onClick={handleActionClick}>
      <div className={cx('search-wrapper')}>
        <input type="text" placeholder="Tìm một danh sách phát" onClick={e => e.stopPropagation()} />
      </div>

      <div className={cx('menu-item')}>
        <i className="fas fa-plus"></i>
        <span>Danh sách phát mới</span>
      </div>

      <div className={cx('divider')}></div>

      <div className={cx('playlist-list')}>
        {playlists.length > 0 ? (
          <LimitedList items={playlists} limit={6} wrapInRow={false} renderItem={item => renderPlaylistItem(item)} />
        ) : (
          <div className={cx('menu-item-disabled')}>Trống</div>
        )}
      </div>
    </div>
  );

  // ===== MAIN MENU =====
  const renderMainMenu = attrs => (
    <div className={cx('menu-popper')} tabIndex="-1" {...attrs} onClick={handleActionClick}>
      <Tippy placement="left-start" offset={[-5, 0]} interactive render={renderPlaylistMenu}>
        <div className={cx('menu-item', 'has-submenu')}>
          <i className="fas fa-plus"></i>
          <span>Thêm vào danh sách phát</span>
          <i className="fas fa-caret-right ms-auto"></i>
        </div>
      </Tippy>

      <div className={cx('menu-item')} onClick={handleToggleLike}>
        <i className="fas fa-heart"></i>
        <span>{isLiked ? 'Loại bỏ khỏi bài hát đã thích' : 'Lưu vào bài hát đã thích'}</span>
      </div>
      <Link className={cx('menu-item')}>
        <i className={icons.iconStar}></i>
        <span>Truy cập nghệ sĩ</span>
      </Link>
      <Link className={cx('menu-item')}>
        <i className={icons.iconCompactDisc}></i>
        <span>Truy cập album</span>
      </Link>
    </div>
  );

  return (
    <Link to={`/song/${song.id}`} className={cx('song-row')}>
      <div className={cx('d-flex', 'align-items-center', 'px-3', 'py-2')}>
        {/* INFO */}
        <div className="col-6 d-flex align-items-center">
          <img src={song.cover} alt={song.title} className={cx('song-row-cover')} />
          <div className={cx('song-row-info', 'ms-3')}>
            <div className={cx('song-row-title')}>{song.title}</div>
            <div className={cx('song-row-artists')}>{artist?.name || 'Unknown Artist'}</div>
          </div>
        </div>

        {/* ALBUM */}
        <div className={cx('song-row-album', 'col-4')}>{album?.title || ''}</div>

        {/* ACTION */}
        <div className="col-2 d-flex justify-content-end align-items-center">
          <div className={cx('action-items')}>
            <i className={cx('favorite-icon', isLiked && 'active', 'fas', 'fa-heart')} onClick={handleToggleLike}></i>

            <span className={cx('duration-text')}>{duration}</span>

            {/* FIX TIPPY */}
            <Tippy interactive trigger="click" placement="bottom-end" offset={[0, 10]} render={renderMainMenu}>
              <div className={cx('more-icon')} onClick={handleActionClick}>
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </Tippy>
          </div>
        </div>

        {song.audio && (
          <audio ref={audioRef} src={song.audio} onLoadedMetadata={handleLoadedMetadata} style={{ display: 'none' }} />
        )}
      </div>
    </Link>
  );
}

export default SongRow;
