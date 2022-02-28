const express = require('express')
const createError = require('http-errors')
const posts = require('../usecases/posts.usecase')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')

router.get('/', async (request,response) => {
    try {
        const allPosts = await posts.getAll()
        response.json({
            ok: true,
            posts: allPosts
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/:id',  async (request, response) => {
    try {
        const postsFound = await posts.getById(request.params.id)
        if (!postsFound) {
            const error = new Error('posts not found')
            error.status = 404
            throw error
        }
        response.json({
            ok: true,
            posts: postsFound
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.post('/posts',auth, async (request, response) => {
    try {
        const postsCreated = await posts.create(request.body)
        response.json({
            ok: true,
            message: 'Post create',
            //post: newPost
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const postsDeleted = await posts.deleteById(request.params.id)
        if (!postsDeleted) {
            response.status(400)
            response.json({
                ok:false,
                message: 'posts not found'
            })
        }
        response.json({
            ok: true,
            message: 'Post Deleted',
            posts: postsDeleted
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const newPostsData = request.body
        const postsUpdate = await posts.patchByID(id,newPostsData)
        if (!postsUpdate) {
            response.status(404)
            response.json({
                ok: false,
                message: "posts id not found"
            })
            return
        }
        response.json({
            ok: true,
            message: 'posts updated',
            posts: postsUpdate
        })
    } catch (error) {
        response.status(500)
        response.json({
            ok: false,
            error: error.message
        })
    }
})

module.exports = router