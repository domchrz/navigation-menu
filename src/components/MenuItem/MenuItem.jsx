import LinkWrapper from '../LinkWrapper';
import MenuItems from '../MenuItems';

export default function MenuItem({ item, showChildren, depth, ...props }) {
  return (
    <LinkWrapper
      {...props}
      item={item}
      depth={depth}
      isLink={!!item.path}
      hasChildren={!!item.children}>
      {showChildren && <MenuItems items={item.children} depth={depth + 1} />}
    </LinkWrapper>
  );
}
