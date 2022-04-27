import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DropdownContainer } from './styles';

export default function Dropdown({
  anchorRef,
  shouldMount,
  delay,
  children,
  origin
}) {
  const [renderOrigin, setRenderOrigin] = useState({});

  useEffect(() => {
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
