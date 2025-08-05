import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PlayListSideBar.module.scss';
import icons from '~/assets/icons';
import { audios } from '~/assets';
import { Link } from 'react-router-dom';
import SongItem from '~/components/Components/SongItem';

const cx = classNames.bind(styles);

const songs = [
  { songId: '1', songName: 'Phía Sau Một Cô Gái', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '2', songName: 'Yêu Thương Ngày Đó', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  {
    songId: '3',
    songName: 'Anh Đã Quen Với Cô Đơn',
    audio: audios.audioTungNgayYeuEm,
    cover: '',
    artistName: 'SOOBIN',
  },
  { songId: '4', songName: 'Giá Như', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '5', songName: 'Tháng Năm', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '6', songName: 'Sunset in the City', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '7', songName: 'Sunset in the City', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '8', songName: 'Sunset in the City', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '9', songName: 'Sunset in the City', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
  { songId: '10', songName: 'Sunset in the City', audio: audios.audioTungNgayYeuEm, cover: '', artistName: 'SOOBIN' },
];

function PlayListSideBar({ isShowPlayListSideBar, closePlayListSideBar }) {
  const [flashClose, setFlashClose] = useState(false);

  const flashButton = setter => {
    setter(true);
    setTimeout(() => setter(false), 200);
  };

  return (
    <div
      className={cx('playlist-sidebar-container', {
        show: isShowPlayListSideBar,
        hide: !isShowPlayListSideBar,
      })}
    >
      {/* Header */}
      <div className={cx('playlist-sidebar-header')}>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-white mb-3" style={{ margin: '0.5%' }}>
            Bài đang phát
          </h6>

          <button
            className={cx('playlist-sidebar-btn', 'mb-3', 'me-2', { flash: flashClose })}
            onClick={() => {
              flashButton(setFlashClose);
              closePlayListSideBar();
            }}
          >
            <i className={icons.iconXMark}></i>
          </button>
        </div>

        {/* Bài đang phát */}
        <SongItem song={songs[0]} />

        <h6 className="text-white mt-3 mb-2" style={{ margin: '0 0.5%' }}>
          Bài tiếp theo
        </h6>
      </div>

      {/* Danh sách tiếp theo */}
      <div className={cx('playlist-sidebar-scrollable')}>
        {songs.slice(1).map(song => (
          <div key={song.songId} className="mb-2">
            <SongItem song={song} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayListSideBar;
