const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Record = require('../record')
const User = require('../user')
const records = require('../../records.json')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')

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

  const createRecord = (i, user) => {
    Record.create({
      name: records[i].name,
      category: records[i].category,
      date: records[i].date,
      amount: records[i].amount,
      userId: user._id,
    })
  }

  users.forEach(user => {
    if (user) {
      console.log('User already exits')
    } else {
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err
          user.password = hash
          User.create(user)
        })
      )
    }
  })

  User.findOne({ name: 'Alvis' }).then(user => {
    if (user) {
      for (let i = 0; i < records.length; i++) {
        createRecord(i, user)
      }
    }
  })

  User.findOne({ name: 'Alvis' }).then(user => {
    if (user) {
      for (let i = 0; i < records.length; i++) {
        createRecord(i, user)
      }
    }
  })

  console.log('done')
})
