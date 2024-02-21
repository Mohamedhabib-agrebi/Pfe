const express = require('express')
const { AddCar, GetOnecar, GetAllCars, UpdateCar, DeleteCar } = require('../Controllers/Car')
const upload = require('../Middlewares/uploads')



const carRouter = express.Router()

carRouter.post('/PostCar',upload,AddCar)

carRouter.delete('/deleteCar/:id',DeleteCar)

carRouter.put('/updateCar/:id',upload, UpdateCar)




carRouter.get('/getAllCars',GetAllCars) 

carRouter.get('/getOneCar/:id',GetOnecar)


module.exports = carRouter