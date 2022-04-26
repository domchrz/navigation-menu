import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  ${props => props.renderOrigin.top && `top: ${props.renderOrigin.top}px`};
  ${props => props.renderOrigin.left && `left: ${props.renderOrigin.left}px`};
  ${props =>
    props.renderOrigin.right && `right: ${props.renderOrigin.right}px`};
  ${props =>
    props.renderOrigin.bottom && `bottom: ${props.renderOrigin.bottom}px`};
  z-index: 1;

  &.mount {
    animation: mount ${({ delay }) => delay}ms ease-out;
  }

  &.unmount {
    animation: unmount ${({ delay }) => delay}ms ease-in;
  }

  @keyframes mount {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes unmount {
    from {
      transform: translate(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
