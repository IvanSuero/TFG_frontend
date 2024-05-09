const historyColumns = [
  {
    name: 'date',
    required: true,
    label: 'Date and time',
    align: 'left',
    field: 'date',
    sortable: true
  },
  {
    name: 'reference',
    required: true,
    label: 'Reference',
    align: 'left',
    field: 'reference',
    sortable: true
  },
  {
    name: 'description',
    required: true,
    label: 'Description',
    align: 'left',
    field: 'description',
    sortable: true
  },
  {
    name: 'inventory',
    required: true,
    label: 'Inventory',
    align: 'left',
    field: 'inventory',
    sortable: true
  },
  {
    name: 'comments',
    required: true,
    label: 'Comments',
    align: 'left',
    field: 'comments',
    sortable: true,
    format: val => (val === null || val === undefined) ? '' : val
  },
  {
    name: 'username',
    required: true,
    label: 'Username',
    align: 'left',
    field: 'username',
    sortable: true
  }
]

export default historyColumns
