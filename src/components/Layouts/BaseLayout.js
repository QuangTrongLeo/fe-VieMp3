// Layouts/BaseLayout.js
import React, { useState } from 'react';
import Header from '~/components/Components/Header';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayerUnder from '~/components/Components/SongPlayerUnder';

function BaseLayout({ children, renderMainContent }) {
  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);
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

      <PlayListSideBar isShowPlayListSideBar={isShowPlayListSideBar} closePlayListSideBar={closePlayListSideBar} />

      <SongPlayerUnder
        isShowPlayListSideBar={isShowPlayListSideBar}
        togglePlayListSidebar={togglePlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
      />
    </div>
  );
}

export default BaseLayout;
