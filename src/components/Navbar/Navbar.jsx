import { useRef, useState, useCallback, useReducer } from 'react';
import db from '../../helpers/debounce';
import useMountDelay from '../../hooks/useMountDelay';
import { navReducer, NAV_ACTIONS } from '../../reducers/navReducer';
import MENU_ITEMS from '../constants/menuItems';
import Modal from '../Modal';
import { Nav, Logo, NavLinks, NavigationLink, MenuItem, MenuLink } from './styles';

export default function Navbar() {
  const [areModalsMount, dispatch] = useReducer(navReducer, {
    products: false,
    categories: false,
  });
  const [mountDelay] = useState(400);
  const renderProductsMenu = useMountDelay(areModalsMount.products, mountDelay);
  const renderCategoriesMenu = useMountDelay(
    areModalsMount.categories,
    mountDelay
  );
  const productsRef = useRef();
  const categoriesRef = useRef();

  const debounceProducts = useCallback(db(), []);
  const debounceCategories = useCallback(db(), []);

  const handleProductsModal =
    ({ type, payload }) =>
    () =>
      debounceProducts(mountDelay, () => dispatch({ type, payload }));

  const handleCategoriesModal =
    ({ type, payload }) =>
    () =>
      debounceCategories(mountDelay, () => dispatch({ type, payload }));

  return (
    <Nav>
      <Logo to={MENU_ITEMS.home.path}>home</Logo>
      <NavLinks>
        <NavigationLink exact to={MENU_ITEMS.home.path}>
          Home
        </NavigationLink>
        <NavigationLink to={MENU_ITEMS.about.path}>About</NavigationLink>
        <NavigationLink
          onMouseOver={handleProductsModal(NAV_ACTIONS.showProducts)}
          ref={productsRef}
          to={MENU_ITEMS.products.path}>
          Products
        </NavigationLink>
      </NavLinks>
      {renderProductsMenu && (
        <Modal
          handleMount={handleProductsModal(NAV_ACTIONS.showProducts)}
          handleUnmount={() => {
            handleProductsModal(NAV_ACTIONS.hideProducts)();
            handleCategoriesModal(NAV_ACTIONS.hideCategories)();
          }}
          shouldMount={areModalsMount.products}
          delay={mountDelay}
          stickToBorder="top"
          anchorRef={productsRef}>
          <MenuItem
            ref={categoriesRef}
            to={MENU_ITEMS.products.path}
            onMouseOver={handleCategoriesModal(NAV_ACTIONS.showCategories)}>
            Categories
          </MenuItem>
          <MenuItem
            onMouseOver={handleCategoriesModal(NAV_ACTIONS.hideCategories)}
          >
            Prices
          </MenuItem>
          {renderCategoriesMenu && (
            <Modal
              shouldMount={areModalsMount.categories}
              delay={mountDelay}
              stickToBorder="right"
              anchorRef={categoriesRef}>
              <MenuLink to={MENU_ITEMS.products.categories.phones.path}>
                Phones
              </MenuLink>
              <MenuLink to={MENU_ITEMS.products.categories.laptops.path}>
                Laptops
              </MenuLink>
              <MenuLink to={MENU_ITEMS.products.categories.monitors.path}>
                Monitors
              </MenuLink>
            </Modal>
          )}
        </Modal>
      )}
    </Nav>
  );
}
