import React from 'react';
import { jwtDecode } from 'jwt-decode';
import './Header.scss';
import { useEffect, useState } from 'react';
import { userRoutes, artistRoutes, adminRoutes } from '~/routes';

function Header() {
  const [roles, setRoles] = useState([]);
  const [currentUser, setCurrentUser] = useState('user2');

  const base64Encode = obj => {
    return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
  };

  const fakeTokens = {
    user1: [
      base64Encode({ alg: 'HS256', typ: 'JWT' }),
      base64Encode({
        sub: 'user1',
        name: 'Người 1',
        roles: ['USER'],
      }),
      'signature',
    ].join('.'),

    user2: [
      base64Encode({ alg: 'HS256', typ: 'JWT' }),
      base64Encode({
        sub: 'user2',
        name: 'Người 2',
        roles: ['USER', 'ARTIST'],
      }),
      'signature',
    ].join('.'),

    user3: [
      base64Encode({ alg: 'HS256', typ: 'JWT' }),
      base64Encode({
        sub: 'user3',
        name: 'Người 3',
        roles: ['USER', 'ADMIN'],
      }),
      'signature',
    ].join('.'),
  };

  // Khi chọn user, cập nhật token và decode roles
  useEffect(() => {
    const token = fakeTokens[currentUser];
    localStorage.setItem('token', token);

    try {
      const decoded = jwtDecode(token);
      let userRoles = decoded.roles || [];
      if (typeof userRoles === 'string') {
        userRoles = userRoles.split(',').map(r => r.trim().toUpperCase());
      }
      setRoles(userRoles);
    } catch (err) {
      console.error('Invalid token', err);
      setRoles([]);
    }
  }, [currentUser]);

  const isArtist = roles.includes('ARTIST');
  const isAdmin = roles.includes('ADMIN');

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo + Search */}
        <div className="d-flex align-items-center flex-grow-1 gap-3">
          {/* Logo */}
          <a className="navbar-brand mb-0" href="/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          {/* Search form */}
          <form className="input-group search-form">
            <input
              type="search"
              className="form-control"
              placeholder="Bạn muốn phát nội dung gì?"
              aria-label="Search"
            />
            <button className="btn btn-outline-custom" type="button">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Voice button */}
          <button className="btn voice-btn">
            <i className="fas fa-microphone"></i>
          </button>
        </div>

        {/* Toggle button */}
        <button
          className="navbar-toggler ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center flex-row gap-3 mb-0">
            {/* Nút Khám phá Premium */}
            <li>
              <button className="btn-premium">Khám phá Premium</button>
            </li>
            {[
              { icon: 'comment-dots', label: 'Messaging' },
              { icon: 'bell', label: 'Notifications' },
            ].map((item, i) => (
              <li key={i} className="nav-item position-relative icon-tooltip-wrapper">
                <a className="nav-link d-flex flex-column text-center" href="#" onClick={e => e.preventDefault()}>
                  <i className={`fas fa-${item.icon} fa-lg my-1`}></i>
                  <div className="icon-tooltip">{item.label}</div>
                </a>
              </li>
            ))}

            {/* Avatar dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={e => e.preventDefault()}
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  className="rounded-circle"
                  height="40"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul className="dropdown-menu custom-dropdown-left" aria-labelledby="navbarDropdownMenuLink">
                {/* USER */}
                <li>
                  <a className="dropdown-item" href="/profile">
                    <i className="fas fa-user me-2"></i> Hồ sơ
                  </a>
                </li>

                {/* ARTIST */}
                {isArtist && (
                  <>
                    <li>
                      <a className="dropdown-item" href="/my-songs">
                        <i className="fas fa-music me-2"></i> Bài hát của tôi
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/my-albums">
                        <i className="fas fa-compact-disc me-2"></i> Album của tôi
                      </a>
                    </li>
                  </>
                )}

                {/* ADMIN */}
                {isAdmin && (
                  <>
                    <li>
                      <a className="dropdown-item" href="/manage-users">
                        <i className="fas fa-users-cog me-2"></i> Quản lý người dùng
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/moderate-songs">
                        <i className="fas fa-check-circle me-2"></i> Kiểm duyệt bài hát
                      </a>
                    </li>
                  </>
                )}

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="/logout">
                    <i className="fas fa-sign-out-alt me-2"></i> Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
