import React from 'react';

import { Container, Header, TodoCount, TodoList } from './styles';
import Todo from '../../components/Todo';

export default function Index() {
  return (
    <Container>
      <Header>header</Header>
      <TodoCount>counter</TodoCount>

      <TodoList>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </TodoList>
    </Container>
  );
}
