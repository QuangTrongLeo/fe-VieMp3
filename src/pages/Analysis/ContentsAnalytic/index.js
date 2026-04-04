import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentsAnalytic.module.scss';

const cx = classNames.bind(styles);

function ContentsAnalytic() {
  // Dữ liệu mẫu cho Top 5 bài hát
  const topSongs = [
    {
      id: '01',
      title: 'Neon Shadows',
      artist: 'Luna Vibe • Synthesized Night',
      views: '12,405,210',
      trend: '+4',
      type: 'up',
      img: 'https://picsum.photos/200?random=1',
    },
    {
      id: '02',
      title: 'Mất Kết Nối',
      artist: 'Kai Đinh • Indie Chill',
      views: '9,812,003',
      trend: '0',
      type: 'stable',
      img: 'https://picsum.photos/200?random=2',
    },
    {
      id: '03',
      title: 'Thủy Triều',
      artist: 'Quang Hùng MasterD • Pop Dance',
      views: '8,542,119',
      trend: '+2',
      type: 'up',
      img: 'https://picsum.photos/200?random=3',
    },
    {
      id: '04',
      title: 'Digital Rain',
      artist: 'Cyber Ghost • Lo-fi Tech',
      views: '7,221,050',
      trend: '-1',
      type: 'down',
      img: 'https://picsum.photos/200?random=4',
    },
    {
      id: '05',
      title: 'Echoes of Gold',
      artist: 'Aurora • Cinematic Pop',
      views: '6,904,332',
      trend: 'NEW',
      type: 'up',
      img: 'https://picsum.photos/200?random=5',
    },
  ];

  return (
    <main>
      {/* Editorial Header Section */}
      <header className={cx('header')}>
        <h2 className={cx('editorial-header')}>Thống kê Nội dung</h2>
        <p className={cx('subtitle')}>Phân tích nhịp điệu và sự lan tỏa của âm nhạc trên hệ thống.</p>
      </header>

      {/* Bento Grid Layout */}
      <div className={cx('bento-grid')}>
        {/* Total Songs Card */}
        <div className={cx('card', 'total-songs')}>
          <div className={cx('card-top')}>
            <div className={cx('icon-row')}>
              <span className="material-symbols-outlined icon-box">music</span>
              <span className={cx('badge')}>+12% tháng này</span>
            </div>
            <h3 className={cx('label')}>Tổng số bài hát</h3>
            <p className={cx('number')}>1,284,502</p>
          </div>
        </div>

        {/* Genre Distribution */}
        <div className={cx('card', 'genre-chart')}>
          <div className={cx('chart-header')}>
            <h3 className={cx('chart-title')}>Phân bổ Thể loại Nhạc</h3>
            <div className={cx('filter-tabs')}>
              <span className={cx('tab')}>Tuần</span>
              <span className={cx('tab', 'active')}>Tháng</span>
            </div>
          </div>
          <div className={cx('chart-content')}>
            <div className={cx('circular-chart')}>
              <svg viewBox="0 0 36 36">
                <circle className={cx('base-circle')} cx="18" cy="18" r="15.9"></circle>
                <circle className={cx('segment', 's1')} cx="18" cy="18" r="15.9"></circle>
                <circle className={cx('segment', 's2')} cx="18" cy="18" r="15.9"></circle>
                <circle className={cx('segment', 's3')} cx="18" cy="18" r="15.9"></circle>
                <circle className={cx('segment', 's4')} cx="18" cy="18" r="15.9"></circle>
              </svg>
              <div className={cx('chart-label')}>
                <span className={cx('count')}>12</span>
                <span className={cx('unit')}>Thể loại</span>
              </div>
            </div>
            <div className={cx('legend')}>
              <div className={cx('legend-item')}>
                <div className={cx('dot', 'pop')}></div>
                <div>
                  <p className={cx('name')}>Pop</p>
                  <p className={cx('info')}>40% • 513K</p>
                </div>
              </div>
              <div className={cx('legend-item')}>
                <div className={cx('dot', 'edm')}></div>
                <div>
                  <p className={cx('name')}>EDM</p>
                  <p className={cx('info')}>25% • 321K</p>
                </div>
              </div>
              <div className={cx('legend-item')}>
                <div className={cx('dot', 'indie')}></div>
                <div>
                  <p className={cx('name')}>Indie</p>
                  <p className={cx('info')}>20% • 256K</p>
                </div>
              </div>
              <div className={cx('legend-item')}>
                <div className={cx('dot', 'rock')}></div>
                <div>
                  <p className={cx('name')}>Rock</p>
                  <p className={cx('info')}>15% • 192K</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Songs List */}
        <div className={cx('card', 'top-list')}>
          <div className={cx('list-header')}>
            <h3 className={cx('chart-title')}>Top 5 Bài Hát Thịnh Hành</h3>
            <button className={cx('btn-text')}>Xem tất cả</button>
          </div>
          <div className={cx('songs-container')}>
            {topSongs.map(song => (
              <div key={song.id} className={cx('song-item')}>
                <span className={cx('rank')}>{song.id}</span>
                <div className={cx('thumb')}>
                  <img src={song.img} alt={song.title} />
                  <div className={cx('overlay')}>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
                <div className={cx('song-info')}>
                  <p className={cx('name')}>{song.title}</p>
                  <p className={cx('artist')}>{song.artist}</p>
                </div>
                <div className={cx('stats')}>
                  <p className={cx('views')}>{song.views}</p>
                  <p className={cx('sub')}>Lượt nghe</p>
                </div>
                <div className={cx('trend-box')}>
                  <span className={`material-symbols-outlined ${cx('trend-icon', song.type)}`}>
                    {song.type === 'up' ? 'trending_up' : song.type === 'down' ? 'trending_down' : 'horizontal_rule'}
                  </span>
                  <span className={cx('trend-value', song.type)}>{song.trend}</span>
                </div>
                <button className={cx('more-btn')}>
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContentsAnalytic;
