import './PlayListSideBar.scss';

function PlayListSideBar() {
  const songs = [
    {
      songId: 1,
      thumb: 'https://i.imgur.com/x1eX5xP.png',
      songName: 'Vương Vấn (BLUE REMIX)',
      artist: 'ZIN MEDIA, TVk, Hana Cẩm Tiên',
    },
    {
      songId: 2,
      thumb: 'https://i.imgur.com/PeWajqF.png',
      songName: 'Yêu Từ Đâu Mà Ra?',
      artist: 'Lil Zpoet',
    },
    {
      songId: 3,
      thumb: 'https://i.imgur.com/bvOl6Fw.png',
      songName: 'Mah Boo',
      artist: 'Phạm Việt Thắng',
    },
    {
      songId: 4,
      thumb: 'https://i.imgur.com/Jg04IG2.png',
      songName: 'Em Không Sai Chúng Ta Sai',
      artist: 'ERIK',
    },
    {
      songId: 5,
      thumb: 'https://i.imgur.com/WczTHAx.png',
      songName: 'Thích Thì Đến',
      artist: 'Lê Bảo Bình',
    },
    {
      songId: 6,
      thumb: 'https://i.imgur.com/ZRUzKGo.png',
      songName: 'Chạy Khỏi Thế Giới Này',
      artist: 'Da LAB, Phương Ly',
    },
  ];

  return (
    <div className="d-flex flex-column sidebar-container">
      {/* Tiêu đề và bài đang phát */}
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="text-white mb-3" style={{ margin: '0.5%' }}>
          Bài đang phát
        </h6>
        <i className="fa-solid fa-xmark me-2 icon-play-list-sidebar"></i>
      </div>

      <a
        className="p-2 sidebar-item d-flex align-items-center text-decoration-none text-white"
        href="/"
        style={{ borderRadius: '6px', backgroundColor: 'var(--primary-color)', transition: 'background 0.2s' }}
      >
        <img
          src={songs[0].thumb}
          alt={songs[0].songName}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '4px',
            objectFit: 'cover',
            marginRight: '12px',
          }}
        />
        <div className="d-flex flex-column align-items-start" style={{ minWidth: 0 }}>
          <span
            className="fw-semibold text-truncate"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--white-color)',
            }}
          >
            {songs[0].songName}
          </span>
          <span
            className="text-truncate"
            style={{
              fontSize: '10px',
              lineHeight: '1.6',
              color: 'var(--white-darker-color)',
            }}
          >
            {songs[0].artist}
          </span>
        </div>
      </a>

      {/* Tiêu đề và danh sách bài tiếp theo */}
      <h6 className="text-white mt-3 mb-2" style={{ margin: '0 0.5%' }}>
        Bài tiếp theo
      </h6>
      {songs.slice(1).map((song, i) => (
        <a
          key={song.songId}
          className="p-2 sidebar-item d-flex align-items-center text-decoration-none text-white"
          href="/"
          style={{ borderRadius: '6px', transition: 'background 0.2s' }}
        >
          <img
            src={song.thumb}
            alt={song.songName}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              objectFit: 'cover',
              marginRight: '12px',
            }}
          />
          <div className="d-flex flex-column align-items-start" style={{ minWidth: 0 }}>
            <span
              className="fw-semibold text-truncate"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--white-color)',
              }}
            >
              {song.songName}
            </span>
            <span
              className="text-truncate"
              style={{
                fontSize: '10px',
                lineHeight: '1.6',
                color: 'var(--white-color)',
              }}
            >
              {song.artist}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PlayListSideBar;
