const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'Main-menu'
  },
  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    name: 'Profile'
  },
  {
    path: '/settings',
    component: () => import('layouts/SettingsLayout.vue'),
    name: 'Settings'
  },
  {
    path: '/clients',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Clients'
  },
  {
    path: '/clients-list',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Clients-list'
  },
  {
    path: '/sellorders',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Sell-orders'
  },
  {
    path: '/suppliers',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Suppliers'
  },
  {
    path: '/suppliers-list',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Suppliers-list'
  },
  {
    path: '/buyorders',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Buy-orders'
  },
  {
    path: '/warehouse',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Warehouse'
  },
  {
    path: '/products',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Products'
  },
  {
    path: '/inventory',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Inventory'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
