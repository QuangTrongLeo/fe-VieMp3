// src/components/PlayerControls.jsx
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlayerControls.module.scss';

const cx = classNames.bind(styles);

function PlayerControls({
  audioRef,
  song,
  mode,
  isPaused,
  flashPrev,
  flashNext,
  progressTime,
  currentTime,
  durationAudio,
  timeRef,
  toggleShuffle,
  toggleRepeat,
  togglePlayPause,
  flashButton,
  setFlashPrev,
  setFlashNext,
  formatTimeBar,
  handleClickTimeBar,
  setDurationAudio,
  onEndedAudio,
}) {
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      if (!isNaN(duration)) {
        setDurationAudio(duration);
      }
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={song.audio} onLoadedMetadata={handleLoadedMetadata} onEnded={onEndedAudio} />

      {/* Control buttons */}
      <ul className="navbar-nav flex-row d-none d-md-flex">
        {/* Shuffle */}
        <li className="nav-item me-4">
          <button
            className={cx('player-btn', { active: mode === 'shuffle' })}
            data-bs-toggle="tooltip"
            title="Phát ngẫu nhiên"
            onClick={toggleShuffle}
          >
            <i className="fa-solid fa-shuffle"></i>
          </button>
        </li>

        {/* Previous */}
        <li className="nav-item me-4">
          <button
            className={cx('player-btn', { flash: flashPrev })}
            data-bs-toggle="tooltip"
            title="Bài trước"
            onClick={() => flashButton(setFlashPrev)}
          >
            <i className="fa-solid fa-backward-step"></i>
          </button>
        </li>

        {/* Play/Pause */}
        <li className="nav-item me-4">
          <button
            className={cx('play-pause-btn')}
            data-bs-toggle="tooltip"
            title={isPaused ? 'Phát' : 'Tạm dừng'}
            onClick={togglePlayPause}
          >
            <i className={`fa-solid ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
          </button>
        </li>

        {/* Next */}
        <li className="nav-item me-4">
          <button
            className={cx('player-btn', { flash: flashNext })}
            data-bs-toggle="tooltip"
            title="Bài tiếp theo"
            onClick={() => flashButton(setFlashNext)}
          >
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </li>

        {/* Repeat */}
        <li className="nav-item me-4">
          <button
            className={cx('player-btn', { active: mode === 'repeat' })}
            title="Phát lại"
            onClick={toggleRepeat}
            style={{ position: 'relative' }}
          >
            <i className="fa-solid fa-repeat"></i>
            {mode === 'repeat' && <span className={cx('repeat-badge')}>1</span>}
          </button>
        </li>
      </ul>

      {/* Time Bar */}
      <div className={cx('progress-time-bar-center', 'position-absolute', 'start-50', 'translate-middle-x', 'mt-2')}>
        <span className={cx('time-text')}>{formatTimeBar(currentTime)}</span>

        <div className={cx('progress-bar-wrapper')} ref={timeRef} onClick={handleClickTimeBar}>
          <div className={cx('progress-bar-fill')} style={{ width: `${progressTime}%` }}></div>
        </div>

        <span className={cx('time-text')}>{formatTimeBar(durationAudio)}</span>
      </div>
    </>
  );
}

export default PlayerControls;
