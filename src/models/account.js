const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema({
  username: { type: String, maxLength: 69 },
  password: { type: String, maxLength: 30 },
  email: { type: String, maxLength: 100 },
  firstName: { type: String, maxLength: 30 },
  lastName: { type: String, maxLength: 30 },
  role: { type: String, default: 'user' },
  image: { type: Object, default: { url: '/images/user_default_img.png' } },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  credit: { type: Object, default: { number: '', bank: '' } },
  notif: { type: Array, default: [] },
  coins: { type: Number, default: 0 },
  bought: [{ product: { type: Schema.Types.ObjectId, ref: 'product' } }],
})

module.exports = mongoose.model('account', Account)