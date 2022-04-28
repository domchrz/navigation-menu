import { useState, useReducer, useCallback, useEffect, createRef } from 'react';
import Dropdown from '../components/Dropdown';
import LinkWrapper from '../components/LinkWrapper';
import { createReducerHelpers } from '../helpers/reducerHelpers';
import db from '../helpers/debounce';
import useMountDelay from './useMountDelay';

const useNestedMenu = (menuItems, delay, navRef) => {
  const [{ initState, actions, reducer }] = useState(
    createReducerHelpers(menuItems)
  );
  const [showChildren, dispatch] = useReducer(reducer, initState);
  const [refs, setRefs] = useState({});
  const shouldRender = useMountDelay(menuItems, showChildren, delay);

  const debounce = useCallback(db(), []);

  useEffect(() => {
    for (const key in showChildren) {
      setRefs(prevState => ({ ...prevState, [key]: createRef() }));
    }
    setRefs(prevState => ({ ...prevState, nav: navRef }));
  }, []);

  const closeNested = items => {
    if (!items) return;
    items.forEach(item => {
      if (item.children?.length) {
        dispatch(actions[`${item.name}Close`]);
        closeNested(item.children);
      }
    });
  };

  const toggleNested = (item, e) => {
    e?.stopPropagation();
    const siblings = findSiblings(item.name);
    closeNested(siblings);
    if (showChildren[item.name] !== undefined)
      dispatch(actions[`${item.name}Open`]);
  };

  const handleMenuLeave = (e, openMenu = false, delay = 500) => {
    e.stopPropagation();
    openMenu
      ? debounce(0, () => {})
      : debounce(delay, () => closeNested(menuItems));
  };

  const openSubmenu = (name, e = null) => {
    e?.stopPropagation();
    if (!showChildren[name] && actions[name + 'Open']) {
      dispatch(actions[name + 'Open']);
    }
  };

  const findSiblings = useCallback(
    (itemName, children = null) => {
      let siblings = [];
      let currentChildren = children || menuItems;
      currentChildren.forEach(item => {
        if (showChildren[item.name]) {
          item.children.find(i => i.name === itemName)
            ? (siblings = item.children)
            : (siblings = findSiblings(itemName, item.children));
        }
      });
      siblings = siblings.length
        ? siblings.filter(({ name }) => name !== itemName)
        : siblings;
      return siblings;
    },
    [menuItems, showChildren]
  );

  const setIsItemActive = useCallback(
    (item, parent = null) => {
      if (!parent) return;
      if (item.children?.length && menuItems.find(i => i === parent)) {
        return showChildren[item.name];
      } else {
        const siblings = findSiblings(item.name);
        return !siblings.some(sibling => showChildren[sibling.name]);
      }
    },
    [menuItems, showChildren]
  );

  const renderMenu = (items, isNested = false, parent = null) => {
    return items.map(item => (
      <LinkWrapper
        key={item.name}
        item={item}
        isNested={isNested}
        ref={refs[item.name]}
        isActive={setIsItemActive(item, parent)}
        handleEnter={
          parent
            ? e => toggleNested(item, e, parent?.children, true)
            : e => openSubmenu(item.name, e)
        }
        handleClick={
          !item.children?.length || !parent
            ? handleMenuLeave
            : e => toggleNested(item, e, parent.children)
        }>
        {item.children?.length && shouldRender[item.name] && (
          <Dropdown
            origin={{
              top: refs.nav.current.getBoundingClientRect().bottom,
              left: parent
                ? refs[item.name].current.getBoundingClientRect().right
                : refs[item.name].current.getBoundingClientRect().left,
            }}
            anchorRef={refs[item.name]}
            delay={delay}
            shouldMount={showChildren[item.name]}
            stickToBorder={isNested ? 'right' : 'bottom'}>
            {renderMenu(item.children, true, item)}
          </Dropdown>
        )}
      </LinkWrapper>
    ));
  };

  return [{ handleMenuLeave, renderMenu }];
};

export default useNestedMenu;
