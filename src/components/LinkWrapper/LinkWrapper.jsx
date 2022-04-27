import { forwardRef } from 'react';
import { MenuItem, StyledLink, StyledNavLink } from './styles';

const LinkWrapper = forwardRef(function LinkWrap(props, ref) {
  return (
    <>
      {!props.item.path && (
        <>
          <MenuItem
            ref={ref}
            isNested={props.isNested}
            onClick={props.handleClick}>
            <span>{props.item.name}{props.item.children?.length && ' >'}</span>
            {props.children}
          </MenuItem>
        </>
      )}
      {props.isNested && props.item.path && (
        <>
          <StyledLink
            ref={ref}
            to={props.item.path}
            onClick={props.handleClick}>
            <span>{props.item.name}{props.item.children?.length && ' >'}</span>
            {props.children}
          </StyledLink>
        </>
      )}
      {!props.isNested && props.item.path && props.item.path !== '/' && (
        <>
          <StyledNavLink
            ref={ref}
            to={props.item.path}
            onClick={props.handleClick}
            onMouseEnter={e => {
              e.stopPropagation();
              props.handleHover(e);
            }}>
            <span>{props.item.name}{props.item.children?.length && ' v'}</span>
            {props.children}
          </StyledNavLink>
        </>
      )}
      {props.item.path === '/' && (
        <>
          <StyledNavLink
            ref={ref}
            exact
            to={props.item.path}
            onClick={props.handleClick}
            onMouseEnter={e => {
              e.stopPropagation();
              props.handleHover(e);
            }}>
            {props.item.name}
            {props.children}
          </StyledNavLink>
        </>
      )}
    </>
  );
});

export default LinkWrapper;
