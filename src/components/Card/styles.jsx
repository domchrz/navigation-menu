import styled from 'styled-components';

export const CardContainer = styled.div`
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
  transition: transform .5s;

  &:hover {
    transform: scale(1.05);
  }
`;
