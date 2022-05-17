import { DropdownContainer } from './styles';

export default function Dropdown({ isRootDropdown, children }) {
  const { top, left } = {
    top: isRootDropdown ? '100%' : '0',
    left: isRootDropdown ? '0' : '100%',
  };
  return (
    <DropdownContainer top={top} left={left}>
      {children}
    </DropdownContainer>
  );
}
