// Layouts/BaseLayout.js
import React, { useState } from 'react';
import Header from '~/components/Components/Header';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayer from '~/components/Components/SongPlayer';

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

      <SongPlayer
        isShowPlayListSideBar={isShowPlayListSideBar}
        togglePlayListSidebar={togglePlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
      />
    </div>
  );
}

export default BaseLayout;
