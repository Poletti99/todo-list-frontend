import React, { useState, useEffect } from 'react';

import { Container, Header, TodoCounter, TodoList } from './styles';
import Todo from '../../components/Todo';
import { api } from '../../services/api';

export default function Index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const todos = await api.get('/list');

      setTodos(todos.data);
    }

    getTodos();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Gerenciador de Todos</h1>
        <div>
          <input type="text" />
          <button type="button">Adicionar</button>
        </div>
      </Header>

      <TodoCounter>{todos.length} tarefas criadas</TodoCounter>

      <TodoList>
        {todos.map(todo => (
          <Todo isDone={todo.is_done} id={todo.id} text={todo.text} />
        ))}
      </TodoList>
    </Container>
  );
}
