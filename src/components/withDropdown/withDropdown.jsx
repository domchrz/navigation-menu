import Dropdown from '../Dropdown';

export default function withDropdown(Component) {
  return function WithDropdown({ isRootDropdown, ...props }) {
    return (
      <Dropdown isRootDropdown={isRootDropdown}>
        <Component {...props} />
      </Dropdown>
    );
  };
}
