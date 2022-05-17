import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-content: center;
`;
