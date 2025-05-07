const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../Models/User")
const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const foundUser = await User.findOne({ username }).lean()
    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const userInfo = {
        _id: foundUser._id, name: foundUser.name,
        roles: foundUser.roles, username: foundUser.username,
        email: foundUser.email,phone:foundUser.phone
    }

    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken ,user:userInfo})
}

const register = async (req, res) => {
    const { username, password, name, email, phone ,roles} = req.body
    console.log( username, password, name, email, phone ,roles);
    
    // if (!name || !username || !password ||) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // if (email && !/\S+@\S+\.\S+/.test(email)) {
    //     return res.status(400).json({ message: 'error email' })
    // }
    
    // if (phone && !/^\d{10}$/.test(phone)) {
    //     return res.status(400).json({ message: 'error number' })
    // }

    console.log('1');
    
    const duplicate = await User.findOne({ username: username }).lean()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    console.log('2');
    const hashedPwd = await bcrypt.hash(password, 10)
    console.log('3');
    const userObject = { name, email, username, phone, password: hashedPwd ,roles}
    console.log('4');
    const user = await User.create(userObject)
    if (!user) {
        console.log('6');
        return res.status(400).json({ message: 'Invalid user received' })
       
    } 
    console.log('5',user);
    return res.json(user).status(201)
}
module.exports = { login, register }