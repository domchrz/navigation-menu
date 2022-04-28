import React, { createRef, useState } from 'react';
import useNestedMenu from '../../hooks/useNestedMenu';
import MENU_ITEMS from '../../constants/menuItems';
import { StyledNav } from './styles';

function navbar() {
  const delay = 300;
  const [navRef, setNavRef] = useState(createRef());
  const [{ renderMenu, handleMenuLeave }] = useNestedMenu(MENU_ITEMS, delay, navRef);

  return (
    <StyledNav
      onMouseLeave={handleMenuLeave}
      onMouseOver={e => handleMenuLeave(e, true)}
      ref={ref => !navRef.current && setNavRef(prevState => prevState.current = ref)}>
      {renderMenu(MENU_ITEMS)}
    </StyledNav>
  );
}

const Navbar = React.memo(navbar);

export default Navbar;
