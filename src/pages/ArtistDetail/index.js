import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './ArtistDetail.module.scss';
import SongItem from '~/components/Components/SongItem';
import LimitedList from '~/components/Components/LimitedList';
import { SquareCard } from '~/components/Components/Card';
import { apiSongs } from '~/api/apiURL/apiSongs';
import { apiFetchAlbumsByArtist } from '~/api/apiFetchs/apiFetchAlbums';
import { apiFetchArtistByName } from '~/api/apiFetchs/apiFetchArtists';

const cx = classNames.bind(styles);

function ArtistDetail() {
  const { artistName } = useParams();

  const [artist, setArtist] = useState(null);
  const [albumsByArtist, setAlbumsByArtist] = useState([]);
  const [artistLoading, setArtistLoading] = useState(true);
  const [albumsLoading, setAlbumsLoading] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [activeTab, setActiveTab] = useState('songs');

  const decodedArtistName = decodeURIComponent(artistName);

  // ===== FETCH ARTIST =====
  const handleGetArtist = useCallback(async () => {
    try {
      setArtistLoading(true);
      const data = await apiFetchArtistByName(decodedArtistName);
      setArtist(data);
    } catch (error) {
      console.error(error.message);
      setArtist(null);
    } finally {
      setArtistLoading(false);
    }
  }, [decodedArtistName]);

  useEffect(() => {
    handleGetArtist();
  }, [handleGetArtist]);

  // ===== FETCH ALBUMS BY ARTIST =====
  const handleAlbumsByArtist = useCallback(async () => {
    if (!artist?.id) return;

    try {
      setAlbumsLoading(true);
      const data = await apiFetchAlbumsByArtist(artist.id);
      setAlbumsByArtist(data);
    } catch (error) {
      console.error(error.message);
      setAlbumsByArtist([]);
    } finally {
      setAlbumsLoading(false);
    }
  }, [artist]);

  useEffect(() => {
    handleAlbumsByArtist();
  }, [handleAlbumsByArtist]);

  // ===== LOADING =====
  if (artistLoading) {
    return <div>Đang tải...</div>;
  }

  if (!artist) {
    return <div>Không tìm thấy nghệ sĩ...</div>;
  }

  // ===== SONGS (tạm thời vẫn dùng local) =====
  const songsOfArtist = apiSongs
    .filter(song => song.artistName.toLowerCase() === decodedArtistName.toLowerCase())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const latestSong = songsOfArtist[0];

  const toggleFollow = () => {
    setIsFollowed(prev => !prev);
  };

  return (
    <div className={cx('artist-detail', 'py-4')}>
      {/* ===== HEADER ===== */}
      <div className={cx('artist-detail-header', 'd-flex', 'align-items-center', 'gap-4', 'mb-4')}>
        <img src={artist.avatar || ''} alt={artist.name} className={cx('avatar')} />
        <div>
          <h1 className={cx('artist-name')}>{artist.name}</h1>
          <p className={cx('followers')}>{(artist.favorites ?? 0).toLocaleString('vi-VN')} người đang theo dõi</p>
          <button className={cx('follow-btn')} onClick={toggleFollow}>
            <i className={cx(isFollowed ? icons.iconCheck : icons.iconUserPlus, 'me-1')}></i>
            {isFollowed ? 'Đang theo dõi' : 'Theo dõi'}
          </button>
        </div>
      </div>

      {/* ===== TAB ===== */}
      <div className={cx('tab-header')}>
        <div className={cx('tab-item', { active: activeTab === 'songs' })} onClick={() => setActiveTab('songs')}>
          BÀI HÁT
        </div>
        <div className={cx('tab-item', { active: activeTab === 'albums' })} onClick={() => setActiveTab('albums')}>
          ALBUM
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="row">
        {/* ===== SONG TAB ===== */}
        {activeTab === 'songs' && (
          <>
            <div className="col-md-4 mb-4">
              <h5 className={cx('section-title', 'mb-4')}>Mới Phát Hành</h5>

              {latestSong && (
                <Link to={`/song/${latestSong.songName}`} className={cx('release-card-link')}>
                  <div className={cx('release-card')}>
                    <img src={latestSong.cover} alt={latestSong.songName} className={cx('release-cover')} />
                    <div className="mt-3">
                      <strong>{latestSong.songName}</strong>
                      <p className="mb-0">{latestSong.artistName}</p>
                      <small>{new Date(latestSong.createdAt).toLocaleDateString('vi-VN')}</small>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            <div className="col-md-8">
              <h5 className={cx('section-title')}>Bài Hát Nổi Bật</h5>

              <LimitedList
                items={songsOfArtist}
                limit={10}
                wrapInRow
                renderItem={(song, idx) => (
                  <div className="col-md-6 mb-3" key={idx}>
                    <SongItem song={song} />
                  </div>
                )}
              />
            </div>
          </>
        )}

        {/* ===== ALBUM TAB ===== */}
        {activeTab === 'albums' && (
          <>
            <h5 className={cx('section-title', 'mb-4')}>Albums của {artist.name}</h5>

            {albumsLoading ? (
              <div>Đang tải album...</div>
            ) : (
              <LimitedList
                items={albumsByArtist}
                limit={8}
                renderItem={album => (
                  <div key={album.id} className="col-6 col-sm-4 col-lg-3 mb-3 d-flex justify-content-center">
                    <SquareCard
                      content={album.title}
                      cover={album.cover}
                      href={`/album/${album.id}`}
                      icon={<i className="fas fa-list fa-3x"></i>}
                    />
                  </div>
                )}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ArtistDetail;
