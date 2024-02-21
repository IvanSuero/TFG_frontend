const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

const {products, clientsList, clientsOrders} = require ('./sample/products')
const columns = require ('./sample/columns')

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
  res.json({ products:  products})
})

app.get('/api/clientsList', (req, res) => {
  res.json({ clientsList: clientsList})
})

app.get('/api/clientsOrders', (req, res) => {
  res.json({ clientsOrders: clientsOrders})
})

app.get('/api/columns', (req, res) => {
  res.json({ columns: columns})
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})