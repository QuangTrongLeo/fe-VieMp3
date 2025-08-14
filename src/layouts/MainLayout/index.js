// Layouts/MainLayout/index.js
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '~/components/Components/Sidebar';
import Footer from '~/components/Components/Footer';
import NotificationTablet from '~/components/Components/NotificationTablet';
import BaseLayout from '../BaseLayout';

function MainLayout({ children }) {
  const [showNotificationTablet, setShowNotificationTablet] = useState(false);
  const notifTabletRef = useRef(null);
  const bellButtonRef = useRef(null);

  const toggleNotificationTable = () => {
    setShowNotificationTablet(prev => !prev);
  };

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
    <BaseLayout
      bellButtonRef={bellButtonRef}
      onToggleNotificationTablet={toggleNotificationTable}
      renderMainContent={() => (
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
      )}
    />
  );
}

export default MainLayout;
