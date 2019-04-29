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
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    return res.render('detail', { record })
  })
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
  Record.findById(req.params.id, (err, record) => {
    return res.render('edit', { record })
  })
})

// edit feature
router.post('/:id', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    record.name = req.body.name
    record.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/records/${req.params.id}`)
    })
  })
})

// delete feather
router.post('/:id/delete', (req, res) => {
  res.send('delete')
})

module.exports = router