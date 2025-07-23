import Header from './Header';
import MusicPlayer from './MusicPlayer';

function HeaderOnlyLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="content">{children}</div>
      </div>

      <MusicPlayer />
    </div>
  );
}

export default HeaderOnlyLayout;
