import React from 'react';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import { apiNewSongs, apiFavoriteSongsOfTheWeek, apiSuitableSongs } from '~/api/apiURL/apiSongs';
import { apiFavoriteArtists, apiYourFavoriteArtists } from '~/api/apiURL/apiArtists';
import { apiHotAlbums } from '~/api/apiURL/apiAlbums';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('home-wrapper')}>
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className={cx('section-block')}>
        <h3>Bài hát mới ra</h3>
        <HorizontalScroll>
          {apiNewSongs
            .sort((a, b) => b.songId - a.songId)
            .slice(0, 10)
            .map(song => (
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
          {apiFavoriteSongsOfTheWeek.map(song => (
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

      {/* FAVORITE ARTISTS */}
      <section className={cx('section-block')}>
        <h3>Nghệ sĩ phổ biến</h3>
        <HorizontalScroll>
          {apiFavoriteArtists.map(artist => (
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
          {apiHotAlbums.map(album => (
            <SquareCard
              key={album.albumId}
              content={album.albumName}
              desc={album.artistName}
              cover={album.cover}
              href={`/song/${album.albumName}`}
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
          {apiYourFavoriteArtists.map(artist => (
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
