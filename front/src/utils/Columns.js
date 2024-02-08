export const columns = [
  {
    areaColumns: 'products',
    columns: [
      {
        name: 'reference',
        label: 'Reference',
        field: 'reference',
        align: 'left',
        sortable: true
      },
      {
        name: 'description',
        label: 'Description',
        field: 'description',
        align: 'left',
        sortable: false
      },
      {
        name: 'price',
        label: 'Price',
        field: 'price',
        align: 'left',
        sortable: true
      },
      {
        name: 'stock',
        label: 'Stock',
        field: 'stock',
        align: 'left',
        sortable: true
      }
    ],
    actions: [
      {
        name: 'add',
        label: 'Add',
        edit: true,
        empty: true,
        confirmBtn: 'Add new Product',
        cancelBtn: 'Cancel'
      },
      {
        name: 'edit',
        label: 'Edit',
        edit: true,
        empty: false,
        confirmBtn: 'Save',
        cancelBtn: 'Cancel'
      },
      {
        name: 'delete',
        label: 'Delete',
        edit: false,
        empty: false,
        confirmBtn: 'Delete',
        cancelBtn: 'Cancel'
      },
      {
        name: 'view',
        label: 'View',
        edit: false,
        empty: false,
        confirmBtn: 'Close',
        cancelBtn: ''
      }
    ]
  },
  {
    areaColumns: 'clientslist',
    columns: [
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        align: 'left',
        sortable: false
      },
      {
        name: 'budget',
        label: 'Budget',
        field: 'budget',
        align: 'left',
        sortable: true
      }
    ]
  }
]
