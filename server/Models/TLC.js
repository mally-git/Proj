const mongoose=require("mongoose")
const TlcSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Opcode:{
        type:Number,
        required:true
    },
    Data:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('TLC', TlcSchema)