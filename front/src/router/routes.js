const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'Main-menu',
    children: [
      { path: 'clients', component: () => import('pages/MainLayout.vue') },
      { path: 'warehouse', component: () => import('pages/MainLayout.vue') },
      { path: 'suppliers', component: () => import('pages/MainLayout.vue') }
    ]
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
