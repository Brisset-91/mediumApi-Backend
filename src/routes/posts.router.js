
const express = require('express')

const posts = require('../usecases/posts.usecase')

const router = express.Router()

router.get('/', async (request,response) => {
    try {
        const allPosts = await posts.getAll()

        response.json({
            ok: true,
            koders: allPosts
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})
