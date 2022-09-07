import { useSelector } from 'react-redux';
import { selectIsAuth } from './store/selectors/auth';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useNavigate } from 'react-router-dom';

import { StyledLayout } from './layout/Layout';
import { Auth } from './pages/Auth';
import { Posts } from './pages/Posts';
import { useEffect } from 'react';

function App() {
  const isAuth = useSelector(selectIsAuth);
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
    <StyledLayout>
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
    </StyledLayout>
  );
}

export default App;
