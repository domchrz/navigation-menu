const MENU_ITEMS = {
  home: { path: '/' },
  about: { path: '/about' },
  products: {
    path: '/products',
    categories: {
      phones: { path: '/products/phones' },
      laptops: { path: '/products/laptops' },
      monitors: { path: '/products/monitors' },
    },
  },
};

export default MENU_ITEMS;
