const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name:{
        type:String,
        required:true,
        default:""
    },
    email:{
        type:String,
        required:true,
         default:""
    },
    number:{
        type:String,
        required:true,
        default:""
    }


});

module.exports=mongoose.model('User',User);