import React from 'react';
import classNames from 'classnames/bind';
import styles from './GenreDetail.module.scss';
import SongItem from '~/components/Components/SongItem';
import LimitedList from '~/components/Components/LimitedList';
import { apiHotSongsOfArtist } from '~/api/apiURL/apiSongs';
import { apiPlayListInfo } from '~/api/apiURL/apiPlayLists';

const cx = classNames.bind(styles);

function PlayListDetail() {
  return (
    <div className={cx('genre-wrapper', 'py-4')}>
      {/* Header */}
      <div className={cx('genre-header', 'd-flex', 'align-items-center', 'mb-4')}>
        <img src={apiPlayListInfo.cover} alt="genre-cover" className={cx('genre-cover')} />

        <div className="ms-4">
          <h2 className={cx('genre-title')}>{apiPlayListInfo.playlistName}</h2>
          <p className={cx('genre-description')}>Tuyển tập các bài hát trong playlist {apiPlayListInfo.playlistName}</p>
          <p className={cx('genre-meta')}>{apiPlayListInfo.totalSongs} bài hát</p>
        </div>
      </div>

      {/* Danh sách bài hát */}
      <h5 className={cx('section-title')}>Bài Hát Nổi Bật</h5>
      <LimitedList
        items={apiHotSongsOfArtist.sort((a, b) => b.songId - a.songId)}
        limit={8}
        wrapInRow={true}
        renderItem={(song, idx) => (
          <div className="col-md-6 mb-3" key={idx}>
            <SongItem song={song} />
          </div>
        )}
      />
    </div>
  );
}

export default PlayListDetail;
