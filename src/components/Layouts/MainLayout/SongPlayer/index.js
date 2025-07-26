import { Dropdown, initMDB } from 'mdb-ui-kit';
import React, { useState, useRef, useEffect } from 'react';
import * as bootstrap from 'bootstrap';
import './SongPlayer.scss';
initMDB({ Dropdown });

function SongPlayer({ isShowPlayListSideBar, togglePlayListSidebar, closePlayListSideBar }) {
  const timeRef = useRef(null);
  const volumeRef = useRef(null);

  const [progressTime, setProgressTime] = useState(0);
  const [progressVolume, setProgressVolume] = useState(100);
  const [previousVolume, setPreviousVolume] = useState(100);
  const [mode, setMode] = useState(null);
  const [flashPrev, setFlashPrev] = useState(false);
  const [flashNext, setFlashNext] = useState(false);
  const [flashVolume, setFlashVolume] = useState(false);
  const [flashClose, setFlashClose] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedVisible, setLikedVisible] = useState(false);
  const [lyricsVisible, setLyricsVisible] = useState(false);
  const [closedSongPlayer, setClosedSongPlayer] = useState(false);

  // Tooltip init (chỉ chạy 1 lần khi component mount)
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    const tooltipList = [...tooltipTriggerList].map(el => {
      const tooltip = new bootstrap.Tooltip(el, {
        placement: 'top',
        fallbackPlacements: [],
        delay: { show: 0, hide: 0 },
      });

      // Khi rời chuột khỏi button, ép tooltip ẩn
      el.addEventListener('mouseleave', () => {
        tooltip.hide();
      });

      return tooltip;
    });

    return () => {
      tooltipList.forEach(t => t.dispose());
    };
  }, []);

  useEffect(() => {
    const el = document.querySelector('.play-pause-btn');
    if (!el) return;
    const tooltip = bootstrap.Tooltip.getInstance(el);
    if (tooltip) {
      el.setAttribute('data-bs-title', isPaused ? 'Phát' : 'Tạm dừng');
      tooltip.setContent({ '.tooltip-inner': isPaused ? 'Phát' : 'Tạm dừng' });
    }
  }, [isPaused]);

  // TOGGLE
  const toggleShuffle = () => {
    setMode(prev => (prev === 'shuffle' ? null : 'shuffle'));
  };

  const toggleRepeat = () => {
    setMode(prev => (prev === 'repeat' ? null : 'repeat'));
  };

  const togglePlayPause = () => setIsPaused(prev => !prev);

  const toggleVolume = () => {
    // setProgressVolume(prev => (prev === 0 ? 100 : 0));
    if (progressVolume === 0) {
      // Nếu đang mute → unmute và quay lại previousVolume
      setProgressVolume(previousVolume);
    } else {
      // Nếu đang có volume → lưu lại rồi mute
      setPreviousVolume(progressVolume);
      setProgressVolume(0);
    }
  };

  // Flash btn
  const flashButton = setter => {
    setter(true);
    setTimeout(() => setter(false), 300); // Nháy màu 300ms
  };

  // TIME BAR
  const duration = 200; // tổng thời gian bài hát, bạn có thể thay đổi tùy bài
  const handleClickTimeBar = e => {
    const bar = timeRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(duration * percent);
  };

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            clearInterval(interval);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    setProgressTime((currentTime / duration) * 100);
  }, [currentTime]);

  const formatTimeBar = seconds => {
    seconds = Math.floor(seconds);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // VOLUME BAR
  const handleClickVolumeBar = e => {
    const bar = volumeRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const volume = Math.round(percent * 100);
    setProgressVolume(volume);
    setPreviousVolume(volume);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-bottom navbar-song-player ${
          closedSongPlayer ? 'slide-down-song-player' : ''
        }`}
      >
        <div class="container-fluid">
          <div className="row w-100">
            {/* LEFT ELEMENTS */}
            <div className="col-4 d-flex align-items-center">
              {/* Brand */}
              <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                <img
                  src="data:image/jpeg;base64,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"
                  height="60"
                  alt="MDB Logo"
                  loading="lazy"
                  style={{
                    marginTop: '2px',
                    border: '2px solid var(--black-color-light-1)',
                    borderRadius: '6px',
                  }}
                />
              </a>

              <div className="song-info-wrapper">
                <a className="link-song-hover-color" href="/">
                  <h5 className="text-ellipsis">Nơi này có anh đã đến bên em kabakjbakv kahakjakdvg</h5>
                </a>

                <a className="link-artist-hover-color" href="/">
                  <p className="text-ellipsis" style={{ fontSize: '14px' }}>
                    Sơn Tùng - MTP - Skibidi - Toilet
                  </p>
                </a>
              </div>
            </div>

            {/* CENTER ELEMENTS */}
            <div className="col-4 d-flex justify-content-center position-relative">
              <ul className="navbar-nav flex-row d-none d-md-flex">
                {/* Shuffle */}
                <li className="nav-item me-4">
                  <button
                    className={`player-btn ${mode === 'shuffle' ? 'active' : ''}`}
                    data-bs-toggle="tooltip"
                    title="Phát ngẫu nhiên"
                    onClick={toggleShuffle}
                  >
                    <i className="fa-solid fa-shuffle"></i>
                  </button>
                </li>

                {/* Prev */}
                <li className="nav-item me-4">
                  <button
                    className={`player-btn ${flashPrev ? 'flash' : ''}`}
                    data-bs-toggle="tooltip"
                    onClick={() => flashButton(setFlashPrev)}
                  >
                    <i className="fa-solid fa-backward-step"></i>
                  </button>
                </li>

                {/* Play/Pause */}
                <li className="nav-item me-4">
                  <button
                    className="play-pause-btn"
                    data-bs-toggle="tooltip"
                    data-bs-title={isPaused ? 'Phát' : 'Tạm dừng'}
                    onClick={togglePlayPause}
                  >
                    <i className={`fa-solid ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
                  </button>
                </li>

                {/* Next */}
                <li className="nav-item me-4">
                  <button
                    className={`player-btn ${flashNext ? 'flash' : ''}`}
                    data-bs-toggle="tooltip"
                    onClick={() => flashButton(setFlashNext)}
                  >
                    <i className="fa-solid fa-forward-step"></i>
                  </button>
                </li>

                {/* Repeat */}
                <li className="nav-item me-4">
                  <button
                    className={`player-btn ${mode === 'repeat' ? 'active' : ''}`}
                    data-bs-toggle="tooltip"
                    title="Phát lại"
                    onClick={toggleRepeat}
                  >
                    <i className="fa-solid fa-repeat"></i>
                  </button>
                </li>
              </ul>

              {/* Thanh thời gian nằm ngoài ul nhưng căn giữa */}
              <div className="progress-time-bar-center position-absolute start-50 translate-middle-x mt-2">
                <span className="time-text">{formatTimeBar(currentTime)}</span>
                <div className="progress-bar-wrapper" ref={timeRef} onClick={handleClickTimeBar}>
                  <div className="progress-bar-fill" style={{ width: `${progressTime}%` }}></div>
                </div>
                <span className="time-text">{formatTimeBar(duration)}</span>
              </div>
            </div>

            {/* RIGHT ELEMENTS */}
            <div className="col-4 d-flex justify-content-end align-items-center gap-1">
              {/* Like button */}
              <button
                className={`icon-song-player-right-element-btn ${likedVisible ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Thích"
                onClick={() => setLikedVisible(prev => !prev)}
              >
                <i className="fas fa-heart"></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Lyris button */}
              <button
                className={`icon-song-player-right-element-btn ${lyricsVisible ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Lời bài hát"
                onClick={() => setLyricsVisible(prev => !prev)}
              >
                <i className="fas fa-microphone"></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Volume button */}
              <button
                className={`icon-song-player-right-element-btn ${flashVolume ? 'flash' : ''}`}
                data-bs-toggle="tooltip"
                title="Âm lượng"
                onClick={() => {
                  toggleVolume();
                  flashButton(setFlashVolume);
                }}
              >
                {progressVolume === 0 ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
              </button>

              {/* Volume bar */}
              <div className="volume-bar-wrapper" ref={volumeRef} onClick={handleClickVolumeBar}>
                <div className="volume-bar-fill" style={{ width: `${progressVolume}%` }}></div>
              </div>

              {/* Sidebar playlist button */}
              <button
                className={`icon-song-player-right-element-btn ${isShowPlayListSideBar ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Danh sách phát"
                onClick={() => {
                  togglePlayListSidebar();
                }}
              >
                <i className="fas fa-bars"></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Close button */}
              <button
                className={`icon-song-player-right-element-btn ${flashClose ? 'flash' : ''}`}
                data-bs-toggle="tooltip"
                title="Đóng"
                onClick={() => {
                  flashButton(setFlashClose);
                  if (!isPaused) setIsPaused(true);
                  setClosedSongPlayer(true);
                  closePlayListSideBar();
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SongPlayer;
