function Sidebar() {
  return (
    <div
      className="d-flex flex-md-column flex-row"
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="p-2"
          style={{
            minWidth: '120px', // chiều rộng cố định từng item để scroll ngang mượt
            flexShrink: 0, // ngăn thu nhỏ ở mobile
          }}
        >
          Dòng nội dung {i + 1}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
