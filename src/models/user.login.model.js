const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,  //^.*@.*\..*$/ 
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        required: true,
        type: String,
        minlength: 2
    }
})

module.exports = mongoose.model('user', userSchema)