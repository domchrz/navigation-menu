import { StyledCardContainer, StyledCardTitle } from './styles';

export default function Card({ children, title }) {
  return (
    <StyledCardContainer>
      {title && <StyledCardTitle>{title}</StyledCardTitle>}
      {children}
    </StyledCardContainer>
  );
}
