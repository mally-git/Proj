const TLM = require("../Models/TLM")

const getAll=async(req,res)=>{
    const tlm=await TLM.find().lean()
    if(!tlm){
        return res.status(400).json({ error: "name and username are required" });
    }
    res.json(tlm)
}


const updateTlm=async (req,res)=>{
const {_id,Source_id,Data, Time}=req.body
if(!_id){
    return res.status(400).send("Must insert id")
}
const tlm= await TLM.findById(_id).exec()
if(!tlm){
    return res.status(400).json({ error: "Thier is no sutch id" });
}
if (Source_id)
    tlm.Source_id = Source_id
if (Data)
    tlm.Data = Data
if(Time)
    tlm.Time = Time

const updatetlm=await tlm.save()
const tlmm =await TLM.find().lean()
res.json(tlmm)
}

const DeleteTLM=async (req,res)=>{
    const {_id}=req.params
    if(!_id){
        return res.status(400).json({ error: "Thier is no id" });
    }
    const tlm= await TLM.findById(_id).exec()
    if(!tlm){
        return res.status(400).json({ error: "Thier is no user" });
    }
    const dele=await tlm.deleteOne()
    const tlmm=await TLM.find().lean()
    res.json(tlmm)
}

const CreateTLM=async(req,res)=>{
const {Source_id,Data,Time}=req.body
if(!Source_id || !Data || !Time){
    return res.status(400).json({ error: "Source_id and Data are required" });
}
const tlm= await TLM.create({Source_id:Source_id,Data:Data,Time:Time})
if(!tlm){
    return res.status(400).send("Failes in create")
}
const tlmm= await TLM.find().lean()
return res.json(tlmm)
}

module.exports={getAll,CreateTLM,updateTlm,DeleteTLM}
