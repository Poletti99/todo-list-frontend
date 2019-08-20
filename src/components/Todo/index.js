import React, { useState } from 'react';

import Button from '../Button';

import { api } from '../../services/api';

import { Container } from './styles';

export default function Todo({ isDone, text, id, handleDelete }) {
  const [_isDone, setIsDone] = useState(isDone);
  const [_text, setText] = useState(text);

  async function toggleDone(id) {
    const todo = await api.post(`/update/${id}`, { is_done: !_isDone });

    setIsDone(todo.data.is_done);
  }

  async function handleEdit(id) {
    const todo = await api.post(`/update/${id}`, { text: _text });

    setText(todo.data.text);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <Container isDone={_isDone}>
      <input value={_text} onChange={handleChange} />

      <div>
        <Button background="green" onClick={() => toggleDone(id)}>
          {_isDone ? 'Reabrir' : 'Concluir'}
        </Button>
        <Button onClick={() => handleEdit(id)}>Salvar</Button>
        <Button onClick={() => handleDelete(id)}>Deletar</Button>
      </div>
    </Container>
  );
}
