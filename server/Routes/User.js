const express=require("express")
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

const UserController=require("../Controllers/UserController")

// router.get("/",(req,res)=>{
//     res.send("This is user routes")
// })
router.get("/",UserController.getAll)
router.post("/",UserController.CreateUser)
router.put("/",UserController.updateUser)
router.delete("/:_id",UserController.DeleteUser)

module.exports=router