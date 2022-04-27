import { createRef, useState, useEffect } from 'react';
import useMountDelay from '../../hooks/useMountDelay';
import useNestedMenu from '../../hooks/useNestedMenu';
import MENU_ITEMS from '../../constants/menuItems';
import Dropdown from '../Dropdown';
import LinkWrapper from '../LinkWrapper';
import { StyledNav } from './styles';

export default function Navbar() {
  const delay = 300;
  const [showChildren, toggleNestedMenu, closeMenu, openMenu] =
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
        handleHover={e => openMenu(item.name, e)}
        handleClick={
          !item.children?.length || !parent
            ? e => closeMenu(e)
            : e => toggleNestedMenu(item, e, parent.children)
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
