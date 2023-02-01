const mongoose = require('mongoose')

const employeeManagementTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model('mytable', employeeManagementTemplate )