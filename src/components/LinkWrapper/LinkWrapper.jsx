import { StyledLi, StyledLink, StyledMenuItem, StyledNavLink } from './styles';

const LinkWrapper = ({ onClick, children, isChild, hasChildren, item }) => {
  return (
    <StyledLi
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
      {!item.path && (
        <>
          <StyledMenuItem>
            {item.name} {hasChildren && '>'}
          </StyledMenuItem>
          {children}
        </>
      )}
      {isChild && item.path && (
        <>
          <StyledLink to={item.path}>
            {item.name} {hasChildren && '>'}
          </StyledLink>
          {children}
        </>
      )}
      {!isChild && item.path && (
        <>
          <StyledNavLink exact to={item.path}>
            {item.name} {hasChildren && 'v'}
          </StyledNavLink>
          {children}
        </>
      )}
    </StyledLi>
  );
};

export default LinkWrapper;
