var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  owner: String,
  phone: String,
  address: String,
  note: String,
  cart: String,
  order_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', CartSchema);
