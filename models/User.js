var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    address: String,
    is_block: { type: Boolean, default: false },
    block_reason: { type: String, default: '' }
});

module.exports = mongoose.model('User', UserSchema);
