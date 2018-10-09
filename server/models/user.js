const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, // 不可重复约束
    require: true // 不可为空约束
  },
  password: {
    type: String,
    require: true
  }
}, { collection: 'user' })

module.exports = mongoose.model('user', UserSchema)
