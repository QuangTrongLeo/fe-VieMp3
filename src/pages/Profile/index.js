import React, { useRef, useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets';
import { ShortButton } from '~/components/Components/Button';

const cx = classNames.bind(styles);

function Profile() {
  const [user, setUser] = useState({
    usename: 'Lil Leo 🐍',
    gmail: 'trongphamtg05@gmail.com',
    avatar: '',
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [tempName, setTempName] = useState(user.usename);
  const [tempAvatar, setTempAvatar] = useState(user.avatar);
  const fileInputRef = useRef(null); // dùng để trigger chọn file

  const handleSave = () => {
    setUser(prev => ({
      ...prev,
      usename: tempName,
      avatar: tempAvatar,
    }));
    setOpenPopup(false);
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setTempAvatar(previewUrl);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={cx('profile-header')}>
      <div className="container">
        <div className={cx('profile-content', 'row align-items-center')}>
          <div className={cx('avatar-placeholder', 'col-12 col-md-4', 'text-center')}>
            <img
              src={user.avatar || images.avatarDefault}
              alt={user.usename}
              className={cx('avatar-img', 'img-fluid rounded-circle')}
            />
          </div>

          <div className={cx('profile-info', 'col-12 col-md-8', 'text-center', 'text-md-start')}>
            <div className={cx('profile-label')}>Hồ sơ</div>
            <h1 className={cx('profile-name')}>{user.usename}</h1>
            <div>Gmail: {user.gmail}</div>
            <div style={{ marginTop: '2%' }}>
              <ShortButton
                color="var(--white-color)"
                backgroundColor="var(--primary-color)"
                borderColor="var(--black-color-light-2)"
                onClick={() => {
                  setTempName(user.usename);
                  setTempAvatar(user.avatar);
                  setOpenPopup(true);
                }}
              >
                Cập nhật thông tin
              </ShortButton>
            </div>
          </div>
        </div>
      </div>

      {/* --- popup update profile --- */}
      {openPopup && (
        <div className={cx('popup-overlay')} onClick={() => setOpenPopup(false)}>
          <div className={cx('popup-box')} onClick={e => e.stopPropagation()}>
            <div className={cx('popup-header')}>
              <h3>Chi tiết hồ sơ</h3>
              <span className={cx('close-icon')} onClick={() => setOpenPopup(false)}>
                &times;
              </span>
            </div>

            <div className={cx('popup-body')}>
              <div className={cx('popup-avatar')} onClick={openFileDialog}>
                <img src={tempAvatar || images.avatarDefault} alt="avatar" />
              </div>

              {/* input file ẩn */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />

              <input
                type="text"
                value={tempName}
                onChange={e => setTempName(e.target.value)}
                className={cx('popup-input')}
              />

              <div className={cx('popup-footer')}>
                <ShortButton color="var(--white-color)" backgroundColor="var(--primary-color)" onClick={handleSave}>
                  Lưu
                </ShortButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
