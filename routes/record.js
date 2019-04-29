const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// list all
router.get('/', (req, res) => {
  res.send('list all records')
})

// create page
router.get('/new', (req, res) => {
  return res.render('new')
})

// show detail page
router.get('/:id', (req, res) => {
  res.send('detail page')
})

//  create feature
router.post('/', (req, res) => {
  const record = Record(req.body)
  record.save(err => {
    if (err) return console.error(err)
    res.redirect('/')
  })
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