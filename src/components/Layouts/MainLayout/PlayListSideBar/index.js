import React, { useState } from 'react';
import './PlayListSideBar.scss';

function PlayListSideBar({ isShowPlayListSideBar, closePlayListSideBar }) {
  const [flashClose, setFlashClose] = useState(false);
  // Flash btn
  const flashButton = setter => {
    setter(true);
    setTimeout(() => setter(false), 200);
  };

  const songs = [
    {
      songId: 1,
      thumb: 'https://i.imgur.com/x1eX5xP.png',
      songName: 'Vương Vấn (BLUE REMIX)',
      artist: 'ZIN MEDIA, TVk, Hana Cẩm Tiên',
    },
    {
      songId: 2,
      thumb: 'https://i.imgur.com/PeWajqF.png',
      songName: 'Yêu Từ Đâu Mà Ra?',
      artist: 'Lil Zpoet',
    },
    {
      songId: 3,
      thumb: 'https://i.imgur.com/bvOl6Fw.png',
      songName: 'Mah Boo',
      artist: 'Phạm Việt Thắng',
    },
    {
      songId: 4,
      thumb: 'https://i.imgur.com/Jg04IG2.png',
      songName: 'Em Không Sai Chúng Ta Sai',
      artist: 'ERIK',
    },
    {
      songId: 5,
      thumb: 'https://i.imgur.com/WczTHAx.png',
      songName: 'Thích Thì Đến',
      artist: 'Lê Bảo Bình',
    },
    {
      songId: 6,
      thumb: 'https://i.imgur.com/ZRUzKGo.png',
      songName: 'Chạy Khỏi Thế Giới Này',
      artist: 'Da LAB, Phương Ly',
    },
    {
      songId: 7,
      thumb: 'https://i.imgur.com/x1eX5xP.png',
      songName: 'Vương Vấn (BLUE REMIX)',
      artist: 'ZIN MEDIA, TVk, Hana Cẩm Tiên',
    },
    {
      songId: 8,
      thumb: 'https://i.imgur.com/PeWajqF.png',
      songName: 'Yêu Từ Đâu Mà Ra?',
      artist: 'Lil Zpoet',
    },
    {
      songId: 9,
      thumb: 'https://i.imgur.com/bvOl6Fw.png',
      songName: 'Mah Boo',
      artist: 'Phạm Việt Thắng',
    },
    {
      songId: 10,
      thumb: 'https://i.imgur.com/Jg04IG2.png',
      songName: 'Em Không Sai Chúng Ta Sai',
      artist: 'ERIK',
    },
    {
      songId: 11,
      thumb: 'https://i.imgur.com/WczTHAx.png',
      songName: 'Thích Thì Đến',
      artist: 'Lê Bảo Bình',
    },
    {
      songId: 12,
      thumb: 'https://i.imgur.com/ZRUzKGo.png',
      songName: 'Chạy Khỏi Thế Giới Này',
      artist: 'Da LAB, Phương Ly',
    },
  ];

  return (
    <div className={`playlist-sidebar-container ${isShowPlayListSideBar ? 'show' : 'hide'}`}>
      {/* Header: Bài đang phát + Tiêu đề "Bài tiếp theo" */}
      <div className="playlist-sidebar-header">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-white mb-3" style={{ margin: '0.5%' }}>
            Bài đang phát
          </h6>

          {/* Close PlayList SideBar */}
          <button
            className={`mb-3 me-2 playlist-sidebar-btn ${flashClose ? 'flash' : ''}`}
            onClick={() => {
              flashButton(setFlashClose);
              closePlayListSideBar();
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Bài đang phát */}
        <a
          className="p-2 sidebar-item d-flex align-items-center text-decoration-none text-white"
          href="/"
          style={{ borderRadius: '6px', backgroundColor: 'var(--primary-color)' }}
        >
          <img className="playlist-sidebar-img" src={songs[0].thumb} alt={songs[0].songName} />
          <div className="d-flex flex-column align-items-start" style={{ minWidth: 0 }}>
            <span className="fw-semibold text-truncate playlist-sidebar-song">{songs[0].songName}</span>
            <span className="text-truncate playlist-sidebar-artist">{songs[0].artist}</span>
          </div>
        </a>

        <h6 className="text-white mt-3 mb-2" style={{ margin: '0 0.5%' }}>
          Bài tiếp theo
        </h6>
      </div>

      {/* Scrollable phần danh sách tiếp theo */}
      <div className="playlist-sidebar-scrollable">
        {songs.slice(1).map(song => (
          <a
            key={song.songId}
            className="p-2 sidebar-item d-flex align-items-center text-decoration-none text-white"
            href="/"
            style={{ borderRadius: '6px', transition: 'background 0.2s' }}
          >
            <img className="playlist-sidebar-img" src={song.thumb} alt={song.songName} />
            <div className="d-flex flex-column align-items-start" style={{ minWidth: 0 }}>
              <span className="fw-semibold text-truncate playlist-sidebar-song">{song.songName}</span>
              <span className="text-truncate playlist-sidebar-artist">{song.artist}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PlayListSideBar;
