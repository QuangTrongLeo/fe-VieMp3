import React, { useState } from 'react';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './ArtistDetail.module.scss';
import SongItem from '~/components/Components/SongItem';

const cx = classNames.bind(styles);

function ArtistDetail() {
  const hotSongs = [
    { name: 'Phía Sau Một Cô Gái', duration: '04:30', cover: '', artist: 'SOOBIN' },
    { name: 'Yêu Thương Ngày Đó', duration: '04:23', cover: '', artist: 'SOOBIN' },
    { name: 'Anh Đã Quen Với Cô Đơn', duration: '03:56', cover: '', artist: 'SOOBIN' },
    { name: 'Giá Như', duration: '02:24', cover: '', artist: 'SOOBIN' },
    { name: 'Tháng Năm', duration: '03:45', cover: '', artist: 'SOOBIN' },
    { name: 'Sunset in the City', duration: '03:44', cover: '', artist: 'SOOBIN' },
  ];

  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => {
    setIsFollowed(prev => !prev);
  };

  return (
    <div className={cx('artist-detail', 'py-4')}>
      {/* Header */}
      <div className={cx('artist-detail-header', 'd-flex', 'align-items-center', 'gap-4', 'mb-4')}>
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/6/1/f/8/61f8207e9284695692fddc839e8582ce.jpg"
          alt="SOOBIN"
          className={cx('avatar')}
        />
        <div>
          <h1 className={cx('artist-name')}>buitruonglinh</h1>
          <p className={cx('followers')}>525.397 người đang theo dõi</p>
          <button className={cx('follow-btn')} onClick={toggleFollow}>
            <i className={cx(isFollowed ? icons.iconCheck : icons.iconUserPlus, 'me-1')}></i>
            {isFollowed ? 'Đang theo dõi' : 'Theo dõi'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        {/* Mới phát hành */}
        <div className="col-md-4 mb-4">
          <h5 className={cx('section-title')}>Mới Phát Hành</h5>
          <div className={cx('release-card')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/7/3/7/8737cb85fcd8108109bdb819df8f0d5d.jpg"
              alt="Sẽ Quên Em Nhanh Thôi"
              className={cx('release-cover')}
            />
            <div className="mt-2">
              <strong>Sẽ Quên Em Nhanh Thôi (feat. Rhymastic)</strong>
              <p className="mb-0">SOOBIN, Rhymastic</p>
              <small>24/07/2025</small>
            </div>
          </div>
        </div>

        {/* Bài hát nổi bật */}
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className={cx('section-title')}>Bài Hát Nổi Bật</h5>
          </div>
          <div className="row">
            {hotSongs.map((song, idx) => (
              <div className="col-md-6 mb-3" key={idx}>
                <SongItem song={song} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetail;
