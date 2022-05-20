import LinkWrapper from '../LinkWrapper';
import MenuItems from '../MenuItems';

export default function MenuItem({
  item,
  state: { showChildren, isInactive, hasChildren },
  depth,
  closeSubmenu,
  ...props
}) {
  return (
    <LinkWrapper
      {...props}
      item={item}
      depth={depth}
      isLink={!!item.path}
      isInactive={isInactive}
      closeSubmenu={closeSubmenu}
      hasChildren={hasChildren}>
      {showChildren && (
        <MenuItems
          closeSubmenu={closeSubmenu}
          items={item.children}
          depth={depth + 1}
        />
      )}
    </LinkWrapper>
  );
}
