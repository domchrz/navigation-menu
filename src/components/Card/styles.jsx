import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  max-width: 40rem;
  border-radius: 0.25rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  transition: background-color 0.7s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainContrast};
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.serif};
`;
