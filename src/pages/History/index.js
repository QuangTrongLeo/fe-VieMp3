import React from 'react';
import LimitedList from '~/components/Components/LimitedList';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './History.module.scss';
import { SongRow } from '~/components/Components/Row';
import { apiListendSongs } from '~/api/apiURL/apiSongs';

const cx = classNames.bind(styles);

const sortedSongs = [...apiListendSongs].sort((a, b) => new Date(b.listenedAt) - new Date(a.listenedAt));

const renderItem = (song, index) => (
  <SongRow
    key={song.songId}
    cover={song.cover}
    song={song.songName}
    artist={song.artistName}
    album={song.albumName}
    audio={song.audio}
  />
);

function History() {
  return (
    <>
      <h1 className="text-center">
        <i className={icons.iconHistory}></i>
        <span style={{ paddingLeft: '10px' }}>Nghe gần đây</span>
      </h1>

      {/* Header của danh sách */}
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

      {/* Danh sách bài hát giới hạn */}
      <LimitedList
        items={sortedSongs}
        renderItem={renderItem}
        limit={8}
        showAllText="Hiện tất cả bài hát"
        showLessText="Ẩn bớt"
      />
    </>
  );
}

export default History;
