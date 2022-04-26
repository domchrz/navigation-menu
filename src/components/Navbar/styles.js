import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--font);
  background-color: var(--bg-dark);
  z-index: 2;
`;

export const Logo = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-family: 'Material Icons';
  font-size: 2rem;
  text-decoration: none;
  color: var(--font);
  transition: color 0.3s;

  &:hover {
    color: var(--action);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavigationLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: var(--font);
  font-size: 1.6rem;
  font-family: 'Ms Madi', cursive;
  text-decoration: none;
  transition: color 0.3s;
  background: none;

  &.active {
    color: var(--bg-dark);
    background-color: var(--font);
  }

  &:hover {
    color: var(--action);
  }
`;

export const MenuItem = styled.p`
  position: relative;
  padding: 0.5rem 1rem;
  color: var(--bg-dark);
  font-size: 1.6rem;
  font-family: 'Ms Madi', cursive;
  text-decoration: none;
  transition: color 0.3s;
  background-color: var(--font);
  cursor: pointer;

  &:hover {
    color: var(--action);
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  padding: 0.5rem 1rem;
  color: var(--bg-dark);
  font-size: 1.6rem;
  font-family: 'Ms Madi', cursive;
  text-decoration: none;
  transition: color 0.3s;
  background-color: var(--font);

  &:hover {
    color: var(--action);
  }
`;
