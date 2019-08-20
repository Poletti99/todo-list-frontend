import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../Button';

import { api } from '../../services/api';

import { Container } from './styles';

export default function Todo({ isDone, text, id, handleDelete, hasFocus }) {
  const [_isDone, setIsDone] = useState(isDone);
  const [_text, setText] = useState(text);

  async function toggleDone(id) {
    try {
      const todo = await api.post(`/update/${id}`, { is_done: !_isDone });

      setIsDone(todo.data.is_done);

      toast.success(
        _isDone ? 'ToDo reaberta com sucesso' : 'ToDo concluida com sucesso'
      );
    } catch (err) {
      toast.error(_isDone ? 'Erro ao reabrir ToDo' : 'Erro ao concluir ToDo');
    }
  }

  async function handleEdit(id) {
    try {
      const todo = await api.post(`/update/${id}`, { text: _text });

      setText(todo.data.text);

      toast.success('ToDo editada com sucesso');
    } catch (err) {
      toast.error('Erro ao editar ToDo');
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleBlur(id) {
    if (!_text) {
      handleDelete(id);
      return;
    }

    if (text === _text) return;

    handleEdit(id);
  }

  return (
    <Container isDone={_isDone}>
      <input
        value={_text}
        onChange={handleChange}
        disabled={_isDone}
        autoFocus={hasFocus}
        placeholder="Digite aqui sua tarefa..."
        onBlur={() => handleBlur(id)}
      />

      <div>
        <Button background="green" onClick={() => toggleDone(id)}>
          {_isDone ? 'Reabrir' : 'Concluir'}
        </Button>
        
        <Button onClick={() => handleDelete(id)}>Deletar</Button>
      </div>
    </Container>
  );
}
