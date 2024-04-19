const areas = [
  {
    name: 'Inventory Management',
    icon: 'archive',
    url: 'inventory',
    id: 'products-inventory',
    permission: 2,
    area: 'warehouse'
  },
  {
    name: 'History',
    icon: 'history',
    url: 'history',
    id: 'products-history',
    permission: 1,
    area: 'warehouse'
  },
  {
    name: 'Create Product',
    icon: 'add',
    url: 'create-product',
    id: 'products-create',
    permission: 3,
    area: 'warehouse'
  },
  {
    name: 'Labels',
    icon: 'label',
    url: 'labels',
    id: 'products-labels',
    permission: 1,
    area: 'warehouse'
  },
  {
    name: 'Create Location',
    icon: 'location_on',
    url: 'create-location',
    id: 'locations-create',
    permission: 2,
    area: 'warehouse'
  },
  {
    name: 'Statistics',
    icon: 'bar_chart',
    url: 'statistics',
    id: 'products-statistics',
    permission: 1,
    area: 'statistics'
  },
  {
    name: 'Users',
    icon: 'people',
    url: 'users',
    id: 'users',
    permission: 3,
    area: 'configuration'
  },
  {
    name: 'Capacity',
    icon: 'storage',
    url: 'capacity',
    id: 'capacity',
    permission: 1,
    area: 'statistics'
  }
]

export default areas
