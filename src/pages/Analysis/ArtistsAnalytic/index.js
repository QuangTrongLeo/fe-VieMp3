import React from 'react';
import classNames from 'classnames/bind';
import styles from './ArtistsAnalytic.module.scss';

const cx = classNames.bind(styles);

function ArtistsAnalytic() {
  // Dữ liệu mẫu cho biểu đồ và danh sách
  const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];
  const kpiData = [
    { label: 'Tổng số Nghệ sĩ', value: '4,829', trend: '+12.5%', icon: 'groups', type: 'primary' },
    { label: 'Tổng số Album', value: '24,510', trend: '+8.2%', icon: 'album', type: 'tertiary' },
    { label: 'Số bài hát mới', value: '324', trend: 'Hôm nay', icon: 'new_releases', type: 'secondary' },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* Page Header */}
        <header className={cx('header')}>
          <h2 className={cx('title')}>Thống kê Nghệ sĩ & Album</h2>
          <p className={cx('description')}>Quản trị hiệu suất nội dung âm nhạc trên hệ thống.</p>
        </header>

        {/* KPI Cards Bento */}
        <div className={cx('kpi-grid')}>
          {kpiData.map((kpi, index) => (
            <div key={index} className={cx('kpi-card')}>
              <div className={cx('kpi-top')}>
                <div className={cx('icon-box', kpi.type)}>
                  <span className="material-symbols-outlined">{kpi.icon}</span>
                </div>
                <span className={cx('trend-badge', kpi.type)}>{kpi.trend}</span>
              </div>
              <h3 className={cx('kpi-label')}>{kpi.label}</h3>
              <p className={cx('kpi-value')}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className={cx('charts-row')}>
          {/* Bar Chart: Release Growth */}
          <div className={cx('chart-box')}>
            <div className={cx('chart-header')}>
              <div>
                <h4 className={cx('chart-title')}>Tăng trưởng phát hành</h4>
                <p className={cx('chart-subtitle')}>Số lượng album được tạo hàng tháng</p>
              </div>
              <div className={cx('chart-stat')}>
                <span className={cx('highlight')}>1.2k</span>
                <p className={cx('label')}>Tháng này</p>
              </div>
            </div>
            <div className={cx('bar-container')}>
              {[40, 60, 45, 80, 55, 90].map((height, i) => (
                <div key={i} className={cx('bar', { active: i === 5 })} style={{ height: `${height}%` }}></div>
              ))}
            </div>
            <div className={cx('chart-labels')}>
              {months.map((m, i) => (
                <span key={i} className={cx({ active: i === 5 })}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Line Chart: Performance */}
          <div className={cx('chart-box')}>
            <div className={cx('chart-header')}>
              <div>
                <h4 className={cx('chart-title')}>Hiệu suất nghe</h4>
                <p className={cx('chart-subtitle')}>So sánh lượt nghe Top 3 Nghệ sĩ (30 ngày)</p>
              </div>
              <div className={cx('legend')}>
                <div className={cx('legend-item')}>
                  <span className={cx('dot', 'primary')}></span>Pop
                </div>
                <div className={cx('legend-item')}>
                  <span className={cx('dot', 'tertiary')}></span>R&B
                </div>
              </div>
            </div>
            <div className={cx('line-chart-svg')}>
              <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 120C50 110 80 40 150 60C220 80 300 10 400 30"
                  stroke="#72fe8f"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M0 140C70 135 120 100 200 110C280 120 330 60 400 80"
                  stroke="#88ebff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeOpacity="0.6"
                />
                <defs>
                  <linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#72fe8f" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#72fe8f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 120C50 110 80 40 150 60C220 80 300 10 400 30V150H0V120Z" fill="url(#chartFade)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Lists Row */}
        <div className={cx('lists-row')}>
          {/* New Artists */}
          <section className={cx('list-section')}>
            <div className={cx('list-header')}>
              <h4 className={cx('list-title')}>Nghệ sĩ mới tạo</h4>
              <button className={cx('text-btn')}>Xem tất cả</button>
            </div>
            <div className={cx('items-stack')}>
              {[
                { name: 'Minh Anh', sub: 'Pop • Hôm nay', img: '9' },
                { name: 'The Wind Band', sub: 'Indie • 2 giờ trước', img: '10' },
                { name: 'T-Flow', sub: 'Hip Hop • Hôm qua', img: '11' },
                { name: 'Luna Night', sub: 'EDM • 3 ngày trước', img: '12' },
              ].map((item, i) => (
                <div key={i} className={cx('item-card')}>
                  <img
                    src={`http://googleusercontent.com/profile/picture/${item.img}`}
                    alt={item.name}
                    className={cx('avatar')}
                  />
                  <div className={cx('info')}>
                    <h5 className={cx('name')}>{item.name}</h5>
                    <p className={cx('sub')}>{item.sub}</p>
                  </div>
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              ))}
            </div>
          </section>

          {/* New Albums */}
          <section className={cx('list-section')}>
            <div className={cx('list-header')}>
              <h4 className={cx('list-title')}>Album mới cập nhật</h4>
              <button className={cx('text-btn')}>Duyệt nhanh</button>
            </div>
            <div className={cx('items-stack')}>
              {[
                { title: 'Hành Trình Mới', artist: 'Minh Anh', status: 'approved', img: '13' },
                { title: 'Lặng Lẽ', artist: 'The Wind Band', status: 'pending', img: '14' },
                { title: 'Neon Streets', artist: 'Luna Night', status: 'approved', img: '15' },
                { title: 'Giai Điệu Cổ Điển', artist: 'Trần Long', status: 'approved', img: '16' },
              ].map((item, i) => (
                <div key={i} className={cx('item-card')}>
                  <div className={cx('cover-box')}>
                    <img src={`http://googleusercontent.com/profile/picture/${item.img}`} alt={item.title} />
                  </div>
                  <div className={cx('info')}>
                    <h5 className={cx('name')}>{item.title}</h5>
                    <p className={cx('sub')}>{item.artist}</p>
                  </div>
                  <span className={cx('status-badge', item.status)}>
                    {item.status === 'approved' ? 'Đã duyệt' : 'Chờ duyệt'}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArtistsAnalytic;
