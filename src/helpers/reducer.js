const createState = items => {
  let state = {};
  items.forEach(item => {
    state = {
      ...state,
      [item.name]: {
        showChildren: false,
        isInactive: false,
        hasChildren: !!item.children,
      },
    };
  });
  return state;
};

const createReducer = initState => {
  return (state = initState, { payload } = '') => {
    let updatedState = { ...state };
    for (const key in state) {
      updatedState[key].showChildren =
        updatedState[key].hasChildren && key === payload;
      updatedState[key].isInactive = key !== payload;
    }
    return updatedState;
  };
};

export const createReducerHelpers = items => {
  const initState = createState(items);
  const reducer = createReducer(initState);
  return { reducer, initState };
};
