import React, { useEffect, useState } from 'react';
import LimitedList from '~/components/Components/LimitedList';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './History.module.scss';
import { SongRow } from '~/components/Components/Row';

import { apiGetMyListenHistory } from '~/api/services/serviceListenHistories';
import { apiGetMyFavoriteSongs, apiRemoveSongFromFavorite } from '~/api/services/serviceSongs';

const cx = classNames.bind(styles);

function History() {
  const [historySongs, setHistorySongs] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // lấy history + favorite
  const fetchData = async () => {
    try {
      const history = await apiGetMyListenHistory();
      const favorites = await apiGetMyFavoriteSongs();

      const sortedHistory = [...history].sort((a, b) => new Date(b.listenedAt) - new Date(a.listenedAt));

      setHistorySongs(sortedHistory);

      const ids = favorites.map(item => item.song.id);
      setFavoriteIds(ids);
    } catch (error) {
      console.error('Lỗi khi lấy lịch sử nghe:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUnfavorite = async songId => {
    try {
      await apiRemoveSongFromFavorite(songId);

      setFavoriteIds(prev => prev.filter(id => id !== songId));
    } catch (error) {
      console.error('Lỗi bỏ thích bài hát:', error);
    }
  };

  const renderItem = item => {
    const song = item.song;

    const liked = favoriteIds.includes(song.id);

    return <SongRow key={song.id} song={song} liked={liked} onToggleFavorite={handleUnfavorite} />;
  };

  return (
    <>
      <h1 className="text-center">
        <i className={icons.iconHistory}></i>
        <span style={{ paddingLeft: '10px' }}>Nghe gần đây</span>
      </h1>

      {/* Header */}
      <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-3')}>
        <div className="col-6 d-flex align-items-center gap-2">
          <i className={cx('song-row-icon-header', icons.iconMusic)}></i>
          <span>Bài hát</span>
        </div>

        <div className="col-4 d-flex align-items-center">
          <i className={cx('song-row-icon-header', icons.iconCompactDisc, 'me-2')}></i>
          <span>Album</span>
        </div>

        <div className="col-2 d-flex justify-content-end align-items-center">
          <i className={cx('song-row-icon-header', icons.iconClock, 'me-2')}></i>
          <span>Thời gian</span>
        </div>
      </div>

      {historySongs.length === 0 ? (
        <div className={cx('empty-state')}>
          <i className={icons.iconHistory} style={{ fontSize: '60px', opacity: 0.3 }}></i>
          <h4 style={{ marginTop: '15px' }}>Bạn chưa nghe bài hát nào</h4>
          <p style={{ opacity: 0.7 }}>Hãy bắt đầu nghe nhạc.</p>
        </div>
      ) : (
        <LimitedList
          items={historySongs}
          renderItem={renderItem}
          limit={8}
          showAllText="Hiện tất cả bài hát"
          showLessText="Ẩn bớt"
        />
      )}
    </>
  );
}

export default History;
