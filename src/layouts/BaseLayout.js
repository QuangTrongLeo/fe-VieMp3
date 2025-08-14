// Layouts/BaseLayout.js
import React, { useState, useEffect, useRef } from 'react';
import Header from '~/components/Components/Header';
import PlayListSideBar from '~/components/Components/PlayListSideBar';
import SongPlayerUnder from '~/components/Components/SongPlayerUnder';
import NotificationTablet from '~/components/Components/NotificationTablet';
import { apiSongs } from '~/api/apiURL/apiSongs';

function BaseLayout({ children, renderMainContent }) {
  const [isShowPlayListSideBar, setShowPlayListSideBar] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [nextSongs, setNextSongs] = useState([]);
  const [playedSongs, setPlayedSongs] = useState([]);

  // Chế độ (lặp lại/ngẫu nhiên) của bài hát
  const [mode, setMode] = useState(null);
  const [showNotificationTablet, setShowNotificationTablet] = useState(false);
  const notifTabletRef = useRef(null);
  const bellButtonRef = useRef(null);

  const togglePlayListSideBar = () => setShowPlayListSideBar(prev => !prev);
  const closePlayListSideBar = () => setShowPlayListSideBar(false);
  const toggleNotificationTable = () => {
    setShowNotificationTablet(prev => !prev);
  };

  const handleSongEnd = () => {
    if (nextSongs.length > 0) {
      let nextSong;
      let rest;

      if (mode === 'shuffle') {
        // Lấy ngẫu nhiên 1 bài
        const randomIndex = Math.floor(Math.random() * nextSongs.length);
        nextSong = nextSongs[randomIndex];
        rest = nextSongs.filter((_, i) => i !== randomIndex); // loại bài vừa chọn
      } else {
        // Lấy bài đầu tiên
        [nextSong, ...rest] = nextSongs;
      }

      setPlayedSongs(prev => [...prev, currentSong]);
      setCurrentSong(nextSong);
      setNextSongs(rest);
    }
  };

  // Nhảy sang bài tiếp theo
  const handleNextSong = () => {
    if (nextSongs.length > 0) {
      const [next, ...rest] = nextSongs;
      setPlayedSongs(prev => [...prev, currentSong]);
      setCurrentSong(next);
      setNextSongs(rest);
    }
  };

  // Quay lại bài trước
  const handlePrevSong = () => {
    if (playedSongs.length > 0) {
      const prevSongs = [...playedSongs];
      const prevSong = prevSongs.pop(); // Lấy bài trước đó
      setNextSongs(prev => [currentSong, ...prev]); // Đưa current vào đầu nextSongs
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
            !playedSongs.some(played => played.songId === song.songId) // loại bỏ bài đã phát
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotificationTablet]);

  return (
    <div>
      <Header onToggleNotificationTablet={toggleNotificationTable} bellButtonRef={bellButtonRef} />

      <div ref={notifTabletRef}>
        <NotificationTablet
          visible={showNotificationTablet}
          notifications={[
            { avatar: '/img/user1.jpg', title: 'Tin nhắn mới từ A', time: '2 phút trước' },
            { avatar: '/img/user2.jpg', title: 'Bình luận mới', time: '10 phút trước' },
          ]}
        />
      </div>

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
        mode={mode}
        setMode={setMode}
        onEndedAudio={handleSongEnd}
        onNextSong={handleNextSong}
        onPrevSong={handlePrevSong}
      />
    </div>
  );
}

export default BaseLayout;
