import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

const items = [
  { label: 'Khám phá', iconClass: icons.iconCompass, href: '/' },
  { label: 'Thể loại nhạc', iconClass: icons.iconLayerGroup, href: '/genres' },
  { label: 'Nghe gần đây', iconClass: icons.iconHistory, href: '/history' },
  { label: 'Thư viện', iconClass: icons.iconBook, href: '/library' },
  { label: 'PlayList', iconClass: icons.iconList, href: '/playlist' },
  { label: 'Bài hát yêu thích', iconClass: icons.iconHeart, href: '/favorite-songs' },
  { label: 'Album yêu thích', iconClass: icons.iconCompactDisc, href: '/favorite-albums' },
  { label: 'Nghệ sĩ yêu thích', iconClass: icons.iconStar, href: '/favorite-artists' },
];

function Sidebar() {
  return (
    <div className={`d-flex flex-md-column flex-row ${cx('sidebar-container')}`}>
      {items.map((item, i) => (
        <Link key={i} to={item.href} className={`p-3 d-flex align-items-center gap-2 ${cx('sidebar-item')}`}>
          <i className={item.iconClass}></i>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
