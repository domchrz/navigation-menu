import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  ${({ top }) => top && `top: ${top}`};
  ${({ left }) => left && `left: ${left}`};
  z-index: 1;
`;
