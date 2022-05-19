import LinkWrapper from '../LinkWrapper';
import MenuItems from '../MenuItems';

export default function MenuItem({
  item,
  state: { showChildren, isInactive, hasChildren },
  depth,
  ...props
}) {
  return (
    <LinkWrapper
      {...props}
      item={item}
      depth={depth}
      isLink={!!item.path}
      isInactive={isInactive}
      hasChildren={hasChildren}>
      {showChildren && <MenuItems items={item.children} depth={depth + 1} />}
    </LinkWrapper>
  );
}
