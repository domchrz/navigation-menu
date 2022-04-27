const createMenuState = items => {
  let state = {};
  items.forEach(item => {
    if (item.children?.length) {
      state = {
        ...state,
        [item.name]: false,
        ...createMenuState(item.children),
      };
    }
  });
  return state;
};

const createMenuActions = state => {
  const actions = {};
  for (const stateProp in state) {
    actions[`${stateProp}Open`] = {
      type: `OPEN_${stateProp.toUpperCase()}`,
      payload: true,
    };
    actions[`${stateProp}Close`] = {
      type: `CLOSE_${stateProp.toUpperCase()}`,
      payload: false,
    };
  }
  return actions;
};

const createMenuReducer = (initState, actions) => {
  return (state = initState, action) => {
    let updatedState = state;
    for (const key in actions) {
      if (actions[key].type === action.type) {
        const slice = action.type.split('_')[1];
        // updatedState = {
        //   ...state,
        //   [`${action.type.split('_')[1]}`]: action.payload,
        // };
        updatedState = {
          ...state,
          [slice.charAt(0) + slice.slice(1).toLowerCase()]: action.payload,
        };
      }
    }
    return updatedState;
  };
};

export const createReducerHelpers = menuItems => {
  const initState = createMenuState(menuItems);
  const actions = createMenuActions(initState);
  const reducer = createMenuReducer(initState, actions);
  return { initState, actions, reducer };
};
