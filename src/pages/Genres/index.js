import React from 'react';
import { RectangleCard } from '~/components/Components/Card';
import styles from './Genres.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';

const cx = classNames.bind(styles);

const apiGenres = [
  { id: 1, genreName: 'RAP', genreDesc: 'Rap / Hip Hop Việt' },
  { id: 2, genreName: 'POP', genreDesc: 'Nhạc Pop Việt' },
  { id: 3, genreName: 'BALLAD', genreDesc: 'Nhạc Ballad' },
  { id: 4, genreName: 'RNB', genreDesc: 'R&B Việt' },
  { id: 5, genreName: 'EDM', genreDesc: 'Nhạc EDM' },
  { id: 6, genreName: 'INDIE', genreDesc: 'Indie Việt' },
  { id: 7, genreName: 'LOFI', genreDesc: 'Nhạc Lofi Chill' },
  { id: 8, genreName: 'DANCE', genreDesc: 'Nhạc Dance Việt' },
  { id: 9, genreName: 'REMIX', genreDesc: 'Nhạc Remix Việt' },
  { id: 10, genreName: 'ACOUSTIC', genreDesc: 'Nhạc Acoustic Việt' },
  { id: 11, genreName: 'TRINH_CONG_SON', genreDesc: 'Nhạc Trịnh Công Sơn' },
];

function Genres() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">
        <i className="fas fa-layer-group"></i>
        <span className="ps-2">Thể loại nhạc</span>
      </h1>

      <section className={cx('section-block')}>
        <LimitedList
          items={apiGenres}
          limit={6}
          renderItem={(genre, index) => (
            <div key={genre.id} className="col-12 col-sm-12 col-md-4 mb-3 d-flex justify-content-center">
              <RectangleCard
                content={genre.genreName}
                desc={genre.genreDesc}
                href={`/genres/${genre.genreName.toLowerCase()}`}
                icon={<i className="fas fa-music fa-3x"></i>}
              />
            </div>
          )}
        />
      </section>
    </div>
  );
}

export default Genres;
