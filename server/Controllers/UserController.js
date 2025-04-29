const User = require("../Models/User")

const getAll=async(req,res)=>{
    const users=await User.find().lean()
    if(!users){
        return res.status(400).json({ error: "name and username are required" });
    }
    res.json(users)
}


const updateUser=async (req,res)=>{
const {_id,name,username,email}=req.body
if(!_id){
    return res.status(400).send("Must insert id")
}
const user= await User.findById(_id).exec()
if(!user){
    return res.status(400).json({ error: "Thier is no sutch id" });
}
if (name)
    user.name = name
if (username)
    user.username = username
if (email)
    user.email = email
const updatuser=await user.save()
const users =await User.find().lean()
res.json(users)
}

const DeleteUser=async (req,res)=>{
    const {_id}=req.params
    if(!_id){
        return res.status(400).json({ error: "Thier is no id" });
    }
    const user= await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({ error: "Thier is no user" });
    }
    const dele=await user.deleteOne()
    const users=await User.find().lean()
    res.json(users)
}

const CreateUser=async(req,res)=>{
const {name,username,email}=req.body
if(!name || !username){
    return res.status(400).json({ error: "name and username are required" });
}
const user= await User.create({name:name, username:username ,email:email})
if(!user){
    return res.status(400).send("Failes in create")
}
const users= await User.find().lean()
return res.json(users)
}


module.exports={getAll,CreateUser,updateUser,DeleteUser}
