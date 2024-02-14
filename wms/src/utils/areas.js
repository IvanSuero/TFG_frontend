const areas = {
  CLIENTS: {
    name: 'clients',
    path: 'clients',
    actions: {
      CLIENTSLIST: {
        name: 'list',
        path: 'clientsList',
        buttons: {
          ADD: {
            name: 'add'
          },
          EDIT: {
            name: 'edit'
          },
          DELETE: {
            name: 'delete'
          },
          VIEW: {
            name: 'view'
          }
        }
      },
      CLIENTSORDERS: {
        name: 'orders',
        path: 'clientsOrders',
        buttons: {
          ADD: {
            name: 'add'
          },
          EDIT: {
            name: 'edit'
          },
          DELETE: {
            name: 'delete'
          },
          VIEW: {
            name: 'view'
          }
        }
      }
    }
  },
  SUPPLIERS: {
    name: 'suppliers',
    path: 'suppliers',
    actions: {
      SUPPLIERSLIST: {
        name: 'list',
        path: 'suppliersList',
        buttons: {
          ADD: {
            name: 'add'
          },
          EDIT: {
            name: 'edit'
          },
          DELETE: {
            name: 'delete'
          },
          VIEW: {
            name: 'view'
          }
        }
      },
      SUPPLIERSORDERS: {
        name: 'orders',
        path: 'suppliersOrders',
        buttons: {
          ADD: {
            name: 'add'
          },
          EDIT: {
            name: 'edit'
          },
          DELETE: {
            name: 'delete'
          },
          VIEW: {
            name: 'view'
          }
        }
      }
    }
  },
  WAREHOUSE: {
    name: 'warehouse',
    path: 'warehouse',
    actions: {
      PRODUCTS: {
        name: 'products',
        path: 'products',
        buttons: {
          ADD: {
            name: 'add'
          },
          EDIT: {
            name: 'edit'
          },
          DELETE: {
            name: 'delete'
          },
          VIEW: {
            name: 'view'
          }
        }
      },
      INVENTORY: {
        name: 'inventory',
        path: 'inventory',
        buttons: {
          CREATE: {
            name: 'create'
          }
        }
      }
    }
  }
}

export default areas
