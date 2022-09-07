import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { logoutAC } from '../store/reducers/auth';
import { selectLogin } from '../store/selectors/auth';
import images from '../constants/images';

const Login = styled.span`
  font-size: 24px;
`;

const _Logout = ({ className }) => {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAC());
  };

  return (
    <div className={className}>
      <Login>{login}</Login>
      <button type="button" aria-label="Logout" onClick={logout}>
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
