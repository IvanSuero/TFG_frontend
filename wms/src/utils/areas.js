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
            functionType: 'popup',
            popup: 'add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup',
            popup: 'edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'view'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
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
            functionType: 'popup',
            popup: 'add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup',
            popup: 'edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'view'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
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
            functionType: 'popup',
            popup: 'add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup',
            popup: 'edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'view'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
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
            functionType: 'popup',
            popup: 'add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup',
            popup: 'edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'view'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
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
            functionType: 'popup',
            popup: 'add'
          },
          EDIT: {
            name: 'edit',
            field: 'Edit',
            selection: 'single',
            functionType: 'popup',
            popup: 'edit'
          },
          DELETE: {
            name: 'delete',
            field: 'Delete',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'view'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
          },
          INVENTORY: {
            name: 'inventory',
            field: 'Inventory',
            selection: 'multiple',
            functionType: 'popup',
            popup: 'inventory'
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
            functionType: 'popup',
            popup: 'add'
          },
          VIEW: {
            name: 'view',
            field: 'View',
            selection: 'single',
            functionType: 'popup',
            popup: 'view'
          },
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'multiple',
            functionType: 'action',
            popup: ''
          }
        }
      }
    }
  },
  STATISTICS: {
    name: 'statistics',
    field: 'Statistics',
    path: 'statistics',
    icon: 'bar_chart',
    actions: {
      SALES: {
        name: 'sales',
        field: 'Sales',
        path: 'sales',
        icon: 'trending_up',
        buttons: {
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'none',
            functionType: 'action',
            popup: ''
          }
        }
      },
      PURCHASES: {
        name: 'purchases',
        field: 'Purchases',
        path: 'purchases',
        icon: 'trending_down',
        buttons: {
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'none',
            functionType: 'action',
            popup: ''
          }
        }
      },
      GLOBAL: {
        name: 'global',
        field: 'Global',
        path: 'global',
        icon: 'public',
        buttons: {
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'none',
            functionType: 'action',
            popup: ''
          }
        }
      },
      INVENTORY: {
        name: 'inventory',
        field: 'Inventory',
        path: 'inventory',
        icon: 'inventory_2',
        buttons: {
          DOWNLOAD: {
            name: 'download',
            field: 'Download',
            selection: 'none',
            functionType: 'action',
            popup: ''
          }
        }
      }
    }
  }
}

export default areas
