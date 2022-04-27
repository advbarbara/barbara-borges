import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;

  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    img {
      width: 350px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 90px;
    font-weight: bold;
    line-height: 110%;

    &:first-child {
      color: #A72828;
    }
    &:last-child {
      color: #313131;
    }

    @media (max-width: 900px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      font-size: 42px;
    }
  }

  @media (max-width: 500px) {
    margin-top: 18px;
  }
`;

export const Subtitle = styled.div`
  width: 590px;
  margin: 20px 0px;

  h3 {
    font-size: 22px;
    line-height: 110%;
    color: #425466;
    font-weight: normal;
  }

  @media (max-width: 900px) {
    width: 90%;

    h3 {
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    h3 {
      font-size: 18px;
      text-align: center;
    }
  }
`;