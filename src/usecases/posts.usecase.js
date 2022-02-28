//enpoint -> caso de uso -> modelo
const createError = require('http-errors')

const Posts = require('../models/posts.model')

function getAll() {
    return Posts.find()
}

function getById(id) {
    return Posts.findById(id)
}

function create(postsData) {
    const newPost = new Posts(postsData)
    return newPost.save()
}

function deleteById(id) {
    return Posts.findByIdAndDelete(id)
}

function patchByID(id, newPostsData) {
    return Posts.findByIdAndUpdate(id, newPostsData)
}


module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    patchByID,
}
