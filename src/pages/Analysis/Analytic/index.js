import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Analytic.module.scss';
import icons from '~/assets/icons';
import LimitedList from '~/components/Components/LimitedList';

import { apiGetArtists } from '~/api/services/serviceArtists';
import { apiGetSongs } from '~/api/services/serviceSongs';
import { apiGetUsers } from '~/api/services/serviceUsers';
import { apiGetListenByMonth, apiGetListenByWeek } from '~/api/services/serviceAnalytics';

const cx = classNames.bind(styles);

function Analytic() {
  const [artists, setArtists] = useState([]);
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);

  const [chartData, setChartData] = useState([]);
  const [filterType, setFilterType] = useState('week');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artistRes, userRes, songRes, weekRes, monthRes] = await Promise.all([
          apiGetArtists(),
          apiGetUsers(),
          apiGetSongs(),
          apiGetListenByWeek(),
          apiGetListenByMonth(),
        ]);
        // sort artists
        const sortedArtists = [...artistRes].sort((a, b) => (b.favorites || 0) - (a.favorites || 0));
        setArtists(sortedArtists);
        setUsers(userRes);
        setSongs(songRes);

        if (filterType === 'week') setChartData(weekRes);
        else setChartData(monthRes);
      } catch (err) {
        console.error('Lỗi fetch dashboard:', err);
      }
    };

    fetchData();
  }, [filterType]);

  const totalUsers = users.length;
  const totalSongs = songs.length;
  const totalListenCounts = songs.reduce((sum, song) => sum + (song.listenCount || 0), 0);

  const kpis = [
    {
      title: 'Tổng lượt nghe',
      value: Intl.NumberFormat('vi-VN').format(totalListenCounts),
      trend: '+12.5%',
      icon: 'headset',
    },
    { title: 'Tổng người dùng', value: Intl.NumberFormat('vi-VN').format(totalUsers), trend: '+5.2%', icon: 'person' },
    { title: 'Doanh thu tháng', value: '185.2M', trend: '+8.1%', unit: 'VND', icon: 'payments' },
    {
      title: 'Tổng số bài hát',
      value: Intl.NumberFormat('vi-VN').format(totalSongs),
      trend: '-2.4%',
      icon: 'music',
      isDown: true,
    },
  ];

  return (
    <div className={cx('wrapper')}>
      {/* HEADER */}
      <div className={cx('header')}>
        <div className={cx('titleGroup')}>
          <h2 className={cx('title')}>
            Thống kê <span>Hệ thống</span>
          </h2>
          <p className={cx('subtitle')}>Báo cáo hiệu suất nội dung của hệ thống.</p>
        </div>
      </div>

      {/* KPI GRID */}
      <div className={cx('kpiGrid')}>
        {kpis.map((kpi, index) => (
          <div key={index} className={cx('card')}>
            <div className={cx('cardHeader')}>
              <span className={cx('cardIcon', 'material-symbols-outlined')}>{kpi.icon}</span>
              <span className={cx('trend', kpi.isDown && 'down')}>{kpi.trend}</span>
            </div>
            <div className={cx('cardContent')}>
              <p className={cx('cardTitle')}>{kpi.title}</p>
              <h3 className={cx('cardValue')}>
                {kpi.value} {kpi.unit && <span className={cx('unit')}>{kpi.unit}</span>}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className={cx('mainGrid')}>
        <div className={cx('chartBox')}>
          <div className={cx('boxHeader')}>
            <h4 className={cx('boxTitle')}>Tăng trưởng lượt nghe</h4>
            <select className={cx('selectFilter')} value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="week">Theo tuần</option>
              <option value="month">Theo tháng</option>
            </select>
          </div>

          <div className={cx('chartPlaceholder')} style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorListen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1db954" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1db954" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="period" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#1db954' }}
                />
                <Area
                  type="monotone"
                  dataKey="totalListen"
                  stroke="#1db954"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorListen)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={cx('artistBox')}>
          <h4 className={cx('boxTitle')}>Nghệ sĩ nổi bật</h4>

          <div className={cx('artistList')}>
            <LimitedList
              items={artists}
              limit={4}
              wrapInRow={false}
              renderItem={(a, i) => (
                <div key={a.id} className={cx('artistItem')}>
                  <div className={cx('rank')}>{i + 1}</div>
                  <img src={a.avatar} alt={a.name} />
                  <div className={cx('artistInfo')}>
                    <div className={cx('artistName')}>{a.name}</div>
                  </div>
                  <div className={cx('artistStats')}>{Intl.NumberFormat('vi-VN').format(a.favorites || 0)}</div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytic;
