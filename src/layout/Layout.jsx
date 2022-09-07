import { useSelector } from 'react-redux';

import { Header } from './Header';
import { Logo } from '../components/Logo';
import { Main } from './Main';
import styled from 'styled-components';
import { selectIsAuth } from '../store/selectors/auth';

const Layout = ({ className, children }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={className}>
      <Header>
        <Logo />
      </Header>
      <Main role="main" isAuth={isAuth}>
        {children}
      </Main>
    </div>
  );
};

export const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
