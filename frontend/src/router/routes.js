const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas' },
      { path: 'list', component: () => import('src/pages/ProductsPage.vue'), name: 'list' },
      { path: 'add', component: () => import('src/pages/ProductsAddPage.vue'), name: 'add' },
      { path: 'delete', component: () => import('src/pages/ProductsDeletePage.vue'), name: 'delete' },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory' }
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
