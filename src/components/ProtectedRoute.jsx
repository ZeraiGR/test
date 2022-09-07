import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/selectors/auth';

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
