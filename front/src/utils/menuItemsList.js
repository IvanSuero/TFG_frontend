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
    name: 'Clients List',
    path: '/clients-list',
    icon: 'person'
  },
  {
    area: 'Clients',
    name: 'Sell orders',
    path: '/sellorders',
    icon: 'folder'
  },
  {
    area: 'Suppliers',
    name: 'Suppliers List',
    path: '/list',
    icon: 'person'
  },
  {
    area: 'Suppliers',
    name: 'Buy orders',
    path: '/buyorders',
    icon: 'folder'
  },
  {
    area: 'Warehouse',
    name: 'Products',
    path: '/products',
    icon: 'shopping_cart'
  },
  {
    area: 'Warehouse',
    name: 'Inventory',
    path: '/inventory',
    icon: 'add'
  }
]

export default { mainMenuItemsList, areaItemsList }
