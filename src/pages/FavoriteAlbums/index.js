import React from 'react';
import { SquareCard } from '~/components/Components/Card';
import icons from '~/assets/icons';
import styles from './FavoriteAlbums.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import { apiFavoriteAlbums } from '~/api/apiURL/apiAlbums';

const cx = classNames.bind(styles);

const sortedFavoriteAlbums = [...apiFavoriteAlbums].sort((a, b) => b.playlistId - a.playlistId);

function FavoriteAlbums() {
  return (
    <>
      <h1 className="text-center">
        <i class={icons.iconCompactDisc}></i>
        <span style={{ paddingLeft: '10px' }}>Album yêu thích của bạn</span>
      </h1>

      <section className={cx('section-block')}>
        <h3>Album yêu thích của bạn của bạn</h3>

        <LimitedList
          items={sortedFavoriteAlbums}
          limit={8}
          renderItem={album => (
            <div key={album.albumId} className="col-6 col-sm-4 col-lg-3 mb-3 d-flex justify-content-center">
              <SquareCard
                content={album.albumName}
                cover={album.cover}
                href={`/album/${album.albumName}`}
                icon={<i className={`${icons.iconList} fa-3x`}></i>}
              />
            </div>
          )}
        />
      </section>
    </>
  );
}

export default FavoriteAlbums;
