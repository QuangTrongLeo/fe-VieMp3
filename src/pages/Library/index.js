import React, { useState } from 'react';
import { CreateCard, SquareCard } from '~/components/Components/Card';
import { SongRow } from '~/components/Components/Row';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Library.module.scss';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import { apiFavoriteSongs } from '~/api/apiURL/apiSongs';
import { apiFavoriteAlbums } from '~/api/apiURL/apiAlbums';
import apiPlayLists from '~/api/apiURL/apiPlayLists';

const cx = classNames.bind(styles);

const sortedFavoriteAlbums = [...apiFavoriteAlbums].sort((a, b) => b.playlistId - a.playlistId);
const sortedSongs = [...apiFavoriteSongs].sort((a, b) => b.listenedAt - a.listenedAt);

const renderItem = (song, index) => (
  <SongRow
    key={song.songId}
    cover={song.cover}
    song={song.songName}
    artist={song.artistName}
    album={song.albumName}
    audio={song.audio}
  />
);

function Library() {
  const [activeTab, setActiveTab] = useState('songs');

  return (
    <>
      <h1 className="text-center">
        <i class={icons.iconBook}></i>
        <span style={{ paddingLeft: '10px' }}>Thư viện</span>
      </h1>

      {/* PLAYLISTS */}
      <section className={cx('section-block')}>
        <h3>Playlist của bạn</h3>
        <div className="mb-3">
          <CreateCard content="Tạo playlist mới" />
        </div>
        <HorizontalScroll>
          {apiPlayLists.map(playlist => (
            <SquareCard
              content={playlist.playlistName}
              cover={playlist.cover}
              href={`/playlist/${playlist.playlistName}`}
              icon={<i className="fas fa-list fa-3x"></i>}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* SONGS & ALBUMS FAVORITE */}
      {/* TABS: SONGS / ALBUMS */}
      <section className={cx('section-block')}>
        <div className={cx('tab-header')}>
          <div className={cx('tab-item', { active: activeTab === 'songs' })} onClick={() => setActiveTab('songs')}>
            BÀI HÁT
          </div>
          <div className={cx('tab-item', { active: activeTab === 'albums' })} onClick={() => setActiveTab('albums')}>
            ALBUM
          </div>
        </div>

        {/* CONDITIONAL RENDER */}
        {activeTab === 'songs' && (
          <div className={cx('section-block-songs')}>
            {/* Header danh sách bài hát */}
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

            <LimitedList
              items={sortedSongs}
              renderItem={renderItem}
              limit={8}
              showAllText="Hiện tất cả bài hát"
              showLessText="Ẩn bớt"
            />
          </div>
        )}

        {activeTab === 'albums' && (
          <div className={cx('session-block-albums')}>
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
          </div>
        )}
      </section>
    </>
  );
}

export default Library;
