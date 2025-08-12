import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AlbumDetail.module.scss';
import SongItem from '~/components/Components/SongItem';
import LimitedList from '~/components/Components/LimitedList';
import { useParams } from 'react-router-dom';
import { apiAlbums } from '~/api/apiURL/apiAlbums';
import { apiSongs } from '~/api/apiURL/apiSongs';

const cx = classNames.bind(styles);

function AlbumDetail() {
  const { albumName } = useParams();
  const decodedAlbumName = decodeURIComponent(albumName);
  const album = apiAlbums.find(a => a.albumName.toLowerCase() === decodedAlbumName.toLowerCase());

  const songsInAlbum = apiSongs
    .filter(song => song.albumName && song.albumName.toLowerCase() === decodedAlbumName.toLowerCase())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const [totalDurationSeconds, setTotalDurationSeconds] = useState(0);

  useEffect(() => {
    let total = 0;
    let loadedCount = 0;

    if (songsInAlbum.length > 0) {
      songsInAlbum.forEach(song => {
        const audio = new Audio(song.audio); // song.audio là link file mp3
        audio.addEventListener('loadedmetadata', () => {
          total += Math.floor(audio.duration);
          loadedCount++;
          if (loadedCount === songsInAlbum.length) {
            setTotalDurationSeconds(total);
          }
        });
      });
    }
  }, [songsInAlbum]);

  if (!album) {
    return <div>Album không tồn tại</div>;
  }

  const hours = Math.floor(totalDurationSeconds / 3600);
  const minutes = Math.floor((totalDurationSeconds % 3600) / 60);
  const seconds = totalDurationSeconds % 60;

  let formattedDuration;
  if (hours > 0) {
    formattedDuration = `${hours} giờ ${minutes} phút ${seconds} giây`;
  } else {
    formattedDuration = `${minutes} phút ${seconds} giây`;
  }

  return (
    <div className={cx('album-wrapper', 'py-4')}>
      <div className={cx('album-header', 'd-flex', 'align-items-center', 'mb-4')}>
        <img src={album.cover} alt="album-cover" className={cx('album-cover')} />
        <div className="ms-4">
          <h2 className={cx('album-title')}>{album.albumName}</h2>
          <p className={cx('album-description')}>Tuyển tập các bài hát trong Album của "{album.artistName}"</p>
          <p className={cx('album-meta')}>
            {songsInAlbum.length} bài hát - {formattedDuration}
          </p>
        </div>
      </div>

      <h5 className={cx('section-title')}>Bài Hát Nổi Bật</h5>
      {songsInAlbum.length > 0 ? (
        <LimitedList
          items={songsInAlbum}
          limit={8}
          wrapInRow={true}
          renderItem={(song, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <SongItem song={song} />
            </div>
          )}
        />
      ) : (
        <p>Không có bài hát nào</p>
      )}
    </div>
  );
}

export default AlbumDetail;
