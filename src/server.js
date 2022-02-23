// definir el servidor
const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})


module.exports = app