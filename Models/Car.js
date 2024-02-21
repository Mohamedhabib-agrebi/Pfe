const mongoose = require ('mongoose')

const carSchema = new mongoose.Schema(
    {
        title : String,
        image : String,
        description : String
    }
)

module.exports = mongoose.model('voiture',carSchema)