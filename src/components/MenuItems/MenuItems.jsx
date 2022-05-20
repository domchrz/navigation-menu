import { useReducer, useEffect } from 'react';
import { createReducerHelpers } from '../../helpers/reducer';
import MenuItem from '../MenuItem';
import { StyledUl } from './styles';

export default function MenuItems({
  items,
  depth = 0,
  direction = 'column',
  closeSubmenu,
}) {
  const { reducer, initState } = createReducerHelpers(items);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (depth > 0) return;
    window.addEventListener('click', dispatch);

    return () => window.removeEventListener('click', dispatch);
  }, []);

  const createAction = name => () => dispatch({ payload: name });

  const handleClick = item =>
    item.children
      ? createAction(item.name)
      : () => {
        createAction(item.name)();
        closeSubmenu && closeSubmenu();
      };

  return (
    <StyledUl direction={direction} depth={depth}>
      {items.map(item => (
        <MenuItem
          key={item.name}
          item={item}
          depth={depth}
          closeSubmenu={depth === 0 ? dispatch : closeSubmenu}
          handleClick={handleClick(item)}
          state={state[item.name]}
        />
      ))}
    </StyledUl>
  );
}
