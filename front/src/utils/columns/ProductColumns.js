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
    ]
  },
  {
    areaColumns: 'clients',
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
