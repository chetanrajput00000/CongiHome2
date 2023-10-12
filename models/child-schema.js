const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({

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

    gender: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    parentcontact: {
        type: Number,
        required: true
    },
    parentname: {
        type: String,
        required: true
    },

    // idFile: {
    //     type: File,
    //     required: true,
    // }

});

const User = mongoose.model('Children_login', childSchema)
module.exports = User;