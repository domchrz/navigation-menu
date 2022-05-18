import MENU_ITEMS from '../../constants/navMenuItems';
import MenuItems from '../MenuItems';
import { StyledNav } from './styles';

export default function Navbar() {
  return (
    <StyledNav>
      <MenuItems items={MENU_ITEMS} direction="row" />
    </StyledNav>
  );
}
