
const express = require('express')
const createError = require('http-errors')

const router = express.Router()
const User = require('../usecases/user.usecase')


router.get('/:id', async (request,response) => {
    try {
        const getUser = await User.getById(request.params.id)

        if(!getUser){
            throw new createError (404, 'User not found')
        }
    
        response.json({
            ok:true,
            User: getUser,
            message: "New User"
        })    
    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            ok:false,
            message: error.message
        })
    }
    
})

router.delete('/:id' , async (request, response) => {
    try {
        const DeleteUser = await User.deleteById(request.params.id)

        if(!DeleteUser){
            throw new createError (404, 'User not found')
        }

        response.json({
            ok:true,
            UserDeleted: DeleteUser,
            message: "User Deleted" 
        })
    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            ok:false,
            message: error.message
        })
    }
})

router.post('/', async (request,response) => {
    try {
        const NewUser = await User.NewUser(request.body)
        response.json({
            ok: true,
            message: 'User created',
            New_User: NewUser
        })
        
        
    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            ok:false,
            message: error.message
        })
    }
})


router.patch('/:id' , async(request,response) => {
    try {
        const UserUpdated = await User.UpdateById(request.params.id, request.body)
        response.json({
            ok: true,
            User: UserUpdated,
            message: "User Updated"
        })
        
    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            ok:false,
            message: error.message
        })
    }
})

module.exports = router