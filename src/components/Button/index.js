import React from 'react';

import { StyledButton } from './styles';

export default function Button({ onClick, children, isDisable = false }) {
  return (
    <StyledButton onClick={onClick} disabled={isDisable}>
      {children}
    </StyledButton>
  );
}
