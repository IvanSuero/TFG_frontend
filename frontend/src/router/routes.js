const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AreasPage.vue'), name: 'areas', meta: { title: 'Areas' } },
      { path: 'inventory', component: () => import('src/pages/ProductsInventoryPage.vue'), name: 'inventory', meta: { title: 'Inventory' } },
      { path: 'history', component: () => import('src/pages/HistoryPage.vue'), name: 'history', meta: { title: 'History' } },
      { path: 'statistics', component: () => import('src/pages/StatisticsPage.vue'), name: 'statistics', meta: { title: 'Statistics' } },
      { path: 'labels', component: () => import('src/pages/LabelsPage.vue'), name: 'labels', meta: { title: 'Labels' } },
      { path: 'users', component: () => import('src/pages/UsersListPage.vue'), name: 'users', meta: { title: 'Users' } },
      { path: 'create-user', component: () => import('src/pages/CreateUserPage.vue'), name: 'create-user', meta: { title: 'Create User' } },
      { path: 'capacity', component: () => import('src/pages/CapacityPage.vue'), name: 'capacity', meta: { title: 'Capacity' } },
      { path: 'settings', component: () => import('src/pages/SettingsPage.vue'), name: 'settings', meta: { title: 'Settings' } }
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
