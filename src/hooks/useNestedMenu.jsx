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
        dispatch(actions[`${item.name}Close`]);
        closeNested(item.children);
      }
    });
  };

  const toggleNestedMenu = (item, e, children) => {
    e?.stopPropagation();
    if (showChildren[item.name]) {
      closeNested(children);
    } else {
      closeNested(children.filter(({ name }) => name !== item.name));
      dispatch(actions[`${item.name}Open`]);
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
    if (!showChildren[name] && actions[name + 'Open']) {
      dispatch(actions[name + 'Open']);
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
