import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;

  input {
    flex: 1;
    color: ${props => (props.isDone ? 'green' : 'red')};
    border: none;
  }

  > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;
