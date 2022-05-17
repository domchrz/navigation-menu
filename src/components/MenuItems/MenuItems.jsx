import MenuItem from '../MenuItem';
import { StyledUl } from './styles';

export default function MenuItems({
  items,
  isChild = false,
  direction = 'column',
}) {
  return (
    <StyledUl direction={direction}>
      {items.map(item => (
        <MenuItem key={item.name} item={item} isChild={isChild} />
      ))}
    </StyledUl>
  );
}
