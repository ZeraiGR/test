import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--accent);
  padding: 1.625rem 2.5rem;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (!props.isAuth ? 'center' : 'stretch')};
`;
