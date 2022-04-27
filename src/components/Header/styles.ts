import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    justify-content: center;

    button {
      display: none;
    }
  }
`;
