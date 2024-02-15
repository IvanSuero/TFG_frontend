const areas = {
  CLIENTS: {
    name: 'clients',
    field: 'Clients',
    path: 'clients',
    icon: 'person',
    actions: {
      CLIENTSLIST: {
        name: 'list',
        path: 'clientsList',
        field: 'Clients List',
        icon: 'list',
        buttons: {
          ADD: {
            name: 'add',
            field: 'Add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete'
          },
          VIEW: {
            name: 'view',
            field: 'View'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download'
          }
        }
      },
      CLIENTSORDERS: {
        name: 'orders',
        field: 'Orders',
        path: 'clientsOrders',
        icon: 'shopping_cart',
        buttons: {
          ADD: {
            name: 'add',
            field: 'Add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete'
          },
          VIEW: {
            name: 'view',
            field: 'View'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download'
          }
        }
      }
    }
  },
  SUPPLIERS: {
    name: 'suppliers',
    field: 'Suppliers',
    path: 'suppliers',
    icon: 'person',
    actions: {
      SUPPLIERSLIST: {
        name: 'list',
        field: 'Suppliers List',
        path: 'suppliersList',
        icon: 'list',
        buttons: {
          ADD: {
            name: 'add',
            field: 'Add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete'
          },
          VIEW: {
            name: 'view',
            field: 'View'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download'
          }
        }
      },
      SUPPLIERSORDERS: {
        name: 'orders',
        field: 'Orders',
        path: 'suppliersOrders',
        icon: 'shopping_cart',
        buttons: {
          ADD: {
            name: 'add',
            field: 'Add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete'
          },
          VIEW: {
            name: 'view',
            field: 'View'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download'
          }
        }
      }
    }
  },
  WAREHOUSE: {
    name: 'warehouse',
    field: 'Warehouse',
    path: 'warehouse',
    icon: 'warehouse',
    actions: {
      PRODUCTS: {
        name: 'products',
        field: 'Products',
        path: 'products',
        icon: 'list',
        buttons: {
          ADD: {
            name: 'add',
            field: 'Add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete'
          },
          VIEW: {
            name: 'view',
            field: 'View'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download'
          }
        }
      },
      INVENTORY: {
        name: 'inventory',
        field: 'Inventory',
        path: 'inventory',
        icon: 'add',
        buttons: {
          CREATE: {
            name: 'create',
            field: 'Create'
          }
        }
      }
    }
  }
}

export default areas
