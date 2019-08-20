import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;

  > input {
    flex: 1;
    color: ${props => (props.isDone ? '#aaa8a8' : '#000')};
    text-decoration: ${props => props.isDone && 'line-through'};
    border: none;

    &:disabled {
      background: none;
    }
  }

  > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;
