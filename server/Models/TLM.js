const mongoose=require("mongoose")
const TlmSchema=new mongoose.Schema({
    Source_id:{
        type:String,
        required:true
    },
    Data:{
        type:[String],
        required:true
    },
    Time:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('TLM', TlmSchema)