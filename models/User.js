var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('User', UserSchema);
