import React from 'react';
import { CircleCard } from '~/components/Components/Card';
import icons from '~/assets/icons';
import styles from './FavoriteArtists.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import { apiFavoriteArtists } from '~/api/apiURL/apiArtists';

const cx = classNames.bind(styles);

function FavoriteArtists() {
  return (
    <>
      <h1 className="text-center mb-4">
        <i className={icons.iconStar}></i>
        <span style={{ paddingLeft: '10px' }}>Nghệ sĩ yêu thích của bạn</span>
      </h1>

      <section className={cx('section-block')}>
        <LimitedList
          items={apiFavoriteArtists}
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
