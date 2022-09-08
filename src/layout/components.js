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
  padding: 26px 40px;

  @media (max-width: 992px) and (orientation: landscape) {
    position: static;
    margin-bottom: 15px;
  }

  @media (max-width: 630px) {
    padding: 26px 15px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  align-items: ${(props) => (!props.isAuth ? 'center' : 'stretch')};

  @media (max-width: 630px) {
    padding-top: ${(props) => (!props.isAuth ? '132px' : '0')};
    align-items: ${(props) => (!props.isAuth ? 'flex-start' : 'stretch')};
  }
`;
