import { createContext, useReducer } from 'react';
import MENU_ITEMS from '../constants/menuItems';
import { getSiblingTrees } from '../helpers/submenu';
import { createReducerHelpers } from './reducers/createReducer';

const { initState, actions, reducer } = createReducerHelpers(MENU_ITEMS);

export const SubmenuContext = createContext();

export const SubmenuProvider = ({ children }) => {
  const [showChildren, dispatch] = useReducer(reducer, initState);

  const toggleChildren = name => () => {
    const siblingTrees = getSiblingTrees(name, MENU_ITEMS);

    if (siblingTrees.length)
      siblingTrees.forEach(({ name }) => dispatch(actions[`close${name}`]));

    dispatch(actions[`open${name}`]);
  };

  const closeSubmenu = () => dispatch(actions.closeSubmenu);

  return (
    <SubmenuContext.Provider
      value={{ showChildren, toggleChildren, closeSubmenu }}>
      {children}
    </SubmenuContext.Provider>
  );
};
