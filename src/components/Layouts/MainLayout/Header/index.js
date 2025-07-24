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
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXFxcX////CwsLHx8fz8/P5+fnm5ubLy8vb29v39/fh4eHw8PDT09Ps7OzJycn8/PzW1taDZ0PNAAAFXklEQVR4nO2dB7arOgxFiagJdf6jfSFcfkilSLKO87VHwFm21SyLJHEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcxwJaYP0t0oya0qYq2mykLS5DmfyOTErKZjifXsmLpkyT6GVSWRXv5E307aWJWiNRU+cf5f2JzKpYtyul5bCibqZtughFUtmuLd+CurL+3r0QVTv03dYxjWsZh36fvpvGMhqN1LT79V05XyKRuHuD3imiMKvdsQX8W8YBX2JZMwReQTeqVGY8gacT9mGkiqvvSmut4hsSAq/2BtZtiKzgSJ1aS3mPmEDYjVqKCbyaG2sx7+Bb0QV9hXcUU6YffAbO9VMhK/CUd9aSHqGtye52amtNjzSHg+3PYFkb6T06kjfWqhbI79GRGsfYkMIeHYGxp4LBzCMZij0tlZYQJ5PSMDMTeWmt7Ub5uWrPBiJ4U3D2dzIIhWqncGSwlpfIJk2vAPhE4hQP1wGwNalkWvgGc1uj5u1nWuuaDV2UFWbW27RT3qSnk3WGUR64RttHYXsQVd39xNlYoa6vuGGsUDWgmbA1pqQv0DgPDqGwNVWYBlBoml+oRzQjZ0OB+hHNTaGlqRGv5b9VaFmPIvWYzRW6QleIodAyQwwReBt7i9/3h0FiGtPkQrdYOmFb9w6RW/y+QtuK6f8gx//9Oo2+u+iNy/r6xtT69knzAnjCvCFDOwc2v15TP4i1eceJ9ja1724j4b7SJ/LG+hgmSaOqEKEZQzdwQ+iKUs2gcgCBmm1tGEuYJKlebNpbX3FPUKN2011Ya5vRimvOGEuY6JlT826h/1AK3TAM6USnEdj05lnFAhWfiPWATUEiTBv7H/IBOEDI/Yh0ZIMRzSwh2adPML5+ieRRtM/s3yHYttBbt81+QMzxm96JfiWVWcUMzowuEFlFyDM4QxU7kzJvXV+DmywW0Cs4Qg2rgHpBX8FkHIJ1vKpRw878eISqY8vYxzPvi8ojbiNHeKe2GSr3btXzEMUUrBlKqmKnTa2riEZEUloc6XfLijiOIXXD8Xa+bIAfEXndnrxkH32zUsMvZtS4cfd1f8oUa2rQvUrcaXtLjYCxDSWFZJ0mL+COo/gIHqjpNAejtDWARu9RqnMLnINEANTpNQ1dEIwqqdw7zdT2Epkp/Spna/8vUHlawXi+YJDXCJYSgzw/tJw5oNhI84hVCXV3oYIh0eQiQ3qc51cs5u5qT955IgsuMdgZnAl9FoXu0fZQBJUYyE08SQzoNII8rHwlXHtGkEjmHaGiG8V+0hX6QGG4/miozxKDeP4g77c/EWJWjYkZvaNvUOnIX4AE0W867Uz1jWh3MoQMt9+jPKvdxtU/ovqarQvwdHsVzX8KhHibvgG9Hn6zaO0ZtehN8wnXLtTeBtv6+iVKPdK6j0X3oXL1pvzgdx8qYwiQllBlEWHMzIS8sYHxFDPiHkN//sVOpPv54ZZQfBFDTEvai6hCo/Lhd0SLix3aKRyRnKeof5d9BMn77+DXMNsQvKzBCmfuiAU2kHZmRM7WWCv5iJA+QG8/I2VrkNKmR4Qqixp/bxRCpgkV1s6MiNga1d5DLiJvvs3uQ7cgMYQIepOKbFNCDLrvCPxnJ8QsZA7sVB98kwpsU6gq6TvYlVOwIuIr3LKiXe/MVrg9NvDHkH0QQbP7JcxMH64Q/AqzNIzuDUdYCoGT3zusNNi0h20rrF438KB0ghWaIl5XvMJyF9YfvwnOEsZgaFimJoKIZoQR1QT5YRUfzlTzSBQeF/j7CiOISkcYkSlwtXvJ8cq3ddf6Vo53t0fiDhkOMRJ3yHGIOA2l3zncbhpBCWPicCHjNxT+A7hBYW0zNQIyAAAAAElFTkSuQmCC"
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
