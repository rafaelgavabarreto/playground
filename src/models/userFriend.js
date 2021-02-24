const mongoose = require('mongoose');

const userFriend = new mongoose.Schema({

    userId:  { type: String, required: true },
    friendId:  { type: String, required: true },
    type:     { type: mongoose.Schema.Types.ObjectId, ref: 'userFriendType', required: true },

}, {timestamps: true});

module.exports = mongoose.model('userFriend', userFriend, 'userFriend');
