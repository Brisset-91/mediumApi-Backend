
const createError = require('http-errors')
const User = require('../models/user.model')

function NewUser (UserData) {
    const newUser = new User(UserData)
    const errors = newUser.validateSync()
    if(errors){
        throw new createError(400, 'Validation Fail')
    }
    return newUser.save()
}

function getById (id) {
    return User.findById(id)
}

function UpdateById (id, newDataUser) {
    return User.findByIdAndUpdate(id, newDataUser)
}

function deleteById (id) {
    return User.findByIdAndDelete(id)
}



module.exports = {
    getById,
    UpdateById,
    NewUser,
    deleteById
}

