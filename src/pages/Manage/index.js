import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Manage.module.scss';
import icons from '~/assets/icons';

import { apiGetArtists } from '~/api/services/serviceArtists';
import { apiGetAlbums } from '~/api/services/serviceAlbums';
import { apiGetSongs } from '~/api/services/serviceSongs';
import { apiGetUsers } from '~/api/services/serviceUsers';

const cx = classNames.bind(styles);

function Manage() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsRes, artistsRes, albumsRes, usersRes] = await Promise.all([
          apiGetSongs(),
          apiGetArtists(),
          apiGetAlbums(),
          apiGetUsers(),
        ]);

        setSongs(songsRes || []);
        setArtists(artistsRes || []);
        setAlbums(albumsRes || []);
        setUsers(usersRes || []);
      } catch (error) {
        console.error('Fetch dashboard data error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className={cx('header')}>
        <h2 className="fw-bold">🎵 Music Platform Management</h2>
        <p className="text-muted">Quản lý bài hát, nghệ sĩ, album và theo dõi hoạt động của nền tảng âm nhạc.</p>
      </div>

      {/* System Overview */}
      <div className="row g-4 mb-4">
        {/* Songs */}
        <div className="col-lg-3 col-md-6">
          <div className={cx('statCard', 'songs')}>
            <div>
              <p className="text-muted mb-1">Total Songs</p>
              <h3>{songs.length}</h3>
            </div>
            <i className={`${icons.iconMusic} ${cx('icon')}`}></i>
          </div>
        </div>

        {/* Artists */}
        <div className="col-lg-3 col-md-6">
          <div className={cx('statCard', 'artists')}>
            <div>
              <p className="text-muted mb-1">Total Artists</p>
              <h3>{artists.length}</h3>
            </div>
            <i className={`${icons.iconStar} ${cx('icon')}`}></i>
          </div>
        </div>

        {/* Albums */}
        <div className="col-lg-3 col-md-6">
          <div className={cx('statCard', 'albums')}>
            <div>
              <p className="text-muted mb-1">Total Albums</p>
              <h3>{albums.length}</h3>
            </div>
            <i className={`${icons.iconCompactDisc} ${cx('icon')}`}></i>
          </div>
        </div>

        {/* Users */}
        <div className="col-lg-3 col-md-6">
          <div className={cx('statCard', 'users')}>
            <div>
              <p className="text-muted mb-1">Total Users</p>
              <h3>{users.length}</h3>
            </div>
            <i className={`${icons.iconUser} ${cx('icon')}`}></i>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row g-4">
        {/* Recent Activity */}
        <div className="col-lg-6">
          <div className={cx('cardBox')}>
            <h5 className="mb-3">Recent Activity</h5>

            <div className={cx('activityItem')}>
              <i className={`${icons.iconMusic}`}></i>
              <span>Bài hát mới vừa được thêm vào hệ thống</span>
            </div>

            <div className={cx('activityItem')}>
              <i className={`${icons.iconStar}`}></i>
              <span>Nghệ sĩ vừa cập nhật album mới</span>
            </div>

            <div className={cx('activityItem')}>
              <i className={`${icons.iconUser}`}></i>
              <span>Người dùng mới vừa đăng ký tài khoản</span>
            </div>

            <div className={cx('activityItem')}>
              <i className={`${icons.iconCompactDisc}`}></i>
              <span>Album mới vừa được tạo</span>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="col-lg-6">
          <div className={cx('cardBox')}>
            <h5 className="mb-3">AI Music Insight</h5>

            <p className="text-muted mb-3">Phân tích hành vi nghe nhạc của người dùng để đề xuất nội dung phù hợp.</p>

            <ul className={cx('insightList')}>
              <li>🎧 Người dùng đang nghe nhiều nhạc Pop và Ballad</li>
              <li>📈 Xu hướng tuần này: Indie tăng 15%</li>
              <li>🔥 Bài hát được nghe nhiều nhất hôm nay</li>
              <li>🤖 AI đang phân tích lịch sử nghe để gợi ý bài hát</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={cx('cardBox', 'mt-4')}>
        <h5 className="mb-3">Quick Actions</h5>

        <div className="row g-3">
          <div className="col-md-3">
            <button className="btn btn-primary w-100">
              <i className={`${icons.iconCirclePlus} me-2`}></i>
              Thêm bài hát
            </button>
          </div>

          <div className="col-md-3">
            <button className="btn btn-warning w-100">
              <i className={`${icons.iconCirclePlus} me-2`}></i>
              Thêm nghệ sĩ
            </button>
          </div>

          <div className="col-md-3">
            <button className="btn btn-success w-100">
              <i className={`${icons.iconCirclePlus} me-2`}></i>
              Tạo album
            </button>
          </div>

          <div className="col-md-3">
            <button className="btn btn-dark w-100">
              <i className={`${icons.iconCirclePlus} me-2`}></i>
              Quản lý thể loại
            </button>
          </div>
        </div>
      </div>

      {/* Top Songs */}
      <div className={cx('cardBox', 'mt-4')}>
        <h5 className="mb-3">Top Songs</h5>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Bài hát</th>
              <th>Nghệ sĩ</th>
              <th>Lượt thích</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Hãy trao cho anh</td>
              <td>Sơn Tùng MTP</td>
              <td>12400</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Nơi này có anh</td>
              <td>Sơn Tùng MTP</td>
              <td>9800</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Em của ngày hôm qua</td>
              <td>Sơn Tùng MTP</td>
              <td>8600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;
