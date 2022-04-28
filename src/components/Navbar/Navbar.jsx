import React, { createRef, useState, useEffect } from 'react';
import useMountDelay from '../../hooks/useMountDelay';
import useNestedMenu from '../../hooks/useNestedMenu';
import MENU_ITEMS from '../../constants/menuItems';
import Dropdown from '../Dropdown';
import LinkWrapper from '../LinkWrapper';
import { StyledNav } from './styles';

function navbar() {
  const delay = 300;
  const [showChildren, setShowChildren] =
    useNestedMenu(MENU_ITEMS);
  const shouldRender = useMountDelay(MENU_ITEMS, showChildren, delay);
  const [refs, setRefs] = useState({});

  useEffect(() => {
    for (const key in showChildren) {
      setRefs(prevState => ({ ...prevState, [key]: createRef() }));
    }
    setRefs(prevState => ({ ...prevState, nav: createRef() }));
  }, []);



  const renderMenu = (items, isNested = false, parent = null) => {
    return items.map(item => (
      <LinkWrapper
        key={item.name}
        item={item}
        isNested={isNested}
        ref={refs[item.name]}
        isActive={setShowChildren.setIsItemActive(item, parent)}
        handleHover={e => setShowChildren.openSubmenu(item.name, e)}
        handleClick={
          !item.children?.length || !parent
            ? e => setShowChildren.closeSubmenu(e)
            : e => setShowChildren.toggleNested(item, e, parent.children)
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

  return <StyledNav ref={refs.nav}>{renderMenu(MENU_ITEMS)}</StyledNav>;
}

const Navbar = React.memo(navbar);

export default Navbar;
