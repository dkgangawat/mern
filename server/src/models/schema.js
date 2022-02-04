const mongoose = require('mongoose')
const validator =require('validator');
const { default: isEmail } = require('validator/lib/isEmail');
const studentSchema = mongoose.Schema(
    {   email:{
         type:String, 
         unique:true, 
         required:true,
        validate(value){
            if(!validator.isEmail(value)){
                
                throw new Error("invalide email")
            }
        }
    },
        username:String,
        pass:Number

    }
)
 const setData = mongoose.model('Student',studentSchema);
 module.exports = setData;