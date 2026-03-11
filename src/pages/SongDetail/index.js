import React, { useState, useEffect } from 'react';
import styles from './SongDetail.module.scss';
import classNames from 'classnames/bind';
import { SongRow } from '~/components/Components/Row';
import { apiGetArtist } from '~/api/services/serviceArtists';
import LimitedList from '~/components/Components/LimitedList';
import { apiGetSongsByArtist } from '~/api/services/serviceSongs';

const cx = classNames.bind(styles);

function SongDetail({ currentSong }) {
  // Lấy bài hát
  const song = currentSong;

  const [artist, setArtist] = useState(null);
  // const [song, setSong] = useState(null);
  const [relatedSongs, setRelatedSongs] = useState([]);

  const [artistLoading, setArtistLoading] = useState(false);
  const [songsLoading, setSongsLoading] = useState(false);

  // Lấy artist
  useEffect(() => {
    const fetchArtist = async () => {
      if (!song?.artistId) return;

      try {
        setArtistLoading(true);
        const data = await apiGetArtist(song.artistId);
        setArtist(data);
      } catch (error) {
        console.error(error);
      } finally {
        setArtistLoading(false);
      }
    };

    fetchArtist();
  }, [song]);

  // Lấy bài hát cùng artist
  useEffect(() => {
    const fetchSongs = async () => {
      if (!song?.artistId) return;

      try {
        setSongsLoading(true);

        const data = await apiGetSongsByArtist(song.artistId);

        const filteredSongs = data
          .filter(item => item.id !== song.id)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setRelatedSongs(filteredSongs);
      } catch (error) {
        console.error(error);
        setRelatedSongs([]);
      } finally {
        setSongsLoading(false);
      }
    };

    fetchSongs();
  }, [song]);

  const renderItem = item => (
    <SongRow
      key={item.id}
      cover={item.cover}
      song={item.title}
      artist={artist?.name || ''}
      album=""
      audio={item.audio}
    />
  );

  if (!song) {
    return <div className="text-center mt-5">Không tìm thấy bài hát</div>;
  }

  return (
    <div className={cx('container', 'py-4')}>
      <div className="row">
        <div className={cx('col-12', 'col-md-4', 'mb-4', 'text-center')}>
          <img
            src={song.cover}
            alt={song.title}
            className={cx('img', 'img-fluid', 'rounded', 'shadow', 'song-cover')}
          />

          <h3 className={cx('song-name', 'mt-3')}>{song.title}</h3>

          <p className={cx('artist')}>{artistLoading ? 'Đang tải nghệ sĩ...' : artist?.name}</p>

          <p className={cx('createdAt')}>Phát hành: {new Date(song.createdAt).toLocaleDateString('vi-VN')}</p>

          <p className={cx('favorited')}>{(song.favorites || 0).toLocaleString('vi-VN')} người yêu thích</p>
        </div>

        <div className="col-12 col-md-8">
          <h5 className={cx('subtitle', 'mb-3', 'text-center')}>Bài hát khác của "{artist?.name}"</h5>

          {songsLoading ? (
            <div className="text-center">Đang tải danh sách bài hát...</div>
          ) : relatedSongs.length > 0 ? (
            <LimitedList
              items={relatedSongs}
              renderItem={renderItem}
              limit={8}
              showAllText="Hiện tất cả bài hát"
              showLessText="Ẩn bớt"
            />
          ) : (
            <p className={cx('text-center', 'mt-3', 'fw-bold')}>Không có bài hát liên quan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongDetail;
