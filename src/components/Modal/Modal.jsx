import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer } from './styles';

export default function Modal({
  anchorRef,
  shouldMount,
  delay,
  handleMount,
  handleUnmount,
  stickToBorder,
  children,
}) {
  const [renderOrigin, setRenderOrigin] = useState({});

  useEffect(() => {
    const clientRect = anchorRef.current.getBoundingClientRect();
    const origin = {};
    switch (stickToBorder) {
      case 'top':
        origin.top = clientRect.bottom;
        origin.left = clientRect.left;
        break;
      case 'bottom':
        origin.bottom = clientRect.top;
        origin.left = clientRect.left;
        break;
      case 'left':
        origin.right = clientRect.left;
        origin.top = clientRect.top;
        break;
      case 'right':
        origin.left = clientRect.right;
        origin.top = origin.top = clientRect.top;
        break;
    }
    setRenderOrigin(origin);
  }, [anchorRef]);


  return ReactDOM.createPortal(
    <ModalContainer
      onMouseOver={handleMount}
      onMouseLeave={handleUnmount}
      className={shouldMount ? 'mount' : 'unmount'}
      renderOrigin={renderOrigin}
      delay={delay}>
      {children}
    </ModalContainer>,
    document.body
  );
}
