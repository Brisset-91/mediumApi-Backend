// definir el servidor
const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts.router')

//const authRouter = require('./routes/auth.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)

//app.use('/auth', authRouter)

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})


module.exports = app