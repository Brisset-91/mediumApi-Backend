const express = require('express')
const createError = require('http-errors')
const user = require('../usecases/user.usecase')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body

    if (!email) throw new createError(400, 'Email is required')
    if (!password) throw new createError(400, 'Password is required')

    const token = await user.login(email, password)

    response.json({
      ok: true,
      token
    })

  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok: false,
      error: error.message || 'Unknown'
    })
  }
})

module.exports = router