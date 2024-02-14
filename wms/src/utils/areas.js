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
            field: 'Add Client'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit Client'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete Client'
          },
          VIEW: {
            name: 'view',
            field: 'View Client'
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
            field: 'Add Order'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit Order'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete Order'
          },
          VIEW: {
            name: 'view',
            field: 'View Order'
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
            field: 'Add Supplier'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit Supplier'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete Supplier'
          },
          VIEW: {
            name: 'view',
            field: 'View Supplier'
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
            field: 'Add Order'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit Order'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete Order'
          },
          VIEW: {
            name: 'view',
            field: 'View Order'
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
            field: 'Add Product'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit Product'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete Product'
          },
          VIEW: {
            name: 'view',
            field: 'View Product'
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
            field: 'Create Inventory'
          }
        }
      }
    }
  }
}

export default areas
