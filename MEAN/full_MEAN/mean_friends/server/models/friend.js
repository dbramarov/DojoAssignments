console.log('friends model working');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 birthday: Date,
}, {timestamps: true})

var Friend = mongoose.model('Friend', FriendSchema); 
