import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DropdownContainer } from './styles';

export default function Dropdown({
  anchorRef,
  shouldMount,
  delay,
  stickToBorder,
  children,
}) {
  const [renderOrigin, setRenderOrigin] = useState({});

  useEffect(() => {
    const clientRect = anchorRef.current.getBoundingClientRect();
    const origin = {};
    switch (stickToBorder) {
      case 'top':
        origin.bottom = clientRect.top;
        origin.left = clientRect.left;
        break;
      case 'bottom':
        origin.top = clientRect.bottom;
        origin.left = clientRect.left;
        break;
      case 'left':
        origin.right = clientRect.left;
        origin.top = clientRect.top;
        break;
      case 'right':
        origin.left = clientRect.right;
        origin.top = clientRect.top;
        break;
    }
    setRenderOrigin(origin);
  }, [anchorRef]);

  return ReactDOM.createPortal(
    <DropdownContainer
      className={shouldMount ? 'mount' : 'unmount'}
      renderOrigin={renderOrigin}
      delay={delay}>
      {children}
    </DropdownContainer>,
    document.body
  );
}
