// Layouts/MainLayout/index.js
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '~/components/Components/Sidebar';
import Footer from '~/components/Components/Footer';
import NotificationTablet from '~/components/Components/NotificationTablet';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayerUnder from '~/components/Components/SongPlayerUnder';
import BaseLayout from '../BaseLayout';
import { apiSongs } from '~/api/apiURL/apiSongs';

function MainLayout({ children }) {
  const [showNotificationTablet, setShowNotificationTablet] = useState(false);
  const notifTabletRef = useRef(null);
  const bellButtonRef = useRef(null);

  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [nextSongs, setNextSongs] = useState([]);
  const [playedSongs, setPlayedSongs] = useState([]);

  // Chế độ (lặp lại/ngẫu nhiên) bài hát
  const [mode, setMode] = useState(null);

  // Hiển thị NotificationTable
  const toggleNotificationTable = () => {
    setShowNotificationTablet(prev => !prev);
  };

  // Hiển thị PlayListSideBar
  const togglePlayListSideBar = () => setShowPlayListSideBar(prev => !prev);

  // Đóng PlayListSideBar
  const closePlayListSideBar = () => setShowPlayListSideBar(false);

  const handleSongEnd = () => {
    if (nextSongs.length > 0) {
      let nextSong;
      let rest;
      if (mode === 'shuffle') {
        const randomIndex = Math.floor(Math.random() * nextSongs.length);
        nextSong = nextSongs[randomIndex];
        rest = nextSongs.filter((_, i) => i !== randomIndex);
      } else {
        [nextSong, ...rest] = nextSongs;
      }
      setPlayedSongs(prev => [...prev, currentSong]);
      setCurrentSong(nextSong);
      setNextSongs(rest);
    }
  };

  // Xử lý khi thực hiện event bài hát tiếp theo
  const handleNextSong = () => {
    if (nextSongs.length > 0) {
      const [next, ...rest] = nextSongs;
      setPlayedSongs(prev => [...prev, currentSong]);
      setCurrentSong(next);
      setNextSongs(rest);
    }
  };

  // Xử lý khi thực hiện event bài hát trước đó
  const handlePrevSong = () => {
    if (playedSongs.length > 0) {
      const prevSongs = [...playedSongs];
      const prevSong = prevSongs.pop();
      setNextSongs(prev => [currentSong, ...prev]);
      setCurrentSong(prevSong);
      setPlayedSongs(prevSongs);
    }
  };

  // PLAYLIST-SIDEBAR
  useEffect(() => {
    if (currentSong) {
      const filtered = apiSongs
        .filter(
          song =>
            song.artistName === currentSong.artistName &&
            song.songName !== currentSong.songName &&
            !playedSongs.some(played => played.songId === song.songId)
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setNextSongs(filtered);
    }
  }, [currentSong, playedSongs]);

  // NOTIFICATION-TABLE
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        notifTabletRef.current &&
        !notifTabletRef.current.contains(e.target) &&
        bellButtonRef.current &&
        !bellButtonRef.current.contains(e.target) &&
        showNotificationTablet
      ) {
        setShowNotificationTablet(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotificationTablet]);

  return (
    <BaseLayout
      bellButtonRef={bellButtonRef}
      onToggleNotificationTablet={toggleNotificationTable}
      renderMainContent={() => (
        <>
          <div className="container-fluid" style={{ paddingTop: '80px' }}>
            <div className="row" style={{ minHeight: 'calc(100vh - 80px)' }}>
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
                <div style={{ margin: '0 4%' }}>
                  {children}
                  <Footer />
                </div>
              </div>
            </div>

            {/* NOTIFICATION-TABLE */}
            <div ref={notifTabletRef}>
              <NotificationTablet
                visible={showNotificationTablet}
                notifications={[
                  { avatar: '/img/user1.jpg', title: 'Tin nhắn mới từ A', time: '2 phút trước' },
                  { avatar: '/img/user2.jpg', title: 'Bình luận mới', time: '10 phút trước' },
                ]}
              />
            </div>
          </div>

          {/* PLAYLIST-SIDEBAR */}
          <PlayListSideBar
            isShowPlayListSideBar={isShowPlayListSideBar}
            closePlayListSideBar={closePlayListSideBar}
            currentSong={currentSong}
            nextSongs={nextSongs}
          />

          {/* SONG PLAYER */}
          <SongPlayerUnder
            isShowPlayListSideBar={isShowPlayListSideBar}
            togglePlayListSidebar={togglePlayListSideBar}
            closePlayListSideBar={closePlayListSideBar}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            mode={mode}
            setMode={setMode}
            onEndedAudio={handleSongEnd}
            onNextSong={handleNextSong}
            onPrevSong={handlePrevSong}
          />
        </>
      )}
    />
  );
}

export default MainLayout;
