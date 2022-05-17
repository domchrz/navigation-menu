const createState = items => {
  let state = {};
  items.forEach(item => {
    if (item.children?.length) {
      state = {
        ...state,
        [item.name]: false,
        ...createState(item.children),
      };
    }
  });
  return state;
};

const createActions = state => {
  const actions = {};
  for (const key in state) {
    actions[`open${key}`] = {
      type: `OPEN_${key.toUpperCase()}`,
      payload: true,
    };
    actions[`close${key}`] = {
      type: `CLOSE_${key.toUpperCase()}`,
      payload: false,
    };
  }
  actions.closeSubmenu = {
    type: 'CLOSE_SUBMENU',
  };
  return actions;
};

const createReducer = (initState, actions) => {
  return (state = initState, action) => {
    let updatedState = state;
    if (action.type === 'CLOSE_SUBMENU') {
      for (const key in state) {
        updatedState = { ...updatedState, [key]: false };
      }
    } else {
      for (const key in actions) {
        if (
          actions[key].type === action.type &&
          action.type !== 'CLOSE_SUBMENU'
        ) {
          const slice = action.type.split('_')[1];
          updatedState = {
            ...state,
            [slice.charAt(0) + slice.slice(1).toLowerCase()]: action.payload,
          };
        }
      }
    }
    return updatedState;
  };
};

export const createReducerHelpers = items => {
  const initState = createState(items);
  const actions = createActions(initState);
  const reducer = createReducer(initState, actions);
  return { initState, actions, reducer };
};
