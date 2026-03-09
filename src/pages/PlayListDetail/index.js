import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PlayListDetail.module.scss';

import SongItem from '~/components/Components/SongItem';
import LimitedList from '~/components/Components/LimitedList';

import { apiGetPlaylist } from '~/api/services/servicePlaylists';

const cx = classNames.bind(styles);

function PlayListDetail() {
  const { playlistId } = useParams(); // lấy id từ URL

  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await apiGetPlaylist(playlistId);
        setPlaylist(data);
      } catch (error) {
        console.error('Lỗi lấy playlist:', error);
      }
    };

    if (playlistId) {
      fetchPlaylist();
    }
  }, [playlistId]);

  if (!playlist) {
    return <div className="p-4">Đang tải playlist...</div>;
  }

  return (
    <div className={cx('playlist-wrapper', 'py-4')}>
      {/* Header */}
      <div className={cx('playlist-header', 'd-flex', 'align-items-center', 'mb-4')}>
        {playlist.cover ? (
          <img src={playlist.cover} alt="playlist-cover" className={cx('playlist-cover')} />
        ) : (
          <div className={cx('playlist-cover', 'playlist-cover-placeholder')}>
            <i className="fas fa-list"></i>
          </div>
        )}

        <div className="ms-4">
          <h2 className={cx('playlist-title')}>{playlist.name}</h2>
          <p className={cx('playlist-description')}>Tuyển tập các bài hát trong playlist {playlist.name}</p>
          <p className={cx('playlist-meta')}>{playlist.songIds?.length || 0} bài hát</p>
        </div>
      </div>

      {/* Danh sách bài hát */}
      <h5 className={cx('section-title')}>Danh sách bài hát</h5>

      {playlist.songIds?.length === 0 ? (
        <p>Playlist chưa có bài hát.</p>
      ) : (
        <LimitedList
          items={playlist.songIds}
          limit={8}
          wrapInRow={true}
          renderItem={(songId, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <SongItem songId={songId} />
            </div>
          )}
        />
      )}
    </div>
  );
}

export default PlayListDetail;
