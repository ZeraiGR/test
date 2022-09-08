import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logout } from '../../store/reducers/auth';
import { Login } from './components';
import images from '../../constants/images';

const _Logout = ({ className }) => {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={className}>
      <Login>{login}</Login>
      <button type="button" aria-label="Logout" onClick={logoutHandler}>
        <img width={62} height={56} src={images.logout} alt="logout icon" />
      </button>
    </div>
  );
};

export const Logout = styled(_Logout)`
  display: flex;
  gap: 34px;
  align-items: center;
`;
