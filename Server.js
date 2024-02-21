const express = require ('express')
const ConnectDB = require('./config/ConnectDB')
const userRouter = require('./Routes/User')
const carRouter = require('./Routes/Car')

const app = express ()

require ('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/uploads',express.static('uploads'))

app.use('/api/user',userRouter)

app.use('/api/car',carRouter)

app.listen(process.env.port,console.log(`Server is runnig one the port ${process.env.port}`))