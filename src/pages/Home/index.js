import React, { useEffect, useState } from 'react';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useAuth } from '~/components/Components/AuthProvider';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import { apiSongs, apiFavoriteSongsOfTheWeek, apiSuitableSongs } from '~/api/urls/apiSongs';
import { apiGetArtists, apiGetMyFavoriteArtists } from '~/api/services/serviceArtists';
import { apiGetAlbums } from '~/api/services/serviceAlbums';

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

  const handleMyFavoriteArtists = async () => {
    try {
      if (!currentToken) return;
      const data = await apiGetMyFavoriteArtists();
      const sorted = sortDesc(data, 'followedAt', true);
      setFavoriteArtists(sorted);
    } catch (error) {
      console.error('Lỗi khi lấy nghệ sĩ yêu thích:', error);
    }
  };

  useEffect(() => {
    handleTrendingArtists();
    handleHotAlbums();

    if (currentToken) {
      handleMyFavoriteArtists();
    }
  }, [currentToken]);

  const sortedNewSongs = sortDesc(apiSongs, 'createdAt', true);
  const sortedFavoriteSongsOfTheWeek = sortDesc(apiFavoriteSongsOfTheWeek, 'favoritesOfWeek');

  return (
    <div className={cx('home-wrapper')}>
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className={cx('section-block')}>
        <h3>Bài hát mới ra</h3>
        <HorizontalScroll>
          {sortedNewSongs.slice(0, 18).map(song => (
            <RectangleCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
              createdAt={song.createdAt}
              cover={song.cover}
              href={`/song/${song.songName}`}
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
