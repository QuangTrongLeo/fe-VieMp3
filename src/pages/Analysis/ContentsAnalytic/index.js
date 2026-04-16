import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentsAnalytic.module.scss';
import { apiGetSongs } from '~/api/services/serviceSongs';
import { apiGetGenres } from '~/api/services/serviceGenres';
import { apiGetGenreStatistics } from '~/api/services/serviceAnalytics';

const cx = classNames.bind(styles);

function ContentsAnalytic() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreStats, setGenreStats] = useState([]);

  // Bảng màu cố định để đồng bộ giữa Chart và Legend
  const chartColors = ['#72fe8f', '#1cb853', '#88ebff', '#00d4ee', '#f472b6', '#a78bfa'];

  useEffect(() => {
    const fetchData = async () => {
      const genresRes = await apiGetGenres();
      const songsRes = await apiGetSongs();
      const statsRes = await apiGetGenreStatistics();

      setGenres(genresRes || []);
      setSongs(songsRes || []);
      setGenreStats(statsRes);
    };
    fetchData();
  }, []);

  // Biến tích lũy để tính toán vị trí bắt đầu (offset) của mỗi phân đoạn SVG
  let cumulativeOffset = 0;

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
      <header className={cx('header')}>
        <h2 className={cx('editorial-header')}>Thống kê Nội dung</h2>
        <p className={cx('subtitle')}>Phân tích nhịp điệu và sự lan tỏa của âm nhạc trên hệ thống.</p>
      </header>

      <div className={cx('bento-grid')}>
        {/* Total Songs Card */}
        <div className={cx('card', 'total-songs')}>
          <div className={cx('card-main-info')}>
            <div className={cx('content-wrapper')}>
              <h3 className={cx('label')}>Tổng số bài hát</h3>
              <div className={cx('number-group')}>
                <p className={cx('number')}>{songs.length.toLocaleString()}</p>
                <span className={cx('sub-label')}>Thống kê bài hát theo tháng</span>
              </div>
            </div>
          </div>

          {/* Phần thêm mới: Mini Sparkline để Card trông "Pro" hơn */}
          <div className={cx('card-footer')}>
            <div className={cx('mini-chart')}>
              {/* Một SVG đơn giản mô phỏng đường tăng trưởng */}
              <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0 25 Q 25 25, 40 15 T 70 20 T 100 5"
                  fill="none"
                  stroke="url(#gradient-green)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(114, 254, 143, 0.2)" />
                    <stop offset="100%" stopColor="#72fe8f" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={cx('quick-stats')}>
              <p>
                +24 bài hát mới <span>tháng này</span>
              </p>
            </div>
          </div>
        </div>

        {/* Genre Distribution - UPDATED */}
        <div className={cx('card', 'genre-chart')}>
          <div className={cx('chart-header')}>
            <h3 className={cx('chart-title')}>Phân bổ Thể loại Nhạc</h3>
          </div>
          <div className={cx('chart-content')}>
            <div className={cx('circular-chart')}>
              <svg viewBox="0 0 36 36">
                <circle className={cx('base-circle')} cx="18" cy="18" r="15.9"></circle>
                {genreStats.map((item, index) => {
                  const strokeDashArray = `${item.percentage} 100`;
                  const strokeDashOffset = -cumulativeOffset;
                  cumulativeOffset += item.percentage;

                  return (
                    <circle
                      key={index}
                      className={cx('segment')}
                      cx="18"
                      cy="18"
                      r="15.9"
                      stroke={chartColors[index % chartColors.length]}
                      strokeDasharray={strokeDashArray}
                      strokeDashoffset={strokeDashOffset}
                      fill="transparent"
                      strokeWidth="3.8"
                    ></circle>
                  );
                })}
              </svg>
              <div className={cx('chart-label')}>
                <span className={cx('count')}>{genres.length}</span>
                <span className={cx('unit')}>Thể loại</span>
              </div>
            </div>

            <div className={cx('legend')}>
              {genreStats.map((item, index) => (
                <div key={index} className={cx('legend-item')}>
                  <div className={cx('dot')} style={{ backgroundColor: chartColors[index % chartColors.length] }}></div>
                  <div>
                    <p className={cx('name')}>{item.genreName}</p>
                    <p className={cx('info')}>
                      {item.percentage}% • {item.songCount} bài
                    </p>
                  </div>
                </div>
              ))}
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
