const cClientsList = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": false,
    "modifiable": false
  },
  {
    "name": "name",
    "label": "Name",
    "field": "name",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true
  },
  {
    "name": "email",
    "label": "Email",
    "field": "email",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true
  },
  {
    "name": "budget",
    "label": "Budget",
    "field": "budget",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true
  }
]

const cProducts = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": false,
    "editable": false
  },
  {
    "name": "name",
    "label": "Name",
    "field": "name",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "price",
    "label": "Price",
    "field": "price",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "stock",
    "label": "Stock",
    "field": "stock",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": true
  }
]

const cClientsOrders = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": false,
    "editable": false
  },
  {
    "name": "client",
    "label": "Client",
    "field": "client",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "quantity",
    "label": "Quantity",
    "field": "quantity",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": true
  },
  {
    "name": "cost",
    "label": "Cost",
    "field": "cost",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  }
]

const cSuppliersList = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": false,
    "editable": false
  },
  {
    "name": "name",
    "label": "Name",
    "field": "name",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "email",
    "label": "Email",
    "field": "email",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  }
]

const cSuppliersOrders = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": false,
    "editable": false
  },
  {
    "name": "supplier",
    "label": "Supplier",
    "field": "supplier",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "quantity",
    "label": "Quantity",
    "field": "quantity",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": true
  },
  {
    "name": "cost",
    "label": "Cost",
    "field": "cost",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  }
]

const cTransfers = [
  {
    "name": "id",
    "label": "ID",
    "field": "id",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": false,
    "editable": false
  },
  {
    "name": "type",
    "label": "Type",
    "field": "type",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "product",
    "label": "Product",
    "field": "product",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  },
  {
    "name": "quantity",
    "label": "Quantity",
    "field": "quantity",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": true
  },
  {
    "name": "cost",
    "label": "Cost",
    "field": "cost",
    "align": "left",
    "sortable": true,
    "visible": true,
    "modifiable": true,
    "editable": false
  }
]

module.exports = {
  cProducts,
  cClientsList,
  cClientsOrders,
  cSuppliersList,
  cSuppliersOrders,
  cTransfers
}