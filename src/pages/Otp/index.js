import React from 'react';
import styles from './Otp.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { ShortButton } from '~/components/Components/Button';

const cx = classNames.bind(styles);

function Otp() {
  return (
    <>
      <section className={cx('text-center', 'text-lg-start')} style={{ marginTop: '5%' }}>
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
                  <h2 className={cx('fw-bold', 'mb-4')} style={{ fontSize: '1.5rem' }}>
                    Xác thực OTP
                  </h2>
                  <form>
                    <div data-mdb-input-init className={cx('form-outline', 'mb-3')}>
                      <label className={cx('form-label', 'text-start', 'w-100')} htmlFor="form3Example3">
                        Otp*:
                      </label>
                      <input type="text" id="form3Example3" className={cx('form-control')} />
                    </div>

                    <div className={cx('text-center')}>
                      <ShortButton
                        color="var(--black-color)"
                        backgroundColor="var(--primary-color)"
                        borderColor="var(--primary-color)"
                        href="/"
                      >
                        Xác thực
                      </ShortButton>
                    </div>
                  </form>
                  {/* REGISTER */}
                  <div className={cx('text-center')}>
                    <div style={{ fontSize: '0.85rem', paddingTop: '4%' }}>Mã OTP đã được gửi vào gmail của bạn </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                      Bạn có 5 phút để xác thực OTP{' '}
                    </div>
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

export default Otp;
