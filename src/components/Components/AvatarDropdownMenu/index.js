import { Link } from 'react-router-dom';
import config from '~/config';
import icons from '~/assets/icons';
import { useAuth } from '../AuthProvider';

function AvatarDropdownMenu({ isArtist, isAdmin }) {
  const { logout } = useAuth();
  return (
    <ul className="dropdown-menu custom-dropdown-left" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <Link className="dropdown-item" to={config.routes.profile}>
          <i className={`${icons.iconUser} me-2`}></i> Hồ sơ
        </Link>
      </li>

      {/* ARTIST */}
      {isArtist && (
        <>
          <li>
            <Link className="dropdown-item" to={config.routes.mySongs}>
              <i className={`${icons.iconMusic} me-2`}></i> Bài hát của tôi
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={config.routes.myAlbums}>
              <i className={`${icons.iconCompactDisc} me-2`}></i> Album của tôi
            </Link>
          </li>
        </>
      )}

      {/* ADMIN */}
      {isAdmin && (
        <>
          <li>
            <Link className="dropdown-item" to="/manage-users">
              <i className="fas fa-users-cog me-2"></i> Quản lý người dùng
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/moderate-songs">
              <i className="fas fa-check-circle me-2"></i> Kiểm duyệt bài hát
            </Link>
          </li>
        </>
      )}

      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <Link className="dropdown-item" to={config.routes.home} onClick={logout}>
          <i className={`${icons.iconSignOut} me-2`}></i> Đăng xuất
        </Link>
      </li>
    </ul>
  );
}

export default AvatarDropdownMenu;
