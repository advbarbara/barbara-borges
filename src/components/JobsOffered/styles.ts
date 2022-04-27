import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 80px;

  h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #313131;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;