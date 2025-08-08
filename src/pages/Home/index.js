import React from 'react';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import { apiSongs, apiFavoriteSongsOfTheWeek, apiSuitableSongs } from '~/api/apiURL/apiSongs';
import { apiArtists, apiFavoriteArtists } from '~/api/apiURL/apiArtists';
import { apiAlbums } from '~/api/apiURL/apiAlbums';

const cx = classNames.bind(styles);

// const sortedNewSongs = [...apiSongs].sort((a, b) => b.songId - a.songId);
// const sortedFavoriteSongsOfTheWeek = [...apiFavoriteSongsOfTheWeek].sort((a, b) => b.likesOfWeek - a.likesOfWeek);
// const sortedTrendingArtists = [...apiArtists].sort((a, b) => b.followers - a.followers);
// const sortedHotAlbums = [...apiAlbums].sort((a, b) => b.favorites - a.favorites);
// const sortedFavoriteArtists = [...apiFavoriteArtists].sort((a, b) => new Date(b.followedAt) - new Date(a.followedAt));

function sortDesc(arr, field, isDate = false) {
  return [...arr].sort((a, b) => {
    if (isDate) {
      return new Date(b[field]) - new Date(a[field]);
    }
    return b[field] - a[field];
  });
}

function Home() {
  const sortedNewSongs = sortDesc(apiSongs, 'songId');
  const sortedFavoriteSongsOfTheWeek = sortDesc(apiFavoriteSongsOfTheWeek, 'likesOfWeek');
  const sortedTrendingArtists = sortDesc(apiArtists, 'followers');
  const sortedHotAlbums = sortDesc(apiAlbums, 'favorites');
  const sortedFavoriteArtists = sortDesc(apiFavoriteArtists, 'followedAt', true);

  return (
    <div className={cx('home-wrapper')}>
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className={cx('section-block')}>
        <h3>Bài hát mới ra</h3>
        <HorizontalScroll>
          {sortedNewSongs.slice(0, 10).map(song => (
            <RectangleCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
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
          {sortedTrendingArtists.map(artist => (
            <CircleCard
              key={artist.artistId}
              content={artist.artistName}
              cover={artist.avatar}
              href={`/artist/${artist.artistName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* HOT ALBUMS */}
      <section className={cx('section-block')}>
        <h3>Album hot</h3>
        <HorizontalScroll>
          {sortedHotAlbums.map(album => (
            <SquareCard
              key={album.albumId}
              content={album.albumName}
              desc={album.artistName}
              cover={album.cover}
              href={`/album/${album.albumName}`}
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
      <section className={cx('section-block')}>
        <h3>Nghệ sĩ yêu thích của bạn</h3>
        <HorizontalScroll>
          {sortedFavoriteArtists.map(artist => (
            <CircleCard
              key={artist.artistId}
              content={artist.artistName}
              cover={artist.avatar}
              href={`/artist/${artist.artistName}`}
            />
          ))}
        </HorizontalScroll>
      </section>
    </div>
  );
}

export default Home;
