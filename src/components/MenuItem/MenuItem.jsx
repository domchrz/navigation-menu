import LinkWrapper from '../LinkWrapper';
import withChildren from '../withChildren';
import useSubmenu from '../../hooks/useSubmenu';
import withDropdown from '../withDropdown';
import MenuItems from '../MenuItems';

const SubmenuLink = withChildren(LinkWrapper);
const Submenu = withDropdown(MenuItems);

export default function MenuItem(props) {
  const { closeSubmenu } = useSubmenu();

  return (
    <>
      {props.item.children?.length ? (
        <SubmenuLink {...props}>
          <Submenu
            items={props.item.children}
            isChild={true}
            isRootDropdown={!props.isChild}
          />
        </SubmenuLink>
      ) : (
        <LinkWrapper onClick={closeSubmenu} {...props} />
      )}
    </>
  );
}
