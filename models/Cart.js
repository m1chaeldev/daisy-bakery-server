var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  owner: String,
  name: String,
  phone: String,
  address: String,
  note: String,
  cart: String,
  total_price: String,
  order_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', CartSchema);
