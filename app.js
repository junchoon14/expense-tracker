const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useCreateIndex: ture })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))



app.listen(3000, () => {
  console.log('App is running!')
})