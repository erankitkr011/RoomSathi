
const mongoose = require('mongoose');

const UserScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["owner","renter"]
    },
})

module.exports = mongoose.model('User',UserScehma);