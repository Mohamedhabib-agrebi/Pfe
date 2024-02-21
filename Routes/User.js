const express = require('express')
const { SignUp, SignIn, DeleteUser, UpdateUser , GetAllUser , GetOneUser } = require('../Controllers/User')
const { registerValidation, Validation, loginValidation } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')
const uploads = require('../Middlewares/uploads')



const userRouter = express.Router()

userRouter.post('/SignUp',registerValidation,Validation,SignUp)

userRouter.post('/SignIn',loginValidation,Validation,SignIn)

userRouter.get('/ConnectedUser',isAuth,(req,res)=>{res.send(req.user)})

userRouter.delete('/deleteUser/:id',DeleteUser)

userRouter.put('/updateUser/:id',uploads, UpdateUser)

userRouter.get('/getAllUsers',GetAllUser) 

userRouter.get('/getOneUser/:id',GetOneUser)



module.exports = userRouter