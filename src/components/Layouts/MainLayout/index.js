import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PlayListSideBar from './Footer copy';
import SongPlayer from './SongPlayer';

function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-fluid" style={{ paddingTop: '80px' }}>
        <div className="row" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Sidebar - chiếm 2 cột, scroll riêng */}
          <div
            className="col-12 col-md-2"
            style={{
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              overflowX: 'hidden',
              // paddingBottom: '80px',
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
              paddingBottom: '80px',
            }}
          >
            <div>
              {children}{' '}
              {[...Array(30)].map((_, i) => (
                <p key={i}>Dòng nội dung {i + 1}</p>
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </div>

      <PlayListSideBar />

      <SongPlayer />
    </div>
  );
}

export default MainLayout;
