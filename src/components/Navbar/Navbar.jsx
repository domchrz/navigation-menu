import { useEffect } from 'react';
import MENU_ITEMS from '../../constants/menuItems';
import useSubmenu from '../../hooks/useSubmenu';
import MenuItems from '../MenuItems';
import { StyledNav } from './styles';

export default function Navbar() {
  const { closeSubmenu } = useSubmenu();

  useEffect(() => {
    window.addEventListener('click', closeSubmenu);

    return () => window.removeEventListener('click', closeSubmenu);
  }, []);

  return (
    <StyledNav onClick={closeSubmenu}>
      <MenuItems items={MENU_ITEMS} direction="row" />
    </StyledNav>
  );
}
