import { useEffect, useReducer, useState } from 'react';
import { createReducerHelpers } from '../helpers/reducerHelpers';
import db from '../helpers/debounce';

export default function useMountDelays(items, areMounted, delay) {
  const { initState, actions, reducer } = createReducerHelpers(items);
  const [shouldRender, dispatch] = useReducer(reducer, initState);
  const [debounce, setDebounce] = useState({});

  useEffect(() => {
    for (const key in initState) {
      setDebounce(prevState => ({ ...prevState, [key]: db() }));
    }
  }, []);

  useEffect(() => {
    for (const key in areMounted) {
      if (!debounce[key]) return;
      if (areMounted[key]) {
        debounce[key](delay / 2, () => dispatch(actions[`${key}Open`]));
      } else {
        debounce[key](delay, () => dispatch(actions[`${key}Close`]));
      }
    }
  }, [areMounted]);

  return shouldRender;
}
