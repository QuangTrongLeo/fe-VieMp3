import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlayButton.module.scss';

const cx = classNames.bind(styles);

function PlayButton({ onClick }) {
  return (
    <button className={cx('play-btn')} onClick={onClick}>
      <i className="fas fa-play"></i>
    </button>
  );
}

export default PlayButton;
