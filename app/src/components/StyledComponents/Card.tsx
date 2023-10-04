import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

interface CardProps {
  width: string;
  [key: string]: any;
}

const StyledCard = styled.div<CardProps>`
  width: ${(props) => {
    if (props.width === 'desktop'){
      return 'calc(100%/3 - 60px)'
    } else if (props.width === 'tablet'){
      return 'calc(100%/2 - 60px)'
    } else {
      return '98%'
    }
  }};
  color: #1B3764;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px solid #c3c6ce;
  overflow: visible;
  height: 300px;
  background-color: white;
  color: #1B3764;
  transition: 0.5s ease-out;
`;

export const ItemCard = forwardRef((props: CardProps, ref: Ref<HTMLDivElement>) => {
  return <StyledCard {...props} ref={ref} />;
});
