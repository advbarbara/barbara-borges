import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background: #fafafa;
  border-radius: 6px;
  padding: 8px;

  h3 {
    margin-top: 14px;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #202020;
  }

  span {
    margin-top: 22px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    text-align: center;

    color: #425466;
  }

  img {
    width: 100px;
    height: 100px;
  }

  transition: background .4s, transform .6s;

  &:hover {
    cursor: pointer;
    background: #303030;
    transform: scale(1.06);

    h3 {
      color: #fafafa;
    }
    span {
      color: #fafafa;
    }
  }
`;