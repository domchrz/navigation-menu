export default function withChildren(Component) {
  return function WithChildren({ children, showChildren, ...props }) {
    return (
      <Component {...props} hasChildren={true}>
        {showChildren && children}
      </Component>
    );
  };
}
