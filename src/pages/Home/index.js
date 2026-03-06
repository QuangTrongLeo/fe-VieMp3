import React, { useEffect, useState, useCallback } from 'react';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useAuth } from '~/components/Components/AuthProvider';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import { apiFavoriteSongsOfTheWeek, apiSuitableSongs } from '~/api/urls/apiSongs';
import { apiGetArtist, apiGetArtists, apiGetMyFavoriteArtists } from '~/api/services/serviceArtists';
import { apiGetAlbums } from '~/api/services/serviceAlbums';
import { apiGetSongs } from '~/api/services/serviceSongs';

const cx = classNames.bind(styles);

function sortDesc(arr, field, isDate = false) {
  return [...arr].sort((a, b) => {
    if (isDate) {
      return new Date(b[field]) - new Date(a[field]);
    }
    return b[field] - a[field];
  });
}

function Home() {
  const { currentToken } = useAuth();
  const [newSongs, setNewSongs] = useState([]);
  const [trendingArtists, setTrendingArtists] = useState([]);
  const [hotAlbums, setHotAlbums] = useState([]);
  const [favoriteArtists, setFavoriteArtists] = useState([]);

  const handleTrendingArtists = async () => {
    try {
      const data = await apiGetArtists();
      // sort theo favorites giảm dần
      const sorted = sortDesc(data, 'favorites');
      setTrendingArtists(sorted);
    } catch (error) {
      console.error('Lỗi khi lấy nghệ sĩ phổ biến:', error);
    }
  };

  const handleHotAlbums = async () => {
    try {
      const data = await apiGetAlbums();
      const sorted = sortDesc(data, 'favorites');
      setHotAlbums(sorted);
    } catch (error) {
      console.error('Lỗi khi lấy album hot:', error);
    }
  };

  const handleNewSongs = async () => {
    try {
      const data = await apiGetSongs();
      const sortedSongs = sortDesc(data, 'createdAt');
      const songsWithArtist = await Promise.all(
        sortedSongs.map(async song => {
          try {
            const artist = await apiGetArtist(song.artistId);
            return {
              ...song,
              artistName: artist?.name,
            };
          } catch {
            return {
              ...song,
              artistName: 'KHông tìm thấy nghệ sĩ',
            };
          }
        })
      );

      setNewSongs(songsWithArtist);
    } catch (error) {
      console.error('Lỗi khi lấy bài hát mới:', error);
    }
  };

  const handleMyFavoriteArtists = useCallback(async () => {
    try {
      if (!currentToken) return;
      const data = await apiGetMyFavoriteArtists();
      const sorted = sortDesc(data, 'followedAt', true);
      setFavoriteArtists(sorted);
    } catch (error) {
      console.error('Lỗi khi lấy nghệ sĩ yêu thích:', error);
    }
  }, [currentToken]);

  useEffect(() => {
    handleTrendingArtists();
    handleHotAlbums();
    handleNewSongs();
    handleMyFavoriteArtists();
  }, [currentToken, handleMyFavoriteArtists]);

  const sortedFavoriteSongsOfTheWeek = sortDesc(apiFavoriteSongsOfTheWeek, 'favoritesOfWeek');

  return (
    <div className={cx('home-wrapper')}>
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className={cx('section-block')}>
        <h3>Bài hát mới ra</h3>
        <HorizontalScroll>
          {newSongs.slice(0, 18).map(song => (
            <RectangleCard
              key={song.id}
              content={song.title}
              desc={song.artistName}
              createdAt={song.createdAt}
              cover={song.cover}
              href={`/song/${song.id}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* FAVORITE SONGS OF THE WEEK */}
      <section className={cx('section-block')}>
        <h3>Top bài hát yêu thích của tuần</h3>
        <HorizontalScroll>
          {sortedFavoriteSongsOfTheWeek.map(song => (
            <SquareCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.songName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* TRENDING ARTISTS */}
      <section className={cx('section-block')}>
        <h3>Nghệ sĩ phổ biến</h3>
        <HorizontalScroll>
          {trendingArtists.map(artist => (
            <CircleCard key={artist.id} content={artist.name} cover={artist.avatar} href={`/artist/${artist.name}`} />
          ))}
        </HorizontalScroll>
      </section>

      {/* HOT ALBUMS */}
      <section className={cx('section-block')}>
        <h3>Album hot</h3>
        <HorizontalScroll>
          {hotAlbums.map(album => (
            <SquareCard
              key={album.id}
              content={album.title}
              desc={album.artistName}
              cover={album.cover}
              href={`/album/${album.id}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* SUITABLE SONGS */}
      <section className={cx('section-block')}>
        <h3>Phù hợp với bạn</h3>
        <HorizontalScroll>
          {apiSuitableSongs.map(song => (
            <SquareCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.songName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* YOUR FAVORITE ARTISTS */}
      {currentToken && favoriteArtists.length > 0 && (
        <section className={cx('section-block')}>
          <h3>Nghệ sĩ yêu thích của bạn</h3>
          <HorizontalScroll>
            {favoriteArtists.map(item => {
              const artist = item.artist;

              return (
                <CircleCard key={item.id} content={artist.name} cover={artist.avatar} href={`/artist/${artist.name}`} />
              );
            })}
          </HorizontalScroll>
        </section>
      )}
    </div>
  );
}

export default Home;
