import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DropdownContainer } from './styles';

export default function Dropdown({
  anchorRef,
  shouldMount,
  delay,
  children,
  origin,
  // random
}) {
  const [renderOrigin, setRenderOrigin] = useState({});

  useEffect(() => {
    setRenderOrigin(origin);
  }, [anchorRef, origin]);

  return ReactDOM.createPortal(
    <>
      {!!renderOrigin.left && (<DropdownContainer
        className={shouldMount ? 'mount' : 'unmount'}
        renderOrigin={renderOrigin}
        delay={delay}>
        {children}
      </DropdownContainer>)}
    </>,
    document.body
  );
}
