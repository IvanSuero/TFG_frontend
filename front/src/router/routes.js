const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'main-menu'
  },
  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    name: 'profile'
  },
  {
    path: '/settings',
    component: () => import('layouts/SettingsLayout.vue'),
    name: 'settings'
  },
  {
    path: '/clients',
    component: () => import('layouts/ClientsLayout.vue'),
    name: 'clients'
  },
  {
    path: '/clients-list',
    component: () => import('layouts/ClientsListLayout.vue'),
    name: 'clients-list'
  },
  {
    path: '/sellorders',
    component: () => import('layouts/SellOrdersLayout.vue'),
    name: 'sell-orders'
  },
  {
    path: '/suppliers',
    component: () => import('layouts/SuppliersLayout.vue'),
    name: 'suppliers'
  },
  {
    path: '/suppliers-list',
    component: () => import('layouts/SuppliersListLayout.vue'),
    name: 'suppliers-list'
  },
  {
    path: '/buyorders',
    component: () => import('layouts/BuyOrdersLayout.vue'),
    name: 'buy-orders'
  },
  {
    path: '/warehouse',
    component: () => import('layouts/WarehouseLayout.vue'),
    name: 'warehouse'
  },
  {
    path: '/products',
    component: () => import('layouts/ProductsLayout.vue'),
    name: 'products'
  },
  {
    path: '/inventory',
    component: () => import('layouts/InventoryLayout.vue'),
    name: 'inventory'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
