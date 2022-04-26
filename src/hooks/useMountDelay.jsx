import { useEffect, useState, useCallback } from 'react';
import db from '../helpers/debounce';

export default function useMountDelay(isMounted, delay) {
  const [shouldRender, setShouldRender] = useState(false);

  const debounce = useCallback(db(), []);

  useEffect(() => {
    if (isMounted) {
      debounce(0, setShouldRender, true);
    } else if (!isMounted) {
      debounce(delay, setShouldRender, false);
    }
  }, [isMounted]);
  
  return shouldRender;
}
