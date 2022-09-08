import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { Layout } from './layout/Layout';
import { Auth, Posts } from './pages';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = () => {
      if (isAuth) {
        navigate('/', { replace: true });
      }
    };

    redirect();
  }, [isAuth, navigate]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;
