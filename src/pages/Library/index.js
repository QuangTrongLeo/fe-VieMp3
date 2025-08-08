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
import { apiPlayLists } from '~/api/apiURL/apiPlayLists';

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
  const [isOpen, setIsOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [coverPreview, setCoverPreview] = useState('');
  const [coverFile, setCoverFile] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({ playlistName, coverFile });
    setIsOpen(false);
    setPlaylistName('');
    setCoverFile(null);
    setCoverPreview('');
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
          <CreateCard content="Tạo playlist mới" onClick={() => setIsOpen(true)} />
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
        {isOpen && (
          <div className={cx('modal-overlay')}>
            <div className={cx('modal')}>
              <h4 className="text-center mb-3">Tạo Playlist mới</h4>

              <div className="text-center mb-3">
                <label htmlFor="coverInput" style={{ cursor: 'pointer' }}>
                  {coverPreview ? (
                    <img src={coverPreview} alt="Preview" className={cx('preview-img')} />
                  ) : (
                    <div className={cx('preview-placeholder')}>
                      <i className="fas fa-image fa-2x"></i>
                      <p>Chọn ảnh bìa</p>
                    </div>
                  )}
                </label>

                <input type="file" id="coverInput" accept="image/*" hidden onChange={handleImageChange} />
              </div>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nhập tên playlist"
                value={playlistName}
                onChange={e => setPlaylistName(e.target.value)}
              />

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Hủy
                </button>
                <button className={cx('custom-btn')} onClick={handleSubmit}>
                  Lưu
                </button>
              </div>
            </div>
          </div>
        )}
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
