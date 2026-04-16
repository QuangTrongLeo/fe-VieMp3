import React from 'react';
import styles from './SubscriptionModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SubscriptionModal({ show, onClose, data }) {
  if (!show || !data) return null;

  return (
    <>
      <div className={cx('backdrop')} onClick={onClose}></div>

      <div className={cx('modal', 'fade', 'show', 'modalWrapper')} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className={cx('modal-content', 'modalContent')}>
            <div className={cx('modal-header', 'header')}>
              <h5 className={cx('modal-title', 'title')}>Xác nhận đăng ký</h5>
              <button type="button" className="btn-close btn-close-white shadow-none" onClick={onClose}></button>
            </div>

            <div className={cx('modal-body', 'body')}>
              <p className="text-secondary small mb-1">Bạn đã chọn gói:</p>
              <h4 className={cx('planHighlight')}>{data.planName}</h4>

              <ul className={cx('infoList', 'list-unstyled')}>
                <li>
                  <strong>Thời hạn:</strong> <span>{data.duration}</span>
                </li>
                <li>
                  <strong>Giá tiền:</strong> <span>{data.price}</span>
                </li>
                <li className="text-secondary small mt-2 italic">{data.desc}</li>
              </ul>

              <p className="mt-4 small text-secondary">* Nhấn thanh toán để tiếp tục quy trình thanh toán bảo mật.</p>
            </div>

            <div className={cx('modal-footer', 'footer')}>
              <button type="button" className={cx('btnCancel')} onClick={onClose}>
                Để sau
              </button>
              <button type="button" className={cx('btnConfirm')}>
                Thanh toán ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscriptionModal;
