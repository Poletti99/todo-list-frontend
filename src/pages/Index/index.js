import React, { useState, useEffect, useMemo } from 'react';

import { Container, Header, TodoCounter, TodoList } from './styles';
import Todo from '../../components/Todo';
import { api } from '../../services/api';

export default function Index() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const todosLenght = useMemo(() => todos.length, [todos.length]);

  useEffect(() => {
    async function getTodos() {
      const todos = await api.get('/list');

      setTodos(todos.data);
    }

    getTodos();
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleAdd() {
    const todo = await api.post('/register', { text });

    setTodos([...todos, todo.data]);
    setText('');
  }

  async function handleDelete(id) {
    await api.get(`/delete/${id}`);

    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciador de Todos</h1>
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </div>
      </Header>

      <TodoCounter>{todosLenght} tarefas criadas</TodoCounter>

      <TodoList>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            isDone={todo.is_done}
            id={todo.id}
            text={todo.text}
            handleDelete={handleDelete}
          />
        ))}
      </TodoList>
    </Container>
  );
}
