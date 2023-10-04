import styled from 'styled-components';
import React from 'react';

const StyledInput = styled.input`
  max-width: 190px;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
  &:hover {
    outline: 1px solid lightgrey;
  }
  &:focus {
    border-bottom: 2px solid #5b5fc7;
    border-radius: 4px 4px 2px 2px;
  }
`;


export const Input = props => {
  return <StyledInput {...props} /> ;
};

