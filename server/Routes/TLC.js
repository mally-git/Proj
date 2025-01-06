const express=require("express")
const router = express.Router()

const TlcController=require("../Controllers/TlcController")

router.get("/",TlcController.getAll)
router.get("/:_id",TlcController.getOneName)
router.post("/",TlcController.CreateTLC)
router.put("/",TlcController.updateTlc)
router.delete("/:_id",TlcController.DeleteTLC)

module.exports=router