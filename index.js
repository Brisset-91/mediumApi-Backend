// Levantar la app
// require('dotenv').config()
const mongoose = require('mongoose')

const server = require('./src/server')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

// 'mongodb+srv://brisset:Brisset1234@kodemiaquinceg.nan1p.mongodb.net/kodemia'
// mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
mongoose.connect(`mongodb+srv://brisset:Brisset1234@kodemiaquinceg.nan1p.mongodb.net/medium`)
.then(() =>{
    console.log('DB conected')
    
    server.listen(8080, ()=>{
        console.log('kodemiaAPI is ready on http//localhost:8080')
    })
})

.catch( error =>{
    console.error('deb connection error: ', error)
})
