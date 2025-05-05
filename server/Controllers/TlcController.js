const TLC = require("../Models/TLC")

const getAll = async (req, res) => {
    const tlc = await TLC.find().lean()
    if (!tlc) {
        return res.status(400).json({ error: "name and data and pocode are required" });
    }
    res.json(tlc)
}


const updateTlc = async (req, res) => {
    const { _id, Name, Data, Opcode } = req.body
    if (!_id) {
        return res.status(400).send("Must insert id")
    }
    const tlc = await TLC.findById(_id).exec()
    if (!tlc) {
        return res.status(400).json({ error: "Thier is no sutch id" });
    }
    if (Name)
        tlc.Name = Name
    if (Data)
        tlc.Data = Data
    if (Opcode)
        tlc.Opcode = Opcode

    const updatetlc = await tlc.save()
    const tlcc = await TLC.find().lean()
    res.json(tlcc)
}

const DeleteTLC = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        return res.status(400).json({ error: "Thier is no id" });
    }
    const tlc = await TLC.findById(_id).exec()
    if (!tlc) {
        return res.status(400).json({ error: "Thier is no tlc" });
    }
    const dele = await tlc.deleteOne()
    const tlcc = await TLC.find().lean()
    res.json(tlcc)
}
const getOneName = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        return res.status(400).json({ error: "Thier is no id" });
    }
    const name= await TLC.findById(_id).lean()
    if(!name){
        return res.status(400).json({ error: "Thier is no such name" });
    }
    res.json(name)
}

const CreateTLC = async (req, res) => {
    const { Name, Data, Opcode } = req.body
    if (!Name || !Data || !Opcode) {
        return res.status(400).json({ error: "Name and Data and Opcode are required" });
    }
    const tlc = await TLC.create({ Name: Name, Data: Data, Opcode: Opcode })
    if (!tlc) {
        return res.status(400).send("Failes in create")
    }
    // const tlcc = await TLC.find().lean()
    return res.json(tlc)
}

module.exports = { getAll, CreateTLC, updateTlc, DeleteTLC, getOneName }
