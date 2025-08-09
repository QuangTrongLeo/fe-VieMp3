// Layouts/BaseLayout.js
import React, { useState } from 'react';
import Header from '~/components/Components/Header';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayerUnder from '~/components/Components/SongPlayerUnder';

function BaseLayout({ children, renderMainContent }) {
  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const togglePlayListSideBar = () => setShowPlayListSideBar(prev => !prev);
  const closePlayListSideBar = () => setShowPlayListSideBar(false);

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
      />

      <SongPlayerUnder
        isShowPlayListSideBar={isShowPlayListSideBar}
        togglePlayListSidebar={togglePlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default BaseLayout;
