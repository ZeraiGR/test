import styled from 'styled-components';

export const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    flex-direction: column;
  }

  @media (max-width: 630px) {
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  object-fit: cover;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const Author = styled.span`
  margin-bottom: 20px;
  display: block;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 630px) {
    margin-bottom: 28px;
  }
`;

export const Title = styled.span`
  margin-bottom: 40px;
  display: block;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 630px) {
    margin-bottom: 0;
  }
`;

export const Body = styled.p`
  margin-top: auto;

  @media (max-width: 630px) {
    display: none;
  }
`;
