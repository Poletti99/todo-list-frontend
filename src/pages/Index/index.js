import React from 'react';

import { Container, Header, TodoCounter, TodoList } from './styles';
import Todo from '../../components/Todo';

export default function Index() {
  return (
    <Container>
      <Header>
        <h1>Gerenciador de Todos</h1>
        <div>
          <input type="text" />
          <button type="button">Adicionar</button>
        </div>
      </Header>
      <TodoCounter>counter</TodoCounter>

      <TodoList>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </TodoList>
    </Container>
  );
}
