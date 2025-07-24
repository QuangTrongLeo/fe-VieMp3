import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SongPlayer from './SongPlayer';

function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-fluid" style={{ paddingTop: '5%' }}>
        <div className="row">
          {/* Sidebar - chiếm 2 cột */}
          <div className="col-md-2">
            <Sidebar />
          </div>

          {/* Content - chiếm 10 cột */}
          <div className="col-md-10 d-flex flex-column justify-content-between">
            <div className="flex-grow-1">{children}</div>
            <Footer />
          </div>
        </div>
      </div>

      <SongPlayer />
    </div>
  );
}

export default MainLayout;
