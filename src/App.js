import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { publishRoutes, userRoutes, artistRoutes, adminRoutes } from '~/routes';
import { MainLayout } from './layouts';
import { Fragment, useEffect, useState } from 'react';
import { useAuth } from './components/Components/AuthProvider';
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
    setTimeout(() => setVisible(false), 2000);
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
    const allowedPaths = accessibleRoutes.map(r => r.path);

    if (!allowedPaths.includes(currentPath)) {
      showNotification('Vui lòng "Đăng Nhập" hoặc không có quyền truy cập');
      navigate(-1);
    }
  }, [location, accessibleRoutes, navigate]);

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
