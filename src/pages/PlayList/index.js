import React from 'react';
import { CreateCard, SquareCard } from '~/components/Components/Card';
import icons from '~/assets/icons';
import styles from './PlayList.module.scss';
import classNames from 'classnames/bind';
import LimitedList from '~/components/Components/LimitedList';
import apiPlayLists from '~/api/apiURL/apiPlayLists';

const cx = classNames.bind(styles);

function PlayList() {
  return (
    <div className={cx('playlist-wrapper')}>
      <h1 className="text-center">
        <i className={icons.iconList}></i>
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
