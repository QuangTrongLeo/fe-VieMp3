import React from 'react';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './CreateCard.module.scss';

const cx = classNames.bind(styles);

function CreateCard({ content }) {
  return (
    <button className={cx('create-card')}>
      <div className={cx('create-icon')}>
        <i className={icons.iconCirclePlus}></i>
      </div>
      <div className={cx('create-content')}>{content}</div>
    </button>
  );
}

export default CreateCard;
