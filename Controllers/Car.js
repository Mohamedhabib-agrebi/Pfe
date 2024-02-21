const Car = require("../Models/Car")

exports.AddCar = async(req,res)=>{
    try {

      
        const newCar = new Car({...req.body,image :req.file.filename })

        await newCar.save()

        res.status(200).send({Msg :"Car Added",newCar})
    } catch (error) {
        res.status(500).send('Could not add car')
    }
}

exports.GetAllCars = async(req,res)=>{
    try {
        const cars = await Car.find()

        res.status(200).send({Msg : "Car list",cars})
    } catch (error) {
        res.status(500).send('Could not get cars')
    }
}

exports.DeleteCar= async(req,res)=>{
    try {
        const {id} = req.params

        await Car.findByIdAndDelete(id)

        res.status(200).send("Car deleted")
    } catch (error) {
        res.status(500).send('Could not delete car')
    }
}

exports.UpdateCar = async(req,res)=>{
    try {
        const {id} = req.params

        await Car.findByIdAndUpdate(id,{$set : {...req.body,image :req.file.filename }}) 

        res.status(200).send("car updated")
    } catch (error) {
        res.status(500).send('Could not update car')
    }
    }

exports.GetOnecar = async(req,res)=>{
    try {
        const {id} = req.params

        const car = await Car.findById(id)

        res.status(200).send({Msg : "Car",car})
    } catch (error) {
        res.status(500).send('Could not get car')
    }
}