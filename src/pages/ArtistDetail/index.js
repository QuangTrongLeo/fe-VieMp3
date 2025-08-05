import React, { useState } from 'react';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './ArtistDetail.module.scss';
import SongItem from '~/components/Components/SongItem';
import { audios } from '~/assets';
import LimitedList from '~/components/Components/LimitedList';
import { SquareCard } from '~/components/Components/Card';

const cx = classNames.bind(styles);

const apiArtistAlbums = [
  {
    albumId: '1',
    albumName: 'Sơn Tùng - MTP',
    cover:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStpZEMzpTrUEK0QZHAG48NV3sMuoCO0ReV2JEIY7ot7KnICpz7shfmmJFKmNF3Og1tN9JWWJqD6m3vKg4LB_U_Sqy0TTpQdKmMO67ehT1JQ',
  },
  {
    albumId: '2',
    albumName: 'Mono',
  },
  {
    albumId: '3',
    albumName: 'Hiếu Thứ 2',
  },
  {
    albumId: '4',
    albumName: 'Bình Gold',
  },
  {
    albumId: '5',
    albumName: 'QNT',
    cover: 'https://i.scdn.co/image/ab6761610000e5ebc29f15a5b9b46fed41a0f2af',
  },
];

const hotSongs = [
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

const sortedFavoriteAlbums = [...apiArtistAlbums].sort((a, b) => b.playlistId - a.playlistId);

function ArtistDetail() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [activeTab, setActiveTab] = useState('songs');

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

      <div className={cx('tab-header')}>
        <div className={cx('tab-item', { active: activeTab === 'songs' })} onClick={() => setActiveTab('songs')}>
          BÀI HÁT
        </div>
        <div className={cx('tab-item', { active: activeTab === 'albums' })} onClick={() => setActiveTab('albums')}>
          ALBUM
        </div>
      </div>

      {/* CONTENT */}
      <div className="row">
        {activeTab === 'songs' && (
          <>
            {/* SONGS */}
            {/* Mới phát hành */}
            <div className="col-md-4 mb-4">
              <h5 className={cx('section-title', 'mb-4')}>Mới Phát Hành</h5>
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
              <LimitedList
                items={hotSongs}
                limit={10}
                wrapInRow={true}
                renderItem={(song, idx) => (
                  <div className="col-md-6 mb-3" key={idx}>
                    <SongItem song={song} />
                  </div>
                )}
              />
            </div>
          </>
        )}

        {activeTab === 'albums' && (
          <>
            {/* ALBUMS */}
            <h5 className={cx('section-title', 'mb-4')}>Albums của buitruonglinh</h5>
            <LimitedList
              items={sortedFavoriteAlbums}
              limit={8}
              renderItem={album => (
                <div key={album.albumId} className="col-6 col-sm-4 col-lg-3 mb-3 d-flex justify-content-center">
                  <SquareCard
                    content={album.albumName}
                    cover={album.cover}
                    href={`/album/${album.albumName}`}
                    icon={<i className="fas fa-list fa-3x"></i>}
                  />
                </div>
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ArtistDetail;
