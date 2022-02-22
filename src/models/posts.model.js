
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  imgPerfil: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: false
  },
  dateCreated: {
    type: Number,
    min: 1,
    max: 30,
    required: true
  },
  readingTime: {
    type: Number,
    min: 1,
    max: 4,
    required: true
  },
  formFile: {
    type: String,
    min: 1,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  postContent: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('posts', postsSchema)