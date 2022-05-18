import { useReducer, useEffect } from 'react';
import { createReducerHelpers } from '../../helpers/reducer';
import MenuItem from '../MenuItem';
import { StyledUl } from './styles';

export default function MenuItems({ items, depth = 0, direction = 'column' }) {
  const { reducer, initState } = createReducerHelpers(items);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (depth > 0) return;
    window.addEventListener('click', dispatch);

    return () => window.removeEventListener('click', dispatch);
  }, []);

  const createAction = name => () => dispatch({ payload: name });

  const setIsInactive = name => {
    if (depth < 0) return;
    let isInactive;
    for (const key in state) {
      isInactive = (state[key] === true && key !== name) || isInactive;
    }
    return isInactive;
  };

  return (
    <StyledUl direction={direction} depth={depth}>
      {items.map(item => (
        <MenuItem
          key={item.name}
          item={item}
          depth={depth}
          isInactive={setIsInactive(item.name)}
          onClick={createAction(item.name)}
          showChildren={!!state[item.name]}
        />
      ))}
    </StyledUl>
  );
}
