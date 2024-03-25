const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas' },
      { path: 'list', component: () => import('src/pages/ProductsPage.vue'), name: 'list', meta: { apiPath: 'getProducts' } },
      { path: 'add', component: () => import('src/pages/AreasPage.vue'), name: 'add', meta: { apiPath: 'getProducts' } },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory', meta: { apiPath: 'getProducts' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue')
  }
]

export default routes
