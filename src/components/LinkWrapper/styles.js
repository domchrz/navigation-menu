import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const linkStyles = css`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-family: ${props => props.theme.fonts.serif};
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s;
  color: ${props =>
    props.isActive ? props.theme.colors.main : props.theme.colors.secondary};
  background-color: ${props =>
    props.isActive ? props.theme.colors.mainContrast : props.theme.colors.main};
  border: solid 1px ${props => props.theme.colors.secondary};

  &:hover {
    color: var(--action);
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${linkStyles}
  color: ${props => props.theme.colors.main};
  background-color: ${props => props.theme.colors.secondary};

  &.active {
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.main};
  }
`;
export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const MenuItem = styled.div`
  ${linkStyles}
  cursor: pointer;
`;
