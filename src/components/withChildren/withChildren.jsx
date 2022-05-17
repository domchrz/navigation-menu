import useSubmenu from '../../hooks/useSubmenu';

export default function withChildren(Component) {
  return function WithChildren({ children, ...props }) {
    const {
      showChildren: { [props.item.name]: showChildren },
      toggleChildren,
    } = useSubmenu();

    return (
      <Component
        {...props}
        onClick={toggleChildren(props.item.name)}
        hasChildren={true}>
        {showChildren && children}
      </Component>
    );
  };
}
