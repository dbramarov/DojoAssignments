var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 first_name: {
 	type: String,
 	required: "Your first name is required!",
 	minlength: 1,
 },
 last_name: {
 	type: String,
 	required: "Your last name is required",
    minlength: 1,
 },
 email: {
    type: String,
    required: "Your Email is required!",
    minlength: 1,
    uniqe: true,
    validate: {
        validator: function(value){
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, message: "Invalid email, please try again!"        
    }
 },

password: {
    type: String,
    required: "A password is required!!",
    minlength: 8,
    validate: {
       	validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        },
        message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      }, 
 birthday: {
    type:Date,
    required: 'Birthday is required!!'}
}, {timestamps: true})

var User = mongoose.model('User', UserSchema); 
