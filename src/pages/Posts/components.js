import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 13px;

  @media (max-width: 630px) {
    grid-template-columns: 100%;
    gap: 10px;
  }
`;
