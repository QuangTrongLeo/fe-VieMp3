import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { publishRoutes, userRoutes, artistRoutes, adminRoutes } from '~/routes';
import { MainLayout } from './layouts';
import { Fragment, useEffect, useState } from 'react';
import { useAuth } from './components/Components/AuthProvider';
import config from './config';
import ScrollToTop from './components/Components/ScrollToTop';
import NotificationBar from './components/Components/NotificationBar';

function App() {
  const { roles } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [notification, setNotification] = useState('');
  const [visible, setVisible] = useState(false);

  const showNotification = message => {
    setNotification(message);
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  };

  const getAccessibleRoutes = () => {
    if (!roles || roles.length === 0) return publishRoutes;
    let allowedRoutes = [...publishRoutes];
    if (roles.includes('USER')) allowedRoutes.push(...userRoutes);
    if (roles.includes('ARTIST')) allowedRoutes.push(...artistRoutes);
    if (roles.includes('ADMIN')) allowedRoutes.push(...adminRoutes);
    return allowedRoutes;
  };

  const accessibleRoutes = getAccessibleRoutes();

  useEffect(() => {
    const currentPath = location.pathname;

    // Nếu đã đăng nhập (có roles) thì chặn vào /login và /register
    if (roles && roles.length > 0 && (currentPath === config.routes.login || currentPath === config.routes.register)) {
      navigate(config.routes.home, { replace: true });
      showNotification('Bạn không có quyền truy cập');
      return;
    }

    // Kiểm tra xem currentPath có khớp với pattern của bất kỳ route nào không
    const isAllowed = accessibleRoutes.some(r => matchPath({ path: r.path, end: true }, currentPath));

    if (!isAllowed) {
      showNotification('Vui lòng "Đăng Nhập" hoặc không có quyền truy cập');
      navigate(-1);
    }
  }, [location, accessibleRoutes, navigate, roles]);

  return (
    <>
      <ScrollToTop />
      <div className="App">
        {/* Notification đặt cố định */}
        <NotificationBar notification={notification} visible={visible} />

        <Routes>
          {accessibleRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout !== undefined ? route.layout || Fragment : MainLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
