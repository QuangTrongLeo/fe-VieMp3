import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-4">
      <div className="container">
        <hr className="border-secondary" />

        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
          <div>
            <h5 className="fw-bold">Công ty</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Giới thiệu</a>
              </li>
              <li>
                <a href="/">Việc làm</a>
              </li>
              <li>
                <a href="/">For the Record</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Cộng đồng</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Dành cho các Nghệ sĩ</a>
              </li>
              <li>
                <a href="/">Nhà phát triển</a>
              </li>
              <li>
                <a href="/">Quảng cáo</a>
              </li>
              <li>
                <a href="/">Nhà đầu tư</a>
              </li>
              <li>
                <a href="/">Nhà cung cấp</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Liên kết hữu ích</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Hỗ trợ</a>
              </li>
              <li>
                <a href="/">Ứng dụng Di động Miễn phí</a>
              </li>
              <li>
                <a href="/">Phổ biến theo quốc gia</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Các gói của Spotify</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Premium Individual</a>
              </li>
              <li>
                <a href="/">Premium Student</a>
              </li>
              <li>
                <a href="/">Spotify Free</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3 my-4">
          <a href="/">
            <i className="fab fa-instagram fs-4"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter fs-4"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook fs-4"></i>
          </a>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-wrap justify-content-between text-secondary small">
          <div className="d-flex flex-wrap gap-3">
            <a href="/">Pháp lý</a>
            <a href="/">Trung tâm an toàn và quyền riêng tư</a>
            <a href="/">Chính sách quyền riêng tư</a>
            <a href="/">Cookie</a>
            <a href="/">Giới thiệu Quảng cáo</a>
            <a href="/">Hỗ trợ tiếp cận</a>
          </div>
          <div>© 2025 VieMp3</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
