const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String
    }
},{
    timestamps:true
})
module.exports = mongoose.model('User', userSchema)