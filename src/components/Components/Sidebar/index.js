import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import icons from '~/assets/icons';
import config from '~/config';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { LongButton } from '../Button';

const cx = classNames.bind(styles);

const itemsPublicVisible = [
  { label: 'Khám phá', iconClass: icons.iconCompass, href: config.routes.home },
  { label: 'Thể loại nhạc', iconClass: icons.iconLayerGroup, href: config.routes.genres },
];

const itemsRequireLogin = [
  { label: 'Nghe gần đây', iconClass: icons.iconHistory, href: config.routes.history },
  { label: 'Thư viện', iconClass: icons.iconBook, href: config.routes.library },
  { label: 'PlayList', iconClass: icons.iconList, href: config.routes.playlists },
  { label: 'Bài hát yêu thích', iconClass: icons.iconHeart, href: config.routes.favoriteSongs },
  { label: 'Album yêu thích', iconClass: icons.iconCompactDisc, href: config.routes.favoriteAlbums },
  { label: 'Nghệ sĩ yêu thích', iconClass: icons.iconStar, href: config.routes.favoriteArtists },
];

function Sidebar() {
  const { roles } = useAuth(); // Lấy roles từ AuthProvider
  const isLoggedIn = roles.length > 0; // Kiểm tra đã login chưa

  return (
    <div className={`d-flex flex-md-column flex-row ${cx('sidebar-container')}`}>
      {/* Các mục luôn hiển thị */}
      {itemsPublicVisible.map((item, i) => (
        <Link key={i} to={item.href} className={`p-3 d-flex align-items-center gap-2 ${cx('sidebar-item')}`}>
          <i className={item.iconClass}></i>
          <span>{item.label}</span>
        </Link>
      ))}

      {/* Nếu đã login thì hiện các mục yêu cầu roles */}
      {isLoggedIn ? (
        itemsRequireLogin.map((item, i) => (
          <Link key={i} to={item.href} className={`p-3 d-flex align-items-center gap-2 ${cx('sidebar-item')}`}>
            <i className={item.iconClass}></i>
            <span>{item.label}</span>
          </Link>
        ))
      ) : (
        // Nếu chưa login thì hiện nút Đăng nhập
        <div className="p-3">
          <LongButton href={config.routes.login} backgroundColor="var(--primary-color)" color="var(--black-color)">
            Đăng nhập
          </LongButton>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
