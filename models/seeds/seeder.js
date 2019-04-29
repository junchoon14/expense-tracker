const mongoose = require('mongoose')
const Record = require('../record')
//const User = require('../user')

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')

  const users = [
    {
      name: 'Alvis',
      email: 'uuu@xxx.com',
      password: '123456',
    },
    {
      name: 'Jason',
      email: 'abc@xxx.com',
      password: '567890',
    }]

  for (let i = 0; i < 10; i++) {
    Record.create({
      name: 'name-' + i,
      category: 'category' + i,
      date: 'date',
      amount: 'amount' + i,
      totalAmount: 'totalAmount' + i,
    })
  }
  console.log('done')
})