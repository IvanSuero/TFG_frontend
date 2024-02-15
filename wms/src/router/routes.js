const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mainPages/AreasPage.vue'), name: 'areas' }
    ]
  },
  {
    path: '/clients',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mainPages/TasksPage.vue'), name: 'clients' },
      { path: 'list', component: () => import('pages/tablePages/ActionPage.vue'), name: 'clientsList', meta: { area: 'clients' } },
      { path: 'orders', component: () => import('pages/tablePages/ActionPage.vue'), name: 'clientsOrders', meta: { area: 'clients' } }
    ]
  },
  {
    path: '/suppliers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mainPages/TasksPage.vue'), name: 'suppliers' },
      { path: 'list', component: () => import('pages/tablePages/ActionPage.vue'), name: 'suppliersList', meta: { area: 'suppliers' } },
      { path: 'orders', component: () => import('pages/tablePages/ActionPage.vue'), name: 'suppliersOrders', meta: { area: 'suppliers' } }
    ]
  },
  {
    path: '/warehouse',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mainPages/TasksPage.vue'), name: 'warehouse' },
      { path: 'products', component: () => import('pages/tablePages/ActionPage.vue'), name: 'products', meta: { area: 'warehouse' } },
      { path: 'transfers', component: () => import('pages/tablePages/ActionPage.vue'), name: 'transfers', meta: { area: 'warehouse' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
