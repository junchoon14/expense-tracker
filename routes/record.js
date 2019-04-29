const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// list all
router.get('/', (req, res) => {
  res.send('list all records')
})

// show detail page
router.get('/:id', (req, res) => {
  res.send('detail page')
})

// create page
router.get('/new', (req, res) => {
  res.send('new')
})

//  create feature
router.post('/', (req, res) => {
  res.send('new')
})

// edit page
router.get('/:id/edit', (req, res) => {
  res.send('edit')
})

// edit feature
router.post('/:id', (req, res) => {
  res.send('edit')
})

// delete feather
router.post('/:id/delete', (req, res) => {
  res.send('delete')
})

module.exports = router