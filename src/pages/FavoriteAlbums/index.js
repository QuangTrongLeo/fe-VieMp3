import React from 'react';
import { SquareCard } from '~/components/Components/Card';
import styles from './FavoriteAlbums.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';

const cx = classNames.bind(styles);

const apiFavoriteAlbums = [
  {
    albumId: '1',
    albumName: 'Sơn Tùng - MTP',
    cover:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStpZEMzpTrUEK0QZHAG48NV3sMuoCO0ReV2JEIY7ot7KnICpz7shfmmJFKmNF3Og1tN9JWWJqD6m3vKg4LB_U_Sqy0TTpQdKmMO67ehT1JQ',
  },
  {
    albumId: '2',
    albumName: 'Mono',
  },
  {
    albumId: '3',
    albumName: 'Hiếu Thứ 2',
  },
  {
    albumId: '4',
    albumName: 'Bình Gold',
  },
  {
    albumId: '5',
    albumName: 'QNT',
    cover: 'https://i.scdn.co/image/ab6761610000e5ebc29f15a5b9b46fed41a0f2af',
  },
];

const sortedFavoriteAlbums = [...apiFavoriteAlbums].sort((a, b) => b.playlistId - a.playlistId);

function FavoriteAlbums() {
  return (
    <>
      <h1 className="text-center">
        <i class="fas fa-compact-disc"></i>
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
                icon={<i className="fas fa-list fa-3x"></i>}
              />
            </div>
          )}
        />
      </section>
    </>
  );
}

export default FavoriteAlbums;
