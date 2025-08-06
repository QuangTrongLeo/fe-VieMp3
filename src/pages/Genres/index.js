import React from 'react';
import icons from '~/assets/icons';
import styles from './Genres.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import { RectangleCard } from '~/components/Components/Card';
import apiGenres from '~/api/apiURL/apiGenres';

const cx = classNames.bind(styles);

function Genres() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">
        <i className={icons.iconLayerGroup}></i>
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
                icon={<i className={`${icons.iconMusic} fa-3x`}></i>}
              />
            </div>
          )}
        />
      </section>
    </div>
  );
}

export default Genres;
