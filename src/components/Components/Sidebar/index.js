import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const items = [
  { label: 'Khám phá', iconClass: 'fas fa-compass', href: '/' },
  { label: 'Thể loại nhạc', iconClass: 'fas fa-layer-group', href: '/genres' },
  { label: 'Nghe gần đây', iconClass: 'fas fa-history', href: '/history' },
  { label: 'Thư viện', iconClass: 'fas fa-book', href: '/library' },
  { label: 'PlayList', iconClass: 'fas fa-list', href: '/playlist' },
  { label: 'Bài hát yêu thích', iconClass: 'fas fa-heart', href: '/favorite-songs' },
  { label: 'Album yêu thích', iconClass: 'fas fa-compact-disc', href: '/favorite-albums' },
  { label: 'Nghệ sĩ yêu thích', iconClass: 'fas fa-star', href: '/favorite-artists' },
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
