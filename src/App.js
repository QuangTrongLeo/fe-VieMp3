import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes, userRoutes, artistRoutes, adminRoutes } from '~/routes';
import { MainLayout } from './layouts';
import { Fragment } from 'react';
import ScrollToTop from './components/Components/ScrollToTop';

function App() {
  const allRoutes = [...publishRoutes, ...userRoutes, ...artistRoutes, ...adminRoutes];
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {allRoutes.map((route, index) => {
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
