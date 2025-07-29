import React, { useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';
import PlayListSideBar from '../../Components/PlayListSideBar';
import SongPlayer from '../../Components/SongPlayer';

function MainLayout({ children }) {
  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);

  const togglePlayListSideBar = () => {
    setShowPlayListSideBar(prev => !prev);
  };

  const closePlayListSideBar = () => {
    setShowPlayListSideBar(false);
  };

  return (
    <div>
      <Header />

      {/* SideBar + Content */}
      <div className="container-fluid" style={{ paddingTop: '80px' }}>
        <div className="row" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Sidebar - chiếm 2 cột, scroll riêng */}
          <div
            className="col-12 col-md-2"
            style={{
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              overflowX: 'hidden',
              paddingBottom: '8px',
            }}
          >
            <Sidebar />
          </div>

          {/* Content - chiếm 10 cột, scroll riêng */}
          <div
            className="col-12 col-md-10"
            style={{
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              backgroundColor: 'var(--black-dark-color)',
              borderRadius: '8px',
              padding: '8px',
            }}
          >
            <div
              style={{
                margin: '0 4%',
              }}
            >
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Playlist SideBar */}
      <PlayListSideBar isShowPlayListSideBar={isShowPlayListSideBar} closePlayListSideBar={closePlayListSideBar} />

      {/* SongPlayer */}
      <SongPlayer
        isShowPlayListSideBar={isShowPlayListSideBar}
        togglePlayListSidebar={togglePlayListSideBar}
        closePlayListSideBar={closePlayListSideBar}
      />
    </div>
  );
}

export default MainLayout;
