import { useState, useReducer, useEffect, useCallback } from 'react';
import { createReducerHelpers } from '../helpers/reducerHelpers';

const useNestedMenu = menuItems => {
  const [{ initState, actions, reducer }] = useState(
    createReducerHelpers(menuItems)
  );
  const [showChildren, dispatch] = useReducer(reducer, initState);

  const closeNested = items => {
    items.forEach(item => {
      if (item.children?.length) {
        dispatch(actions[`${item.name.toLowerCase()}Close`]);
        closeNested(item.children);
      }
    });
  };

  const toggleNestedMenu = (item, e, children) => {
    e?.stopPropagation();
    if (showChildren[item.name.toLowerCase()]) {
      closeNested(children);
    } else {
      closeNested(children.filter(({ name }) => name !== item.name));
      dispatch(actions[`${item.name.toLowerCase()}Open`]);
    }
  };

  const closeMenu = (e = null) => {
    e?.stopPropagation();
    for (const key in showChildren) {
      if (showChildren[key]) {
        dispatch(actions[key + 'Close']);
      }
    }
  };

  const openMenu = (name, e = null) => {
    e?.stopPropagation();
    if (
      !showChildren[name.toLowerCase()] &&
      actions[name.toLowerCase() + 'Open']
    ) {
      dispatch(actions[name.toLowerCase() + 'Open']);
    }
  };

  const handleOuterClick = useCallback(
    e => {
      e.stopPropagation();
      for (const key in showChildren) {
        if (showChildren[key]) {
          closeMenu();
          return;
        }
      }
    },
    [showChildren]
  );

  useEffect(() => {
    window.addEventListener('click', handleOuterClick);
    return () => window.removeEventListener('click', handleOuterClick);
  }, [handleOuterClick]);

  return [showChildren, toggleNestedMenu, closeMenu, openMenu];
};

export default useNestedMenu;
