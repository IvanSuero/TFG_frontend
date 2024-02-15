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
            field: 'Add',
            selection: 'none',
            functionType: 'popup'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
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
            field: 'Add',
            selection: 'none',
            functionType: 'popup'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
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
            field: 'Add',
            selection: 'none',
            functionType: 'popup'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
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
            field: 'Add',
            selection: 'none',
            functionType: 'popup'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
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
            field: 'Add',
            selection: 'none',
            functionType: 'popup'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
          },
          INVENTORY: {
            name: 'inventory',
            field: 'Inventory',
            selection: 'multiple',
            functionType: 'popup'
          }
        }
      },
      TRANSFERS: {
        name: 'transfers',
        field: 'Transfers',
        path: 'transfers',
        icon: 'compare_arrows',
        buttons: {
          NEW: {
            name: 'new',
            field: 'new',
            selection: 'none',
            functionType: 'popup'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action'
          }
        }
      }
    }
  }
}

export default areas
