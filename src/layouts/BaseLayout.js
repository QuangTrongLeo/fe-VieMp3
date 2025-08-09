// Layouts/BaseLayout.js
import React, { useState, useEffect } from 'react';
import Header from '~/components/Components/Header';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayerUnder from '~/components/Components/SongPlayerUnder';
import { apiSongs } from '~/api/apiURL/apiSongs';

function BaseLayout({ children, renderMainContent }) {
  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [nextSongs, setNextSongs] = useState([]);

  const togglePlayListSideBar = () => setShowPlayListSideBar(prev => !prev);
  const closePlayListSideBar = () => setShowPlayListSideBar(false);

  const handleSongEnd = () => {
    if (nextSongs.length > 0) {
      const [next, ...rest] = nextSongs;
      setCurrentSong(next);
      setNextSongs(rest);
    }
  };

  useEffect(() => {
    if (currentSong) {
      const filtered = apiSongs
        .filter(song => song.artistName === currentSong.artistName && song.songName !== currentSong.songName)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setNextSongs(filtered);
    }
  }, [currentSong]);

  return (
    <div>
      <Header />

      {renderMainContent?.() || (
        <div className="container-fluid">
          <div className="content">{children}</div>
        </div>
      )}

      <PlayListSideBar
        isShowPlayListSideBar={isShowPlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
        currentSong={currentSong}
        nextSongs={nextSongs}
      />

      <SongPlayerUnder
        isShowPlayListSideBar={isShowPlayListSideBar}
        togglePlayListSidebar={togglePlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        onEndedAudio={handleSongEnd}
      />
    </div>
  );
}

export default BaseLayout;
