const mongoose = require('mongoose');

const userFriendType = new mongoose.Schema({

    type: { type: String, required: true },

}, {timestamps: true});

module.exports = mongoose.model('userFriendType', userFriendType, 'userFriendType');

/*
pending_second
friend
block_first
block_second
block_both
*/