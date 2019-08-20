import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const TodoCounter = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  background: #9ecfef;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  > button {
    background: #fff;
    border: 1px solid #ccc;
    padding: 5px 10px;
  }
`;

export const TodoList = styled.ul`
  margin-top: 20px;
`;
