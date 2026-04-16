import React, { useState } from 'react';
import styles from './Premium.module.scss';
import classNames from 'classnames/bind';
import icons from '~/assets/icons';
import { images } from '~/assets';
import SubscriptionModal from '~/components/Components/SubscriptionModal';

const cx = classNames.bind(styles);

function Premium() {
  // Quản lý trạng thái Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const individualOptions = [
    { duration: '1 tháng', desc: 'Thanh toán mỗi tháng', price: '20.000đ' },
    { duration: '3 tháng', desc: 'Tiết kiệm 10%', price: '54.000đ' },
    { duration: '6 tháng', desc: 'Tiết kiệm 25%', price: '90.000đ' },
  ];

  const studentOptions = [
    { duration: '1 tháng', desc: 'Dành cho sinh viên', price: '10.000đ' },
    { duration: '3 tháng', desc: 'Tiết kiệm 10%', price: '27.000đ' },
    { duration: '6 tháng', desc: 'Tiết kiệm 30%', price: '42.000đ' },
  ];

  const individualFeatures = ['Nghe nhạc không quảng cáo', 'Tải xuống ngoại tuyến', 'Âm thanh cực cao'];
  const studentFeatures = ['Tất cả quyền lợi gói Cá nhân', 'Giá ưu đãi dành cho sinh viên', 'Xác thực hàng năm'];

  // Hàm xử lý khi nhấn Đăng ký
  const handleSubscribeClick = (planName, option) => {
    setSelectedPlan({
      planName,
      ...option,
    });
    setShowModal(true);
  };

  const renderCard = (title, badge, options, features) => (
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('header-left')}>
          <img src={images.logo} className={cx('avatar')} alt={title} />
          <h2 className={cx('plan-name')}>{title}</h2>
        </div>
        <span className={cx('badge')}>{badge}</span>
      </div>

      <div className={cx('options-list')}>
        {options.map((opt, index) => (
          <div key={index} className={cx('option-item')}>
            <div>
              <div className={cx('duration')}>{opt.duration}</div>
              <div className={cx('desc')} style={{ color: '#adaaaa', fontSize: '0.8rem' }}>
                {opt.desc}
              </div>
            </div>
            <div className="text-right">
              <span className={cx('price')}>{opt.price}</span>
              <button
                className={cx('btn-subscribe')}
                onClick={() => handleSubscribeClick(title, opt)} // Gắn sự kiện
              >
                Đăng ký
              </button>
            </div>
          </div>
        ))}
      </div>

      <ul className={cx('feature-list')}>
        {features.map((feature, index) => (
          <li key={index}>
            <i className={cx(icons.iconCheck)} style={{ color: 'var(--primary-color)' }}></i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={cx('premium-container')}>
      <section className={cx('hero')}>
        <h1 className={cx('title')}>Nâng cấp lên Premium</h1>
        <p className={cx('subtitle')}>
          Trải nghiệm âm nhạc đỉnh cao không quảng cáo, tải xuống ngoại tuyến và tận hưởng chất lượng âm thanh Hi-Fi
          chân thực nhất.
        </p>
      </section>

      <section className={cx('pricing-grid')}>
        {renderCard('Gói Cá nhân', 'Phổ biến', individualOptions, individualFeatures)}
        {renderCard('Gói Sinh viên', 'Tiết kiệm', studentOptions, studentFeatures)}
      </section>

      {/* Render Modal */}
      <SubscriptionModal show={showModal} onClose={() => setShowModal(false)} data={selectedPlan} />
    </div>
  );
}

export default Premium;
