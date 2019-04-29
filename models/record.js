const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  },
  amount: {
    type: String,
    require: true
  },
  totalAmount: {
    type: String,
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  },
})

module.exports = mongoose.model('Record', recordSchema)