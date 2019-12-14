var mongoose = require('mongoose');

var CategoryChildSchema = new mongoose.Schema({
  category: String,
  name: String
});

module.exports = mongoose.model('CategoryChild', CategoryChildSchema);
