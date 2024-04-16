const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas' },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory' },
      { path: 'history', component: () => import('src/pages/HistoryPage.vue'), name: 'history' },
      { path: 'create', component: () => import('src/pages/CreateProductPage.vue'), name: 'create' },
      { path: 'statistics', component: () => import('src/pages/StatisticsPage.vue'), name: 'statistics' }
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
