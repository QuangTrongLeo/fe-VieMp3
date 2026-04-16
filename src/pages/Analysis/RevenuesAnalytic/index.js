import React from 'react';
import classNames from 'classnames/bind';
import styles from './RevenuesAnalytic.module.scss';

const cx = classNames.bind(styles);

function RevenuesAnalytic() {
  const months = ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* Header Section */}
        <header className={cx('header')}>
          <div className={cx('header-info')}>
            <h1 className={cx('title')}>Thống kê Doanh thu</h1>
            <p className={cx('subtitle')}>
              Báo cáo tài chính chi tiết từ các gói hội viên Individual và Student qua cổng VNPAY.
            </p>
          </div>
          <div className={cx('header-actions')}>
            <div className={cx('date-picker')}>
              <span className="material-symbols-outlined">calendar_today</span>
              <span>Tháng 10, 2023</span>
            </div>
            <button className={cx('export-btn')}>Xuất báo cáo</button>
          </div>
        </header>

        <div className={cx('bento-grid')}>
          {/* Total Revenue */}
          <div className={cx('metric-card', 'revenue-card')}>
            <p className={cx('card-label')}>TỔNG DOANH THU (VNPAY)</p>
            <h2 className={cx('revenue-value')}>1,284,500,000 đ</h2>
            <div className={cx('trend', 'up')}>
              <span className="material-symbols-outlined">trending_up</span>
              <span>+12.5% so với tháng trước</span>
            </div>
          </div>

          {/* Member Distribution */}
          <div className={cx('metric-card', 'distribution-card')}>
            <div className={cx('card-header')}>
              <div>
                <h3 className={cx('card-title')}>Phân bổ Gói hội viên</h3>
                <p className={cx('card-desc')}>So sánh doanh thu giữa Individual & Student</p>
              </div>
              <div className={cx('legend')}>
                <div className={cx('legend-item')}>
                  <span className={cx('dot', 'individual')}></span> Individual
                </div>
                <div className={cx('legend-item')}>
                  <span className={cx('dot', 'student')}></span> Student
                </div>
              </div>
            </div>
            <div className={cx('bar-chart-mock')}>
              {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(day => (
                <div key={day} className={cx('bar-group')}>
                  <div className={cx('bars')}>
                    <div className={cx('bar', 'ind')} style={{ height: '40%' }}></div>
                    <div className={cx('bar', 'stu')} style={{ height: '20%' }}></div>
                  </div>
                  <span className={cx('axis-label')}>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart - FIXED TOP CLIPPING */}
        <div className={cx('chart-section')}>
          <div className={cx('card-header')}>
            <h3 className={cx('card-title')}>Doanh thu theo tháng (2023)</h3>
            <div className={cx('tabs')}>
              <button className={cx('tab', 'active')}>VNPAY</button>
              <button className={cx('tab')}>Tất cả</button>
            </div>
          </div>

          <div className={cx('line-chart-container')}>
            {/* viewBox="0 -20 1000 220" 
                            -20 ở tọa độ y giúp tạo "padding-top" ảo bên trong SVG 
                        */}
            <svg className={cx('line-chart')} preserveAspectRatio="none" viewBox="0 -25 1000 225">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1DB954" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1DB954" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area Fill */}
              <path
                className={cx('area')}
                d="M0,160 Q100,155 200,145 T400,120 T600,135 T800,20 T1000,50 L1000,200 L0,200 Z"
                fill="url(#chartGradient)"
              />

              {/* Main Line */}
              <path className={cx('line')} d="M0,160 Q100,155 200,145 T400,120 T600,135 T800,20 T1000,50" />

              {/* Interaction Points */}
              <circle cx="200" cy="145" r="5" className={cx('chart-dot')} />
              <circle cx="500" cy="130" r="5" className={cx('chart-dot')} />
              <circle cx="800" cy="20" r="5" className={cx('chart-dot')} />
            </svg>

            <div className={cx('x-axis')}>
              {months.map(m => (
                <span key={m} className={cx({ active: m === 'Th10' })}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className={cx('table-section')}>
          <div className={cx('card-header')}>
            <h3 className={cx('card-title')}>Giao dịch VNPAY gần đây</h3>
            <button className={cx('view-all')}>Xem tất cả</button>
          </div>
          <table className={cx('table')}>
            <thead>
              <tr>
                <th>NGƯỜI DÙNG</th>
                <th>GÓI HỘI VIÊN</th>
                <th>SỐ TIỀN</th>
                <th style={{ textAlign: 'right' }}>TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 'NL',
                  name: 'Nguyễn Linh',
                  email: 'linh.ng@gmail.com',
                  plan: 'Individual',
                  amount: '59,000 đ',
                  status: 'success',
                },
                {
                  id: 'TH',
                  name: 'Trần Huy',
                  email: 'huy.t@university.edu.vn',
                  plan: 'Student',
                  amount: '29,500 đ',
                  status: 'success',
                },
                {
                  id: 'PM',
                  name: 'Phạm Minh',
                  email: 'minh.pham@outlook.com',
                  plan: 'Individual',
                  amount: '59,000 đ',
                  status: 'failed',
                },
                {
                  id: 'LV',
                  name: 'Lê Văn',
                  email: 'vanle@gmail.com',
                  plan: 'Student',
                  amount: '29,500 đ',
                  status: 'success',
                },
              ].map((row, i) => (
                <tr key={i}>
                  <td>
                    <div className={cx('user-cell')}>
                      <div className={cx('avatar')}>{row.id}</div>
                      <div>
                        <div className={cx('user-name')}>{row.name}</div>
                        <div className={cx('user-email')}>{row.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={cx('badge', row.plan.toLowerCase())}>{row.plan}</span>
                  </td>
                  <td className={cx('amount')}>{row.amount}</td>
                  <td style={{ textAlign: 'right' }}>
                    <div className={cx('status', row.status)}>
                      <span className="material-symbols-outlined">
                        {row.status === 'success' ? 'check_circle' : 'cancel'}
                      </span>
                      {row.status === 'success' ? 'Thành công' : 'Thất bại'}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RevenuesAnalytic;
