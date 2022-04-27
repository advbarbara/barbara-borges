import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 120px;

  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Me = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  border-right: 1px solid #E0E0E0;

  width: 54%;

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;

    color: #313131;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    color: #425466;

    margin: 28px 0px;
    width: 450px;

    strong {
      font-size: 16px;
      line-height: 30px;

      color: #425466;
    }
  }

  @media (max-width: 500px) {
    align-items: center;

    border-right: none;
    border-bottom: 1px solid #E0E0E0;

    padding-bottom: 24px;
    width: 100%;

    span {
      text-align: center;
      width: 100%;

      strong {
        font-size: 16px;
        line-height: 30px;

        color: #425466;
      }
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;

  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 6px;
    }

    a {
      text-decoration: none;
      color: #425466;

      &:hover {
        cursor: pointer;
      }
    }

    span {
      color: #425466;
    }
  }

  div + div {
    margin-top: 24px;
  }

  @media (max-width: 500px) {
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;