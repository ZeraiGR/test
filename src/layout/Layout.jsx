import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Header, Main } from './components';
import { Logo, Logout } from '../components';

const _Layout = ({ className, children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className={className}>
      <Header>
        <Logo />
        {isAuth && <Logout />}
      </Header>
      <Main role="main" isAuth={isAuth}>
        {children}
      </Main>
    </div>
  );
};

export const Layout = styled(_Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
