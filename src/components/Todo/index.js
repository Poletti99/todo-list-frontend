import React from 'react';

import Button from '../Button';

import { Container } from './styles';

export default function Todo({ isDone, text, id }) {
  function toggleDone() {}
  function handleDelete() {}
  function handleEdit() {}

  return (
    <Container isDone={isDone}>
      <div contentEditable={true} suppressContentEditableWarning={true}>
        <p id={id}>{text}</p>
      </div>
      <div>
        <Button background="green" onClick={() => toggleDone(id)}>
          {isDone ? 'Reabrir' : 'Concluir'}
        </Button>
        <Button onClick={() => handleEdit(id)}>Salvar</Button>
        <Button onClick={() => handleDelete(id)}>Deletar</Button>
      </div>
    </Container>
  );
}
