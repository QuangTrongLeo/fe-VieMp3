import { Dropdown, initMDB } from 'mdb-ui-kit';
import React, { useState, useRef, useEffect } from 'react';
import { audios } from '~/assets';
import * as bootstrap from 'bootstrap';
import './SongPlayerUnder.scss';
import PlayerControls from '../PlayerControls';
import { Link } from 'react-router-dom';
initMDB({ Dropdown });

// const song = {
//   songId: '1',
//   songName: 'QUERRY',
//   artistName: 'QNT',
//   cover:
//     'data:image/jpeg;base64,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',
//   audio: audios.audioQuerry,
// };

const song = {
  songId: '1',
  songName: 'Từng Ngày Yêu Em',
  artistName: 'buitruonglinh',
  cover:
    'data:image/jpeg;base64,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',
  audio: audios.audioTungNgayYeuEm,
};

function SongPlayerUnder({ isShowPlayListSideBar, togglePlayListSidebar, closePlayListSideBar }) {
  const timeRef = useRef(null);
  const volumeRef = useRef(null);

  // audio
  const audioRef = useRef(null);
  const [durationAudio, setDurationAudio] = useState(0);

  const [isPaused, setIsPaused] = useState(true);
  const [progressTime, setProgressTime] = useState(0);
  const [progressVolume, setProgressVolume] = useState(100);
  const [previousVolume, setPreviousVolume] = useState(100);
  const [mode, setMode] = useState(null);
  const [flashPrev, setFlashPrev] = useState(false);
  const [flashNext, setFlashNext] = useState(false);
  // const [flashVolume, setFlashVolume] = useState(false);
  const [flashClose, setFlashClose] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedVisible, setLikedVisible] = useState(false);
  const [lyricsVisible, setLyricsVisible] = useState(false);
  const [closedSongPlayer, setClosedSongPlayer] = useState(false);

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

  ////////// USEEFFECT //////////
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

  // CẬP NHẬT THỜI GIAN HIỆN TẠI CỦA BÀI HÁT
  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= durationAudio) {
            clearInterval(interval);
            return durationAudio;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  //THỜI GIAN THANH FILL CỦA NHẠC
  useEffect(() => {
    setProgressTime((currentTime / durationAudio) * 100);
  }, [currentTime, durationAudio]);

  // PHÁT NHẠC
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.warn('Audio play failed:', err);
      });
    }
  }, [isPaused]);

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
              {/* Thumb */}
              <div class="navbar-brand me-2 mb-1 d-flex align-items-center">
                <img
                  src={song.cover}
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
                <Link className="link-song-hover-color" to={`/song/${song.songName}`}>
                  <h5 className="text-ellipsis">{song.songName}</h5>
                </Link>

                <Link className="link-artist-hover-color" to={`/artist/${song.artistName}`}>
                  <p className="text-ellipsis" style={{ fontSize: '14px' }}>
                    {song.artistName}
                  </p>
                </Link>
              </div>
            </div>

            {/* CENTER ELEMENTS */}

            <div className="col-5 d-flex justify-content-center position-relative">
              <PlayerControls
                audioRef={audioRef}
                song={song}
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
              {/* <button
                className={`icon-song-player-right-element-btn ${flashVolume ? 'flash' : ''}`}
                data-bs-toggle="tooltip"
                title="Âm lượng"
                onClick={() => {
                  toggleVolume();
                  flashButton(setFlashVolume);
                }}
              >
                {progressVolume === 0 ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
              </button> */}

              {/* Volume bar */}
              {/* <div className="volume-bar-wrapper" ref={volumeRef} onClick={handleClickVolumeBar}>
                <div className="volume-bar-fill" style={{ width: `${progressVolume}%` }}></div>
              </div> */}

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

export default SongPlayerUnder;
