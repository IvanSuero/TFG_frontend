const clientsList = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "budget": 100
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "budget": 200
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alicejohnson@example.com",
      "budget": 150
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob@example.com",
      "budget": 300
    }
  ]

const products = [
    {
      "id": 1,
      "name": "Product 1",
      "price": 10.99,
      "stock": 10
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 19.99,
      "stock": 5
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 7.99,
      "stock": 15
    }
  ]

const clientsOrders = [
  {
    "id": 1,
    "client": "John Doe",
    "quantity": 2,
    "cost": 61.96
  },
  {
    "id": 2,
    "client": "Jane Smith",
    "quantity": 1,
    "cost": 39.98
  },
  {
    "id": 3,
    "client": "Alice Johnson",
    "quantity": 1,
    "cost": 39.95
  },
  {
    "id": 4,
    "client": "Bob Brown",
    "quantity": 2,
    "cost": 89.85
  }
]

const suppliersList = [
  {
    "id": 1,
    "name": "Supplier 1",
    "email": ""
  },
  {
    "id": 2,
    "name": "Supplier 2",
    "email": ""
  },
  {
    "id": 3,
    "name": "Supplier 3",
    "email": ""
  },
  {
    "id": 4,
    "name": "Supplier 4",
    "email": ""
  }
]

const suppliersOrders = [
  {
    "id": 1,
    "supplier": "Supplier 1",
    "quantity": 2,
    "cost": 61.96
  },
  {
    "id": 2,
    "supplier": "Supplier 2",
    "quantity": 1,
    "cost": 39.98
  },
  {
    "id": 3,
    "supplier": "Supplier 3",
    "quantity": 1,
    "cost": 39.95
  },
  {
    "id": 4,
    "supplier": "Supplier 4",
    "quantity": 2,
    "cost": 89.85
  }
]

const transfers = [
  {
    "id": 1,
    "type": "Input",
    "product": "Product 1",
    "quantity": 2,
    "cost": 61.96
  },
  {
    "id": 2,
    "type": "Output",
    "product": "Product 2",
    "quantity": 1,
    "cost": 39.98
  },
  {
    "id": 3,
    "type": "Input",
    "product": "Product 3",
    "quantity": 1,
    "cost": 39.95
  },
  {
    "id": 4,
    "type": "Output",
    "product": "Product 4",
    "quantity": 2,
    "cost": 89.85
  }
]

module.exports = {
    clientsList,
    products,
    clientsOrders,
    suppliersList,
    suppliersOrders,
    transfers
}