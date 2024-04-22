const apiPathUrl = {
  backend: 'https://backend-api-seven-rho.vercel.app/api',
  columns: 'columns',
  getProducts: 'data/products', // WORKS
  updateProduct: 'data/products/update', // WORKS
  createProduct: 'data/products/create', // WORKS
  deleteProduct: 'data/products/delete', // WORKS
  getHistory: 'data/history', // WORKS
  getZones: 'data/zones', // WORKS
  getLocations: 'data/locations', // WORKS
  getLabels: 'data/labels', // WORKS
  relocate: 'data/labels/relocate',
  createLabel: 'data/labels/create', // WORKS
  deleteLabel: 'data/labels/delete',
  createZone: 'data/zones/create', // WORKS
  deleteZone: 'data/zones/delete',
  createLocation: 'data/locations/create', // WORKS
  deleteLocation: 'data/locations/delete',
  getUsers: 'data/users',
  updateUser: 'data/users/update',
  createUser: 'data/users/create',
  deleteUser: 'data/users/delete'
}

export default apiPathUrl
