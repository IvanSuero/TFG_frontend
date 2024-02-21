const clients = [
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
    "products": [
      {
        "id": 1,
        "quantity": 3
      },
      {
        "id": 2,
        "quantity": 1
      }
    
    ],
    "quantity": 2,
    "cost": 61.96
  },
  {
    "id": 2,
    "client": "Jane Smith",
    "products": [
      {
        "id": 2,
        "quantity": 2
      }
    ],
    "quantity": 1,
    "cost": 39.98
  },
  {
    "id": 3,
    "client": "Alice Johnson",
    "products": [
      {
        "id": 3,
        "quantity": 5
      }
    ],
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

module.exports = {
    clients,
    products,
    clientsOrders
}