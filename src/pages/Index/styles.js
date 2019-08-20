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

  > div {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    > input {
      flex: 1;
      height: 30px;
      width: 400px;
      border-radius: 4px;
      border: 2px solid #7fc6e8;
      padding: 5px 10px;
      margin-right: 20px;
    }

    > button {
      background: transparent;
      border: 1px solid #ccc;
      padding: 5px 10px;
    }
  }
`;

export const TodoCounter = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  background: #9ecfef;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const TodoList = styled.ul`
  margin-top: 20px;
`;
