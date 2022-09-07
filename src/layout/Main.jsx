import styled from 'styled-components';

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (!props.isAuth ? 'center' : 'stretch')};
`;
