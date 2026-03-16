import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import icons from '~/assets/icons';
import config from '~/config';
import { Link, useLocation } from 'react-router-dom';
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

const itemsManageMod = [
  { label: 'Tổng quan', iconClass: icons.iconGauge, href: config.routes.manage },
  { label: 'Quản lý nghệ sĩ', iconClass: icons.iconStar, href: '/manage/artists' },
  { label: 'Quản lý album', iconClass: icons.iconCompactDisc, href: '/manage/albums' },
  { label: 'Quản lý bài hát', iconClass: icons.iconMusic, href: '/manage/songs' },
  { label: 'Quản lý thể loại', iconClass: icons.iconLayerGroup, href: '/manage/genres' },
  { label: 'Quản lý playlist', iconClass: icons.iconList, href: '/manage/playlists' },
];

const itemsManageAdmin = [
  { label: 'Tài khoản', iconClass: icons.iconUser, href: '/manage/accounts' },
  { label: 'Gói hội viên', iconClass: icons.iconCrown, href: '/manage/memberships' },
  { label: 'Doanh thu', iconClass: icons.iconDollar, href: '/manage/revenue' },
  ...itemsManageMod,
];

const itemsAnalytic = [
  { label: 'Lượt nghe', iconClass: icons.iconHeadphones, href: '/analytic/plays' },
  { label: 'Doanh thu', iconClass: icons.iconDollar, href: '/analytic/revenue' },
  { label: 'Người dùng', iconClass: icons.iconUser, href: '/analytic/users' },
  { label: 'Bài hát', iconClass: icons.iconMusic, href: '/analytic/songs' },
];

function Sidebar() {
  const { roles } = useAuth();
  const location = useLocation();

  const isLoggedIn = roles.length > 0;
  const pathname = location.pathname;

  let menuItems = [];

  // Nếu đang ở trang manage
  if (pathname.startsWith(config.routes.manage)) {
    if (roles.includes('ADMIN')) {
      menuItems = itemsManageAdmin;
    } else if (roles.includes('MOD')) {
      menuItems = itemsManageMod;
    }
  }

  // Nếu đang ở trang analytic
  else if (pathname.startsWith(config.routes.analytic)) {
    menuItems = itemsAnalytic;
  }

  // Nếu là trang user bình thường
  else {
    menuItems = [...itemsPublicVisible, ...(isLoggedIn ? itemsRequireLogin : [])];
  }

  return (
    <div className={`d-flex flex-md-column flex-row ${cx('sidebar-container')}`}>
      {menuItems.map((item, i) => (
        <Link key={i} to={item.href} className={`p-3 d-flex align-items-center gap-2 ${cx('sidebar-item')}`}>
          <i className={item.iconClass}></i>
          <span>{item.label}</span>
        </Link>
      ))}

      {/* Nếu chưa login và không phải manage/analytic thì hiện nút login */}
      {!isLoggedIn && !pathname.startsWith('/manage') && !pathname.startsWith('/analytic') && (
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
