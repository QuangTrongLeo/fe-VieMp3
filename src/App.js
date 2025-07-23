import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes } from '~/routes';
import { MainLayout } from './components/Layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRoutes.map((route, index) => {
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
