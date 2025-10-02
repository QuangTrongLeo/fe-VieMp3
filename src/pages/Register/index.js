import React, { useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import config from '~/config';
import NotificationBar from '~/components/Components/NotificationBar';
import { useNavigate } from 'react-router-dom';
import { ShortButton } from '~/components/Components/Button';
import { Link } from 'react-router-dom';
import { apiFetchRegister } from '~/api/apiFetchs/apiFetchAuths';

const cx = classNames.bind(styles);

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = email => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    let valid = true;
    setEmailError('');
    setConfirmPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Email không hợp lệ.');
      valid = false;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Mật khẩu nhập lại không khớp.');
      valid = false;
    }

    if (valid) {
      try {
        await apiFetchRegister(username, email, password);

        // 🚀 chuyển sang trang OTP và truyền email để verify
        navigate(config.routes.otp, { state: { email } });
      } catch (error) {
        // TODO: tuỳ bạn muốn hiển thị error như thế nào (ví dụ error dưới input)
        setEmailError(error.message || 'Đăng ký thất bại');
      }
    }
  };

  return (
    <section className={cx('text-center', 'text-lg-start')}>
      <div className={cx('container', 'py-4')}>
        <div className={cx('row', 'g-0', 'align-items-center', 'justify-content-center')}>
          <div className={cx('col-lg-5', 'mb-5', 'mb-lg-0', 'd-none', 'd-lg-block')}>
            <img
              src={images.imageLoginRegister}
              className={cx('w-100', 'rounded-4', 'shadow-4')}
              style={{ height: '400px', objectFit: 'cover' }}
              alt=""
            />
          </div>
          <div className={cx('col-lg-6', 'mb-5', 'mb-lg-0')}>
            <div
              className={cx('card', 'cascading-right', 'bg-body-tertiary', 'mx-auto')}
              style={{ maxWidth: '420px', backdropFilter: 'blur(30px)' }}
            >
              <div className={cx('card-body', 'p-3', 'shadow-5')} style={{ fontSize: '0.9rem' }}>
                <h2 className={cx('fw-bold', 'mb-3')} style={{ fontSize: '1.5rem' }}>
                  Đăng Ký
                </h2>

                <form onSubmit={handleRegisterSubmit}>
                  <div className={cx('form-outline', 'mb-2')}>
                    <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="username">
                      Tên người dùng*:
                    </label>
                    <input
                      type="text"
                      id="username"
                      className={cx('form-control')}
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>

                  <div className={cx('form-outline', 'mb-2')}>
                    <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="email">
                      Email*:
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={cx('form-control')}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-danger mt-1">{emailError}</p>}
                  </div>

                  <div className={cx('form-outline', 'mb-2')}>
                    <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="password">
                      Mật khẩu*:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={cx('form-control')}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className={cx('form-outline', 'mb-2')}>
                    <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="confirm-password">
                      Nhập lại mật khẩu*:
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className={cx('form-control')}
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && <p className="text-danger mt-1">{confirmPasswordError}</p>}
                  </div>

                  <div className={cx('text-center')}>
                    {/* <button type="submit" className={cx('btn', 'btn-block', 'mb-3', 'login-btn')}>
                      Đăng nhập
                    </button> */}
                    <ShortButton
                      color="var(--black-color)"
                      backgroundColor="var(--primary-color)"
                      borderColor="var(--primary-color)"
                      type="submit"
                    >
                      Đăng ký
                    </ShortButton>
                  </div>
                </form>

                <div className={cx('text-center')}>
                  <p style={{ fontSize: '0.85rem', paddingTop: '4%' }}>
                    Nếu đã có tài khoản?{' '}
                    <Link to={config.routes.login} style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                      Đăng nhập
                    </Link>
                  </p>
                </div>

                {/* LOGIN BY GG */}
                <div className={cx('text-center')}>
                  <p>hoặc đăng nhập với</p>
                  <button className={cx('google-btn')}>
                    <i className={cx('fab', 'fa-google')}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
