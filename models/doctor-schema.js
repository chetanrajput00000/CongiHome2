const { text } = require('express');
const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    clinic_name: {
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

   address:{
    type:String,
    required:true
   }

    // idFile: {
    //     type: File,
    //     required: true,
    // }

});

const User3 = mongoose.model('doctor_login', doctorSchema)
module.exports = User3;