const createState = items => {
  let state = {};
  items.forEach(item => {
    if (item.children) {
      state = {
        ...state,
        [item.name]: false,
      };
    }
  });
  return state;
};

const createReducer = initState => {
  return (state = initState, { payload } = '') => {
    let updatedState = { ...state };
    for (const key in state) {
      updatedState[key] = key === payload;
    }
    return updatedState;
  };
};

export const createReducerHelpers = items => {
  const initState = createState(items);
  const reducer = createReducer(initState);
  return { reducer, initState };
};

