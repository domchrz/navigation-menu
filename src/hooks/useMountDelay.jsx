import { useEffect, useReducer, useState } from 'react';
import { createReducerHelpers } from '../helpers/reducer';
import db from '../helpers/debounce';

export default function useMountDelay(items, areMounted, delay) {
  const { initState, actions, reducer } = createReducerHelpers(items);
  const [shouldRender, dispatch] = useReducer(reducer, initState);
  const [debounce, setDebounce] = useState({});
  const [prevMounted, setPrevMounted] = useState({});

  useEffect(() => {
    for (const key in initState) {
      setDebounce(prevState => ({ ...prevState, [key]: db() }));
    }
  }, []);

  // useEffect(() => {
  //   for (const key in areMounted) {
  //     if (!debounce[key]) return;
  //     if (areMounted[key]) {
  //       debounce[key](150, () => dispatch(actions[`${key}Open`]));
  //     } else {
  //       debounce[key](delay, () => dispatch(actions[`${key}Close`]));
  //     }
  //   }
  // }, [areMounted]);
  useEffect(() => {
    for (const key in areMounted) {
      if (!debounce[key]) return;
      if (areMounted[key] !== prevMounted[key]) {
        areMounted[key]
          ? debounce[key](200, () => dispatch(actions[`${key}Open`]))
          : debounce[key](delay, () => dispatch(actions[`${key}Close`]));
      }
      setPrevMounted(areMounted);
    }
  }, [areMounted]);

  return shouldRender;
}
