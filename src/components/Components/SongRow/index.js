import React from 'react';
import './SongRow.scss';

function SongRow({ song }) {
  return (
    <div className="song-row d-flex align-items-center px-3 py-3">
      {/* Cột: Bài hát */}
      <div className="col-6 d-flex align-items-center">
        <img src={song.cover} alt={song.title} className="song-cover me-3" />
        <div>
          <div className="song-title">{song.title}</div>
          <div className="song-artists text-muted small">{song.artists.join(', ')}</div>
        </div>
      </div>

      {/* Cột: Album */}
      <div className="col-4 text-muted">{song.album}</div>

      {/* Cột: Thời gian */}
      <div className="col-2 d-flex justify-content-end align-items-center">
        <i className="fas fa-heart icon-favorite-song  me-2"></i>
        <span className="small">{song.duration}</span>
      </div>
    </div>
  );
}

export default SongRow;
