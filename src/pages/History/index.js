import React from 'react';
import SongRow from '~/components/Components/SongRow';
// import './History.scss';

const apiNewSongs = [
  {
    songId: '1',
    cover: 'https://link-image.com/song1.jpg',
    songName: 'Chúng ta không thuộc về nhau',
    artistName: 'Sơn Tùng - MTP',
  },
  // ...các bài khác
];

function History() {
  return (
    <>
      <h1 className="text-center">
        <i className="fas fa-history"></i>
        <span style={{ paddingLeft: '10px' }}>Nghe gần đây</span>
      </h1>

      <div>
        {apiNewSongs.map(item => (
          <SongRow
            key={item.songId}
            song={{
              cover: item.cover,
              title: item.songName,
              artists: item.artistName.split(',').map(name => name.trim()), // chuyển thành mảng
              album: 'Không rõ', // hoặc lấy từ API nếu có
              duration: '03:44', // hoặc lấy từ API nếu có
            }}
          />
        ))}
      </div>
    </>
  );
}

export default History;
