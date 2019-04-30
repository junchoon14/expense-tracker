const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

// list all
router.get('/', authenticated, (req, res) => {
  res.send('list all records')
})

// new page
router.get('/new', authenticated, (req, res) => {
  return res.render('new')
})

// show detail page
router.get('/:id', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    return res.render('detail', { record })
  })
})

//  create feature
router.post('/', authenticated, (req, res) => {
  const record = Record({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    amount: req.body.amount,
    userId: req.user._id,
  })
  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// edit page
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    return res.render('edit', { record })
  })
})

// edit feature
router.put('/:id', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.name = req.body.name
    record.category = req.body.category
    record.date = req.body.date
    record.amount = req.body.amount
    record.userId = req.user._id
    record.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/`)
    })
  })
})

// delete feather
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router