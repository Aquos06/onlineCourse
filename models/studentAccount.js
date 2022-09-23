const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentAccount = new Schema({
    name: String,
    phone: String,
    level: String,
    email: String
});

module.exports = mongoose.model('studentAccount', studentAccount)