const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas', meta: { title: 'Areas' } },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory', meta: { title: 'Inventory' } },
      { path: 'history', component: () => import('src/pages/HistoryPage.vue'), name: 'history', meta: { title: 'History' } },
      { path: 'statistics', component: () => import('src/pages/StatisticsPage.vue'), name: 'statistics', meta: { title: 'Statistics' } },
      { path: 'users', component: () => import('src/pages/UsersListPage.vue'), name: 'users', meta: { title: 'Users' } }
    ]
  },
  {
    path: '/login',
    component: () => import('src/layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LoginPage.vue'), name: 'login', meta: { title: 'Login' } }
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
