import React from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Register() {
  return (
    <>
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
                style={{
                  maxWidth: '420px',
                  backdropFilter: 'blur(30px)',
                }}
              >
                <div className={cx('card-body', 'p-3', 'shadow-5')} style={{ fontSize: '0.9rem' }}>
                  <h2 className={cx('fw-bold', 'mb-3')} style={{ fontSize: '1.5rem' }}>
                    Đăng Ký
                  </h2>
                  <form>
                    <div data-mdb-input-init className={cx('form-outline', 'mb-2')}>
                      <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="form3Example3">
                        Tên người dùng*:
                      </label>
                      <input type="text" id="form3Example3" className={cx('form-control')} />
                    </div>

                    <div data-mdb-input-init className={cx('form-outline', 'mb-2')}>
                      <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="form3Example3">
                        Email*:
                      </label>
                      <input type="email" id="form3Example3" className={cx('form-control')} />
                    </div>

                    <div data-mdb-input-init className={cx('form-outline', 'mb-2')}>
                      <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="form3Example3">
                        Mật khẩu*:
                      </label>
                      <input type="password" id="form3Example4" className={cx('form-control')} />
                    </div>

                    <div data-mdb-input-init className={cx('form-outline', 'mb-2')}>
                      <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="form3Example3">
                        Nhập lại mật khẩu*:
                      </label>
                      <input type="password" id="form3Example4" className={cx('form-control')} />
                    </div>

                    <div className={cx('text-center')}>
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className={cx('btn', 'btn-block', 'mb-3', 'login-btn')}
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                  {/* REGISTER */}
                  <div className={cx('text-center')}>
                    <p style={{ fontSize: '0.85rem' }}>
                      Nếu đã có tài khoản?{' '}
                      <a href="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                        Đăng nhập
                      </a>
                    </p>
                  </div>

                  {/* LOGIN BY GG */}
                  <div className={cx('text-center')}>
                    <p>hoặc đăng nhập với</p>

                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className={cx('btn', 'btn-link', 'btn-floating', 'mx-1')}
                    >
                      <i className={cx('fab', 'fa-google')} style={{ fontSize: '0.9rem' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
