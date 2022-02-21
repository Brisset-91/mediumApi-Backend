// definir el servidor

const express = require('express')
// const cors = require('cors')

const app = express()

app.use(express.json())

app.get('/', (request,response) => {
    response.json({
        ok: true,
        message: 'mediumAPI'
    })
})

module.exports = app