import { StyledLi, StyledLink, StyledMenuItem, StyledNavLink } from './styles';

const LinkWrapper = ({
  onClick,
  children,
  depth,
  isLink,
  hasChildren,
  isInactive,
  item,
}) => {
  return (
    <StyledLi
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
      {!isLink && (
        <>
          <StyledMenuItem isInactive={isInactive}>
            {item.name} {hasChildren && '>'}
          </StyledMenuItem>
          {children}
        </>
      )}
      {depth > 0 && isLink && (
        <>
          <StyledLink to={item.path} isInactive={isInactive}>
            {item.name} {hasChildren && '>'}
          </StyledLink>
          {children}
        </>
      )}
      {depth === 0 && (
        <>
          <StyledNavLink exact={item.path === '/'} to={item.path}>
            {item.name} {hasChildren && 'v'}
          </StyledNavLink>
          {children}
        </>
      )}
    </StyledLi>
  );
};

export default LinkWrapper;
