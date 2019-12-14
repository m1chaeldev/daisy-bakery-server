var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  category_child: String,
  code: String,
  price: Number,
  sale_off: Number,
  is_out_stock: { type: Boolean, default: false },
  started_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
