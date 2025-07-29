import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  const items = [
    { label: 'Khám phá', iconClass: 'fas fa-compass', href: '/' },
    { label: 'Thư viện', iconClass: 'fas fa-book', href: '/library' },
    { label: 'Thể loại nhạc', iconClass: 'fas fa-layer-group', href: '/genres' },
    { label: 'Nghe gần đây', iconClass: 'fas fa-history', href: '/history' },
    { label: 'PlayList', iconClass: 'fas fa-list', href: '/playlist' },
    { label: 'Bài hát yêu thích', iconClass: 'fas fa-heart', href: '/favorite-songs' },
    { label: 'Album yêu thích', iconClass: 'fas fa-compact-disc', href: '/favorite-albums' },
    { label: 'Nghệ sĩ yêu thích', iconClass: 'fas fa-user', href: '/favorite-artists' },
  ];

  return (
    <div className={`d-flex flex-md-column flex-row ${cx('sidebar-container')}`}>
      {items.map((item, i) => (
        <a key={i} href={item.href} className={`p-3 d-flex align-items-center gap-2 ${cx('sidebar-item')}`}>
          <i className={item.iconClass}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
