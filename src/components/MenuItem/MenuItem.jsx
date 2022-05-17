import LinkWrapper from '../LinkWrapper';
import withChildren from '../withChildren';
import useSubmenu from '../../hooks/useSubmenu';
import withDropdown from '../withDropdown';
import MenuItems from '../MenuItems';

const SubmenuLink = withChildren(LinkWrapper);
const Submenu = withDropdown(MenuItems);

export default function MenuItem(props) {
  const { showChildren, toggleChildren, close } = useSubmenu();
  const handleClick = props.item.children?.length ? toggleChildren(props.item.name) : close;

  return (
    <>
      {props.item.children?.length ? (
        <SubmenuLink
          {...props}
          onClick={handleClick}
          showChildren={showChildren[props.item.name]}>
          <Submenu items={props.item.children} isChild={true} isRootDropdown={!props.isChild} />
        </SubmenuLink>
      ) : (
        <LinkWrapper {...props} onClick={handleClick} />
      )}
    </>
  );
}
