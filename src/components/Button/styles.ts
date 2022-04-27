import styled from 'styled-components';

export const Container = styled.button`
  width: 300px;
  height: 70px;
  background: #0AC05E;
  border-radius: 6px;
  padding: 22px 42px;
  border: 0;
  color: #fafafa;
  font-weight: 500;
  text-transform: uppercase;
  transition: background 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #0b9e4f;
  }
`;