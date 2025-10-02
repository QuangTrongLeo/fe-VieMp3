import React, { useEffect, useState } from 'react';
import icons from '~/assets/icons';
import styles from './Genres.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import { RectangleCard } from '~/components/Components/Card';
import { apiFetchGenres } from '~/api/apiFetchs/apiFetchGenres';

const cx = classNames.bind(styles);

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    apiFetchGenres()
      .then(data => setGenres(data))
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-4">
        <i className={icons.iconLayerGroup}></i>
        <span className="ps-2">Thể loại nhạc</span>
      </h1>

      <section className={cx('section-block')}>
        <LimitedList
          items={genres}
          limit={6}
          renderItem={(genre, index) => (
            <div key={genre.id} className="col-12 col-sm-12 col-md-4 mb-3 d-flex justify-content-center">
              <RectangleCard
                content={genre.name} // dùng name
                desc={genre.description} // dùng description
                href={`/genre/${genre.name.toLowerCase()}`} // name chắc chắn có giá trị
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
