// Levantar la app
require('dotenv').config()
const mongoose = require('mongoose')

const server = require('./src/server')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)

.then(() =>{
    console.log('DB conected')
    
    server.listen(8080, ()=>{
        console.log('medium API is ready on http//localhost:8080')
    })
})
.catch( error =>{
    console.error('deb connection error: ', error)
})
