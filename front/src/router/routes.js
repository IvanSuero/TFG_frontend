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
    component: () => import('layouts/TaskTableLayout.vue'),
    name: 'Clientslist'
  },
  {
    path: '/sellorders',
    component: () => import('layouts/TaskTableLayout.vue'),
    name: 'Sellorders'
  },
  {
    path: '/suppliers',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Suppliers'
  },
  {
    path: '/suppliers-list',
    component: () => import('layouts/TaskTableLayout.vue'),
    name: 'Supplierslist'
  },
  {
    path: '/buyorders',
    component: () => import('layouts/TaskTableLayout.vue'),
    name: 'Buyorders'
  },
  {
    path: '/warehouse',
    component: () => import('layouts/AreaTaskLayout.vue'),
    name: 'Warehouse'
  },
  {
    path: '/products',
    component: () => import('layouts/TaskTableLayout.vue'),
    name: 'Products'
  },
  {
    path: '/inventory',
    component: () => import('layouts/TaskTableLayout.vue'),
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
