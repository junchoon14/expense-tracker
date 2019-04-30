const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  Record.find({})
    .sort({ name: 'asc' })
    .exec((err, records) => {
      if (err) return console.error(err)
      return res.render('index', { records })
    })
})

module.exports = router