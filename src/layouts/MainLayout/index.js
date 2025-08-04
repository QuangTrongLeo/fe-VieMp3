// Layouts/MainLayout/index.js
import React from 'react';
import Sidebar from '~/components/Components/Sidebar';
import Footer from '~/components/Components/Footer';
import BaseLayout from '../BaseLayout';

function MainLayout({ children }) {
  return (
    <BaseLayout
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
        </div>
      )}
    />
  );
}

export default MainLayout;
