import { Header } from './Header';
import { Logo } from '../components/Logo';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <Logo />
      </Header>
      <main role="main">{children}</main>
    </div>
  );
};

export const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
