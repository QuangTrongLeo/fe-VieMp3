import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './ArtistDetail.module.scss';
import SongItem from '~/components/Components/SongItem';
import LimitedList from '~/components/Components/LimitedList';
import { SquareCard } from '~/components/Components/Card';
import { apiAlbums } from '~/api/apiURL/apiAlbums';
import { apiSongs } from '~/api/apiURL/apiSongs';
import { apiFetchArtistByName } from '~/api/apiFetchs/apiFetchArtists';

const cx = classNames.bind(styles);

function ArtistDetail() {
  const { artistName } = useParams();
  const [artist, setArtist] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const [activeTab, setActiveTab] = useState('songs');

  const decodedArtistName = decodeURIComponent(artistName);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const data = await apiFetchArtistByName(artistName);
        setArtist(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchArtist();
  }, [artistName]);

  // Nếu artist chưa có dữ liệu => render loading
  if (!artist) {
    return <div>Không tìm thấy nghệ sĩ...</div>;
  }

  // Lọc albums và songs dựa trên artistName (nếu cần)
  const albumsOfArtist = apiAlbums
    .filter(album => album.artistName.toLowerCase() === decodedArtistName.toLowerCase())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const songsOfArtist = apiSongs
    .filter(song => song.artistName.toLowerCase() === decodedArtistName.toLowerCase())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const latestSong = [...songsOfArtist].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

  const toggleFollow = () => {
    setIsFollowed(prev => !prev);
  };

  return (
    <div className={cx('artist-detail', 'py-4')}>
      {/* Header */}
      <div className={cx('artist-detail-header', 'd-flex', 'align-items-center', 'gap-4', 'mb-4')}>
        <img src={artist.avatar || ''} alt={artist.name || decodedArtistName} className={cx('avatar')} />
        <div>
          <h1 className={cx('artist-name')}>{artist.name || decodedArtistName}</h1>
          <p className={cx('followers')}>{(artist.followers ?? 0).toLocaleString('vi-VN')} người đang theo dõi</p>
          <button className={cx('follow-btn')} onClick={toggleFollow}>
            <i className={cx(isFollowed ? icons.iconCheck : icons.iconUserPlus, 'me-1')}></i>
            {isFollowed ? 'Đang theo dõi' : 'Theo dõi'}
          </button>
        </div>
      </div>

      {/* Tab header */}
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
            {/* Mới phát hành */}
            <div className="col-md-4 mb-4">
              <h5 className={cx('section-title', 'mb-4')}>Mới Phát Hành</h5>
              {latestSong && (
                <Link to={`/song/${latestSong.songName}`} className={cx('release-card-link')}>
                  <div className={cx('release-card')}>
                    <img src={latestSong.cover} alt={latestSong.songName} className={cx('release-cover')} />
                    <div className="mt-3">
                      <strong className={cx('release-song-name')}>{latestSong.songName}</strong>
                      <p className="mb-0">{latestSong.artistName}</p>
                      <small>{new Date(latestSong.createdAt).toLocaleDateString('vi-VN')}</small>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Bài hát nổi bật */}
            <div className="col-md-8">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className={cx('section-title')}>Bài Hát Nổi Bật</h5>
              </div>
              <LimitedList
                items={songsOfArtist}
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
            <h5 className={cx('section-title', 'mb-4')}>Albums của {artist.name}</h5>
            <LimitedList
              items={albumsOfArtist}
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
