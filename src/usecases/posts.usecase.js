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

    //const errors = newPost.validateSync()
    /*
    if (errors) {
        console.log('errors:')
        throw new createError(400, 'validation failed')
    }*/
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
