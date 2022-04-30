import { forwardRef } from 'react';
import { MenuItem, StyledLink, StyledNavLink } from './styles';

const LinkWrapper = forwardRef(function LinkWrap(props, ref) {
  return (
    <>
      {!props.item.path && (
        <>
          <MenuItem
            isActive={props.isActive}
            ref={ref}
            isNested={props.isNested}
            onMouseEnter={props.handleEnter}>
            <span>
              {props.item.name}
              {props.item.children?.length && ' >'}
            </span>
          </MenuItem>
          {props.children}
        </>
      )}
      {props.isNested && props.item.path && (
        <>
          <StyledLink
            isActive={props.isActive}
            ref={ref}
            to={props.item.path}
            onMouseEnter={props.handleEnter}>
            <span>
              {props.item.name}
              {props.item.children?.length && ' >'}
            </span>
          </StyledLink>
          {props.children}
        </>
      )}
      {!props.isNested && props.item.path && props.item.path !== '/' && (
        <>
          <StyledNavLink
            ref={ref}
            to={props.item.path}
            onClick={e => props.handleClick(e, false, 0)}
            onMouseEnter={props.handleEnter}>
            <span>
              {props.item.name}
              {props.item.children?.length && ' v'}
            </span>
          </StyledNavLink>
          {props.children}
        </>
      )}
      {props.item.path === '/' && (
        <>
          <StyledNavLink
            ref={ref}
            exact
            to={props.item.path}
            onClick={e => props.handleClick(e, false, 0)}
            onMouseEnter={props.handleEnter}>
            {props.item.name}
          </StyledNavLink>
          {props.children}
        </>
      )}
    </>
  );
});

export default LinkWrapper;
