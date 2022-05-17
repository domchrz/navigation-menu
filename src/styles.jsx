import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Playfair Display', sans-serif;
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.secondary};
}

main {
  display: flex;
  justify-content: center;
  align-content: center;
}

i {
  font-style: normal;
}

ul {
  list-style: none;
}

li {
  list-style: none;
}
`;

export const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  gap: 3rem;
  padding: 2rem;
`;

export const StyledIcon = styled.i`
  ${({ theme }) => theme.fonts.materialIcon}
  font-size: ${props => props.fontSize || '2rem'};
`;

export const StyledGlobalLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.main};
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  padding: 0.5em;
  transition: color 0.7s;

  &:hover {
    color: ${({ theme }) => theme.colors.action};
  }
`;

export const StyledButton = styled.button`
  text-decoration: none;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.main};
  border: none;
  background: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  padding: 0.5em;
  transition: color 0.7s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.action};
  }
`;
