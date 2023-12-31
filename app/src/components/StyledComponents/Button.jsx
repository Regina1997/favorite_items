import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #1B3764;
  color: white;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: ${props => (props.primary ? '200px' : '100px')};
  cursor: pointer;
  box-sizing: border-box;
`;

export const Button = props => {
  return <StyledButton {...props} />;
};
