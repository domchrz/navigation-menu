const MENU_ITEMS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Products',
    path: '/products',
    children: [
      {
        name: 'Categories',
        children: [
          {
            name: 'Phones',
            path: '/products/phones',
          },
          {
            name: 'Laptops',
            path: '/products/laptops',
          },
          {
            name: 'Monitors',
            path: '/products/monitors',
          },
        ],
      },
      {
        name: 'Contact',
        children: [
          {
            name: 'Shipping'
          },
          {
            name: 'Factories',
            children: [
              {
                name: 'China'
              },
              {
                name: 'Korea'
              },
              {
                name: 'Indonesia'
              },
            ]
          },
        ]
      },
    ],
  },
];

export default MENU_ITEMS;
