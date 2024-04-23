const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas' },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory' },
      { path: 'history', component: () => import('src/pages/HistoryPage.vue'), name: 'history' },
      { path: 'statistics', component: () => import('src/pages/StatisticsPage.vue'), name: 'statistics' },
      { path: 'labels', component: () => import('src/pages/LabelsPage.vue'), name: 'labels' },
      { path: 'users', component: () => import('src/pages/UsersListPage.vue'), name: 'users' },
      { path: 'create-user', component: () => import('src/pages/CreateUserPage.vue'), name: 'create-user' },
      { path: 'capacity', component: () => import('src/pages/CapacityPage.vue'), name: 'capacity' },
      { path: 'settings', component: () => import('src/pages/SettingsPage.vue'), name: 'settings' }
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
