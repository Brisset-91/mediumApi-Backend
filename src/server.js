// definir el servidor

const express = require('express')
// const cors = require('cors')

const authRouter = require('./routes/auth.router')

const app = express()

app.use(express.json())

app.use('/auth', authRouter)

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})

module.exports = app