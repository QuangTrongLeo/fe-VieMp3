import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes, userRoutes, artistRoutes, adminRoutes } from '~/routes';
import { MainLayout } from './layouts';
import { Fragment } from 'react';
import { useAuth } from './components/Components/AuthProvider';
import ScrollToTop from './components/Components/ScrollToTop';

function App() {
  const { roles } = useAuth();

  // Hàm lấy tất cả route user được phép truy cập
  const getAccessibleRoutes = () => {
    if (!roles || roles.length === 0) return publishRoutes;
    let allowedRoutes = [...publishRoutes];
    if (roles.includes('USER')) allowedRoutes.push(...userRoutes);
    if (roles.includes('ARTIST')) allowedRoutes.push(...artistRoutes);
    if (roles.includes('ADMIN')) allowedRoutes.push(...adminRoutes);
    return allowedRoutes;
  };

  const accessibleRoutes = getAccessibleRoutes();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
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
    </Router>
  );
}

export default App;
