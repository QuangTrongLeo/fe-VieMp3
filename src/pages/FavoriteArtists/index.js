import React from 'react';
import { CircleCard } from '~/components/Components/Card';
import styles from './FavoriteArtists.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';

const cx = classNames.bind(styles);

const apiYourFavoriteArtists = [
  {
    artistId: '1',
    avatar: 'https://example.com/son-tung.jpg',
    artistName: 'Sơn Tùng - MTP',
  },
  {
    artistId: '2',
    avatar: 'https://example.com/vu.jpg',
    artistName: 'Vũ.',
  },
  {
    artistId: '3',
    avatar: 'https://example.com/obito.jpg',
    artistName: 'Obito',
  },
  {
    artistId: '4',
    avatar: 'https://example.com/den-vau.jpg',
    artistName: 'Đen Vâu',
  },
  {
    artistId: '5',
    avatar: 'https://example.com/binz.jpg',
    artistName: 'Binz',
  },
  {
    artistId: '6',
    avatar: 'https://example.com/soobin.jpg',
    artistName: 'SOOBIN',
  },
  {
    artistId: '7',
    avatar: 'https://example.com/vu-2.jpg',
    artistName: 'Vũ.',
  },
  {
    artistId: '8',
    avatar: 'https://example.com/obito-2.jpg',
    artistName: 'Obito',
  },
  {
    artistId: '9',
    avatar: 'https://example.com/den-vau-2.jpg',
    artistName: 'Đen Vâu',
  },
  {
    artistId: '10',
    avatar: 'https://example.com/binz-2.jpg',
    artistName: 'Binz',
  },
];

function FavoriteArtists() {
  return (
    <>
      <h1 className="text-center mb-4">
        <i className="fas fa-star"></i>
        <span style={{ paddingLeft: '10px' }}>Nghệ sĩ yêu thích của bạn</span>
      </h1>

      <section className={cx('section-block')}>
        <LimitedList
          items={apiYourFavoriteArtists}
          limit={8}
          renderItem={artist => (
            <div key={artist.artistId} className="col-6 col-sm-4 col-md-3 mb-3 d-flex justify-content-center">
              <CircleCard content={artist.artistName} cover={artist.avatar} href={`/artist/${artist.artistName}`} />
            </div>
          )}
        />
      </section>
    </>
  );
}

export default FavoriteArtists;
