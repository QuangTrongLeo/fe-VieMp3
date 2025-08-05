import React from 'react';
import styles from './SongDetail.module.scss';
import classNames from 'classnames/bind';
import { audios } from '~/assets';
import icons from '~/assets/icons';
import { SongRow } from '~/components/Components/Row';
import LimitedList from '~/components/Components/LimitedList';

const cx = classNames.bind(styles);

const apiHistoryOfListenedSongs = [
  {
    songId: '1',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK',
    albumName: 'QNT',
    audio: audios.mp3Querry,
  },
  {
    songId: '2',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK',
    albumName: 'Nà ná na na',
    audio: audios.mp3Querry,
  },
  {
    songId: '3',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'QUERRY',
    artistName: 'QNT x TRUNG TRẦN ft RPT MCK kjbaka akbkala',
    albumName: 'Skibidi',
    audio: audios.mp3Querry,
  },
  // ... có thể thêm nhiều bài hơn
];

const sortedSongs = [...apiHistoryOfListenedSongs].sort((a, b) => b.songId - a.songId);

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

function SongDetail() {
  return (
    <div className={cx('container', 'py-4')}>
      <div className="row">
        {/* Hình ảnh - 4 col trên desktop, 12 col trên mobile */}
        <div className={cx('col-12', 'col-md-4', 'mb-4', 'text-center')}>
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/5/9/f/0/59f01d4795d55c5b38b7f0a70fcdb4a1.jpg"
            alt="buitruonglinh"
            className={cx('img', 'img-fluid', 'rounded', 'shadow', 'song-cover')}
          />
          <h4 className={cx('song-name', 'mt-3')}>Từng ngày yêu em</h4>
          <p className={cx('artist')}>buitruonglinh</p>
          <p className={cx('update')}>Cập nhật: 01/10/2023</p>
          <p className={cx('liked')}>420K người yêu thích</p>
        </div>

        {/* Danh sách bài hát - 8 col trên desktop, 12 col trên mobile */}
        <div className="col-12 col-md-8">
          <h5 className={cx('subtitle', 'mb-3')}>Danh sách bài hát</h5>
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
        </div>
      </div>
    </div>
  );
}

export default SongDetail;
