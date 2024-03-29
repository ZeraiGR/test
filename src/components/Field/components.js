import styled from 'styled-components';

export const Input = styled.input`
  max-width: 295px;
  width: 100%;
  height: 45px;
  background-color: #d9d9d9;
  font-size: 24px;
  font-weight: 800;
  border: 4px solid #27569c;
  padding: 5px 10px;
  border-radius: 10px;

  @media (max-width: 630px) {
    max-width: 100%;
    height: ${(props) => (props.pass ? '34px' : '39px')};
    padding: 4px 10px;
  }
`;

export const Label = styled.label`
  font-size: 24px;
`;
