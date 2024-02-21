const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : {type : String, required : true, unique : true},
        password : {type : String, required : true},
        role : {type : String, default : 'user'},
        image : {type : String, default : 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}

    }
)

module.exports = mongoose.model('Cars',userSchema)