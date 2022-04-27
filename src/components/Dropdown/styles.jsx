import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  ${props => `top: ${props.renderOrigin.top}px`};
  ${props => `left: ${props.renderOrigin.left}px`};
  z-index: 1;

  &.mount {
    animation: mount ${({ delay }) => delay}ms ease-out;
  }

  &.unmount {
    animation: unmount ${({ delay }) => delay}ms ease-in;
  }

  @keyframes mount {
    from {
      transform: translateY(-100%) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes unmount {
    from {
      transform: translate(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
  }
`;