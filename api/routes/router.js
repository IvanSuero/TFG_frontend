const express = require('express')
const router = express.Router()
const path = require('path')

const {products, clientsList, clientsOrders, suppliersList, suppliersOrders, transfers} = require ('../sample/data')
const { cProducts, cClientsList, cClientsOrders, cSuppliersList, cSuppliersOrders, cTransfers} = require ('../sample/columns')

// Columns routes

router.get('/columns/clientsList', (req, res) => {
  console.log(cClientsList)
  res.json({ columns: cClientsList})
})

router.get('/columns/clientsOrders', (req, res) => {
  res.json({ columns: cClientsOrders})
})

router.get('/columns/suppliersList', (req, res) => {
  res.json({ columns: cSuppliersList})
})

router.get('/columns/suppliersOrders', (req, res) => {
  res.json({ columns: cSuppliersOrders})
})

router.get('/columns/products', (req, res) => {
  res.json({ columns: cProducts})
})

router.get('/columns/transfers', (req, res) => {
  res.json({ columns: cTransfers})
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