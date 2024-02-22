const express = require('express')
const router = express.Router()
const path = require('path')

const {products, clientsList, clientsOrders} = require ('../sample/products')
const columns = require ('../sample/columns')

// Columns routes

router.get('/columns', (req, res) => {
  res.json({ columns: columns})
})

// Clients routes

router.get('/clientsList', (req, res) => {
  res.json({ clientsList: clientsList})
})

router.get('/clientsOrders', (req, res) => {
  res.json({ clientsOrders: clientsOrders})
})

// Suppliers routes

router.get('/suppliersList', (req, res) => {
  res.json({ suppliersList: suppliersList})
})

router.get('/suppliersOrders', (req, res) => {
  res.json({ suppliersOrders: suppliersOrders})
})

// Warehouse routes

router.get('/products', (req, res) => {
  res.json({ products:  products})
})

router.get('/transfers', (req, res) => {
  res.json({ transfers:  transfers})
})

module.exports = router