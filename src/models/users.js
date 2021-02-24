const mongoose = require('mongoose');

const users = new mongoose.Schema({

    userId: { type: String, unique: true, required: true },
    isEnable: { type: Boolean, required: true, default: true },
    email: { type: String },
    password: { type: String },
    name: { type: String },

}, {timestamps: true});

module.exports = mongoose.model('users', users, 'users');
