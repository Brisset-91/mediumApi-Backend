// definir el servidor
const express = require('express')
const cors = require('cors')
const app = express()
const errorHandler = require('./middlewares/errorHandler.middleware')
const logger = require('./middlewares/logger.middleware')
const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.routes')
const usersRouter = require('./routes/user.router')

app.use(express.json())
app.use(cors())
app.use(errorHandler)
app.use(logger)
app.use('/user', usersRouter)
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})


module.exports = app