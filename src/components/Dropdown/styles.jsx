import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  ${props => `top: ${props.renderOrigin.top}px`};
  ${props => `left: ${props.renderOrigin.left}px`};
  z-index: 1;
  transform: translateY(-100%);

  &.mount {
    animation: mount ${({ delay }) => delay}ms ease-in-out forwards;
  }

  &.unmount {
    animation: unmount ${({ delay }) => delay}ms ease-in forwards;
  }

  @keyframes mount {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translate(0);
    }
  }

  @keyframes unmount {
    from {
      transform: translate(0);
      opacity: 1;
    }
    to {
      transform: translateY(-150%);
      opacity: 0;
    }
  }
`;