
const express = require('express')

const usersRouter = require('./routes/user.router')

const app = express()
app.use(express.json())

app.use('/user', usersRouter)

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})

module.exports = app