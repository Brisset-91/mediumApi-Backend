
const createError = require('http-errors')

const Posts = require('../models/posts.model')

function getAll() {
    return Posts.find()
}

module.exports = {
    getAll,
}