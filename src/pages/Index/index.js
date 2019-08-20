import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../services/api';

import Todo from '../../components/Todo';

import { Container, Header, TodoCounter, TodoList } from './styles';

export default function Index() {
  const [todos, setTodos] = useState([]);
  const todosLenght = useMemo(() => todos.length, [todos.length]);

  useEffect(() => {
    async function getTodos() {
      try {
        const todos = await api.get('/list');

        setTodos(todos.data);
      } catch (err) {
        toast.error('Erro ao carregar ToDos');
      }
    }

    getTodos();
  }, []);

  async function handleAdd() {
    try {
      const todo = await api.post('/register', { text: '' });

      setTodos([...todos, todo.data]);
    } catch (err) {
      toast.error('Erro ao criar ToDo');
    }
  }

  async function handleDelete(id) {
    try {
      await api.get(`/delete/${id}`);

      const filteredTodos = todos.filter(todo => todo.id !== id);

      setTodos(filteredTodos);

      toast.success('ToDo deletada com sucesso');
    } catch (err) {
      toast.error('Erro ao deletar ToDo');
    }
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciador de ToDos</h1>
      </Header>

      <TodoCounter>
        {todosLenght} tarefas criadas{' '}
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </TodoCounter>

      <TodoList>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            isDone={todo.is_done}
            id={todo.id}
            text={todo.text}
            handleDelete={handleDelete}
            hasFocus={true}
          />
        ))}
      </TodoList>
    </Container>
  );
}
