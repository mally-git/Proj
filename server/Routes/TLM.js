const express=require("express")
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

const TlmController=require("../Controllers/TlmController")


router.get("/",TlmController.getAll)
router.post("/",TlmController.CreateTLM)
router.put("/",TlmController.updateTlm)
router.delete("/:_id",TlmController.DeleteTLM)

module.exports=router

