import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer', 'text-white', 'pt-5', 'pb-4')}>
      <div className="container">
        <hr className="border-secondary" />

        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
          <div>
            <h5 className="fw-bold">Công ty</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/">Việc làm</Link>
              </li>
              <li>
                <Link to="/">For the Record</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Cộng đồng</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Dành cho các Nghệ sĩ</Link>
              </li>
              <li>
                <Link to="/">Nhà phát triển</Link>
              </li>
              <li>
                <Link to="/">Quảng cáo</Link>
              </li>
              <li>
                <Link to="/">Nhà đầu tư</Link>
              </li>
              <li>
                <Link to="/">Nhà cung cấp</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Liên kết hữu ích</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Hỗ trợ</Link>
              </li>
              <li>
                <Link to="/">Ứng dụng Di động Miễn phí</Link>
              </li>
              <li>
                <Link to="/">Phổ biến theo quốc gia</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Các gói của VieMp3</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Premium Individual</Link>
              </li>
              <li>
                <Link to="/">Premium Student</Link>
              </li>
              <li>
                <Link to="/">VieMp3 Free</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3 my-4">
          <Link to="/">
            <i className="fab fa-instagram fs-4"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter fs-4"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-facebook fs-4"></i>
          </Link>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-wrap justify-content-between text-secondary small">
          <div className="d-flex flex-wrap gap-3">
            <Link to="/">Pháp lý</Link>
            <Link to="/">Trung tâm an toàn và quyền riêng tư</Link>
            <Link to="/">Chính sách quyền riêng tư</Link>
            <Link to="/">Cookie</Link>
            <Link to="/">Giới thiệu Quảng cáo</Link>
            <Link to="/">Hỗ trợ tiếp cận</Link>
          </div>
          <div>© 2025 VieMp3</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
