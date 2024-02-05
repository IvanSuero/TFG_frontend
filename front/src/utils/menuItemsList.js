const mainMenuItemsList = [
  {
    name: 'Clients',
    path: '/clients',
    icon: 'person'
  },
  {
    name: 'Warehouse',
    path: '/warehouse',
    icon: 'warehouse'
  },
  {
    name: 'Suppliers',
    path: '/suppliers',
    icon: 'person'
  }
]

const areaItemsList = [
  {
    area: 'Clients',
    items: [
      {
        name: 'Clients List',
        path: '/list',
        icon: 'person'
      },
      {
        name: 'Sell orders',
        path: '/sellorders',
        icon: 'bill'
      }
    ]
  },
  {
    area: 'Suppliers',
    items: [
      {
        name: 'Suppliers List',
        path: '/list',
        icon: 'person'
      },
      {
        name: 'Buy orders',
        path: '/buyorders',
        icon: 'bill'
      }
    ]
  },
  {
    area: 'Warehouse',
    items: [
      {
        name: 'Products',
        path: '/products',
        icon: 'box'
      },
      {
        name: 'Inventory',
        path: '/inventory',
        icon: 'plus'
      }
    ]
  }
]

export default { mainMenuItemsList, areaItemsList }
