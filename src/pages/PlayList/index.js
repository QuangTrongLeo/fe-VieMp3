import React from 'react';
import { CreateCard, SquareCard } from '~/components/Components/Card';
import styles from './PlayList.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';

const cx = classNames.bind(styles);

const apiPlayLists = [
  {
    playlistId: '1',
    playlistName: 'Sơn Tùng - MTP',
    cover:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStpZEMzpTrUEK0QZHAG48NV3sMuoCO0ReV2JEIY7ot7KnICpz7shfmmJFKmNF3Og1tN9JWWJqD6m3vKg4LB_U_Sqy0TTpQdKmMO67ehT1JQ',
  },
  {
    playlistId: '2',
    playlistName: 'Mono',
  },
  {
    playlistId: '3',
    playlistName: 'Hiếu Thứ 2',
  },
  {
    playlistId: '4',
    playlistName: 'Bình Gold',
  },
  {
    playlistId: '5',
    playlistName: 'QNT',
    cover: 'https://i.scdn.co/image/ab6761610000e5ebc29f15a5b9b46fed41a0f2af',
  },
];

function PlayList() {
  return (
    <div className={cx('playlist-wrapper')}>
      <h1 className="text-center">
        <i className="fas fa-list"></i>
        <span style={{ paddingLeft: '10px' }}>PlayList</span>
      </h1>

      <CreateCard content="Tạo playlist mới" />

      <section className={cx('section-block')}>
        <h3>Playlist của bạn</h3>

        <LimitedList
          items={apiPlayLists.sort((a, b) => b.playlistId - a.playlistId)}
          limit={8}
          renderItem={playlist => (
            <div key={playlist.playlistId} className="col-6 col-sm-4 col-lg-3 mb-3 d-flex justify-content-center">
              <SquareCard
                content={playlist.playlistName}
                cover={playlist.cover}
                href={`/playlist/${playlist.playlistName}`}
                icon={<i className="fas fa-list fa-3x"></i>}
              />
            </div>
          )}
        />
      </section>
    </div>
  );
}

export default PlayList;
