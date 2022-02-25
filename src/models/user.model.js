
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        match: /^.*@.*\..*$/,
        require: true
    },
    email:{
        type: String,
        require:true,
        minlenght: 1
    },
    password:{
        type: String,
        require: true,
        minlenght: 2
    }
})


module.exports = mongoose.model('userDB' , userSchema)