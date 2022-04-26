export const navReducer = (state, action) => {
  switch (action.type) {
    case 'MOUNT_PRODUCTS_MENU':
      return { ...state, products: action.payload };
    case 'MOUNT_CATEGORIES_MENU':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export const NAV_ACTIONS = {
  showProducts: { type: 'MOUNT_PRODUCTS_MENU', payload: true },
  hideProducts: { type: 'MOUNT_PRODUCTS_MENU', payload: false },
  showCategories: { type: 'MOUNT_CATEGORIES_MENU', payload: true },
  hideCategories: { type: 'MOUNT_CATEGORIES_MENU', payload: false }
};
