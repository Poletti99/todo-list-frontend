import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;

  p {
    input {
      color: ${props => (props.isDone ? 'green' : 'red')};
      border: none;
    }
  }

  > div {
    flex: 1;
  }

  > div:last-of-type {
    display: flex;
    justify-content: space-between;
  }
`;
