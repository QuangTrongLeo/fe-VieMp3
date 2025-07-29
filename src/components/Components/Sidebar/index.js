import './SideBar.scss';

function Sidebar() {
  const items = [
    { label: 'Khám phá', iconClass: 'fas fa-compass', href: '/' },
    { label: 'Thư viện', iconClass: 'fas fa-book', href: '/' },
    { label: 'Chủ đề & Thể loại', iconClass: 'fas fa-layer-group', href: '/' },
    { label: 'Nghe gần đây', iconClass: 'fas fa-history', href: '/' },
    { label: 'PlayList', iconClass: 'fas fa-list', href: '/playlist' },
    { label: 'Bài hát yêu thích', iconClass: 'fas fa-heart', href: '/' },
    { label: 'Album yêu thích', iconClass: 'fas fa-compact-disc', href: '/' },
    { label: 'Nghệ sĩ yêu thích', iconClass: 'fas fa-user', href: '/' },
  ];

  return (
    <div className="d-flex flex-md-column flex-row sidebar-container">
      {items.map((item, i) => (
        <a key={i} className="p-3 sidebar-item d-flex align-items-center gap-2" href={item.href}>
          <i className={item.iconClass}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
