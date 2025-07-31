import React from 'react';
import SongRow from '~/components/Components/SongRow';
import LimitedList from '~/components/Components/LimitedList';
import audios from '~/assets/audios';
import classNames from 'classnames/bind';
import styles from './FavoriteSongs.module.scss';

const cx = classNames.bind(styles);

const apiFavoriteSongs = [
  {
    songId: '1',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK',
    albumName: 'QNT',
    audio: audios.mp3Querry,
    listenedAt: new Date('2025-07-30T19:58:00+07:00').getTime(),
  },
  {
    songId: '2',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK',
    albumName: 'Nà ná na na',
    audio: audios.mp3Querry,
    listenedAt: new Date('2025-07-30T19:56:20+07:00').getTime(),
  },
  {
    songId: '3',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK',
    albumName: 'Skibidi',
    audio: audios.mp3Querry,
    listenedAt: new Date('2025-07-30T19:59:30+07:00').getTime(),
  },
  // ... có thể thêm nhiều bài hơn
];

const sortedSongs = [...apiFavoriteSongs].sort((a, b) => b.listenedAt - a.listenedAt);

const renderItem = (song, index) => (
  <SongRow
    key={song.songId}
    cover={song.cover}
    song={song.songName}
    artist={song.artistName}
    album={song.albumName}
    mp3={song.audio}
  />
);

function FavoriteSongs() {
  return (
    <>
      <h1 className="text-center">
        <i className="fas fa-heart"></i>
        <span style={{ paddingLeft: '10px' }}>Bài hát yêu thích của bạn</span>
      </h1>

      {/* Header của danh sách */}
      <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-3')}>
        <div className="col-6 d-flex align-items-center gap-2">
          <i className={cx('song-row-icon-header', 'fas fa-music')}></i>
          <span>Bài hát</span>
        </div>
        <div className="col-4 d-flex align-items-center">
          <i className={cx('song-row-icon-header', 'fas fa-compact-disc', 'me-2')}></i>
          <span>Album</span>
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <i className={cx('song-row-icon-header', 'fas fa-clock', 'me-2')}></i>
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

export default FavoriteSongs;
