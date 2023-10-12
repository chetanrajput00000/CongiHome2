const mongoose = require('mongoose')

const parentSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
   
    dob: {
        type:String,
        required: true,
        default:Date
    },

    contact:{
        type:Number,
        required:true
    },

    gender: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    

    // idFile: {
    //     type: File,
    //     required: true,
    // }

});

const User2 = mongoose.model('Parent_login', parentSchema)
module.exports = User2;