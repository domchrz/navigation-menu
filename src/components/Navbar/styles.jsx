import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 2;
`;
