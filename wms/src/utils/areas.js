const areas = {
  CLIENTS: {
    name: 'clients',
    path: 'clients',
    icon: 'person',
    actions: {
      CLIENTSLIST: {
        name: 'list',
        path: 'clientsList',
        icon: 'list',
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
        icon: 'shopping_cart',
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
    icon: 'person',
    actions: {
      SUPPLIERSLIST: {
        name: 'list',
        path: 'suppliersList',
        icon: 'list',
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
        icon: 'shopping_cart',
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
    icon: 'warehouse',
    actions: {
      PRODUCTS: {
        name: 'products',
        path: 'products',
        icon: 'list',
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
        icon: 'add',
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
