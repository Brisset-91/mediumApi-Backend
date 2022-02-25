const express = require('express')
const createError = require('http-errors')
const User = require('../usecases/user.usecase')
const router = express.Router()

router.post('/login', async (request, response)=>{
    try {

        if(!email) throw new createError(400, 'Email is require')
        if(!password) throw new createError(400, 'Password is require')

        const token = await User.login(email, password)

        response.json({
            ok: true,
            token
        })

    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            error: error.message || 'unknown'
        })
    }
})

module.exports = router