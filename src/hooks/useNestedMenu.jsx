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

  const toggleNested = (item, e, children) => {
    e?.stopPropagation();
    if (showChildren[item.name]) {
      closeNested(children);
    } else {
      closeNested(children.filter(({ name }) => name !== item.name));
      dispatch(actions[`${item.name}Open`]);
    }
  };

  const closeSubmenu = (e = null) => {
    e?.stopPropagation();
    closeNested(menuItems);
  };

  const openSubmenu = (name, e = null) => {
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
          closeSubmenu();
          break;
        }
      }
    },
    [showChildren]
  );

  const findSiblings = useCallback(
    (itemName, children = null) => {
      let siblings = [];
      let chld = children || menuItems;
      chld.forEach(item => {
        if (showChildren[item.name]) {
          item.children.find(i => i.name === itemName)
            ? (siblings = item.children)
            : (siblings = findSiblings(itemName, item.children));
        }
      });
      return siblings;
    },
    [menuItems, showChildren]
  );

  const setIsItemActive = useCallback(
    (item, parent = null) => {
      if (!parent) return;
      let isActive;
      if (item.children?.length && menuItems.find(i => i === parent)) {
        isActive = showChildren[item.name];
      } else {
        const siblings = findSiblings(item.name).filter(
          i => i.name !== item.name
        );
        isActive = !siblings.some(sibling => showChildren[sibling.name]);
      }
      return isActive;
    },
    [menuItems, showChildren]
  );

  useEffect(() => {
    window.addEventListener('click', handleOuterClick);
    return () => window.removeEventListener('click', handleOuterClick);
  }, [handleOuterClick]);

  return [showChildren, { toggleNested, closeSubmenu, openSubmenu, setIsItemActive }];
};

export default useNestedMenu;
