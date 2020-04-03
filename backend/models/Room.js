const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const roomSchema = new Schema({
    name: String,
    page: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('Room', roomSchema);
module.exports = User;
