import React from 'react';

import { StyledButton } from './styles';

export default function Button({ onClick }) {
  return <StyledButton onClick={onClick} />;
}
