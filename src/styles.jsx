import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

export const StyledSectionCentered = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
`;

export const StyledIcon = styled.i`
  ${({ theme }) => theme.fonts.materialIcon}
  font-size: ${props => props.fontSize || '2rem'};
  font-style: normal;
`;
