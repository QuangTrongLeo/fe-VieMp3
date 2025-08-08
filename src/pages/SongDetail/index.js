import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SongDetail.module.scss';
import classNames from 'classnames/bind';
import icons from '~/assets/icons';
import { SongRow } from '~/components/Components/Row';
import LimitedList from '~/components/Components/LimitedList';
import { apiSongs } from '~/api/apiURL/apiSongs';

const cx = classNames.bind(styles);

function SongDetail() {
  const { songName } = useParams(); // Lấy tên bài hát từ URL
  const decodedSongName = decodeURIComponent(songName);

  // Tìm bài hát đang được chọn
  const currentSong = apiSongs.find(song => song.songName === decodedSongName);

  // Lọc các bài hát cùng ca sĩ, loại bỏ bài đang xem và sắp xếp theo createdAt giảm dần
  const relatedSongs = apiSongs
    .filter(song => song.artistName === currentSong?.artistName && song.songName !== currentSong?.songName)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Hàm render từng bài hát
  const renderItem = song => (
    <SongRow
      key={song.songId}
      cover={song.cover}
      song={song.songName}
      artist={song.artistName}
      album={song.albumName}
      audio={song.audio}
    />
  );

  // Nếu không tìm thấy bài hát
  if (!currentSong) {
    return <div className="text-center mt-5">Không tìm thấy bài hát</div>;
  }

  return (
    <div className={cx('container', 'py-4')}>
      <div className="row">
        {/* Ảnh + thông tin bài hát */}
        <div className={cx('col-12', 'col-md-4', 'mb-4', 'text-center')}>
          <img
            src={currentSong.cover}
            alt={currentSong.artistName}
            className={cx('img', 'img-fluid', 'rounded', 'shadow', 'song-cover')}
          />
          <h4 className={cx('song-name', 'mt-3')}>{currentSong.songName}</h4>
          <p className={cx('artist')}>{currentSong.artistName}</p>
          <p className={cx('update')}>Cập nhật: {new Date(currentSong.createAt).toLocaleDateString('vi-VN')}</p>
          <p className={cx('liked')}>{currentSong.favorites || 0} người yêu thích</p>
        </div>

        {/* Danh sách bài hát liên quan */}
        <div className="col-12 col-md-8">
          <h4 className={cx('subtitle', 'mb-3')}>Bài hát khác của {currentSong.artistName}</h4>

          {relatedSongs.length > 0 ? (
            <>
              {/* Header */}
              <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-3')}>
                <div className="col-6 d-flex align-items-center gap-2">
                  <i className={cx('song-row-icon-header', icons.iconMusic)}></i>
                  <span>Bài hát</span>
                </div>
                <div className="col-4 d-flex align-items-center">
                  <i className={cx('song-row-icon-header', icons.iconCompactDisc, 'me-2')}></i>
                  <span>Album</span>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                  <i className={cx('song-row-icon-header', icons.iconClock, 'me-2')}></i>
                  <span>Thời gian</span>
                </div>
              </div>

              {/* Danh sách bài hát */}
              <LimitedList
                items={relatedSongs}
                renderItem={renderItem}
                limit={8}
                showAllText="Hiện tất cả bài hát"
                showLessText="Ẩn bớt"
              />
            </>
          ) : (
            <p className={cx('text-center', 'mt-3', 'fw-bold')}>Không có bài hát liên quan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongDetail;
