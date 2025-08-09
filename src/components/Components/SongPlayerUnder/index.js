import { Dropdown, initMDB } from 'mdb-ui-kit';
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import icons from '~/assets/icons';
import * as bootstrap from 'bootstrap';
import './SongPlayerUnder.scss';
import PlayerControls from '../PlayerControls';
import { Link } from 'react-router-dom';
import { apiSongs } from '~/api/apiURL/apiSongs';
initMDB({ Dropdown });

function SongPlayerUnder({ isShowPlayListSideBar, togglePlayListSidebar, closePlayListSideBar }) {
  const { songName } = useParams();

  const timeRef = useRef(null);

  // audio
  const audioRef = useRef(null);
  const [durationAudio, setDurationAudio] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);

  const [isPaused, setIsPaused] = useState(true);
  const [progressTime, setProgressTime] = useState(0);
  const [mode, setMode] = useState(null);
  const [flashPrev, setFlashPrev] = useState(false);
  const [flashNext, setFlashNext] = useState(false);
  const [flashClose, setFlashClose] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedVisible, setLikedVisible] = useState(false);
  const [lyricsVisible, setLyricsVisible] = useState(false);
  const [closedSongPlayerUnder, setClosedSongPlayerUnder] = useState(true);

  ////////// TOGGLE //////////
  const toggleShuffle = () => {
    setMode(prev => (prev === 'shuffle' ? null : 'shuffle'));
  };

  const toggleRepeat = () => {
    setMode(prev => (prev === 'repeat' ? null : 'repeat'));
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPaused) {
        // Nếu đang ở cuối bài → reset về 0
        if (audioRef.current.currentTime === audioRef.current.duration) {
          audioRef.current.currentTime = 0;
          setCurrentTime(0);
          setProgressTime(0);
        }

        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPaused(prev => !prev);
    }
  };

  ////////// USEEFFECT //////////
  // Tooltip init (chỉ chạy 1 lần khi component mount)
  // Init tooltip (chạy 1 lần)
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(el => {
      const tooltip = new bootstrap.Tooltip(el, {
        placement: 'top',
        fallbackPlacements: [],
        delay: { show: 0, hide: 0 },
      });
      el.addEventListener('mouseleave', () => tooltip.hide());
      return tooltip;
    });
    return () => tooltipList.forEach(t => t.dispose());
  }, []);

  // Cập nhật nội dung tooltip khi play/pause thay đổi
  useEffect(() => {
    const el = document.querySelector('.play-pause-btn');
    if (!el) return;
    const tooltip = bootstrap.Tooltip.getInstance(el);
    if (tooltip) {
      el.setAttribute('data-bs-title', isPaused ? 'Phát' : 'Tạm dừng');
      tooltip.setContent({ '.tooltip-inner': isPaused ? 'Phát' : 'Tạm dừng' });
    }
  }, [isPaused]);

  // Cập nhật progress khi currentTime thay đổi
  useEffect(() => {
    setProgressTime((currentTime / durationAudio) * 100 || 0);
  }, [currentTime, durationAudio]);

  // Lấy bài hát từ URL
  useEffect(() => {
    if (!songName) return;
    const foundSong = apiSongs.find(song => song.songName.toLowerCase() === decodeURIComponent(songName).toLowerCase());
    setCurrentSong(foundSong || null);
  }, [songName]);

  // Xử lý khi đổi bài hoặc trạng thái phát thay đổi
  useEffect(() => {
    if (!audioRef.current) return;

    if (!currentSong) {
      setClosedSongPlayerUnder(true);
      return;
    }

    setClosedSongPlayerUnder(false);

    // Khi đổi bài -> auto play
    setIsPaused(false); // <-- đặt lại trạng thái
    const playAfterLoad = () => {
      audioRef.current.currentTime = 0; // reset thời gian về 0
      audioRef.current.play().catch(err => console.warn('Audio auto-play failed:', err));
      audioRef.current.removeEventListener('loadedmetadata', playAfterLoad);
    };
    audioRef.current.addEventListener('loadedmetadata', playAfterLoad);
  }, [currentSong]);

  if (!currentSong) {
    // Không render player khi chưa có bài
    return null;
  }

  ////////// CONST //////////
  // Flash btn
  const flashButton = setter => {
    setter(true);
    setTimeout(() => setter(false), 300); // Nháy màu 300ms
  };

  const handleAudioEnded = () => {
    if (mode === 'repeat') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setCurrentTime(0);
      setProgressTime(0);
    } else {
      setIsPaused(true); // Dừng nhạc nếu không repeat
    }
  };

  // TIME BAR
  const handleClickTimeBar = e => {
    const bar = timeRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = durationAudio * percent;

    setCurrentTime(newTime); // Cập nhật UI
    if (audioRef.current) {
      audioRef.current.currentTime = newTime; // Cập nhật thời gian thật trong audio
    }
  };

  const handleClosePlayerUnder = () => {
    flashButton(setFlashClose);
    if (!isPaused) setIsPaused(true);
    setClosedSongPlayerUnder(true);
    closePlayListSideBar();
  };

  const formatTimeBar = seconds => {
    seconds = Math.floor(seconds);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-bottom navbar-song-player ${
          closedSongPlayerUnder ? 'slide-down-song-player' : ''
        }`}
      >
        <div class="container-fluid">
          <div className="row w-100">
            {/* LEFT ELEMENTS */}
            <div className="col-4 d-flex align-items-center">
              {/* Thumb */}
              <div class="navbar-brand me-2 mb-1 d-flex align-items-center">
                <img
                  src={currentSong.cover}
                  height="60"
                  alt="VieMp3"
                  loading="lazy"
                  style={{
                    marginTop: '2px',
                    border: '2px solid var(--black-color-light-1)',
                    borderRadius: '6px',
                  }}
                />
              </div>

              <div className="song-info-wrapper">
                <Link className="link-song-hover-color" to={`/song/${currentSong.songName}`}>
                  <h5 className="text-ellipsis">{currentSong.songName}</h5>
                </Link>

                <Link className="link-artist-hover-color" to={`/artist/${currentSong.artistName}`}>
                  <p className="text-ellipsis" style={{ fontSize: '14px', marginTop: '2%' }}>
                    {currentSong.artistName}
                  </p>
                </Link>
              </div>
            </div>

            {/* CENTER ELEMENTS */}

            <div className="col-5 d-flex justify-content-center position-relative">
              <PlayerControls
                audioRef={audioRef}
                song={currentSong}
                mode={mode}
                isPaused={isPaused}
                flashPrev={flashPrev}
                flashNext={flashNext}
                progressTime={progressTime}
                currentTime={currentTime}
                durationAudio={durationAudio}
                timeRef={timeRef}
                toggleShuffle={toggleShuffle}
                toggleRepeat={toggleRepeat}
                togglePlayPause={togglePlayPause}
                flashButton={flashButton}
                setFlashPrev={setFlashPrev}
                setFlashNext={setFlashNext}
                formatTimeBar={formatTimeBar}
                handleClickTimeBar={handleClickTimeBar}
                setDurationAudio={setDurationAudio}
                setCurrentTime={setCurrentTime}
                setProgressTime={setProgressTime}
                onEndedAudio={handleAudioEnded}
              />
            </div>

            {/* RIGHT ELEMENTS */}
            <div className="col-3 d-flex justify-content-end align-items-center gap-1">
              {/* Like button */}
              <button
                className={`icon-song-player-right-element-btn ${likedVisible ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Thích"
                onClick={() => setLikedVisible(prev => !prev)}
              >
                <i className={icons.iconHeart}></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Lyris button */}
              <button
                className={`icon-song-player-right-element-btn ${lyricsVisible ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Lời bài hát"
                onClick={() => setLyricsVisible(prev => !prev)}
              >
                <i className={icons.iconMicrophone}></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Sidebar playlist button */}
              <button
                className={`icon-song-player-right-element-btn ${isShowPlayListSideBar ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                title="Danh sách phát"
                onClick={() => {
                  togglePlayListSidebar();
                }}
              >
                <i className={icons.iconBars}></i>
                <span className="dot-indicator"></span>
              </button>

              {/* Close button */}
              <button
                className={`icon-song-player-right-element-btn ${flashClose ? 'flash' : ''}`}
                data-bs-toggle="tooltip"
                title="Đóng"
                onClick={() => {
                  handleClosePlayerUnder();
                }}
              >
                <i class={icons.iconXMark}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SongPlayerUnder;
